import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  // Dark mode state
  const [darkmode, setDarkmode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme on mount & toggle
  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkmode(!darkmode);
    toast.success(darkmode ? "Light mode enabled! 🌞" : "Dark mode enabled! 🌙");
  };

  return (
    <>
      <div className="h-screen">
        <div className="bg-white  pb-2 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col md:flex-row items-center justify-between p-4 md:px-12 transition-all shadow-md">

          {/* Logo / Name */}
          <h1 className="font-bold text-4xl">Preet Gusain</h1>

          {/* Navigation Links */}
          <ul className="flex gap-8 text-[#007BFF] dark:text-[#70A5FF] font-bold text-lg">
            <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Home</li>
            <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">About</li>
            <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Projects</li>
            <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Skills</li>
            <li className="hover:text-[#0056B3] dark:hover:text-[#A5C1FF] cursor-pointer">Contact</li>
          </ul>

          {/* Contact Button */}
          <button className="p-2 px-6 rounded-lg text-white bg-[#007BFF] dark:bg-[#2554A7] hover:bg-[#0056B3] dark:hover:bg-[#1E4A8B] transition-all">
            Contact
          </button>

          {/* Dark/Light Mode Toggle */}
          <div className="flex items-center gap-4 p-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
            >
              {darkmode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
            </button>
            <Toaster position="top-right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
