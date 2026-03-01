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

  return <span className="counting">{count}</span>;
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
    <div id="heroSection" className="w-full min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black pt-20">
      {/* Animated Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-15"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Enhanced Grid patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMCAzaDR2MWgtNHYtMXptMCAzaDR2MWgtNHYtMXptMTYtMzF2MWgtNHYtMWg0em0wIDNoLTR2MWg0di0xem0wIDNoLTR2MWg0di0xem0wIDNoLTR2MWg0di0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section */}
          <motion.div
            className="flex flex-col justify-center text-center lg:text-left max-w-2xl w-full"
            variants={containerVariants}
          >
            <motion.div
              className="inline-block mb-4 px-2.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit mx-auto lg:mx-0"
              variants={itemVariants}
            >
              <span className="text-blue-400 text-xs font-medium whitespace-nowrap">Welcome to my Portfolio</span>
            </motion.div>


            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 mb-4 sm:mb-6 font-semibold"
              variants={itemVariants}
            >
              I am{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block">
                <Typewriter
                  words={[
                    "a Full Stack Developer",
                    "a Problem Solver",
                    "an AI & ML Enthusiast",
                    "a Creative Coder",
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
              className="text-gray-400 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 sm:px-0"
              variants={itemVariants}
            >
              Aspiring Full Stack Developer with strong skills in C++, Python, and JavaScript. Building scalable, creative solutions with hands-on experience in web development, machine learning, and cloud technologies. Currently pursuing B.Tech in CSIT with 7.5 CGPA.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center lg:justify-start w-full"
              variants={itemVariants}
            >
              <motion.a
                href="/preet_cv.pdf"
                download="Preet_Resume.pdf"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm sm:text-base font-semibold rounded-xl shadow-2xl overflow-hidden w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaDownload className="group-hover:animate-bounce" />
                  Download CV
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <div className="flex gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative p-2.5 sm:p-3 text-xl sm:text-2xl text-gray-400 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 ${social.color} hover:border-blue-500/50`}
                    whileHover={{ scale: 1.15, y: -3 }}
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
            className="relative flex justify-center items-center w-full lg:w-auto mt-8 lg:mt-0"
            variants={itemVariants}
          >
            {/* Animated gradient rings */}
            <motion.div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] rounded-full border-2 border-dotted border-blue-500/20"
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            <motion.div
              className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-2 border-dotted border-purple-500/20"
              animate={{
                rotate: 360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            <motion.div
              className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-2 border-dotted border-pink-500/20"
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Image container with enhanced effects */}
            <motion.div
              className="relative p-2 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/10"
              whileHover={{ scale: 1.08, rotate: [0, -5, 5, -5, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative rounded-full overflow-hidden">
                <motion.img
                  src="/profile.jpeg"
                  alt="Preet Gusain"
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-gray-800/50 relative z-10"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Animated Counters Section */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 bg-gradient-to-br from-gray-800/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-700/50 shadow-2xl mx-4 sm:mx-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div
            className="text-center flex flex-col items-center gap-2 sm:gap-3 group w-1/2 sm:w-auto"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              <Counter target={30} />
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-medium">Projects</p>
            <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

          <div className="hidden sm:block h-12 md:h-16 w-px bg-gradient-to-b from-transparent via-gray-500/50 to-transparent" />

          <motion.div
            className="text-center flex flex-col items-center gap-2 sm:gap-3 group w-1/2 sm:w-auto"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              <Counter target={240} />
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-medium">DSA Problems</p>
            <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

          <div className="hidden sm:block h-12 md:h-16 w-px bg-gradient-to-b from-transparent via-gray-500/50 to-transparent" />

          <motion.div
            className="text-center flex flex-col items-center gap-2 sm:gap-3 group w-1/2 sm:w-auto"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              <Counter target={1000} />
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-medium">Commits</p>
            <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

          <div className="hidden sm:block h-12 md:h-16 w-px bg-gradient-to-b from-transparent via-gray-500/50 to-transparent" />

          <motion.div
            className="text-center flex flex-col items-center gap-2 sm:gap-3 group w-1/2 sm:w-auto"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              <Counter target={25} />
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-medium">Tech Stacks</p>
            <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        </motion.div>
      </div>


      {/* Add a custom animation for the wave emoji */}


    </div>
  );
};

export default Hero;