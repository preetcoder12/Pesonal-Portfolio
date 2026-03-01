import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    const socialLinks = [
        { name: "Personal Hub", icon: FaGithub, url: "https://github.com/preetcoder12", color: "hover:text-blue-400" },
        { name: "Github Org", icon: FaGithub, url: "https://github.com/preetgusain", color: "hover:text-fuchsia-400" },
        { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/preet-gusain-986b022a5/", color: "hover:text-blue-600" },
        { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/preet_gusain200_?utm_source=qr&igsh=MXhmenR4ZXgwc2xvbA==", color: "hover:text-pink-500" },
        { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/@preetgusain", color: "hover:text-red-500" },
    ];

    return (
        <footer className="relative text-white py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800/50">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent"></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
                    {/* Logo and Copyright */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="heroSection"
                            smooth={true}
                            duration={500}
                            className="font-bold text-xl sm:text-2xl md:text-3xl orbitron bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer block mb-2"
                        >
                            Preet Gusain
                        </Link>
                        <p className="text-gray-400 text-xs sm:text-sm">
                            © 2025 Preet's Personal Portfolio. All rights reserved.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.nav
                        className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Link
                            to="aboutSection"
                            smooth={true}
                            duration={500}
                            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                            About
                        </Link>
                        <Link
                            to="projectsSkillsSection"
                            smooth={true}
                            duration={500}
                            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                            Projects
                        </Link>
                        <Link
                            to="experienceSection"
                            smooth={true}
                            duration={500}
                            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                            Experience
                        </Link>
                        <Link
                            to="contactSection"
                            smooth={true}
                            duration={500}
                            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                            Contact
                        </Link>
                    </motion.nav>

                    {/* Social Media Links */}
                    <motion.div
                        className="flex gap-3 sm:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2.5 sm:p-3 text-lg sm:text-xl text-gray-400 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 ${social.color} hover:border-blue-500/50 hover:bg-gray-800/80`}
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.name}
                            >
                                <social.icon />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom border */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800/50 text-center">
                    <p className="text-gray-500 text-xs">
                        Built with React, Tailwind CSS, and Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
