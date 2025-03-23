import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaDownload } from "react-icons/fa";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in ms
    const frameDuration = 1000 / 60; // Duration of one frame at 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const increment = target / totalFrames;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Use easeOutQuad easing function for smoother animation
      const easeProgress = 1 - Math.pow(1 - progress, 2);
      const currentCount = Math.floor(easeProgress * target);

      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(timer);
        setCount(target);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [target]);

  return <div className="text-3xl md:text-5xl font-bold text-blue-400">{count}</div>;
};

const Hero = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/preet-gusain-986b022a5/", color: "hover:text-blue-500" },
    { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/preet_gusain200_?utm_source=qr&igsh=MXhmenR4ZXgwc2xvbA==", color: "hover:text-pink-500" },
    { name: "GitHub", icon: FaGithub, url: "https://github.com/preetcoder12", color: "hover:text-gray-300" },
    { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/@preetgusain", color: "hover:text-red-500" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-black ">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-5"></div>
      </div>

      {/* Grid patterns */}
      <div className="absolute  inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMCAzaDR2MWgtNHYtMXptMCAzaDR2MWgtNHYtMXptMTYtMzF2MWgtNHYtMWg0em0wIDNoLTR2MWg0di0xem0wIDNoLTR2MWg0di0xem0wIDNoLTR2MWg0di0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-12 ">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-16 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section */}
          <motion.div
            className="flex flex-col justify-center text-center lg:text-left max-w-xl"
            variants={containerVariants}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Preet!</span>
              <span className="ml-2 inline-block origin-bottom-right animate-wave">👋</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-gray-300 mb-6"
              variants={itemVariants}
            >
              I am{" "}
              <span className="font-medium text-gray-200">
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
            </motion.h2>

            <motion.p
              className="text-gray-300 mb-8 text-lg"
              variants={itemVariants}
            >
              Passionate about building scalable web applications and solving complex problems. Driven by creativity and technical excellence.
            </motion.p>

            <motion.div
              className="flex gap-6 items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <a
                href="/preet_cv.pdf"
                download="Preet_CV.pdf"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-blue-500/20 flex items-center gap-2 group"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </a>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-gray-400 transition-all duration-300 ${social.color} hover:scale-125`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative flex justify-center items-center"
            variants={itemVariants}
          >
            {/* Outer rotating circle */}
            <motion.div
              className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full border-4 border-dotted border-gray-600/30"
              animate={{
                rotate: -360,
                transition: { duration: 25, repeat: Infinity, ease: "linear" }
              }}
            />

            {/* Inner rotating circle */}
            <motion.div
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-dotted border-blue-500/30"
              animate={{
                rotate: 360,
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            />

            {/* Image container */}
            <motion.div
              className="relative p-4 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <img
                src="preet_2.png"
                alt="Preet Gusain"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-gray-800/50"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Counters Section */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 px-4 py-8 bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700/30 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="text-center flex flex-col items-center gap-2">
            <Counter target={15} />
            <p className="text-lg md:text-xl text-gray-300">Projects</p>
          </div>

          <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-30" />

          <div className="text-center flex flex-col items-center gap-2">
            <Counter target={70} />
            <p className="text-lg md:text-xl text-gray-300">DSA Problems</p>
          </div>

          <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-30" />

          <div className="text-center flex flex-col items-center gap-2">
            <Counter target={155} />
            <p className="text-lg md:text-xl text-gray-300">Commits</p>
          </div>

          <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-30" />

          <div className="text-center flex flex-col items-center gap-2">
            <Counter target={15} />
            <p className="text-lg md:text-xl text-gray-300">Tech Stacks</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path fill="#111827" fillOpacity="0.8" d="M0,128L60,112C120,96,240,64,360,48C480,32,600,32,720,48C840,64,960,96,1080,106.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      {/* Add a custom animation for the wave emoji */}


    </div>
  );
};

export default Hero;