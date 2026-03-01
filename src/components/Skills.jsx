import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const languages = [
        { id: "1", img: "/tailwind.png", title: "TailWind" },
        { id: "2", img: "/css.png", title: "CSS" },
        { id: "3", img: "/js.png", title: "JavaScript" },
        { id: "4", img: "/cpp.png", title: "C++" },
        { id: "5", img: "/atom.png", title: "React JS" },
        { id: "6", img: "/expressjs.png", title: "Express JS" },
        { id: "7", img: "/server.png", title: "MongoDB" },
        { id: "8", img: "/nodejs.png", title: "Node JS" },
        { id: "9", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg", title: "Nextjs" },
        { id: "10", img: "https://cdn.worldvectorlogo.com/logos/python-5.svg", title: "Python" },
        { id: "11", img: "/mllogo.jpg", title: "ML" },
        { id: "12", img: "/netwrokinglogo.png", title: "Networking" },
        { id: "13", img: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg", title: "Linux" },
        { id: "14", img: "/terminal_logo.svg", title: "Terminal" },
        { id: "15", img: "https://cdn.worldvectorlogo.com/logos/docker.svg", title: "Docker" }
    ];

    const marqueeRef = useRef(null);
    const animationRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (marqueeRef.current) {
            const animation = marqueeRef.current.animate(
                [
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-50%)' }
                ],
                {
                    duration: 40000,
                    iterations: Infinity,
                    easing: 'linear'
                }
            );
            animationRef.current = animation;
        }
    }, []);

    useEffect(() => {
        if (animationRef.current) {
            // Smoothly transition the playback rate
            // 1.0 is normal, 0.3 is ~3x slower
            animationRef.current.playbackRate = isHovered ? 0.3 : 1.0;
        }
    }, [isHovered]);

    return (
        <section id="skillsSection" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/20 filter blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-500/20 filter blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative z-10 w-full mx-auto">
                <motion.div
                    className="text-center mb-12 sm:mb-16 lg:mb-20 px-4"
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
                        <span className="text-blue-400 text-xs sm:text-sm font-medium">Technologies</span>
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 orbitron tracking-tight">
                        <span className="text-white">Skills </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Set</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
                        <div className="h-1 w-16 sm:w-24 bg-blue-500 rounded-full"></div>
                        <div className="h-1 w-12 sm:w-16 bg-gradient-to-l from-transparent to-blue-500"></div>
                    </div>
                </motion.div>

                {/* Marquee Section with Faded Edges */}
                <div
                    className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-8"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        ref={marqueeRef}
                        className="flex w-max"
                    >
                        {/* Quadruple the items to ensure seamless infinite looping */}
                        {[...languages, ...languages, ...languages, ...languages].map((lang, index) => (
                            <div
                                key={`${lang.id}-${index}`}
                                className="px-3 sm:px-4 flex-shrink-0"
                            >
                                <div className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 w-36 sm:w-44 lg:w-48">
                                    {/* Animated gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                                    <div className="relative z-10 p-6 flex flex-col items-center">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 p-3 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-xl group-hover:shadow-blue-500/30 group-hover:border-blue-500/50 transition-all duration-300">
                                            <img
                                                src={lang.img}
                                                alt={lang.title}
                                                className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors text-center whitespace-normal text-wrap">
                                            {lang.title}
                                        </h3>
                                        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;