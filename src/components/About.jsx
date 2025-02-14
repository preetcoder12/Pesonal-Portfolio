const About = () => {
    return (
        <div className="mx-[4rem] flex justify-center items-center py-24">
            <div className="w-full max-w-5xl text-center">
                <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    About Me
                </h2>
                <hr className="w-40 border-t-4 border-blue-500 mx-auto mb-12" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Full Stack Developer Box */}
                    <div className="bg-white/10 backdrop-blur-md border border-gray-300 dark:border-gray-600 shadow-xl rounded-lg p-8 transition-transform transform hover:scale-110">
                        <div className="flex justify-between items-center border-b pb-4 border-gray-300 dark:border-gray-600">
                            <h1 className="text-4xl font-extrabold text-blue-500 tracking-wide">01</h1>
                            <img src="arrow.jpg" className="w-12 transition-transform transform hover:translate-x-2" alt="Arrow" />
                        </div>
                        <h1 className="text-3xl font-bold mt-6 text-gray-900 dark:text-white">Full Stack Developer</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                            Passionate MERN Developer skilled in <span className="font-semibold text-blue-500">React</span>, <span className="font-semibold text-green-500">Node.js</span>,
                            <span className="font-semibold text-yellow-500"> Express</span>, and <span className="font-semibold text-red-500">MongoDB</span>.
                            Builds scalable, user-friendly applications with optimized performance.
                        </p>
                    </div>

                    {/* Problem Solver Box */}
                    <div className="bg-white/10 backdrop-blur-md border border-gray-300 dark:border-gray-600 shadow-xl rounded-lg p-8 transition-transform transform hover:scale-110">
                        <div className="flex justify-between items-center border-b pb-4 border-gray-300 dark:border-gray-600">
                            <h1 className="text-4xl font-extrabold text-blue-500 tracking-wide">02</h1>
                            <img src="arrow.jpg" className="w-12 transition-transform transform hover:translate-x-2" alt="Arrow" />
                        </div>
                        <h1 className="text-3xl font-bold mt-6 text-gray-900 dark:text-white">Problem Solver</h1>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                            <span className="font-semibold text-blue-500">Innovative problem solver</span> with strong analytical skills, breaking down
                            complex challenges into efficient solutions. Passionate about
                            <span className="font-semibold text-green-500"> optimizing algorithms</span> and
                            <span className="font-semibold text-yellow-500"> enhancing system performance</span>.
                        </p>
                    </div>

                    {/* Mindset & Skills Box */}
                    <div className="bg-white/10 backdrop-blur-md border border-gray-300 dark:border-gray-600 shadow-xl rounded-lg p-8 transition-transform transform hover:scale-110">
                        <div className="flex justify-between items-center border-b pb-4 border-gray-300 dark:border-gray-600">
                            <h1 className="text-4xl font-extrabold text-blue-500 tracking-wide">03</h1>
                            <img src="arrow.jpg" className="w-12 transition-transform transform hover:translate-x-2" alt="Arrow" />
                        </div>
                        <h1 className="text-3xl font-bold mt-6 text-gray-900 dark:text-white">Mindset & Skills</h1>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                            <span className="font-semibold text-blue-500">Lifelong learner</span> with a growth mindset, thriving on challenges.
                            Strong <span className="font-semibold text-green-500">team player</span> with excellent problem-solving skills.
                            Passionate about <span className="font-semibold text-yellow-500">delivering high-quality code</span> and learning new technologies.
                        </p>
                    </div>

                    {/* Featured Projects Box */}
                    <div className="bg-white/10 backdrop-blur-md border border-gray-300 dark:border-gray-600 shadow-xl rounded-lg p-8 transition-transform transform hover:scale-110">
                        <div className="flex justify-between items-center border-b pb-4 border-gray-300 dark:border-gray-600">
                            <h1 className="text-4xl font-extrabold text-blue-500 tracking-wide">04</h1>
                            <img src="arrow.jpg" className="w-12 transition-transform transform hover:translate-x-2" alt="Arrow" />
                        </div>
                        <h1 className="text-3xl font-bold mt-6 text-gray-900 dark:text-white">Featured Projects</h1>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                            Check out my latest projects:
                        </p>
                        <ul className="list-disc pl-6 mt-3 text-gray-600 dark:text-gray-300">
                            <li><a href="https://github.com/preetcoder12/Netflix-Clone" target="_blank" className="text-blue-500 hover:underline"><span className="font-semibold text-red-500">Netflix-Clone</span></a> - A full-stack streaming platform.</li>
                            <li><a href="https://github.com/preetcoder12/Blog-Sphere" target="_blank" className="text-blue-500 hover:underline"><span className="font-semibold text-orange-500">Blog-Sphere</span></a> - A dynamic blogging platform.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
