"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    name: "Sarah Nguyen",
    role: "Project Manager, Nova Studio",
    quote:
      "Nura completely <span class='text-[var(--color-gold)] font-light'>transformed the way</span> our team manages schedules. It keeps us organized, synced, and focused — <span class='text-[var(--color-gold)] font-light'>without wasting time planning</span> or switching tools.",
    img: "/images/man.png",
  },
  {
    name: "Michael Chen",
    role: "CEO, TechFlow",
    quote:
      "The AI automation in Nura has <span class='text-[var(--color-gold)] font-light'>saved us countless hours</span> every week. Our team is more productive than ever, and we can finally focus on <span class='text-[var(--color-gold)] font-light'>building great products</span>.",
    img: "/images/man.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Lead, Innovate Labs",
    quote:
      "Switching to Nura was the <span class='text-[var(--color-gold)] font-light'>best decision</span> we made this year. The interface is intuitive, and our collaboration has <span class='text-[var(--color-gold)] font-light'>never been stronger</span>.",
    img: "/images/man.png",
  },
  {
    name: "David Kim",
    role: "Engineering Manager, CloudBase",
    quote:
      "Nura’s intelligent prioritization helps us <span class='text-[var(--color-gold)] font-light'>ship features faster</span> with confidence. Real-time sync across our distributed team is a <span class='text-[var(--color-gold)] font-light'>game-changer</span>.",
    img: "/images/man.png",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    gsap.fromTo(
      container,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
        },
      }
    );
  }, []);

  const active = testimonialsData[activeIndex];

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-24 rounded-4xl overflow-hidden"
      style={{ backgroundColor: "#000000", color: "white" }}
    >
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-gold)]/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[var(--color-gold)]/10 blur-3xl"></div>

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-light tracking-tight text-white">
          What Our <span className="text-[var(--color-gold)]">Customers Say</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base font-light">
          Real feedback from teams using our platform to plan better, focus
          deeper, and ship faster.
        </p>
      </div>

      {/* Testimonial Card */}
      <div
        className="relative backdrop-blur-md border rounded-3xl p-10 text-center transition-all"
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <blockquote className="text-2xl sm:text-4xl md:text-5xl font-light leading-tight mb-10 transition-opacity duration-500 text-white">
          <p
            dangerouslySetInnerHTML={{
              __html: active.quote,
            }}
          ></p>
        </blockquote>
        <p className="text-gray-400 text-sm sm:text-base">
          {active.name}{" "}
          <span className="text-[var(--color-gold)] font-normal">— {active.role}</span>
        </p>

        {/* Thumbnails */}
        <div className="flex items-end justify-center gap-4 sm:gap-6 mt-12">
          {testimonialsData.map((item, idx) => (
            <img
              key={idx}
              onClick={() => setActiveIndex(idx)}
              src={item.img}
              alt={item.name}
              className={`rounded-xl object-cover cursor-pointer transition-all duration-300 ${
                activeIndex === idx
                  ? "h-16 w-16 shadow-[0_0_15px_rgba(207,163,85,0.8)]"
                  : "h-12 w-12 opacity-40 grayscale hover:opacity-80"
              }`}
              style={{
                border:
                  activeIndex === idx
                    ? "2px solid var(--color-gold)"
                    : "1px solid rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
