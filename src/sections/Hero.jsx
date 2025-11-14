'use client';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(nameRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    })
      .from(
        imageRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
        },
        '-=0.6',
      )
      .from(
        '.side-card',
        {
          x: -80,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.5',
      );

    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      scale: 0.95,
      yPercent: 10,
      ease: 'power1.inOut',
    });

    gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: 'linear',
    });
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex flex-col justify-end h-screen bg-[#e5e5e0] overflow-hidden"
    >
      {/* === BACKGROUND MARQUEE === */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center z-0 pointer-events-none">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-[36vw] sm:text-[160px] md:text-[200px] lg:text-[320px] font-extrabold uppercase tracking-tighter text-black/10 opacity-60"
          style={{ lineHeight: 1, willChange: 'transform' }}
        >
          <span>Frontend Developer&nbsp;&nbsp;</span>
          <span>Creative Developer&nbsp;&nbsp;</span>
          <span>Visual Designer&nbsp;&nbsp;</span>
          <span>UI / UX &nbsp;&nbsp;</span>
        </div>
      </div>

      {/* === TOP GRADIENT === */}
      <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-b from-[#e5e5e0] via-[#e5e5e0]/90 to-transparent z-10"></div>

      {/* === SIDE CARDS === */}
     <div className="absolute top-[120px] left-5 sm:left-20 flex flex-col gap-3 max-md:hidden z-20">
  <div className="side-card bg-[#e5e5e0] shadow-lg rounded-2xl px-6 py-4 font-semibold text-gray-900 text-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
    Branding
  </div>
  <div className="side-card bg-[#e5e5e0] shadow-lg rounded-2xl px-6 py-4 font-semibold text-gray-900 text-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
    Direction
  </div>
  <div className="side-card bg-black text-white shadow-lg rounded-2xl px-6 py-4 font-semibold text-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
    More+
  </div>
</div>


      {/* === HERO IMAGE WITH FADE === */}
      <div className="relative flex justify-center items-end w-full mt-[-90%] sm:mt-10 z-10">
  <img
    ref={imageRef}
    src="/images/heros.png"
    alt="Monu Kumar"
    className="w-[95vw] sm:w-[500px] md:w-[600px] lg:w-[650px] h-auto object-contain relative z-10"
    style={{
      maskImage: "linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
      WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
    }}
  />
  {/* Bottom gradient fade */}
  <div className="absolute bottom-0 left-0 w-full h-[150px] sm:h-[300px] bg-gradient-to-t from-[#e5e5e0] via-[#e5e5e0]/95 to-transparent z-[11]"></div>
</div>



      {/* === NAME TEXT (CENTERED SINGLE LINE) === */}
      <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 text-center z-20">
        <p
  ref={nameRef}
  className="text-[14vw] lg:font-bold sm:text-[90px] md:text-[110px] lg:text-[200px] leading-[0.9] font-extrabold text-[#000000] uppercase tracking-tight whitespace-nowrap drop-shadow-[0_8px_8px_rgba(0,0,0,0.25)]"
>
  MONU KUMAR
</p>

      </div>
    </section>
  );
};

export default Hero;
