import React, { useState, useRef, useEffect } from 'react';
import { UserRound, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUserClick = () => {
    if (user) {
      setOpen(prev => !prev);
    } else {
      navigate('/login');
    }
  };

  const handleSignOut = async () => {
    setOpen(false);
    await signOut();
    navigate('/');
  };

  const avatar = user?.user_metadata?.avatar_url;
  const name = user?.user_metadata?.full_name;

  return (
    <div className="fixed top-4 md:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto w-full max-w-2xl h-13 md:h-14 flex items-center justify-between px-2 pl-5 rounded-full bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.15),0_1px_0_rgba(255,255,255,0.1)_inset]">

        {/* Logo */}
        <div className="flex items-baseline select-none cursor-pointer" onClick={() => navigate('/')}>
          <span className="font-bold tracking-tight text-xl md:text-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Nguyen
          </span>
          <span className="font-bold text-xl md:text-2xl text-fuchsia-500/80">.</span>
        </div>

        {/* User button + dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            aria-label="User account"
            onClick={handleUserClick}
            className="group flex items-center justify-center w-9 h-9 rounded-full cursor-pointer overflow-hidden bg-white/10 border border-white/20 hover:bg-violet-500/20 hover:border-violet-400/50 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all duration-200"
          >
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <UserRound size={16} className="text-white/70 group-hover:text-violet-400 transition-colors duration-200" />
            )}
          </button>

          {/* Dropdown */}
          {open && user && (
            <div className="absolute right-0 top-12 w-56 rounded-2xl bg-[#1a1a2e]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
              {/* User info */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                {avatar ? (
                  <img src={avatar} alt={name} className="w-9 h-9 rounded-full object-cover shrink-0" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0">
                    <UserRound size={16} className="text-violet-400" />
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{name ?? 'Người dùng'}</p>
                  <p className="text-white/40 text-xs truncate">{user.email}</p>
                </div>
              </div>

              {/* Sign out */}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-150"
              >
                <LogOut size={15} className="text-white/40" />
                Đăng xuất
              </button>
            </div>
          )}
        </div>

      </header>
    </div>
  );
}