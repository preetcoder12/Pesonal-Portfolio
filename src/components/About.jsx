import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const boxVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        },
        hover: { 
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { type: "spring", stiffness: 300 }
        }
    };

    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-24 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-6 orbitron inline-block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        About<span className="text-blue-500">Me</span>
                    </h2>
                    <div className="flex justify-center items-center">
                        <hr className="w-16 border-t-4 border-blue-500 mx-2" />
                        <span className="text-gray-500 dark:text-gray-400 mx-2">What I Do</span>
                        <hr className="w-16 border-t-4 border-blue-500 mx-2" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Full Stack Developer Box */}
                    <motion.div 
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-8 relative overflow-hidden group"
                        variants={boxVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
                        <div className="flex justify-between items-center border-b pb-4 border-gray-200 dark:border-gray-700">
                            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 tracking-wide">01</h3>
                            <motion.div 
                                whileHover={{ x: 10 }}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mt-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Full Stack Developer</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                            Passionate MERN Developer skilled in <span className="font-semibold text-blue-500">React</span>, <span className="font-semibold text-green-500">Node.js</span>,
                            <span className="font-semibold text-yellow-500"> Express</span>, and <span className="font-semibold text-red-500">MongoDB</span>.
                            Builds scalable, user-friendly applications with optimized performance.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {['React', 'Node.js', 'Express', 'MongoDB'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Problem Solver Box */}
                    <motion.div 
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-8 relative overflow-hidden group"
                        variants={boxVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="absolute -right-20 -top-20 w-40 h-40 bg-green-500/10 rounded-full blur-xl group-hover:bg-green-500/20 transition-all duration-700"></div>
                        <div className="flex justify-between items-center border-b pb-4 border-gray-200 dark:border-gray-700">
                            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 tracking-wide">02</h3>
                            <motion.div 
                                whileHover={{ x: 10 }}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mt-6 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Problem Solver</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                            <span className="font-semibold text-green-500">Innovative problem solver</span> with strong analytical skills, breaking down
                            complex challenges into efficient solutions. Passionate about
                            <span className="font-semibold text-green-500"> optimizing algorithms</span> and
                            <span className="font-semibold text-yellow-500"> enhancing system performance</span>.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {['Algorithms', 'Data Structures', 'Optimization', 'System Design'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-sm font-medium rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mindset & Skills Box */}
                    <motion.div 
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-8 relative overflow-hidden group"
                        variants={boxVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="absolute -right-20 -top-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl group-hover:bg-yellow-500/20 transition-all duration-700"></div>
                        <div className="flex justify-between items-center border-b pb-4 border-gray-200 dark:border-gray-700">
                            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 tracking-wide">03</h3>
                            <motion.div 
                                whileHover={{ x: 10 }}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mt-6 text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Mindset & Skills</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                            <span className="font-semibold text-yellow-500">Lifelong learner</span> with a growth mindset, thriving on challenges.
                            Strong <span className="font-semibold text-green-500">team player</span> with excellent problem-solving skills.
                            Passionate about <span className="font-semibold text-yellow-500">delivering high-quality code</span> and learning new technologies.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {['Collaboration', 'Communication', 'Adaptability', 'Growth Mindset'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300 text-sm font-medium rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Featured Projects Box */}
                    <motion.div 
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-8 relative overflow-hidden group"
                        variants={boxVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-700"></div>
                        <div className="flex justify-between items-center border-b pb-4 border-gray-200 dark:border-gray-700">
                            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 tracking-wide">04</h3>
                            <motion.div 
                                whileHover={{ x: 10 }}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mt-6 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Featured Projects</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                            Check out my latest projects:
                        </p>
                        <div className="mt-4 space-y-4">
                            <a href="https://github.com/preetcoder12/Netflix_preet" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/10 rounded-lg group-hover:from-red-100 group-hover:to-red-200 dark:group-hover:from-red-900/30 dark:group-hover:to-red-900/20 transition-all duration-300">
                                <div className="w-10 h-10 flex items-center justify-center bg-red-500 rounded-lg text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="font-semibold text-red-600 dark:text-red-400">Netflix-Clone</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">A full-stack streaming platform</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            
                            <a href="https://github.com/preetcoder12/Load_Mate" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10 rounded-lg group-hover:from-orange-100 group-hover:to-orange-200 dark:group-hover:from-orange-900/30 dark:group-hover:to-orange-900/20 transition-all duration-300">
                                <div className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-lg text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="font-semibold text-orange-600 dark:text-orange-400">TruckByte</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">A Truck management platform</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
                
                {/* CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    
                </motion.div>
            </div>
        </section>
    );
};

export default About;