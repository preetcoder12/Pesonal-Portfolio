import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GlitchText from './GlitchText';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = [
    {
      id: 1,
      name: "VoiceToNotes",
      category: "AI SaaS & Mobile App",
      description: "Turn fleeting thoughts into formatted text with live transcription built for creators.",
      image: "/voicetonoteslanding.png",
      link: "https://voicetonotes.ai",
      bgClass: "bg-gradient-to-br from-[#ffd269]/40 via-[#ff9e7a]/25 to-[#6dbdfa]/20",
    },
    {
      id: 2,
      name: "Traverse VPN",
      category: "Security & Networking",
      description: "Fast, reliable, and secure VPN powered by a custom protocol on top of WireGuard.",
      image: "/traversevpnlanding.png",
      link: "https://traversevpn.com",
      bgClass: "bg-[#5c3df7]",
    },
    {
      id: 3,
      name: "TalesFM",
      category: "Media & Audio Streaming",
      description: "Reimagined online radio streaming platform with seamless audio delivery.",
      image: "/talesfmlanding.png",
      link: "https://talesfm.com",
      bgClass: "bg-[#0b132b]",
    },
    {
      id: 4,
      name: "Web3Task",
      category: "SaaS Dashboard & Services",
      description: "Dashboard and tech scaling solutions for SaaS platforms and startups.",
      image: "/web3tasklanding.png",
      link: "https://web3task.com/",
      bgClass: "bg-gradient-to-tr from-slate-900 via-zinc-800 to-zinc-950",
    },
  ];

  const additionalProjects = [
    {
      id: 5,
      name: "Socibuy",
      category: "E-Commerce & Social Shopping",
      description: "A powerful e-commerce platform integrated with social selling hooks.",
      image: "/socibuywebsite.png",
      link: "https://socibuy.com/",
      bgClass: "bg-gradient-to-tr from-[#ec4899]/20 via-[#f43f5e]/15 to-[#1e1b4b]",
    },
    {
      id: 6,
      name: "GetMyLikes",
      category: "Marketing Platform & SMM",
      description: "The world's most trusted SMM panel scaling social media presence.",
      image: "/getmylikes.png",
      link: "https://getmylikes.com/",
      bgClass: "bg-[#0369a1]",
    },
    {
      id: 7,
      name: "Getviralux",
      category: "Growth & Virality Platform",
      description: "High-impact growth marketing services designed to expand online reach.",
      image: "/getviralux.png",
      link: "https://getviralux.com/",
      bgClass: "bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950",
    },
    {
      id: 8,
      name: "YouTube Adwords",
      category: "Marketing Platform",
      description: "Targeted advertising and channel growth marketing dashboards.",
      image: "/youtubeadwords.png",
      link: "https://youtubeadwords.com/",
      bgClass: "bg-[#991b1b]",
    },
  ];

  const displayProjects = showAll ? [...featuredProjects, ...additionalProjects] : featuredProjects;

  return (
    <section id="projectsSkillsSection" className="bg-[#f5f5f7] py-20 sm:py-28 text-[#08060d] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <h2 className="font-akira font-black text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.9] text-[#08060d] uppercase tracking-[0.02em]">
              <div>
                <GlitchText speed={0.6} enableShadows={true} enableOnHover={true} className="font-akira font-black text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.9] text-[#08060d] uppercase tracking-[0.02em]">
                  Featured
                </GlitchText>
              </div>
              <div>
                <GlitchText speed={0.6} enableShadows={true} enableOnHover={true} className="font-akira font-black text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.9] text-[#08060d] uppercase tracking-[0.02em]">
                  Projects
                </GlitchText>
              </div>
            </h2>
          </div>
          <div>
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 sm:px-8 py-3.5 border border-[#08060d]/15 rounded-full flex items-center gap-3 hover:bg-[#08060d] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {showAll ? "Show Less" : "View All Work"}
              <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {displayProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block no-underline"
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Card Visual Container */}
              <div className={`w-full aspect-[4/3] rounded-[32px] overflow-hidden flex items-center justify-center p-6 sm:p-10 transition-all duration-500 ease-out shadow-sm group-hover:shadow-2xl ${project.bgClass}`}>
                <div className="w-full relative overflow-hidden rounded-2xl shadow-[0_24px_50px_-12px_rgba(0,0,0,0.35)] border border-black/5 bg-white">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto block object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Card Text Info */}
              <div className="flex justify-between items-start mt-6 px-2">
                <div>
                  <h3 className="font-akira font-black text-lg sm:text-xl text-[#08060d] uppercase tracking-wide">
                    <GlitchText speed={0.8} enableShadows={true} enableOnHover={true} className="font-akira font-black text-lg sm:text-xl text-[#08060d] uppercase tracking-wide">
                      {project.name}
                    </GlitchText>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-black/50 font-medium tracking-wide mt-1.5 uppercase">
                    {project.category}
                  </p>
                  <p className="font-sans text-sm text-[#08060d]/70 leading-relaxed mt-3 max-w-xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 border border-[#08060d]/10 rounded-full flex items-center justify-center text-[#08060d] group-hover:bg-[#08060d] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
