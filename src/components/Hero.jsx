import React, { useState, useEffect, useRef } from "react";
import Particles from "./Particles";
import Lanyard from "./Lanyard";

const Hero = ({ loading }) => {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 8);

      const heroElement = heroRef.current;
      if (!heroElement) return;

      const r = window.innerWidth <= 1024 ? 0.26 : 0.34;
      const thresholdHeight = window.innerHeight * (1 - r);
      const progress = Math.min(scrollY / thresholdHeight, 1);

      heroElement.style.setProperty("--hero-progress", progress.toString());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleScrollClick = (e) => {
    e.preventDefault();
    const nextSection = document.getElementById("aboutSection");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="heroSection"
      className="relative w-full bg-black flex items-center justify-center min-h-screen py-16 lg:py-0"
      style={{
        minHeight: "calc(100svh - var(--hero-progress) * 34svh)",
      }}
    >
      <Particles
        particleColors={["#ffffff", "#aaaaaa", "#555555"]}
        particleCount={200}
        particleSpread={10}
        speed={0.15}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        particleHoverFactor={1.2}
        alphaParticles={true}
        disableRotation={false}
        className="absolute inset-0 z-0"
      />

      <div className="z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-6 lg:gap-16 max-w-7xl w-full px-6 relative">
        {/* Left column: 3D Lanyard Card */}
        <div className={`hidden lg:flex w-full lg:w-[35%] h-[380px] sm:h-[480px] md:h-[550px] lg:h-[750px] items-center justify-center transition-all duration-1000 lg:-translate-x-16 relative z-30 overflow-visible ${
          loading ? "opacity-0 scale-95" : "opacity-100 scale-100 delay-[1.5s]"
        }`}>
          {!loading && (
            <Lanyard
              frontImage="/cardimage.jpeg"
              backImage="/cardimage.jpeg"
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
            />
          )}
        </div>

        {/* Right column: Name Typography Wipes */}
        <div className="w-full lg:w-[65%] flex flex-col items-center lg:items-start text-center lg:text-left gap-3 justify-center relative z-10">
          <h1
            className={`relative overflow-hidden inline-flex flex-col lg:flex-row items-center lg:items-start m-0 font-akira font-black text-[clamp(3.2rem,12vw,4.5rem)] lg:text-[clamp(2.75rem,5.7vw,6.6rem)] leading-[0.96] text-white tracking-[0.03em] uppercase ${
              loading ? "" : "is-revealed"
            }`}
            aria-label="Preet Gusain"
          >
            <span
              className={`relative z-10 inline-flex flex-col lg:flex-row items-center lg:items-start text-transparent opacity-0 ${
                !loading
                  ? "animate-[hero-title-text-reveal_1.05s_step-end_1.58s_forwards]"
                  : ""
              }`}
            >
              <span className="block lg:inline">Preet</span>
              <span className="hidden lg:inline">&nbsp;</span>
              <span className="block lg:inline">Gusain</span>
            </span>
            <span
              className={`absolute inset-0 z-20 origin-left scale-x-0 bg-[var(--accent-custom)] ${
                !loading
                  ? "animate-[hero-title-bar-reveal-accent_2.2s_cubic-bezier(0.22,1,0.36,1)_1.23s_forwards]"
                  : ""
              }`}
              aria-hidden="true"
            />
            <span
              className={`absolute inset-0 z-30 origin-left scale-x-0 bg-white ${
                !loading
                  ? "animate-[hero-title-bar-reveal_1.05s_cubic-bezier(0.22,1,0.36,1)_1.48s_forwards]"
                  : ""
              }`}
              aria-hidden="true"
            />
          </h1>
          <div className={`inline-block overflow-hidden mt-2 ${loading ? "" : "is-revealed"}`}>
            <p
              className={`inline-block translate-y-[0.62em] opacity-0 will-change-[transform,opacity] font-sans text-white text-[clamp(1.2rem,3.2vw,1.8rem)] lg:text-[clamp(1.2rem,2.5vw,1.8rem)] tracking-[0.2em] sm:tracking-[0.24em] lg:tracking-[0.16em] ${
                !loading
                  ? "animate-[hero-subtitle-rise_0.58s_cubic-bezier(0.22,1,0.36,1)_3.5s_forwards]"
                  : ""
              }`}
            >
              Software Engineer
            </p>
          </div>
        </div>
      </div>

      <a
        href="#aboutSection"
        onClick={handleScrollClick}
        className={`absolute bottom-[54px] lg:bottom-[42px] left-1/2 -translate-x-1/2 z-30 font-sans text-[0.84rem] lg:text-[0.76rem] font-extrabold text-white/90 tracking-[0.28em] [text-shadow:0_1px_10px_rgba(0,0,0,0.28)] uppercase grid justify-items-center gap-2.5 lg:gap-2 no-underline cursor-pointer transition duration-500 delay-[3500ms] ${
          loading
            ? "opacity-0 translate-y-3 pointer-events-none"
            : scrolled
            ? "opacity-0 translate-y-2 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <span>Scroll</span>
        <span
          className="mx-auto w-3.5 h-3.5 border-b-[2.5px] border-r-[2.5px] border-white rotate-45 [filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.22))] animate-[hero-scroll-arrow-bob_1.6s_ease-in-out_4s_infinite]"
          aria-hidden="true"
        />
      </a>
    </section>
  );
};

export default Hero;
