import React from "react";

const Logo = () => {
  return (
    <div className="absolute top-4 left-0 sm:left-4 z-20 flex items-center gap-3 sm:gap-4 bg-[#000000] backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.3)] rounded-full px-3 sm:px-5 py-2 sm:py-3 min-w-[180px] sm:min-w-[220px] border border-zinc-700">

      <img
        src="/images/hero.png"
        alt="Monu Kumar"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white/30"
      />

      <div className="flex flex-col">
        {/* mix-blend-difference ensures color inversion against bright/dark backgrounds */}
        <h3 className="text-sm sm:text-base font-semibold text-white mix-blend-difference leading-tight">
          Monu Kumar
        </h3>
        <p className="text-xs sm:text-sm text-white/50  mix-blend-difference">
          Still Alive
        </p>
      </div>
    </div>
  );
};

export default Logo;
