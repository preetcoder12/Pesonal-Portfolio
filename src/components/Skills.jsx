import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Skills = () => {
    const languages = [
        { id: "1", img: "tailwind.png", title: "TailWind" },
        { id: "2", img: "css.png", title: "CSS" },
        { id: "3", img: "js.png", title: "JavaScript" },
        { id: "4", img: "cpp.png", title: "C++" },
        { id: "5", img: "atom.png", title: "React JS" },
        { id: "6", img: "expressjs.png", title: "Express JS" },
        { id: "7", img: "server.png", title: "MongoDB" },
        { id: "8", img: "nodejs.png", title: "Node JS" }
    ];

    // Card variants for staggered animation
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section id="skillsSection" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Enhanced Background elements */}
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

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
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
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2 sm:px-0">
                        Technologies and frameworks I specialize in
                    </p>
                </motion.div>

                <InView threshold={0.1} triggerOnce>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            variants={container}
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
                        >
                            {languages.map((lang) => (
                                <motion.div
                                    key={lang.id}
                                    variants={item}
                                    className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                                    whileHover={{ y: -10, scale: 1.05 }}
                                >
                                    {/* Animated gradient overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        animate={{
                                            backgroundPosition: ["0% 0%", "100% 100%"],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                    />
                                    
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                                    
                                    <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col items-center">
                                        <motion.div
                                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-xl group-hover:shadow-blue-500/30 group-hover:border-blue-500/50 transition-all duration-300"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <img
                                                src={lang.img}
                                                alt={lang.title}
                                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                                            />
                                        </motion.div>
                                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors text-center">
                                            {lang.title}
                                        </h3>
                                        <motion.div
                                            className="h-1 w-12 sm:w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </InView>
            </div>
        </section>
    );
};

export default Skills;