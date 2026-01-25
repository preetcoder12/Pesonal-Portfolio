import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Award, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
    const [activeTab, setActiveTab] = useState("experience");
    
    // Custom arrows for slider
    const SlickArrow = ({ className, onClick, icon }) => (
        <div
            className={`${className} z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 bg-opacity-80 backdrop-blur-sm text-white cursor-pointer transition-all hover:bg-blue-500 hover:scale-110 before:hidden`}
            onClick={onClick}
        >
            {icon}
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SlickArrow icon={<ChevronRight size={20} />} />,
        prevArrow: <SlickArrow icon={<ChevronLeft size={20} />} />,
        dotsClass: "slick-dots custom-dots",
        appendDots: dots => (
            <div>
                <ul className="flex gap-2 justify-center mt-8"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-400 transition-all"></div>
        )
    };

    const experiences = [
        {
            title: "Web Developer - Web3task",
            images: "web3task_logo.jpeg",
            date: "Jul 2025 - Present · 7 mos",
            location: "Noida sector- 152 · On-site",
            description: "Developing cutting-edge web applications and SaaS platforms using modern technologies. Working on full-stack solutions including React, Next.js, Node.js, and cloud services. Contributing to innovative projects that help startups scale with strong SaaS, conversion-ready dashboards, and integrated tech solutions.",
            learned: "Full-stack Development, React/Next.js, SaaS Platform Development, API Integration, Cloud Services, and Agile Development."
        },
        {
            title: "Frontend Developer - Prodigy Infotech",
            images: "prodigy.png",
            date: "Jan 2024 - Feb 2024",
            description: "Built scalable UI with React & Tailwind, integrated REST APIs, and optimized performance.",
            learned: "Learned React, API integration, and UI performance optimization with Tailwind CSS."
        }
    ];

    const certifications = [
        {
            id: "1",
            title: "Certification of Completion - C",
            image: "C.jpeg",
            issued_by: "IIT Bombay",
            date: "Jan 2024",
            logo: "iitb.png",
            desc: "Completed C programming certification covering loops, functions, pointers, arrays, and memory management with hands-on exercises from IIT Bombay."
        },
        {
            id: "2",
            title: "Career Essentials in Data Analytics",
            image: "dataAnalytics.png",
            issued_by: "Microsoft & LinkedIn",
            date: "Feb 2025",
            logo: "microsoft.png",
            desc: "Developed expertise in data analysis, visualization, SQL, and Python, earning certification from Microsoft & LinkedIn Learning."
        },
        {
            id: "3",
            title: "DSA with Oops in C++",
            image: "DSA.jpeg",
            issued_by: "Udemy",
            date: "Oct 2024",
            logo: "Udemy-Logo.png",
            desc: "Mastered Data Structures, Algorithms, and Object-Oriented Programming in C++ with hands-on projects and quizzes."
        },
        {
            id: "4",
            title: "Machine Learning",
            image: "ML.jpeg",
            issued_by: "Udemy",
            date: "Nov 2024",
            logo: "Udemy-Logo.png",
            desc: "Learned Machine Learning, Data Preprocessing, Regression, Classification, Clustering, and Natural Language Processing with Python."
        },
        {
            id: "5",
            title: "SQL BootCamp",
            image: "SQL.jpeg",
            issued_by: "Udemy",
            date: "Feb 2025",
            logo: "Udemy-Logo.png",
            desc: "Mastered SQL, Database Management, and Querying with MySQL, and SQLite from scratch."
        },
        {
            id: "6",
            title: "React/Next.js Certification",
            image: "dataAnalytics.png",
            issued_by: "SimpliLearn",
            date: "Aug 2024",
            logo: "microsoft.png",
            desc: "Comprehensive certification in React.js and Next.js covering modern web development, server-side rendering, and advanced React patterns."
        },
    ];

    return (
        <div id="experienceSection" className="py-16 sm:py-20 lg:py-24 text-white bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
            
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-400 text-xs sm:text-sm font-medium">Career Path</span>
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white orbitron">
                        <span className="text-white">Professional </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Journey</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
                        <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
                        <div className="h-1 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                        <div className="h-1 w-12 sm:w-16 bg-gradient-to-l from-transparent to-blue-500"></div>
                    </div>
                    <p className="mt-4 sm:mt-6 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2 sm:px-0">
                        Explore my professional experiences and achievements that have shaped my career path
                    </p>
                </motion.div>

                {/* Enhanced Tab Navigation */}
                <motion.div
                    className="flex justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex bg-gray-800/50 backdrop-blur-xl p-1 rounded-full border border-gray-700/50 shadow-2xl">
                        <motion.button
                            onClick={() => setActiveTab("experience")}
                            className={`relative flex items-center gap-2 px-8 py-3 rounded-full transition-all font-medium ${
                                activeTab === "experience"
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeTab === "experience" && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                                    layoutId="activeTab"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <Briefcase size={18} className="relative z-10" />
                            <span className="relative z-10">Experience</span>
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab("certifications")}
                            className={`relative flex items-center gap-2 px-8 py-3 rounded-full transition-all font-medium ${
                                activeTab === "certifications"
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeTab === "certifications" && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                                    layoutId="activeTab"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <Award size={18} className="relative z-10" />
                            <span className="relative z-10">Certifications</span>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Enhanced Experience Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === "experience" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto"
                        >
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl p-8 md:p-10 transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/20"
                                    whileHover={{ y: -8, scale: 1.01 }}
                                >
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-3xl"></div>
                                    
                                    <div className="relative z-10">
                                        {/* Header Section */}
                                        <div className="flex items-start gap-6 mb-6">
                                            <motion.div
                                                className="flex-shrink-0 p-4 bg-gradient-to-br from-gray-700/60 to-gray-800/60 rounded-2xl border border-gray-600/50 shadow-xl backdrop-blur-sm"
                                                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <img
                                                    src={exp.images}
                                                    alt={exp.title}
                                                    className="w-24 h-24 object-contain p-2"
                                                />
                                            </motion.div>
                                            <div className="flex-1">
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                                                    {exp.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                                    <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
                                                        {exp.date}
                                                    </div>
                                                    {exp.location && (
                                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs sm:text-sm">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            <span>{exp.location}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Skills Section */}
                                        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700/50">
                                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                                <motion.div
                                                    className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-amber-400 rounded-full"
                                                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                                <h4 className="text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Skills Gained</h4>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.learned.split(', ').map((skill, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium rounded-lg backdrop-blur-sm"
                                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(234, 179, 8, 0.2)" }}
                                                    >
                                                        {skill.trim()}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Enhanced Certifications Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === "certifications" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl"
                        >
                        <Slider {...settings}>
                            {certifications.map((cert, index) => (
                                <div key={index} className="px-4">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="md:w-2/5 flex justify-center">
                                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-xl shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105">
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="w-full h-48 object-cover rounded-lg"
                                                />
                                            </div>
                                        </div>
                                        <div className="md:w-3/5 text-left">
                                            <div className="flex items-center gap-3 mb-4">
                                                <img 
                                                    src={cert.logo} 
                                                    alt="Issuer Logo" 
                                                    className="w-10 h-10 object-contain bg-white p-1 rounded-md"
                                                />
                                                <span className="text-lg text-blue-300">{cert.issued_by}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                                            <div className="inline-block px-3 py-1 bg-blue-900/30 rounded-full text-blue-300 text-sm font-medium mb-4">
                                                {cert.date}
                                            </div>
                                            <p className="text-gray-300 leading-relaxed">{cert.desc}</p>
                                           
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Experience;