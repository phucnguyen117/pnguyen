import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function FloatingHeart() {
  const [count, setCount] = useState(0);
  const [hearts, setHearts] = useState([]);

  const handleLike = () => {
    setCount((prev) => prev + 1);

    const id = Date.now();

    setHearts((prev) => [
      ...prev,
      {
        id,
        left: Math.random() * 30 - 15, // lệch trái phải
        size: Math.random() * 10 + 20,
      },
    ]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 1500);
  };

  return (
    <>
      {/* Tim bay */}
      {hearts.map((heart) => (
        <FaHeart
          key={heart.id}
          className="fixed z-50 text-pink-500 pointer-events-none"
          style={{
            right: `${28 + heart.left}px`,
            bottom: "120px",
            fontSize: `${heart.size}px`,
            animation: "floatHeart 1.5s ease-out forwards",
          }}
        />
      ))}

      {/* Cụm nút */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">

        {/* Nút tim */}
        <button
          onClick={handleLike}
          className="w-16 h-16 rounded-full bg-pink-500 hover:bg-pink-600 active:scale-90 transition-all duration-200 shadow-xl flex items-center justify-center"
        >
          <FaHeart className="text-white text-2xl" />
        </button>

        {/* Bộ đếm */}
        <div className="min-w-[64px] px-4 py-2 rounded-full bg-white shadow-lg border border-gray-200 text-center font-semibold text-pink-600">
          ❤️ {count}
        </div>

      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes floatHeart {
            0%{
              transform:translateY(0) scale(1);
              opacity:1;
            }
            100%{
              transform:translateY(-180px) scale(1.8);
              opacity:0;
            }
          }
        `}
      </style>
    </>
  );
}