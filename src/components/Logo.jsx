import React from "react";

const Logo = () => {
  return (
    <div className="absolute top-4 left-0 sm:left-4 z-20 flex items-center gap-3 sm:gap-4 bg-transparent backdrop-blur-sm shadow-lg rounded-2xl px-3 sm:px-5 py-2 sm:py-3 min-w-[180px] sm:min-w-[220px] mix-blend-difference">
      <img
        src="/images/hero.png"
        alt="Monu Kumar"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-sm sm:text-base font-semibold text-black leading-tight mix-blend-difference">
          Monu Kumar
        </h3>
        <p className="text-xs sm:text-sm text-zinc-900 mix-blend-difference">
          Still Alive
        </p>
      </div>
    </div>
  );
};

export default Logo;
