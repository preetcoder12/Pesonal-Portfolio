import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlitchText from './GlitchText';

const ScrollRevealWord = ({ word, index, total, progress }) => {
  const start = index / total;
  const end = (index + 1.5) / total; // Slightly overlap transitions for a smoother flow
  const opacity = useTransform(progress, [start, end], [0.12, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em] last:mr-0 select-none">
      {word}
    </motion.span>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const text = "I, Preet Gusain, am a Full Stack Developer with strong skills in C++, Python, and JavaScript. I build scalable, creative web applications, machine learning systems, and cloud solutions. I have hands-on experience developing optimized backends and responsive frontends. Currently pursuing my B.Tech in CSIT with a 7.5 CGPA, I focus on writing clean, simple, and high-performance code.";
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.82", "start 0.38"],
  });

  const tickerItems = [
    "C++", "PYTHON", "JAVASCRIPT", "REACT", "NODEJS", "NEXTJS", "MONGODB", "EXPRESS", "HTML", "CSS"
  ];
  
  // Duplicate elements to ensure seamless loop
  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  const socialLinks = [
    { name: "INSTAGRAM", url: "https://www.instagram.com/preet_gusain200_?utm_source=qr&igsh=MXhmenR4ZXgwc2xvbA==" },
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/preet-gusain-986b022a5/" },
    { name: "GITHUB", url: "https://github.com/preetcoder12" },
    { name: "YOUTUBE", url: "https://www.youtube.com/@preetgusain" },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contactSection");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="aboutSection" className="bg-white py-16 sm:py-24 text-[#08060d] relative overflow-hidden select-none">
      {/* Ticker marquee */}
      <div className="ticker-container">
        <div className="ticker-content">
          {duplicatedItems.map((item, idx) => (
            <span key={idx} className="ticker-item">
              {item} <span className="ticker-star">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Down arrow */}
      <div className="flex justify-center mt-12 mb-8 relative z-10">
        <span className="text-2xl text-[#08060d] font-bold animate-bounce">▼</span>
      </div>

      {/* Content wrapper */}
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-12 text-center relative z-10">
        {/* Title */}
        <h2 className="font-akira lg:text-8xl md:text-5xl text-2xl tracking-wider uppercase text-[#08060d]">
          <GlitchText speed={0.6} enableShadows={true} enableOnHover={true} className="font-akira lg:text-8xl md:text-5xl text-2xl tracking-wider uppercase text-[#08060d]">
            About Me
          </GlitchText>
        </h2>

        {/* Scroll-reveal Description */}
        <div ref={containerRef} className="max-w-3xl flex flex-wrap justify-center text-center">
          <p className="font-sans text-[clamp(1.1rem,2.2vw,1.4rem)] font-semibold text-[#08060d] leading-relaxed tracking-wide">
            {words.map((word, idx) => (
              <ScrollRevealWord
                key={idx}
                word={word}
                index={idx}
                total={words.length}
                progress={scrollYProgress}
              />
            ))}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans font-extrabold text-[0.8rem] sm:text-sm tracking-widest text-[#08060d] uppercase">
          {socialLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-500 transition-colors flex items-center gap-1 cursor-pointer"
              >
                {link.name} <span className="text-[0.7rem] sm:text-[0.8rem]">↗</span>
              </a>
              {idx < socialLinks.length - 1 && <span className="text-gray-300">|</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="/preet_cv.pdf"
            download="Preet_Resume.pdf"
            className="px-8 py-3.5 border-2 border-[#08060d] rounded-full text-[#08060d] font-bold hover:bg-[#08060d] hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase cursor-pointer"
          >
            Resume
          </a>
          <a
            href="#contactSection"
            onClick={handleContactClick}
            className="px-8 py-3.5 border-2 border-[#08060d] rounded-full text-[#08060d] font-bold hover:bg-[#08060d] hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
