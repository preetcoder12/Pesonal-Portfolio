    import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJs, FaServer } from "react-icons/fa";

    const Projects_Skills = () => {
        const projects = [
            {
                id: 1,
                name: "Netflix Clone",
                image: "public/netflixpro.png",
                description: "A full-stack streaming platform with user authentication, payment gateway, and a sleek UI inspired by Netflix.",
                skills: [FaReact, FaNodeJs, FaDatabase, FaCss3Alt],
                link: "https://github.com/preetcoder12/Netflix-Clone"
            },
            {
                id: 2,
                name: "Blog-Sphere",
                image: "public/blogpro.png",
                description: "A blogging platform where users can write, edit, and share articles with a built-in commenting system.",
                skills: [FaReact, FaNodeJs, FaDatabase],
                link: "https://github.com/preetcoder12/Blog-Sphere"
            },
            {
                id: 3,
                name: "Chat Application",
                image: "public/chatpro.png",
                description: "A real-time chat app with user authentication and WebSocket integration for instant messaging.",
                skills: [FaHtml5, FaJs, FaServer, FaCss3Alt],
                link: "https://github.com/preetcoder12/Chat_application-login-"
            },
            {
                id: 4,
                name: "RazorPay Clone",
                image: "public/razorpaypro.png",
                description: "A payment gateway clone replicating RazorPay's UI and basic transaction handling for practice.",
                skills: [FaHtml5, FaJs, FaCss3Alt],
                link: "https://github.com/preetcoder12/RazorPay-clone"
            },
            {
                id: 5,
                name: "URL Shortener",
                image: "public/urlshortpro.png",
                description: "A URL shortening service that allows users to generate short links and track click analytics.",
                skills: [FaHtml5, FaJs, FaServer, FaCss3Alt],
                link: "https://github.com/preetcoder12/Url_Shortner"
            },
            {
                id: 6,
                name: "LeetCode-Metrics",
                image: "public/leetcodepro.png",
                description: "A dashboard to track LeetCode problem-solving progress, including streaks and topic-wise stats.",
                skills: [FaHtml5, FaJs, FaCss3Alt],
                link: "https://github.com/preetcoder12/LeetCode-metric"
            }
        ];

        return (
            <div className="text-center  flex flex-col items-center px-8 py-24">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                    My Projects
                </h2>
                <hr className="w-[22em] border-t-4 border-blue-500 mb-12" />
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full max-w-7xl">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-white/10 border border-gray-300 dark:border-gray-700 shadow-lg rounded-2xl p-8 w-full max-w-md 
                            transition-transform transform hover:scale-105 group overflow-hidden hover:shadow-2xl"
                        >
                            <div className="transition-all duration-300 ease-in-out group-hover:opacity-0">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{project.name}</h3>
                                <div className="overflow-hidden rounded-lg">
                                    <img src={project.image}
                                        className="w-full h-64 object-cover mb-6 rounded-lg border-[2px]
                                    border-white shadow-md transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{project.description}</p>
                            </div>
                            <div className="absolute inset-0 flex justify-center items-center bg-black/90 text-white text-5xl opacity-0 
                                    group-hover:opacity-100 transition-all duration-300 rounded-2xl">
                                <div className="flex space-x-8">
                                    {project.skills.map((Icon, index) => (
                                        <Icon key={index} className="hover:text-blue-400 transition duration-200" />
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        );
    };

    export default Projects_Skills;
