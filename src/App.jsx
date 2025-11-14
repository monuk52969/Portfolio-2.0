import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import Achievements from "./components/Achievements";
import TestimonialSection from "./components/TestimonialSection";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading or wait for everything to be ready
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000); // fade out preloader after 1s
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {/* Preloader */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700">
          <p className="text-xl tracking-widest animate-pulse">Loading...</p>
          <div className="relative w-60 h-1 mt-4 bg-white/20 rounded overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div
        className={`transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <Achievements />
        <TestimonialSection />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
