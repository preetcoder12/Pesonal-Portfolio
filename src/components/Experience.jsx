import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Award, Briefcase, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import GlitchText from './GlitchText';

const Experience = () => {
    const [activeTab, setActiveTab] = useState("experience");
    const [currentCert, setCurrentCert] = useState(0);
    const [certDirection, setCertDirection] = useState(1); // 1 for next, -1 for prev
    const [zoomImage, setZoomImage] = useState(null); // URL of image to zoom in modal
    const containerRef = useRef(null);

    // Scroll progress tracking for the vertical timeline line
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });
    const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


    const experiences = [
        {
            title: "Web Developer (Intern) - Web3task",
            images: "web3task_logo.jpeg",
            date: "Jun 2025 - Dec 2025 · 7 mos",
            location: "Noida sector- 152 · On-site",
            description: "Developing cutting-edge web applications and SaaS platforms using modern technologies. Working on full-stack solutions including React, Next.js, Node.js, and cloud services. Contributing to innovative projects that help startups scale with strong SaaS, conversion-ready dashboards, and integrated tech solutions.",
            learned: "Full-stack Development, React/Next.js, SaaS Platform Development, API Integration, Cloud Services, and Agile Development.",
            documentLink: "/offerletter_web3task.jpg?v=4",
            documentLabel: "View Offer Letter"
        },
        {
            title: "Web Developer (Full-time) - Web3task",
            images: "web3task_logo.jpeg",
            date: "Jan 2026 - Jul 2026 · 7 mos",
            location: "Noida sector- 152 · On-site",
            description: "Led team leadership initiatives directing front-end and back-end development teams. Developed and launched native iOS application and Android application platforms. Engineered robust automation scripts, worked on networking protocols, and managed VPS handling for secure deployments. Performed reverse engineering on legacy codebases and conducted model finetuning to integrate advanced AI capabilities.",
            learned: "Team Leadership, iOS/Android Development, Automation, VPS Management, Networking, Reverse Engineering, Model Fine-tuning, Full-stack Development.",
            documentLink: "/certificate_web3task.jpg?v=4",
            documentLabel: "View Internship Certificate"
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
        {
            id: "7",
            title: "Full Stack Web Developer Internship Certificate",
            image: "certificate_web3task.jpg?v=4",
            issued_by: "Web3task",
            date: "Mar 2026",
            logo: "web3task_logo.jpeg",
            desc: "Recognized for outstanding completion of the Web3task internship program, demonstrating excellence in full-stack, mobile development, leadership, and automation systems."
        }
    ];

    return (
        <div id="experienceSection" className="py-16 sm:py-20 lg:py-24 text-[#08060d] bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-20 left-20 w-64 h-64 bg-blue-100/30 rounded-full filter blur-3xl"
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
                    className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100/30 rounded-full filter blur-3xl"
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
                        className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 border border-gray-200 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-gray-500 text-xs sm:text-sm font-medium">Career Path</span>
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#08060d] orbitron">
                        <GlitchText speed={0.6} enableShadows={true} enableOnHover={true} className="text-[#08060d] orbitron font-extrabold">
                            Professional Journey
                        </GlitchText>
                    </h2>
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
                        <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#08060d]/20"></div>
                        <div className="h-1 w-20 sm:w-24 md:w-32 bg-[#08060d]/80 rounded-full"></div>
                        <div className="h-1 w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#08060d]/20"></div>
                    </div>
                    <p className="mt-4 sm:mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2 sm:px-0 font-medium">
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
                    <div className="flex bg-gray-100/80 backdrop-blur-xl p-1 rounded-full border border-gray-200 shadow-lg">
                        <motion.button
                            onClick={() => setActiveTab("experience")}
                            className={`relative flex items-center gap-2 px-8 py-3 rounded-full transition-all font-semibold text-sm ${
                                activeTab === "experience"
                                    ? "text-white"
                                    : "text-gray-600 hover:text-[#08060d]"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {activeTab === "experience" && (
                                <motion.div
                                    className="absolute inset-0 bg-[#08060d] rounded-full"
                                    layoutId="activeTab"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <Briefcase size={16} className="relative z-10" />
                            <span className="relative z-10">Experience</span>
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab("certifications")}
                            className={`relative flex items-center gap-2 px-8 py-3 rounded-full transition-all font-semibold text-sm ${
                                activeTab === "certifications"
                                    ? "text-white"
                                    : "text-gray-600 hover:text-[#08060d]"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {activeTab === "certifications" && (
                                <motion.div
                                    className="absolute inset-0 bg-[#08060d] rounded-full"
                                    layoutId="activeTab"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <Award size={16} className="relative z-10" />
                            <span className="relative z-10">Certifications</span>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Enhanced Experience Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === "experience" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            ref={containerRef}
                            className="timeline"
                        >
                            {/* Vertical Line */}
                            <div className="timeline-line">
                                <motion.div
                                    className="timeline-progress"
                                    style={{ height: scaleY }}
                                />
                            </div>

                            {experiences.map((exp, index) => {
                                const isLeft = index % 2 === 0;
                                const formattedIndex = String(index + 1).padStart(2, "0");
                                
                                // Split description text into bullet points
                                const bulletPoints = exp.description
                                    .split(". ")
                                    .filter(sentence => sentence.trim().length > 0)
                                    .map(sentence => {
                                        let trimmed = sentence.trim();
                                        if (!trimmed.endsWith(".")) trimmed += ".";
                                        return trimmed;
                                    });

                                return (
                                    <motion.div
                                        key={index}
                                        className={`timeline-item ${isLeft ? "left" : "right"}`}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                                    >
                                        <div className="timeline-dot active" />
                                        <span className="timeline-number">{formattedIndex}</span>
                                        <span className="timeline-date">{exp.date.split(" · ")[0].toUpperCase()}</span>

                                        <div className="timeline-content">
                                            {/* Flex row container for logo + tag & title */}
                                            <div className="flex items-center gap-4 mb-4 text-left w-full justify-start">
                                                {exp.images && (
                                                    <img
                                                        src={exp.images}
                                                        alt={exp.title}
                                                        className="company-logo mb-0"
                                                    />
                                                )}
                                                <div>
                                                    <span className="project-tag inline-block mb-1">{exp.title.split(" - ")[1]}</span>
                                                    <h3 className="text-lg md:text-xl font-extrabold text-[#08060d] mb-0 leading-tight">
                                                        {exp.title.split(" - ")[0]}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Bullet Points */}
                                            <ul className="w-full mb-3">
                                                {bulletPoints.map((bullet, idx) => (
                                                    <li key={idx} className="text-sm">{bullet}</li>
                                                ))}
                                            </ul>

                                            {/* Document Link */}
                                            {exp.documentLink && (
                                                <div className="mb-3 text-left">
                                                    <button
                                                        onClick={() => setZoomImage(exp.documentLink)}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 text-[#08060d] text-xs font-bold rounded-lg shadow-sm hover:bg-gray-100 hover:scale-102 active:scale-98 transition-all cursor-pointer"
                                                    >
                                                        <ZoomIn size={13} />
                                                        {exp.documentLabel}
                                                    </button>
                                                </div>
                                            )}

                                            {/* Skills Gained Section */}
                                            {exp.learned && (
                                                <div className="mt-3 pt-3 border-t border-gray-100 w-full">
                                                    <div className="flex flex-wrap justify-start gap-1.5">
                                                        {exp.learned.split(', ').map((skill, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-700 text-[10px] sm:text-xs font-semibold rounded-md"
                                                            >
                                                                {skill.trim()}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
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
                            className="relative bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden"
                        >
                            {/* Navigation Arrows */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 flex justify-between pointer-events-none">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCertDirection(-1);
                                        setCurrentCert((prev) => (prev - 1 + certifications.length) % certifications.length);
                                    }}
                                    className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full border border-gray-100 bg-white/90 backdrop-blur-md text-gray-800 shadow-lg cursor-pointer transition-all hover:bg-gray-800 hover:text-white hover:scale-105 active:scale-95"
                                >
                                    <ChevronLeft size={22} />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCertDirection(1);
                                        setCurrentCert((prev) => (prev + 1) % certifications.length);
                                    }}
                                    className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full border border-gray-100 bg-white/90 backdrop-blur-md text-gray-800 shadow-lg cursor-pointer transition-all hover:bg-gray-800 hover:text-white hover:scale-105 active:scale-95"
                                >
                                    <ChevronRight size={22} />
                                </button>
                            </div>

                            {/* Carousel Content */}
                            <div className="px-6 md:px-12 py-4">
                                <AnimatePresence mode="wait" custom={certDirection}>
                                    <motion.div
                                        key={currentCert}
                                        custom={certDirection}
                                        variants={{
                                            enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
                                            center: { x: 0, opacity: 1 },
                                            exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 })
                                        }}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
                                    >
                                        {/* Certificate Image Frame */}
                                        <div className="w-full md:w-[45%] flex justify-center">
                                            <div 
                                                onClick={() => setZoomImage(certifications[currentCert].image)}
                                                className="relative group bg-gray-50/50 p-4 rounded-2xl shadow-inner border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-gray-200 cursor-pointer overflow-hidden max-w-sm md:max-w-none w-full"
                                            >
                                                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white flex items-center justify-center border border-gray-100">
                                                    <img
                                                        src={certifications[currentCert].image}
                                                        alt={certifications[currentCert].title}
                                                        className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-102"
                                                    />
                                                </div>
                                                
                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                    <span className="flex items-center gap-2 bg-white text-gray-900 font-bold px-4 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                        <ZoomIn size={14} /> View Full Certificate
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Certificate Info Details */}
                                        <div className="w-full md:w-[55%] text-left">
                                            <div className="flex items-center gap-3 mb-5">
                                                <img 
                                                    src={certifications[currentCert].logo} 
                                                    alt="Issuer Logo" 
                                                    className="w-11 h-11 object-contain bg-white p-1.5 rounded-xl border border-gray-100 shadow-sm"
                                                    onError={(e) => { e.target.style.display = "none"; }}
                                                />
                                                <span className="text-base md:text-lg font-bold text-gray-500 tracking-wide uppercase">
                                                    {certifications[currentCert].issued_by}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#08060d] mb-3 leading-tight">
                                                {certifications[currentCert].title}
                                            </h3>
                                            
                                            <div className="inline-block px-3.5 py-1 bg-gray-100 shadow-sm text-gray-800 text-xs font-bold rounded-md mb-5 border border-gray-200 uppercase tracking-wider">
                                                {certifications[currentCert].date}
                                            </div>
                                            
                                            <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base md:max-w-xl">
                                                {certifications[currentCert].desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Indicators Navigation Dots */}
                            <div className="flex gap-2.5 justify-center mt-10">
                                {certifications.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setCertDirection(i > currentCert ? 1 : -1);
                                            setCurrentCert(i);
                                        }}
                                        className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border-0 p-0 cursor-pointer ${
                                            i === currentCert 
                                                ? "bg-gray-800 scale-110 w-7" 
                                                : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Certificate Zoom Lightbox Modal */}
            <AnimatePresence>
                {zoomImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setZoomImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl max-h-[85vh] w-full bg-white rounded-2xl p-2 shadow-2xl border border-white/20 cursor-default overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setZoomImage(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-gray-900/70 hover:bg-gray-900 text-white rounded-full transition-colors cursor-pointer border-0 flex items-center justify-center"
                            >
                                <X size={20} />
                            </button>

                            <div className="w-full h-full flex items-center justify-center p-2">
                                <img
                                    src={zoomImage}
                                    alt="Expanded Certificate"
                                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-inner"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Experience;