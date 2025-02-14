import { InView } from 'react-intersection-observer';

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

    return (
        <div className="m flex flex-col justify-center items-center py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="w-full max-w-6xl text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 orbitron">
                    Skills <span className="text-blue-500">Set</span>
                </h2>
                <hr className="w-24 md:w-32 lg:w-40 border-t-4 border-blue-500 mx-auto mb-8 md:mb-12" />
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full px-4">
                {languages.map((lang) => (
                    <InView key={lang.id} triggerOnce={true} threshold={0.5}>
                        {({ inView, ref }) => (
                            <div
                                ref={ref}
                                className={`bg-gray-900 bg-opacity-40 border border-gray-700 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-opacity-60 
                                  ${inView ? 'animate-slide-left' : ''}`}
                            >
                                <img
                                    src={lang.img}
                                    alt={lang.title}
                                    className="w-16 h-16 object-contain drop-shadow-xl transition-transform duration-300 hover:scale-110 hover:drop-shadow-2xl"
                                />
                                <h1 className="text-lg md:text-xl font-semibold text-white mt-3">
                                    {lang.title}
                                </h1>
                            </div>
                        )}
                    </InView>
                ))}
            </div>
        </div>
    );
};

export default Skills;
