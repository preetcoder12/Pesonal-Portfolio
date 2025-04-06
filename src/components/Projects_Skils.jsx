import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJs, FaServer, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Geo Alert",
            image: "geoalert.png",
            description: "A full-stack global disaster alert platform that provides real-time location-based notifications, user authentication, and an interactive map interface for emergencies worldwide.",
            skills: [FaReact, FaNodeJs, FaDatabase, FaCss3Alt],
            link: "https://github.com/preetcoder12/GeoAlert"

        },
        {
            id: 2,
            name: "TruckByte",
            image: "truckbyte.png",
            description: "A trucking management platform enabling users to track, assign, and manage trucks with a built-in role-based system.",
            skills: [FaReact, FaNodeJs, FaDatabase, FaCss3Alt],
            link: "https://github.com/preetcoder12/Load_Mate"
        },
        {

            id: 3,
            name: "Netflix Clone",
            image: "netflixpro.png",
            description: "A full-stack streaming platform with user authentication, payment gateway, and a sleek UI inspired by Netflix.",
            skills: [FaReact, FaNodeJs, FaDatabase, FaCss3Alt],
            link: "https://github.com/preetcoder12/Netflix_preet"
        },
        {
            id: 4,
            name: "AI Imagen",
            image: "text_2_img.png",
            description: "AI Imagen is an API-powered tool that generates images from text descriptions using AI.",
            skills: [FaReact, FaNodeJs, FaDatabase, FaCss3Alt],
            link: "https://github.com/preetcoder12/RazorPay-clone"
        },
        {
            id: 5,
            name: "Blog-Sphere",
            image: "blogpro.png",
            description: "A blogging platform where users can write, edit, and share articles with a built-in commenting system.",
            skills: [FaReact, FaNodeJs, FaDatabase],
            link: "https://github.com/preetcoder12/Blog-Sphere"
        },
        {
            id: 6,
            name: "Chat Application",
            image: "chatpro.png",
            description: "A real-time chat app with user authentication and WebSocket integration for instant messaging.",
            skills: [FaHtml5, FaJs, FaServer, FaCss3Alt],
            link: "https://github.com/preetcoder12/Chat_application-login-"
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const projectVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.8,
                bounce: 0.4
            }
        }
    };

    return (
        <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0xNnYxaC0ydi0xaC0ydjFoLTJ2LTFoLTJ2MWgtMnYtMWgtMnYxaC0ydi0xaC00djFoLTJ2LTFIMTh2MWgtMnYtMWgtMnYxaC0ydi0xaC0ydjFIOHYtMUg2djFoLTJ2LTFoLTJ2MWgtMnYtMUgwdjNjMCAxMC41IDcuMiAxOSAxNyAxOS4xVjIwaDZ2MTkuMkMyMy41IDM5LjkgMjkuNSA0MCAzMC44IDQwaDE3LjRjMS4yIDAgNS4zLTAuMSA4LjctMC44di0yLjVjLTAuOSAwLjItMS42IDAuNC0yLjYgMC41LS43IDAuMS0xLjMgMC4xLTIuMSAwLjJsLTQuMiAwLjNjLTAuNyAwLTEuNiAwLjItMi40IDAuMi0wLjcgMC0xLjYgMC0yLjMtMC4xbC0zLjEtMC4zYy0wLjcgMC0xLjYtMC4yLTIuNC0wLjMtMC45LTAuMS0xLjgtMC4yLTIuNS0wLjRsLTMuNi0wLjhWMzZoLTR2LTFoNHYtMWgtNHYtMWg0di0xaC00di0xaDR2LTFoLTR2LTFoNHYtMWgtNHYtMWg0di0xaC00di0xaDR2LTFoLTR2LTFoNHYtMWgtNHYtMWg0di0xaC00di0xaDR2LTJoLTR2LTFoNHYtMWgtNHYtMWg0di0xaC00di0xaDR2LTFoLTR2LTFoLTJ2LTFoLTJ2LTFoLTJ2LTFoLTJ2LTFoLTJ2LTFoLTJ2LTFIMzhWMTBoLTJ2LTFoLTJ2LTFoLTJWN2gtMlY2aC0yVjVoLTJWNGgtMlYzaC0yVjJoLTJWMWgtMlYwaC0yYzAtMC43LTAuMS0xLjMtMC4yLTJIMjB2Mmg0djFoLTIydjFoLTJ2MWgtMnYxaC0ydjFoLTJ2MWgtMnYxaC0ydjFoLTJ2MWgtMnYxaC0ydjFoLTIydi0yaC0ydjQ2YzAgOC4zIDYuNyAxNSAxNSAxNWg0M2MyLjcgMCA1LjQtMC41IDgtMS4yVjQwSDQwSDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 orbitron">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Projects</span>
                    </h2>
                    <div className="flex items-center justify-center mb-8">
                        <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                        <div className="h-1 w-24 mx-2 bg-blue-500 rounded-full"></div>
                        <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        A showcase of my web development journey and technical expertise
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={projectVariants}
                            className="group"
                        >
                            <div className="h-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-xl transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-500/30">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-52 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center justify-center space-x-4">
                                            {project.skills.map((Icon, index) => (
                                                <div key={index} className="bg-gray-900/80 p-2 rounded-full">
                                                    <Icon className="text-2xl text-blue-400" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                                    <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>

                                    <div className="flex justify-between items-center">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <FaGithub className="text-lg" />
                                            <span>View Code</span>
                                        </a>

                                        <div className="relative overflow-hidden rounded-full">
                                            <div className="h-1 w-12 bg-blue-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;