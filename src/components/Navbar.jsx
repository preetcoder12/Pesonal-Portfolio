import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          {/* Logo / Name */}
          <h1 className="font-bold text-3xl md:text-4xl orbitron">Preet Gusain</h1>

          {/* Desktop Navigation */}
          <ul className="flex gap-8 text-[#007BFF] font-bold text-lg hidden md:flex">
            <li><Link to="heroSection" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
            <li><Link to="aboutSection" smooth={true} duration={500} className="cursor-pointer">About</Link></li>
            <li><Link to="projectsSkillsSection" smooth={true} duration={500} className="cursor-pointer">Projects</Link></li>
            <li><Link to="skillsSection" smooth={true} duration={500} className="cursor-pointer">Skills</Link></li>
            <li><Link to="experienceSection" smooth={true} duration={500} className="cursor-pointer">Experience</Link></li>
            <li><Link to="contactSection" smooth={true} duration={500} className="cursor-pointer">Contact</Link></li>
          </ul>

          {/* Hamburger Menu */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 text-center py-4 transition-all">
            <ul className="flex flex-col gap-4 text-[#007BFF] dark:text-[#70A5FF] font-bold text-lg">
              <li><Link to="heroSection" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
              <li><Link to="aboutSection" smooth={true} duration={500} className="cursor-pointer">About</Link></li>
              <li><Link to="projectsSkillsSection" smooth={true} duration={500} className="cursor-pointer">Projects</Link></li>
              <li><Link to="skillsSection" smooth={true} duration={500} className="cursor-pointer">Skills</Link></li>
              <li><Link to="experienceSection" smooth={true} duration={500} className="cursor-pointer">Experience</Link></li>
              <li><Link to="contactSection" smooth={true} duration={500} className="cursor-pointer">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>

      <Toaster position="top-right" />
    </>
  );
};

export default Navbar;
