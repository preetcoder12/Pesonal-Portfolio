import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="w-full min-h-screen hero-section transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-screen-xl mx-auto px-6 py-20">

        {/* Left Section */}
        <div className="flex flex-col justify-center text-center md:text-left max-w-lg">
          {/* h1 changes dynamically between light and dark mode */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black dark:text-white">
            Hi, I'm <span className="text-blue-500 dark:text-blue-400">Preet!</span> 👋
          </h1>

          {/* Typewriter Text with Soft Black & Grey */}
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mt-4">
            I am{" "}
            <span className="font-semibold transition-colors duration-300 text-gray-800 dark:text-gray-400">
              <Typewriter
                words={[
                  "a MERN Stack Developer",
                  "a Problem Solver",
                  "an Open-Source Enthusiast"
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

          <p className="text-gray-600 dark:text-gray-400 mt-5 text-lg">
            Passionate about building scalable web applications & solving complex problems.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/preet_cv.pdf"
              download="Preet_CV.pdf"
              className="px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              📄 Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              📩 Contact Me
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src="src/public/preeHeoSection.png" alt="Preet Gusain"
            className="max-h-[28rem] w-auto rounded-xl shadow-2xl border-4 border-gray-800 dark:border-gray-600 transition duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
