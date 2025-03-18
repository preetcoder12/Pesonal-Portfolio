import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Award, Briefcase } from "lucide-react";

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
            title: "Frontend Developer - Prodigy Infotech",
            images: "prodigy.png",
            date: "Jan 2024 - Feb 2024",
            description: "Built scalable UI with React & Tailwind, integrated REST APIs, and optimized performance.",
            learned: "Learned React, API integration, and UI performance optimization with Tailwind CSS."
        },
        {
            title: "Campus Ambassador - International Model United Nations Association",
            images: "imunalogo.jpg",
            date: "Jun 2024 - Aug 2024",
            description: "Promoted IMUNA conferences, engaged students, and strengthened leadership and event management skills.",
            learned: "Improved Leadership, Communication, and Event Management skills."
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
    ];

    return (
        <div className="py-24 text-white bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="w-full max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white orbitron">
                        Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Journey</span>
                    </h2>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        Explore my professional experiences and achievements that have shaped my career path
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-6"></div>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-gray-800 p-1 rounded-full border border-gray-700 shadow-lg">
                        <button
                            onClick={() => setActiveTab("experience")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                                activeTab === "experience"
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            <Briefcase size={18} />
                            <span className="font-medium">Experience</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("certifications")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                                activeTab === "certifications"
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            <Award size={18} />
                            <span className="font-medium">Certifications</span>
                        </button>
                    </div>
                </div>

                {/* Experience Tab Content */}
                <div className={`transition-all duration-500 ${activeTab === "experience" ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                    <div className="grid md:grid-cols-2 gap-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-blue-900/20 hover:shadow-2xl"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 p-2 bg-gray-700 rounded-xl shadow-inner">
                                        <img
                                            src={exp.images}
                                            alt={exp.title}
                                            className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white">
                                            {exp.title}
                                        </h3>
                                        <div className="mt-1 px-3 py-1 bg-blue-900/30 rounded-full inline-block text-blue-300 text-sm font-medium">
                                            {exp.date}
                                        </div>
                                        <p className="text-md text-gray-300 mt-3 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <div className="mt-4 pt-3 border-t border-gray-700">
                                            <p className="text-sm font-medium flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 bg-amber-400 rounded-full"></span>
                                                <span className="text-amber-400">Skills Gained:</span> {exp.learned}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Tab Content */}
                <div className={`transition-all duration-500 ${activeTab === "certifications" ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                    <div className="relative bg-gray-800 bg-opacity-50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-xl">
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
                                            <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition-all flex items-center gap-2">
                                                View Certificate
                                                <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;