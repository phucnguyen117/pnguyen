import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaGithub, 
  FaFacebook, 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaMusic, 
  FaPalette,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiChevronDown } from 'react-icons/fi';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  const [activeImage, setActiveImage] = useState(null);

  const projects = [
    {
      title: "Đang cập nhật",
      desc: "Đang cập nhật",
      stack: ["React", "Tailwind CSS"],
      link: "duan1",
      thumb: "https://placehold.co/600x340/1e1b4b/818cf8?text=Loading..."
    },
    {
      title: "Đang cập nhật",
      desc: "Đang cập nhật",
      stack: ["React", "Node.js", "API"],
      link: "duan2",
      thumb: "https://placehold.co/600x340/1e1b4b/818cf8?text=Loading..."
    }
  ];

  const artworks = [
    {
      title: "Hai chim sẻ",
      author: "...",
      src: "../public/tranh1.jpeg"
    },
    {
      title: "Chú chó",
      author: "...",
      src: "../public/tranh2.jpeg"
    },
    {
      title: "Neymar Jr",
      author: "...",
      src: "../public/tranh3.jpeg"
    }
  ];

  const contacts = [
    {
      label: "Email",
      value: "hoangnguyenkiok@gmail.com",
      href: "mailto:hoangnguyenkiok@gmail.com",
      icon: <FaEnvelope className="text-3xl text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      label: "GitHub",
      value: "github.com/phucnguyen117",
      href: "https://github.com/phucnguyen117",
      icon: <FaGithub className="text-3xl text-gray-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      label: "Facebook",
      value: "fb.com/hoangnguyenez",
      href: "https://facebook.com/hoangnguyenez",
      icon: <FaFacebook className="text-3xl text-blue-500 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      label: "X (Twitter)",
      value: "x.com",
      href: "https://x.com",
      icon: <FaXTwitter className="text-3xl text-gray-100 group-hover:scale-110 transition-transform duration-300" />
    }
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const SectionTitle = ({ title }) => (
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block drop-shadow-sm pb-1">
      {title}
    </h2>
  );

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#0f0f1a] font-sans text-gray-200 selection:bg-indigo-500 selection:text-white">
      
      {/* PHẦN 1 — HERO / BANNER */}
      <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm mb-6 backdrop-blur-sm shadow-lg shadow-green-500/10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-medium tracking-wide">Hoạt động</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 drop-shadow-lg pb-2">
            PHÚC NGUYÊN
          </h1>
          
          <p className="text-sm md:text-lg text-gray-300 mb-8 max-w-md mx-auto">
            Chào mừng bạn đến với Website cá nhân của tôi
          </p>

          <a 
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1"
          >
            Khám phá
          </a>
        </div>

        <a 
          href="#about" 
          onClick={(e) => scrollToSection(e, 'about')}
          className="absolute bottom-10 z-10 text-white/50 animate-bounce p-2 hover:text-indigo-400 transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <FiChevronDown className="w-8 h-8" />
        </a>
      </section>

      {/* PHẦN 2 — GIỚI THIỆU BẢN THÂN */}
      <section id="about" className="py-16 md:py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <SectionTitle title="Giới thiệu" />
            <p className="text-gray-400 mt-2 text-sm md:text-base">Vài nét cơ bản về bản thân tôi</p>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20">
            <div className="flex-1 space-y-5 md:space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Phúc Nguyên</h3>
                <h4 className="text-indigo-400 text-lg font-medium">Công nghệ Thông tin</h4>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Đã từng là sinh viên CNTT lập trình web, luôn mong muốn học hỏi và phát triển.
                Quê quán ở Huế, sinh năm 2005. Đam mệ máy tính. 
                Tôi luôn muốn có cơ hội để nâng cao kỹ năng và tạo ra các sản phẩm chất lượng có ích.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {['React', 'Node.js', 'Tailwind CSS', 'Git'].map(tech => (
                  <span key={tech} className="bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-4 text-gray-300 pt-6 border-t border-gray-800 text-left w-fit mx-auto md:mx-0">
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-purple-400 text-xl shrink-0" /> 
                  <span className="text-sm md:text-base"><strong className="text-white">Ưu điểm:</strong> Tỉ mỉ, nỗ lực </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-purple-400 text-xl shrink-0" /> 
                  <span className="text-sm md:text-base"><strong className="text-white">Nhược điểm:</strong> Overthinking</span>
                </li>
              </ul>

              <div className="pt-2 md:pt-4">
                <strong className="text-white block mb-3 text-sm uppercase tracking-wider text-gray-400 text-center md:text-left">Sở thích</strong>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-800 border border-gray-700 hover:border-purple-500/50 rounded-full transition-colors cursor-default shadow-sm text-sm">
                    <FaMusic className="text-purple-400 shrink-0" />
                    <span className="font-medium text-gray-200">Nghe nhạc</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-800 border border-gray-700 hover:border-pink-500/50 rounded-full transition-colors cursor-default shadow-sm text-sm">
                    <FaPalette className="text-purple-400 shrink-0" />
                    <span className="font-medium text-gray-200">Xem nghệ thuật</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group shrink-0">
              <img 
                src="public/avatar.jpg" 
                alt="Avatar Phúc Nguyên" 
                className="w-40 h-40 md:w-64 md:h-64 rounded-full ring-4 ring-indigo-500 object-cover transition-transform duration-300 group-hover:scale-105 shadow-2xl shadow-indigo-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PHẦN 3 — DỰ ÁN (PROJECTS) */}
      <section id="projects" className="py-16 md:py-24 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <SectionTitle title="Dự Án" />
            <p className="text-gray-400 mt-2 text-sm md:text-base">Một số project tôi đã thực hiện</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/20 border border-gray-800 hover:border-indigo-500/30 transition-all duration-300 group flex flex-col">
                <div className="overflow-hidden h-48 md:h-56 w-full shrink-0">
                  <img 
                    src={project.thumb} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base mb-6 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-700/50 pt-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-xs font-medium text-indigo-300 bg-indigo-900/30 px-2.5 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      target="_self" 
                      rel="noreferrer"
                      className="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
                    >
                      Xem Project <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHẦN 4 — ÂM NHẠC & NGHỆ THUẬT YÊU THÍCH */}
      <section id="music-art" className="py-16 md:py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <SectionTitle title="Nghệ Thuật" />
            <p className="text-gray-400 mt-2 text-sm md:text-base">Những tác phẩm cảm hứng</p>
          </div>

          <div className="space-y-16 md:space-y-24">

            {/* 4B — Nghệ Thuật */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {artworks.map((art, idx) => (
                  <div 
                    key={idx} 
                    className="relative group rounded-2xl overflow-hidden cursor-pointer aspect-[9/16] shadow-xl"
                    onClick={() => setActiveImage(art.src)}
                  >
                    <img src={art.src} alt={art.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 md:p-6">
                      <h4 className="text-lg md:text-xl font-bold text-white leading-snug">{art.title}</h4>
                      <p className="text-indigo-300 text-xs md:text-sm mt-1.5 font-medium">{art.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHẦN 5 — LIÊN HỆ */}
      <section id="contact" className="py-16 md:py-24 px-6 bg-gray-950 flex flex-col items-center">
        <div className="max-w-6xl w-full mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <SectionTitle title="Liên Hệ" />
            <p className="text-gray-400 mt-2 text-sm md:text-base">Hãy kết nối với tôi qua các nền tảng bên dưới</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
            {contacts.map((contact, idx) => (
              <a 
                key={idx}
                href={contact.href} 
                target={contact.label !== "Email" ? "_blank" : undefined}
                rel="noreferrer" 
                className="bg-gray-800 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center gap-3 hover:bg-indigo-900/20 hover:border-indigo-500/50 border border-gray-700 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                {contact.icon}
                <div className="text-center mt-1">
                  <div className="text-white font-medium mb-1 text-base md:text-lg">{contact.label}</div>
                  <div className="text-gray-400 text-xs md:text-sm group-hover:text-indigo-300 transition-colors">{contact.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL CHO TRANH */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white p-2 transition-colors z-10"
            onClick={() => setActiveImage(null)}
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={activeImage} 
            alt="Artwork Fullscreen" 
            className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-indigo-500/20"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
    </MainLayout>
  );
}