import React from 'react';
import { Mail } from 'lucide-react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const socialLinkClasses = "flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 hover:bg-violet-500/10 hover:border-violet-400/40 text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-all duration-200 cursor-pointer";

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
          
          {/* Column 1 — Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-bold text-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent select-none">
              Nguyen
            </span>
            <p className="mt-1.5 text-sm text-gray-400 dark:text-gray-500 italic">
              Crafted with curiosity & code.
            </p>
          </div>

          {/* Column 2 — Social Icons */}
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
              Follow me
            </span>
            <div className="flex flex-row gap-2.5 justify-center">
              <a
                href="https://www.facebook.com/hoangnguyenez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Facebook"
                className={socialLinkClasses}
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://github.com/phucnguyen117"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Github"
                className={socialLinkClasses}
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Instagram"
                className={socialLinkClasses}
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 3 — Contact Info */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <span className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-1.5">
              Get in touch
            </span>
            <a
              href="mailto:hoangnguyenkiok@gmail.com"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400 underline underline-offset-4 decoration-violet-400/40 hover:decoration-violet-500 transition-colors duration-200"
            >
              <Mail size={13} aria-hidden="true" />
              <span>hoangnguyenkiok@gmail.com</span>
            </a>
            <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
              Usually replies within 24h
            </p>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 md:mt-10 border-t border-gray-100 dark:border-gray-800/60 pt-5 pb-1 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400 dark:text-gray-600 text-center sm:text-left">
            © 2026 Nguyen · All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600 text-center sm:text-right">
            Được tạo bởi ♥ phucnguyen
          </p>
        </div>

      </div>
    </footer>
  );
}