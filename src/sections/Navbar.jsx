'use client';

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";
import Logo from "../components/Logo";

const Navbar = () => {
  const navRef = useRef(null);
  const linkRef = useRef([]);
  const contactRef = useRef(null);
  const iconRefs = useRef([]);
  const resumeBtnRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);
  const [showLogo, setShowLogo] = useState(true);

  const tl = useRef(null);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linkRef.current, contactRef.current], { autoAlpha: 0, x: -20 });

    tl.current = gsap.timeline({ paused: true })
      .to(navRef.current, { xPercent: 0, duration: 1, ease: "power3.out" })
      .to(linkRef.current, {
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      }, "<")
      .to(contactRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
  }, []);

  // Floating social icons
  useEffect(() => {
    iconRefs.current.forEach((icon, i) => {
      if (!icon) return;
      gsap.to(icon, {
        y: -6,
        rotate: 6,
        duration: 1.6 + i * 0.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      const svg = icon.querySelector("svg");
      if (svg) {
        gsap.to(svg, {
          scale: 1.06,
          duration: 1.8 + i * 0.15,
          transformOrigin: "50% 50%",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.1 * i,
        });
      }
    });
  }, []);

  // Resume button pulse
  useEffect(() => {
    if (resumeBtnRef.current) {
      const pulse = gsap.to(resumeBtnRef.current, {
        scale: 1.05,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      return () => pulse.kill();
    }
  }, []);

  // Scroll hide/show burger & logo
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isVisible = currentScrollY < lastScrollY || currentScrollY < 10;
      setShowBurger(isVisible);
      setShowLogo(isVisible);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
    if (!open) tl.current.play();
    else tl.current.reverse();
  };

  const socials = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="3.2" strokeWidth="1.2" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <rect x="2" y="3" width="4" height="14" strokeWidth="1.2" />
          <path d="M10 8v9" strokeWidth="1.2" />
          <path d="M10 8a3 3 0 0 1 6 0v9" strokeWidth="1.2" />
          <circle cx="4" cy="4" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.7 3 8.7 7.2 10.1.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6.7 2 .9.1-.7.4-1.3.7-1.6-2.3-.2-4.7-1.1-4.7-5 0-1.1.4-1.9 1-2.6-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1 .8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.6 0 3.9-2.4 4.8-4.7 5 .5.4.8 1 .8 2v3c0 .3.2.6.7.5 4.2-1.4 7.2-5.4 7.2-10.1C23.1 5.3 18.3.5 12 .5z" strokeWidth="0.6" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Logo Section */}
      <div
        className={`fixed top-2 left-2 z-50 transition-all duration-500 ${
          showLogo ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <Logo />
      </div>

      {/* Overlay Navigation */}
      <nav
        ref={navRef}
        className="fixed z-40 flex flex-col justify-between w-full h-full px-10 py-10 uppercase bg-black text-white/80 gap-y-10 md:w-1/2 md:left-1/2 overflow-hidden"
      >
        {/* Links */}
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl mt-24 md:mt-32">
          {["home", "services", "about", "work", "contact"].map((section, index) => (
            <div
              key={index}
              ref={(el) => (linkRef.current[index] = el)}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            >
              <Link
                to={section}
                smooth={true}
                duration={2000}
                offset={0}
                spy={true}
                className="transition-all duration-300 cursor-pointer hover:text-white"
              >
                {section}
              </Link>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div
          ref={contactRef}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mt-10 border-t border-white/10 pt-10"
        >
          <div className="flex flex-col items-start space-y-4">
            <div>
              <p className="text-sm tracking-widest text-white/50 uppercase">Email</p>
              <p className="text-lg tracking-widest lowercase text-white">
                monuk52069@gmail.com
              </p>
            </div>

            {/* Resume Button */}
            <a
              ref={resumeBtnRef}
              href="/MonuKumar_Resume.pdf"
              download
              className="px-6 py-3 mt-2 text-sm tracking-widest uppercase bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 text-white border border-white/20 hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 flex-wrap">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (iconRefs.current[index] = el)}
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition-all duration-300 hover:scale-110"
              >
                {social.svg}
                <span className="absolute bottom-14 opacity-0 group-hover:opacity-100 text-xs tracking-widest bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md text-white transition-all duration-300 translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hamburger */}
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          className={`block w-8 h-0.5 bg-white rounded-full transition-transform duration-300 ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-white rounded-full transition-transform duration-300 ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </div>
    </>
  );
};

export default Navbar;
