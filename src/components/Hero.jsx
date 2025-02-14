import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(target / 100); // Speed adjustment

    const updateCounter = () => {
      if (start < target) {
        start += increment;
        setCount(start);
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    updateCounter();
  }, [target]);

  return <div className="text-3xl md:text-4xl font-bold text-blue-400 counting">{count}</div>;
};

const Hero = () => {
  return (
    <div className="w-full min-h-screen hero-section transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-screen-xl mx-auto px-6 py-10 mb-10">

        {/* Left Section */}
        <div className="flex flex-col justify-center text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Hi, I'm <span className="text-blue-400">Preet!</span> 👋
          </h1>

          <h2 className="text-xl md:text-3xl text-gray-300 mt-4">
            I am{" "}
            <span className="font-semibold text-gray-400">
              <Typewriter
                words={[
                  "a MERN Stack Developer",
                  "a Problem Solver",
                  "an Open-Source Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Passionate about building scalable web applications & solving complex problems.
          </p>

          <div className="mt-6 flex gap-4 items-center justify-center md:justify-start flex-wrap">
            <a
              href="/preet_cv.pdf"
              download="Preet_CV.pdf"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              📄 Download CV
            </a>
            <a href="https://www.linkedin.com/in/preet-gusain-986b022a5/" target="_blank">
              <img src="linkedinlogo.png" className="w-10 md:w-12" alt="LinkedIn" />
            </a>
            <a href="https://github.com/preetcoder12" target="_blank">
              <img src="instalogo.png" className="w-10 md:w-12" alt="GitHub" />
            </a>
            <a href="https://github.com/preetcoder12" target="_blank">
              <img src="githublogo.png" className="w-10 md:w-12" alt="GitHub" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center relative image-container">
          <div className="absolute w-64 h-64 md:w-[32rem] md:h-[32rem] rounded-full 
                border-4 border-dotted border-gray-600
                rotating-border"></div>

          <img
            src="preet_2.png"
            alt="preet"
            className="max-h-64 md:max-h-[28rem] w-auto rounded-full shadow-2xl p-2 
               border-4 border-transparent object-cover relative profile-image"
          />
        </div>
      </div>

      {/* 🟢 Animated Counters Section */}
      <div className="flex flex-wrap md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 px-4">
        <div className="text-center flex gap-2 items-center">
          <Counter target={15} />
          <p className="text-lg md:text-3xl text-gray-300">Projects</p>
        </div>
        <span className="text-2xl md:text-4xl text-gray-500">|</span>
        <div className="text-center flex gap-2 items-center">
          <Counter target={115} />
          <p className="text-lg md:text-3xl text-gray-300">Contributions</p>
        </div>
        <span className="text-2xl md:text-4xl text-gray-500">|</span>
        <div className="text-center flex gap-2 items-center">
          <Counter target={98} />
          <p className="text-lg md:text-3xl text-gray-300">Commits</p>
        </div>
        <span className="text-2xl md:text-4xl text-gray-500">|</span>
        <div className="text-center flex gap-2 items-center">
          <Counter target={16} />
          <p className="text-lg md:text-3xl text-gray-300">Tech Stacks</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
