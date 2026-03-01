import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Lightbulb, Rocket, TrendingUp, Users, Award, Target, Layers, GitBranch } from 'lucide-react';

const About = () => {
    const boxVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        hover: {
            scale: 1.03,
            y: -8,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    const stats = [
        { icon: Code, value: "30+", label: "Projects Built", color: "blue" },
        { icon: TrendingUp, value: "240+", label: "DSA Problems", color: "green" },
        { icon: Layers, value: "25+", label: "Technologies Used", color: "yellow" },
        { icon: GitBranch, value: "1000+", label: "GitHub Commits", color: "purple" },
        { icon: Zap, value: "1000+", label: "Last Year Contributions", color: "pink" },
        { icon: Award, value: "3+", label: "Hackathons", color: "blue" },
    ];

    return (
        <section id="aboutSection" className="bg-gradient-to-br from-black via-gray-900 to-black py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
            {/* Enhanced Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, -60, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-pink-500/5 blur-3xl"
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <motion.div
                        className="inline-block mb-4 sm:mb-6 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-wide">WHO I AM</span>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 lg:mb-8 orbitron leading-tight">
                        <span className="text-white">About</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"> Me</span>
                    </h2>
                    <div className="flex justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                        <div className="h-1 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                        <div className="h-1 w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                        <div className="h-1 w-12 sm:w-16 lg:w-20 bg-gradient-to-l from-transparent via-blue-500 to-transparent"></div>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                        Aspiring Full Stack Developer with strong skills in <span className="text-blue-400 font-semibold">C++, Python, and JavaScript</span>.
                        Building scalable, creative solutions with hands-on experience in <span className="text-purple-400 font-semibold">web development, machine learning, and cloud technologies</span>.
                        Currently pursuing B.Tech in CSIT at Dronacharya Group of Institutions with 7.5 CGPA.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center overflow-hidden"
                            whileHover={{ y: -5, scale: 1.05 }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/0 via-${stat.color}-500/10 to-${stat.color}-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                            <div className="relative z-10">
                                <motion.div
                                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 border border-${stat.color}-500/30 mb-3 sm:mb-4`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <stat.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-${stat.color}-400`} />
                                </motion.div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {/* Full Stack Developer */}
                    <motion.div
                        className="group relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 overflow-hidden shadow-2xl"
                        variants={boxVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div
                            className="absolute -right-24 -top-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-center border-b pb-4 sm:pb-5 border-gray-700/50 mb-4 sm:mb-6">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <motion.div
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/30 border border-blue-500/40 flex items-center justify-center"
                                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400" />
                                    </motion.div>
                                    <div>
                                        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">01</span>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Expertise</p>
                                    </div>
                                </div>
                                <motion.div
                                    whileHover={{ x: 8, rotate: 45 }}
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.div>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white group-hover:text-blue-400 transition-colors">
                                Full Stack Developer
                            </h3>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                                Crafting end-to-end digital experiences with the <span className="font-semibold text-blue-400">MERN stack</span> and modern frameworks.
                                I build robust, scalable applications using <span className="font-semibold text-green-400">React, Next.js, Node.js, Express</span>,
                                and <span className="font-semibold text-yellow-400">MongoDB</span>, delivering seamless user experiences from concept to deployment.
                            </p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Socket.io', 'REST APIs'].map((skill, idx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium rounded-full backdrop-blur-sm"
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Problem Solver */}
                    <motion.div
                        className="group relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl"
                        variants={boxVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div
                            className="absolute -right-24 -top-24 w-48 h-48 bg-green-500/20 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-center border-b pb-4 sm:pb-5 border-gray-700/50 mb-4 sm:mb-6">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <motion.div
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500/30 to-green-600/30 border border-green-500/40 flex items-center justify-center"
                                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-400" />
                                    </motion.div>
                                    <div>
                                        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">02</span>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Approach</p>
                                    </div>
                                </div>
                                <motion.div
                                    whileHover={{ x: 8, rotate: 45 }}
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.div>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white group-hover:text-green-400 transition-colors">
                                Problem Solver
                            </h3>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                                Transforming complex challenges into <span className="font-semibold text-green-400">elegant solutions</span>.
                                Strong foundation in <span className="font-semibold text-blue-400">C++ and Python</span>, with expertise in
                                <span className="font-semibold text-yellow-400"> Data Structures, Algorithms, and OOP</span>.
                                I excel at breaking down intricate problems, analyzing system architectures, and implementing optimized solutions.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['C++', 'Python', 'Algorithms', 'Data Structures', 'OOP', 'System Design', 'Optimization'].map((skill, idx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-300 text-sm font-medium rounded-full backdrop-blur-sm"
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Innovation & Growth */}
                    <motion.div
                        className="group relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl"
                        variants={boxVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div
                            className="absolute -right-24 -top-24 w-48 h-48 bg-yellow-500/20 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-center border-b pb-4 sm:pb-5 border-gray-700/50 mb-4 sm:mb-6">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <motion.div
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 border border-yellow-500/40 flex items-center justify-center"
                                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400" />
                                    </motion.div>
                                    <div>
                                        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">03</span>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Mindset</p>
                                    </div>
                                </div>
                                <motion.div
                                    whileHover={{ x: 8, rotate: 45 }}
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.div>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white group-hover:text-yellow-400 transition-colors">
                                Innovation & Growth
                            </h3>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                                A <span className="font-semibold text-yellow-400">lifelong learner</span> with expertise in <span className="font-semibold text-purple-400">Machine Learning and Data Analytics</span>.
                                Team Leader in multiple hackathons (IDE Bootcamp 2025, Codethon, SiH Hackathon 2025).
                                I thrive in collaborative environments, bringing <span className="font-semibold text-green-400">creative solutions</span> to the table
                                while continuously expanding my skill set with cloud technologies and AI.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['Machine Learning', 'Data Analytics', 'Azure Cloud', 'Team Leadership', 'Continuous Learning', 'Adaptability'].map((skill, idx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm font-medium rounded-full backdrop-blur-sm"
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(234, 179, 8, 0.2)" }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Impact & Achievements */}
                    <motion.div
                        className="group relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl"
                        variants={boxVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div
                            className="absolute -right-24 -top-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-center border-b pb-4 sm:pb-5 border-gray-700/50 mb-4 sm:mb-6">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <motion.div
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/30 border border-purple-500/40 flex items-center justify-center"
                                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400" />
                                    </motion.div>
                                    <div>
                                        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">04</span>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Impact</p>
                                    </div>
                                </div>
                                <motion.div
                                    whileHover={{ x: 8, rotate: 45 }}
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.div>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white group-hover:text-purple-400 transition-colors">
                                Impact & Achievements
                            </h3>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                                Building products that make a difference. From <span className="font-semibold text-purple-400">disaster alert systems (GeoAlert)</span>
                                to <span className="font-semibold text-blue-400">logistics management platforms (TruckByte)</span>, I create solutions that scale.
                                Hackathon finalist and team leader, with projects leveraging <span className="font-semibold text-green-400">real-time technologies</span>
                                like WebSockets and geofencing.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['Product Development', 'Hackathon Winner', 'Real-time Systems', 'Geofencing', 'WebSockets', 'Team Leadership'].map((skill, idx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium rounded-full backdrop-blur-sm"
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-xl">
                        <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Ready to Build Something Amazing?
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            Let's collaborate to turn your vision into reality. I'm always excited to work on innovative projects
                            that push boundaries and create meaningful impact.
                        </p>
                        <motion.a
                            href="#contactSection"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Get In Touch</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
