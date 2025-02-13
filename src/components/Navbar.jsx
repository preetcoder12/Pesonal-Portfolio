import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Toaster } from "react-hot-toast";

const Navbar = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);

  // Apply dark mode on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="  bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          
          {/* Logo / Name */}
          <h1 className="font-bold text-3xl md:text-4xl">Preet Gusain</h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-[#007BFF] dark:text-[#70A5FF] font-bold text-lg">
            <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Home</li>
            <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">About</li>
            <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Projects</li>
            <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Skills</li>
            <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Contact</li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 px-6 rounded-lg text-white bg-[#007BFF] dark:bg-[#2554A7] hover:bg-[#0056B3] dark:hover:bg-[#1E4A8B] transition-all">
              Contact
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
            >
              {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
            </button>
          </div>

          {/* Hamburger Menu */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 text-center py-4 transition-all">
            <ul className="flex flex-col gap-4 text-[#007BFF] dark:text-[#70A5FF] font-bold text-lg">
              <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Home</li>
              <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">About</li>
              <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Projects</li>
              <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Skills</li>
              <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </nav>

      <Toaster position="top-right" />
    </>
  );
};

export default Navbar;
