import { useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJs, FaServer, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
    const [activeTab, setActiveTab] = useState("apps");

    // Apps Section
    const apps = [
        {
            id: 1,
            name: "VoiceToNotes",
            logo: "/vtnlogonew.webp",
            description: "Turn fleeting thoughts into lasting text with Voice To Notes, a live transcription app built for creators and teams. Capture, edit, and share ideas instantly on the go.",
            link: "https://play.google.com/store/apps/details?id=ai.voicetonotes.mobileapp&hl=en_US",
            category: "Mobile App"
        },
        {
            id: 2,
            name: "Traverse VPN",
            logo: "/vpnlogo.png",
            description: "Stay secure online with Traverse VPN, a fast and reliable VPN powered by a custom protocol on top of WireGuard. It ensures your privacy and data are always protected without slowing you down.",
            link: "https://apps.apple.com/in/app/traversevpn-ai-app-with-vpn/id6754161193",
            category: "Security App"
        },
        {
            id: 3,
            name: "Qyuro.Sity",
            logo: "/Qyuro_sity.webp",
            description: "Qyuro is an all-in-one AI assistant built to handle everything in one place, from everyday questions to creative and productivity tasks. Simple, fast, and designed to adapt to how you think and work.",
            link: "https://play.google.com/store/apps/details?id=ai.web3task.qyuro&hl=en_IN",
            category: "AI Assistant"
        },
        {
            id: 4,
            name: "GetMyLikes",
            logo: "/gmllogo.jpg",
            description: "The world's most trusted SMM panel. Scale your social media presence with high-retention followers, likes, and views using our fast and risk-free platform.",
            link: "https://getmylikes.com/",
            category: "SMM Panel"
        }
    ];

    // Websites Section
    const websitess = [
        {
            id: 1,
            name: "TalesFM",
            image: "/talesfmlanding.png",
            description: "Your Free Online Radio FM. Reimagined. A premier internet radio platform with no hidden costs, no interruptions, just pure audio.",
            link: "https://talesfm.com/"
        },
        {
            id: 2,
            name: "Traverse VPN",
            image: "/traversevpnlanding.png",
            description: "Strong security, seamless privacy. A fast and reliable VPN service with a custom protocol ensuring your privacy and data protection.",
            link: "https://TraverseVpn.com"
        },
        {
            id: 3,
            name: "VoiceToNotes",
            image: "/voicetonoteslanding.png",
            description: "Capture. Transcribe. Anytime. Never let a brilliant idea slip away. Precision Voice to Notes technology that turns speech into accurate, formatted text.",
            link: "https://voicetonotes.ai"
        },
        {
            id: 4,
            name: "Web3Task",
            image: "/web3tasklanding.png",
            description: "Innovate for the future. We help startups scale with strong SaaS, conversion-ready dashboards, and integrated tech, AI, design, and automation solutions.",
            link: "https://web3task.com/"
        }
    ];

    // Webapps Section
    const webApps = [
        {
            id: 1,
            name: "Socibuy",
            image: "/socibuywebsite.png",
            description: "A powerful e-commerce solution for social media. Seamlessly integrate your shop with social platforms to reach more customers and boost sales.",
            link: "https://socibuy.com/"
        },
        {
            id: 2,
            name: "YouTube Adwords",
            image: "/youtubeadwords.png",
            description: "Dominate YouTube with expert ad campaigns. Tailored video marketing strategies to grow your channel and maximize ROI through targeted advertising.",
            link: "https://youtubeadwords.com/"
        },
        {
            id: 3,
            name: "Getviralux",
            image: "/getviralux.png",
            description: "Unlock the secret to viral growth. High-impact marketing services designed to make your brand go viral and build a massive online presence.",
            link: "https://getviralux.com/"
        },
        {
            id: 4,
            name: "GetMyLikes",
            image: "/getmylikes.png",
            description: "The world's most trusted SMM panel. Scale your social media presence with high-retention followers, likes, and views using our fast and risk-free platform.",
            link: "https://getmylikes.com/"
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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

    // Carousel scroll functions
    const scrollLeft = (containerId) => {
        const container = document.getElementById(containerId);
        if (container) {
            const cardWidth = container.querySelector('.flex-shrink-0')?.offsetWidth || 600;
            container.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
        }
    };

    const scrollRight = (containerId) => {
        const container = document.getElementById(containerId);
        if (container) {
            const cardWidth = container.querySelector('.flex-shrink-0')?.offsetWidth || 600;
            container.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        }
    };

    return (
        <section id="projectsSkillsSection" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Enhanced Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0xNnYxaC0ydi0xaC0ydjFoLTJ2LTFoLTJ2MWgtMnYtMWgtMnYxaC0ydi0xaC00djFoLTJ2LTFIMTh2MWgtMnYtMWgtMnYxaC0ydi0xaC0ydjFIOHYtMUg2djFoLTJ2LTFoLTJ2MWgtMnYtMUgwdjNjMCAxMC41IDcuMiAxOSAxNyAxOS4xVjIwaDZ2MTkuMkMyMy41IDM5LjkgMjkuNSA0MCAzMC44IDQwaDE3LjRjMS4yIDAgNS4zLTAuMSA4LjctMC44di0yLjVjLTAuOSAwLjItMS42IDAuNC0yLjYgMC41LS43IDAuMS0xLjMgMC4xLTIuMSAwLjJsLTQuMiAwLjNjLTAuNyAwLTEuNiAwLjItMi40IDAuMi0wLjcgMC0xLjYgMC0yLjMtMC4xbC0zLjEtMC4zYy0wLjcgMC0xLjYtMC4yLTIuNC0wLjMtMC45LTAuMS0xLjgtMC4yLTIuNS0wLjRsLTMuNi0wLjhWMzZoLTR2LTFoNHYtMWgtNHYtMWg0di0xaC00di0xaDR2LTFoLTR2LTFoNHYtMWgtNHYtMWg0di0xaC00di0xaDR2LTFoLTR2LTFoNHYtMWgtNHYtMWg0di0xaC00di0xaDR2LTJoLTR2LTFoNHYtMWgtNHYtMWg0di0xaC00di0xaDR2LTFoLTR2LTFoLTJ2LTFoLTJ2LTFoLTJ2LTFoLTJ2LTFoLTJ2LTFoLTJ2LTFIMzhWMTBoLTJ2LTFoLTJ2LTFoLTJWN2gtMlY2aC0yVjVoLTJWNGgtMlYzaC0yVjJoLTJWMWgtMlYwaC0yYzAtMC43LTAuMS0xLjMtMC4yLTJIMjB2Mmg0djFoLTIydjFoLTJ2MWgtMnYxaC0ydjFoLTJ2MWgtMnYxaC0ydjFoLTJ2MWgtMnYxaC0ydjFoLTIydi0yaC0ydjQ2YzAgOC4zIDYuNyAxNSAxNSAxNWg0M2MyLjcgMCA1LjQtMC41IDgtMS4yVjQwSDQwSDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full overflow-x-hidden">
                <motion.div
                    className="text-center mb-8 sm:mb-12"
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
                        <span className="text-blue-400 text-xs sm:text-sm font-medium">My Work</span>
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 orbitron">
                        <span className="text-white">My </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Projects</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                        <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
                        <div className="h-1 w-16 sm:w-24 bg-blue-500 rounded-full"></div>
                        <div className="h-1 w-12 sm:w-16 bg-gradient-to-l from-transparent to-blue-500"></div>
                    </div>
                </motion.div>

                {/* Toggle Button */}
                <motion.div
                    className="flex justify-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex bg-gray-800/50 backdrop-blur-xl p-1 sm:p-1.5 rounded-full border border-gray-700/50 shadow-2xl">
                        <motion.button
                            onClick={() => setActiveTab("apps")}
                            className={`relative flex items-center gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base font-semibold ${activeTab === "apps"
                                ? "text-white"
                                : "text-gray-400 hover:text-white"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeTab === "apps" && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                                    layoutId="activeTab"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Apps</span>
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab("websitess")}
                            className={`relative flex items-center gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base font-semibold ${activeTab === "websitess"
                                ? "text-white"
                                : "text-gray-400 hover:text-white"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeTab === "websitess" && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                                    layoutId="activeTab"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Websites</span>
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab("webApps")}
                            className={`relative flex items-center gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base font-semibold ${activeTab === "webApps"
                                ? "text-white"
                                : "text-gray-400 hover:text-white"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeTab === "webApps" && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                                    layoutId="activeTab"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Webapps</span>
                        </motion.button>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {activeTab === "apps" ? (
                        <motion.div
                            key="apps"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            {/* Navigation Arrows */}
                            <button
                                onClick={() => scrollLeft('apps-carousel')}
                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 hover:border-blue-500/50 transition-all shadow-2xl"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                            <button
                                onClick={() => scrollRight('apps-carousel')}
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 hover:border-blue-500/50 transition-all shadow-2xl"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>

                            {/* Carousel Container */}
                            <div
                                id="apps-carousel"
                                className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 sm:px-4 md:px-6 snap-x snap-mandatory"
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                    WebkitOverflowScrolling: 'touch',
                                }}
                            >
                                {apps.map((app) => (
                                    <motion.div
                                        key={app.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-[400px] lg:w-[450px] group snap-center"
                                        whileHover={{ y: -10 }}
                                    >
                                        <div className="h-full bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl transition-all duration-500 hover:shadow-blue-500/30 hover:border-blue-500/50 relative">
                                            {/* Glow effect on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

                                            {/* Logo Section */}
                                            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
                                                <div className="flex items-center justify-center h-24 sm:h-32">
                                                    <motion.img
                                                        src={app.logo}
                                                        alt={app.name}
                                                        className="max-h-20 sm:max-h-24 max-w-20 sm:max-w-24 object-contain filter drop-shadow-2xl"
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </div>
                                                {app.comingSoon && (
                                                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                                                        <span className="text-yellow-400 text-xs font-medium">Coming Soon</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="p-4 sm:p-6 relative z-10">
                                                <div className="mb-2">
                                                    <span className="text-xs text-blue-400 font-medium">{app.category}</span>
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                                                    {app.name}
                                                </h3>
                                                <p className="text-gray-300 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-xs sm:text-sm">
                                                    {app.description}
                                                </p>

                                                <div className="flex justify-between items-center flex-wrap gap-2">
                                                    {app.link !== "#" ? (
                                                        <motion.a
                                                            href={app.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all text-xs sm:text-sm"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <FaExternalLinkAlt className="text-xs sm:text-sm" />
                                                            <span className="font-medium">Download</span>
                                                        </motion.a>
                                                    ) : (
                                                        <div className="px-3 sm:px-4 py-1.5 sm:py-2 text-gray-500 text-xs sm:text-sm">
                                                            Coming Soon
                                                        </div>
                                                    )}

                                                    <motion.div
                                                        className="relative overflow-hidden rounded-full bg-gray-700/50 h-2 w-12 sm:w-16 hidden sm:block"
                                                        initial={{ width: 0 }}
                                                        whileHover={{ width: 64 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <style>{`
                                #apps-carousel::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                        </motion.div>
                    ) : activeTab === "websitess" ? (
                        <motion.div
                            key="websitess"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            {/* Navigation Arrows */}
                            <button
                                onClick={() => scrollLeft('websites-carousel')}
                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 hover:border-blue-500/50 transition-all shadow-2xl"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                            <button
                                onClick={() => scrollRight('websites-carousel')}
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 hover:border-blue-500/50 transition-all shadow-2xl"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>

                            {/* Carousel Container */}
                            <div
                                id="websites-carousel"
                                className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 sm:px-4 md:px-6 snap-x snap-mandatory"
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                    WebkitOverflowScrolling: 'touch',
                                }}
                            >
                                {websitess.map((page) => (
                                    <motion.div
                                        key={page.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-[600px] lg:w-[700px] group snap-center"
                                        whileHover={{ y: -10 }}
                                    >
                                        <div className="h-full bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl transition-all duration-500 hover:shadow-blue-500/30 hover:border-blue-500/50 relative">
                                            {/* Glow effect on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

                                            {/* Landing Page Image */}
                                            <div className="relative overflow-hidden">
                                                <motion.img
                                                    src={page.image}
                                                    alt={page.name}
                                                    className="w-full h-auto object-cover"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                            </div>

                                            <div className="p-4 sm:p-6 relative z-10">
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                                                    {page.name}
                                                </h3>
                                                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                                                    {page.description}
                                                </p>

                                                <div className="flex justify-between items-center flex-wrap gap-2">
                                                    {page.link !== "#" ? (
                                                        <motion.a
                                                            href={page.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all text-xs sm:text-sm"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <FaExternalLinkAlt className="text-xs sm:text-sm" />
                                                            <span className="font-medium">Visit</span>
                                                        </motion.a>
                                                    ) : (
                                                        <div className="px-3 sm:px-4 py-1.5 sm:py-2 text-gray-500 text-xs sm:text-sm">
                                                            Coming Soon
                                                        </div>
                                                    )}

                                                    <motion.div
                                                        className="relative overflow-hidden rounded-full bg-gray-700/50 h-2 w-12 sm:w-16 hidden sm:block"
                                                        initial={{ width: 0 }}
                                                        whileHover={{ width: 64 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Custom Scrollbar Styling */}
                            <style>{`
                                #websites-carousel::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="webApps"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            {/* Navigation Arrows */}
                            <button
                                onClick={() => scrollLeft('webapps-carousel')}
                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 hover:border-blue-500/50 transition-all shadow-2xl"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                            <button
                                onClick={() => scrollRight('webapps-carousel')}
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 hover:border-blue-500/50 transition-all shadow-2xl"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>

                            {/* Carousel Container */}
                            <div
                                id="webapps-carousel"
                                className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 sm:px-4 md:px-6 snap-x snap-mandatory"
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                    WebkitOverflowScrolling: 'touch',
                                }}
                            >
                                {webApps.map((app) => (
                                    <motion.div
                                        key={app.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-[600px] lg:w-[700px] group snap-center"
                                        whileHover={{ y: -10 }}
                                    >
                                        <div className="h-full bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl transition-all duration-500 hover:shadow-blue-500/30 hover:border-blue-500/50 relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

                                            <div className="relative overflow-hidden">
                                                <motion.img
                                                    src={app.image}
                                                    alt={app.name}
                                                    className="w-full h-auto object-cover"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                            </div>

                                            <div className="p-4 sm:p-6 relative z-10">
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                                                    {app.name}
                                                </h3>
                                                <p className="text-gray-300 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-xs sm:text-sm">
                                                    {app.description}
                                                </p>

                                                <div className="flex justify-between items-center flex-wrap gap-2">
                                                    <motion.a
                                                        href={app.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all text-xs sm:text-sm"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <FaExternalLinkAlt className="text-xs sm:text-sm" />
                                                        <span className="font-medium">Visit</span>
                                                    </motion.a>

                                                    <motion.div
                                                        className="relative overflow-hidden rounded-full bg-gray-700/50 h-2 w-12 sm:w-16 hidden sm:block"
                                                        initial={{ width: 0 }}
                                                        whileHover={{ width: 64 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Custom Scrollbar Styling */}
                            <style>{`
                                #webapps-carousel::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
