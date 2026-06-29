import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';

function formatCount(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return n.toString();
}

function HeartParticle({ id, onDone }) {
  const angle = (Math.random() - 0.5) * 60;
  const distance = 40 + Math.random() * 30;

  return (
    <div
      className="absolute pointer-events-none select-none text-pink-400 text-lg font-bold"
      style={{
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'heartFloat 0.8s ease-out forwards',
        '--angle': `${angle}deg`,
        '--distance': `${distance}px`,
      }}
      onAnimationEnd={onDone}
    >
      ♥
    </div>
  );
}

export default function HeartButton() {
  const [total, setTotal] = useState(0);
  const [particles, setParticles] = useState([]);
  const [bumping, setBumping] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const particleId = useRef(0);

  useEffect(() => {
    async function fetchTotal() {
      const { data } = await supabase
        .from('heart_counter')
        .select('total_hearts')
        .eq('id', 1)
        .single();
      if (data) setTotal(data.total_hearts);
      setIsLoading(false);
    }
    fetchTotal();

    const channel = supabase
      .channel('heart_realtime')
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'heart_counter',
      }, (payload) => {
        setTotal(payload.new.total_hearts);
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  const handleHeart = async () => {
    setTotal(prev => prev + 1);
    setLiked(true);
    setBumping(true);
    setTimeout(() => {
      setBumping(false);
      setLiked(false);
    }, 300);
    const id = particleId.current++;
    setParticles(prev => [...prev, id]);
    await supabase.rpc('increment_heart');
  };

  return (
    <>
      <style>{`
        @keyframes heartFloat {
          0%   { opacity: 1; transform: translateX(-50%) translateY(0) rotate(var(--angle)); }
          100% { opacity: 0; transform: translateX(-50%) translateY(calc(-1 * var(--distance))) rotate(var(--angle)); }
        }
        @keyframes bump {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.35); }
        }
        .bump { animation: bump 0.3s ease; }
      `}</style>

      <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 flex flex-col items-center gap-1.5">

        <div className="relative">
          {particles.map(id => (
            <HeartParticle
              key={id}
              id={id}
              onDone={() => setParticles(prev => prev.filter(p => p !== id))}
            />
          ))}

          <button
            onClick={handleHeart}
            aria-label="Thả tim"
            className={`
              relative flex items-center justify-center
              w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer
              bg-white/8 backdrop-blur-xl
              border transition-all duration-200
              ${liked
                ? 'border-pink-400/60 shadow-[0_4px_20px_rgba(236,72,153,0.35),0_1px_0_rgba(255,255,255,0.08)_inset]'
                : 'border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.08)_inset] hover:border-pink-400/40 hover:shadow-[0_4px_20px_rgba(236,72,153,0.25)]'
              }
              active:scale-90
              group
              ${bumping ? 'bump' : ''}
            `}
          >
            <div className={`absolute inset-0 rounded-full transition-colors duration-200 ${liked ? 'bg-pink-500/12' : 'bg-pink-500/0 group-hover:bg-pink-500/8'}`} />

            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 md:w-5 md:h-5 relative z-10 transition-all duration-200 group-hover:scale-110"
              fill="none"
            >
              <path
                d="M12 21C12 21 3 14.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 13 5.08C14.09 3.81 15.76 3 17.5 3C20.58 3 23 5.42 23 8.5C23 14.5 14 21 12 21Z"
                stroke={liked ? '#f472b6' : undefined}
                fill={liked ? '#ec4899' : undefined}
                className={!liked ? 'stroke-pink-400/70 group-hover:stroke-pink-400 fill-pink-500/10 group-hover:fill-pink-500/20 transition-all duration-200' : ''}
                style={liked ? { transition: 'all 0.2s ease' } : {}}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={`text-[10px] md:text-xs font-medium tabular-nums tracking-wide select-none transition-all duration-300 ${liked ? 'text-pink-400/70' : 'text-white/50'}`}>
          {isLoading ? '...' : formatCount(total)}
        </div>

      </div>
    </>
  );
}