"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AchievementsRoadmap = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Desktop road animation
      if (window.innerWidth >= 1024) {
        gsap.set("#roadPath", { strokeDasharray: 3000, strokeDashoffset: 3000 });
        gsap.to("#roadPath", {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#roadPath",
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        });
      } else {
        // Mobile road animation
        gsap.set("#roadPathMobile", { strokeDasharray: 2400, strokeDashoffset: 2400 });
        gsap.to("#roadPathMobile", {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#roadPathMobile",
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        });
      }

      // Milestone animations
      const milestones = gsap.utils.toArray(".milestone");
      milestones.forEach((milestone) => {
        const card = milestone.querySelector(".milestone-card");
        const dot = milestone.querySelector(".milestone-dot");

        gsap.from(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: milestone,
            start: "top 85%",
          },
        });

        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: milestone,
            start: "top 80%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

 const milestones = [
  {
    year: "2025",
    title: "Job Ready AI-Powered Cohort Completed",
    desc: "Completed Sheriyans Coding School’s Job Ready AI Powered Cohort covering Full Web Development, DSA, and Aptitude.",
    icon: "🎓",
  },
  {
    year: "2024",
    title: "AI Resume Analyzer – Internal Hackathon",
    desc: "Developed an AI-powered Resume Scoring System that evaluates resumes, gives score, and suggests improvements.",
    icon: "🏆",
  },
  {
    year: "2023",
    title: "Self-Taught Developer Journey",
    desc: "Learned and mastered modern web development by myself through YouTube tutorials, documentation, and hands-on practice.",
    icon: "🔥",
  },
  {
    year: "2022",
    title: "JavaScript Deep Dive",
    desc: "Focused on JavaScript fundamentals, async programming, APIs, and building real-world interactive UI components.",
    icon: "📘",
  },
  {
    year: "2021",
    title: "HTML & CSS Foundations",
    desc: "Started the development journey by learning HTML and CSS and creating small landing pages and UI layouts.",
    icon: "🧱",
  },
];



  return (
    <section
      ref={sectionRef}
      className="relative bg-[#faf8f3] py-20 sm:py-24 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-16 sm:mb-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2a261f] tracking-tight mb-4">
          Achievements
        </h2>
        <p className="text-base sm:text-lg text-[#7a6f60] max-w-2xl mx-auto font-light">
          A journey through milestones, awards, and professional growth
        </p>
      </div>

      {/* Road SVG */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Desktop SVG */}
        <svg
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
          style={{ height: "1800px" }}
          viewBox="0 0 800 1800"
        >
          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#cfa355" }} />
              <stop offset="100%" style={{ stopColor: "#b89144" }} />
            </linearGradient>
          </defs>
          <path
            id="roadPath"
            d="M 100 100 Q 300 100 400 250 T 700 400 Q 500 500 400 650 T 100 900 Q 300 1000 400 1150 T 700 1400 Q 600 1500 500 1600"
            fill="none"
            stroke="url(#roadGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* Mobile SVG */}
        <svg
          className="lg:hidden absolute left-8 top-0 pointer-events-none"
          style={{ height: "2400px", width: "4px" }}
          viewBox="0 0 4 2400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="roadGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#cfa355" }} />
              <stop offset="100%" style={{ stopColor: "#b89144" }} />
            </linearGradient>
          </defs>
          <path
            id="roadPathMobile"
            d="M 2 0 L 2 2400"
            fill="none"
            stroke="url(#roadGradientMobile)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Milestones */}
        <div className="relative space-y-40 lg:space-y-48" style={{ minHeight: "1800px" }}>
          {milestones.map((item, idx) => (
            <div key={idx} className="milestone relative">
              <div
                className={`lg:absolute ${
                  idx % 2 === 0 ? "lg:left-[80px]" : "lg:right-[80px]"
                }`}
                style={{ top: `${idx * 280 + 100}px` }}
              >
                {/* Dot */}
                <div
                  className={`absolute left-4 lg:${
                    idx % 2 === 0 ? "left-0" : "right-0"
                  } top-8 lg:top-0 -translate-x-1/2 ${
                    idx % 2 !== 0 ? "lg:translate-x-1/2" : ""
                  } -translate-y-1/2 z-10`}
                >
                  <div className="milestone-dot relative w-5 h-5 rounded-full border-4 border-white shadow-lg bg-[#cfa355]"></div>
                </div>

                {/* Card */}
                <div
                  className={`milestone-card ml-16 lg:${
                    idx % 2 === 0 ? "ml-12" : "mr-12"
                  } max-w-md bg-white rounded-2xl p-6 shadow-md border border-[#f1e5c8] hover:shadow-lg hover:border-[#cfa355]/50 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium mb-1 text-[#cfa355]">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsRoadmap;
