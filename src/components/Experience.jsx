import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experience = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
        }
    ];

    return (
        <div className="py-24 text-white">
            <div className="w-full max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white orbitron mb-6">
                    Experience & <span className="text-blue-500">Certifications</span>
                </h2>
                <hr className="w-24 md:w-32 lg:w-40 border-t-4 border-blue-500 mx-auto mb-12" />

                <div className="flex flex-col md:flex-row gap-12">

                    {/* Experience Section */}
                    <div className="w-full md:w-1/2">
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-700 border border-gray-500 rounded-xl shadow-xl p-6 flex gap-4 items-center transition-all duration-300 hover:scale-105 hover:bg-gray-600"
                                >
                                    <img
                                        src={exp.images}
                                        alt={exp.title}
                                        className="w-20 h-20 object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold text-white " style={{ fontFamily: "Roboto " }}>
                                            {exp.title}
                                        </h3>
                                        <p className="text-sm text-gray-300">{exp.date}</p>
                                        <p className="text-md text-gray-200 mt-2">
                                            {exp.description}
                                        </p>
                                        <p className="text-sm italic text-amber-400 mt-1">
                                            {exp.learned}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="w-full md:w-1/2 mt-[4rem]">
                        <Slider {...settings}>
                            {certifications.map((cer, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-700 border border-gray-500 rounded-xl shadow-xl p-6 transition-all duration-300 hover:scale-105 hover:bg-gray-600"
                                >
                                    <img
                                        src={cer.image}
                                        alt={cer.title}
                                        className="w-32 h-32 mx-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                                    />
                                    <h3 className="text-2xl font-bold text-amber-400 mt-4">{cer.title}</h3>
                                    <p className="text-sm text-gray-300 mt-2">{cer.date}</p>
                                    <p className="text-lg text-gray-200 mt-2">{cer.desc}</p>
                                    <div className="flex justify-center items-center gap-2 mt-2">
                                        <p className="text-lg text-white">{cer.issued_by}</p>
                                        <img src={cer.logo} alt="Issuer Logo" className="w-12 h-12 object-contain" />
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
