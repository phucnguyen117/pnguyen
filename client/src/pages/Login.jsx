import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Login() {
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/', { replace: true });
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center px-4 relative">

      {/* Nút quay lại */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-5 left-5 flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
        aria-label="Quay lại trang chủ"
      >
        <ArrowLeft size={16} />
      </button>

      {/* Card kính */}
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] p-8 flex flex-col items-center gap-8">

        {/* Logo */}
        <div className="flex items-baseline select-none">
          <span className="font-bold text-3xl tracking-tight bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Nguyen
          </span>
          <span className="font-bold text-3xl text-fuchsia-500/80">.</span>
        </div>

        {/* Text */}
        <div className="text-center space-y-1">
          <h1 className="text-white font-semibold text-xl">Chào mừng trở lại</h1>
          <p className="text-white/40 text-sm">Đăng nhập để tiếp tục</p>
        </div>

        {/* Google button */}
        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-white text-gray-800 font-semibold text-sm hover:bg-gray-100 active:scale-95 transition-all duration-150 shadow-md"
        >
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.2l6.8-6.8C35.8 2.5 30.2 0 24 0 14.6 0 6.6 5.5 2.7 13.5l7.9 6.1C12.5 13.2 17.8 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.6 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7.1-10.1 7.1-17.1z"/>
            <path fill="#FBBC05" d="M10.6 28.4A14.8 14.8 0 0 1 9.5 24c0-1.5.2-3 .6-4.4L2.2 13.5A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.7 10.7l7.9-6.3z"/>
            <path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.6-5.9c-2 1.4-4.7 2.2-7.6 2.2-6.2 0-11.5-4.2-13.4-9.8l-7.9 6.1C6.5 42.5 14.6 48 24 48z"/>
          </svg>
          Đăng nhập với Google
        </button>

        <p className="text-white/20 text-xs">Bảo mật bởi Supabase</p>
      </div>
    </div>
  );
}