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
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-500 filter blur-3xl"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 orbitron tracking-tight">
                        Skills <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Set</span>
                    </h2>
                    <div className="flex items-center justify-center">
                        <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                        <div className="h-1 w-24 mx-2 bg-blue-500 rounded-full"></div>
                        <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
                        Technologies and frameworks I specialize in
                    </p>
                </div>

                <InView threshold={0.1} triggerOnce>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            variants={container}
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
                        >
                            {languages.map((lang) => (
                                <motion.div
                                    key={lang.id}
                                    variants={item}
                                    className="group relative bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative z-10 p-6 flex flex-col items-center">
                                        <div className="w-20 h-20 flex items-center justify-center mb-4 p-4 bg-gray-900/50 rounded-full border border-gray-700 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 group-hover:scale-110">
                                            <img
                                                src={lang.img}
                                                alt={lang.title}
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <h3 className="text-xl font-medium text-white">
                                            {lang.title}
                                        </h3>
                                        <div className="mt-2 h-1 w-12 bg-blue-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
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