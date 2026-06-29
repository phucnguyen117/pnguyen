import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-900">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4"
          type="video/mp4"
        />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>

      {/* Lớp phủ (Overlay) làm tối video để nổi bật chữ */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Nội dung chính */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        
        {/* Khối 404 */}
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-white tracking-widest drop-shadow-2xl md:text-[12rem]">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-400 text-white px-3 py-1 text-sm font-semibold rounded rotate-12 uppercase tracking-wide">
            Lỗi hiển thị
          </div>
        </div>

        {/* Thông báo */}
        <h2 className="mt-8 text-3xl font-bold text-white sm:text-4xl drop-shadow-lg">
          Ôi không! Trang này không tồn tại.
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-lg drop-shadow-md">
          Có vẻ như bạn đã đi lạc. Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không thể truy cập được.
        </p>

        {/* Nút điều hướng */}
        <Link
          to="/"
          className="mt-10 inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-300 bg-purple-400 border border-purple-400 rounded-full hover:bg-transparent hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Về Trang Chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;