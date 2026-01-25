import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from 'react-scroll';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("heroSection");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["heroSection", "aboutSection", "projectsSkillsSection", "skillsSection", "experienceSection", "contactSection"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "heroSection", label: "Home" },
    { to: "aboutSection", label: "About" },
    { to: "projectsSkillsSection", label: "Projects" },
    { to: "skillsSection", label: "Skills" },
    { to: "experienceSection", label: "Experience" },
    { to: "contactSection", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-gray-900/80 backdrop-blur-2xl shadow-lg border-b border-gray-800/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo / Name */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="heroSection"
                smooth={true}
                duration={500}
                className="font-bold text-lg sm:text-xl md:text-2xl orbitron bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
              >
                Preet Gusain
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <ul className="flex items-center gap-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.to;
                  return (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className={`relative px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {link.label}
                        
                        {/* Subtle active indicator */}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                            layoutId="activeIndicator"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Resume Download Button */}
              <motion.a
                href="/preet_cv.pdf"
                download="Preet_Resume.pdf"
                className="flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs lg:text-sm font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden lg:inline">Resume</span>
              </motion.a>
            </div>

            {/* Hamburger Menu */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-white hover:bg-gray-800/50 transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-gray-900/95 backdrop-blur-2xl border-t border-gray-800/30 overflow-hidden"
            >
              <div className="px-4 sm:px-6 py-4 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.to;
                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'bg-blue-500/10 text-white border-l-2 border-blue-500'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile Resume Button */}
                <motion.a
                  href="/preet_cv.pdf"
                  download="Preet_Resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <Toaster position="top-right" />
    </>
  );
};

export default Navbar;
