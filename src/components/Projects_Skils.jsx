import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, Mic, Shield, Radio,
  LayoutDashboard, ShoppingBag, Heart, TrendingUp, Youtube,
} from "lucide-react";
import GlitchText from "./GlitchText";

const PROJECTS = [
  { id:1, name:"VoiceToNotes",    category:"AI SaaS & Mobile App",         icon:Mic,           link:"https://voicetonotes.ai",     image:"/voicetonoteslanding.png", language:"Python & TypeScript",  libraries:"OpenAI Whisper API, FastAPI, React Native", approach:"Direct Transcription & AI Formatting",    s1n:"10,000+", s1l:"Notes Processed",  s2n:"99.2%",   s2l:"Accuracy Rate",     description:"Turn fleeting thoughts into formatted text with live transcription built for creators." },
  { id:2, name:"Traverse VPN",    category:"Security & Networking",        icon:Shield,        link:"https://traversevpn.com",     image:"/traversevpnlanding.png",  language:"Kotlin & Swift",       libraries:"WireGuard SDK, Go-tun2socks, Node.js",      approach:"Secure Custom Tunneling",                 s1n:"50,000+", s1l:"App Downloads",    s2n:"15+",     s2l:"Global Locations",  description:"Fast, reliable, and secure VPN powered by a custom protocol on top of WireGuard." },
  { id:3, name:"TalesFM",         category:"Media & Audio Streaming",      icon:Radio,         link:"https://talesfm.com",         image:"/talesfmlanding.png",      language:"TypeScript",           libraries:"Next.js, HLS.js, AWS CloudFront",           approach:"Adaptive Bitrate Streaming",              s1n:"1,200+",  s1l:"Daily Listeners",  s2n:"320kbps", s2l:"Audio Bitrate",     description:"Reimagined online radio streaming platform with seamless audio delivery." },
  { id:4, name:"Web3Task",        category:"SaaS Dashboard & Services",    icon:LayoutDashboard,logo:"/web3task_logo.jpeg",        link:"https://web3task.com/",     image:"/web3tasklanding.png",    language:"React & Node.js",      libraries:"Zustand, TailwindCSS, Express.js",          approach:"Conversion-ready SaaS Scaling",           s1n:"15+",     s1l:"Startups Scaled",  s2n:"40%",     s2l:"Conversion Lift",   description:"Dashboard and tech scaling solutions for SaaS platforms and startups." },
  { id:5, name:"Socibuy",         category:"E-Commerce & Social Shopping", icon:ShoppingBag,   link:"https://socibuy.com/",        image:"/socibuywebsite.png",      language:"React & PHP",          libraries:"Next.js, WooCommerce REST API, MySQL",      approach:"Social Viral Loops",                      s1n:"2,500+",  s1l:"Products Sold",    s2n:"3.4x",    s2l:"ROI Increase",      description:"A powerful e-commerce platform integrated with social selling hooks." },
  { id:6, name:"GetMyLikes",      category:"Marketing Platform & SMM",     icon:Heart,         link:"https://getmylikes.com/",     image:"/getmylikes.png",          language:"PHP & Laravel",        libraries:"Redis, Node.js WebSocket, TailwindCSS",     approach:"Automated API Dispatching",               s1n:"1.2M+",   s1l:"Orders Completed", s2n:"100%",    s2l:"API Uptime",        description:"The world's most trusted SMM panel scaling social media presence." },
  { id:7, name:"Getviralux",      category:"Growth & Virality Platform",   icon:TrendingUp,    link:"https://getviralux.com/",     image:"/getviralux.png",          language:"TypeScript",           libraries:"Next.js, TailwindCSS, Framer Motion",       approach:"Interactive Funnel Optimization",         s1n:"100k+",   s1l:"Leads Generated",  s2n:"4.8/5",   s2l:"Client Rating",     description:"High-impact growth marketing services designed to expand online reach." },
  { id:8, name:"YouTube Adwords", category:"Marketing Platform",           icon:Youtube,       link:"https://youtubeadwords.com/", image:"/youtubeadwords.png",      language:"Python & React",       libraries:"Google Ads API, Flask, PostgreSQL",         approach:"Ad Bid Automation",                       s1n:"500k+",   s1l:"Ad Spend Managed", s2n:"10x",     s2l:"Growth Accelerator",description:"Targeted advertising and channel growth marketing dashboards." },
];

// scroll pixels consumed per project transition
const PX_PER_SLIDE = 550;

export default function ProjectsSkils() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile ? <MobileList /> : <DesktopPinned />;
}

/* ═══════════════════════════════════════════════════
   DESKTOP — Native Pinned Scroll Layout
══════════════════════════════════════════════════════ */
function DesktopPinned() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState("down");
  const prevIdx = useRef(0);

  const handleScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    
    const rect = el.getBoundingClientRect();
    const scrolled = -rect.top; // pixels scrolled past viewport top
    const totalScroll = PX_PER_SLIDE * (PROJECTS.length - 1);
    const clamped = Math.max(0, Math.min(scrolled, totalScroll));
    
    // map scroll distance to active index
    const idx = Math.min(PROJECTS.length - 1, Math.floor(clamped / PX_PER_SLIDE));
    
    if (idx !== prevIdx.current) {
      setDir(idx > prevIdx.current ? "down" : "up");
      prevIdx.current = idx;
      setActive(idx);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const p = PROJECTS[active];
  const Icon = p.icon;

  const sectionHeight = `calc(100vh + ${PX_PER_SLIDE * (PROJECTS.length - 1)}px)`;

  return (
    <section
      ref={sectionRef}
      id="projectsSkillsSection"
      style={{
        position: "relative",
        height: sectionHeight,
        background: "#000",
      }}
    >
      {/* Pinned Viewport Container */}
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0 60px",
        boxSizing: "border-box",
        background: "#000",
        overflow: "hidden",
      }}>
        {/* Content Wrapper */}
        <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(2.2rem,5vw,4.5rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", fontFamily: "'Orbitron',sans-serif", lineHeight: 1, margin: 0 }}>
              <GlitchText enableShadows enableOnHover speed={0.6} className="text-white">Projects</GlitchText>
            </h2>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
                exit={{ opacity: 0, y: -12, transition: { duration: 0.18 } }}
                style={{ fontSize: "clamp(3rem,8vw,7rem)", fontWeight: 900, color: "transparent", fontFamily: "'Orbitron',sans-serif", lineHeight: 1, userSelect: "none", WebkitTextStroke: "2px rgba(122,162,255,0.5)" }}
              >
                {String(active + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Body Columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 390px", gap: 52, alignItems: "start" }}>

            {/* Left Column (Details) */}
            <div style={{ position: "relative", height: 400, overflow: "hidden" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: dir === "down" ? 30 : -30 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                  exit={{ opacity: 0, y: dir === "down" ? -30 : 30, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
                  style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    {p.logo
                      ? <img src={p.logo} alt="" style={{ width: 38, height: 38, objectFit: "contain", background: "#fff", borderRadius: 9, padding: 3 }} onError={e => e.target.style.display = "none"} />
                      : <Icon size={34} color="#7aa2ff" />}
                    <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.5rem,2.8vw,2.1rem)", lineHeight: 1.1, textTransform: "uppercase", margin: 0 }}>{p.name}</h3>
                  </div>

                  <p style={{ color: "#7aa2ff", fontWeight: 700, fontSize: "0.86rem", marginBottom: 14, letterSpacing: "0.05em" }}>{p.category}</p>

                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.65, maxWidth: 480, marginBottom: 20 }}>{p.description}</p>

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: 20 }}>
                    {[["Language", p.language], ["Libraries", p.libraries], ["Approach", p.approach]].map(([k, v], i, arr) => (
                      <div key={k} style={{ display: "grid", gridTemplateColumns: "130px 1fr", padding: "10px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>{k}</span>
                        <span style={{ color: "#f0efeb", fontSize: "0.86rem" }}>{v}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                    {[[p.s1n, p.s1l], [p.s2n, p.s2l]].map(([n, l]) => (
                      <div key={l}>
                        <div style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.3rem,2.4vw,1.75rem)", fontFamily: "'Orbitron',sans-serif", lineHeight: 1 }}>{n}</div>
                        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 5, fontWeight: 800 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column (Image Preview) */}
            <div style={{ position: "relative", width: 390, height: 390, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 56px rgba(0,0,0,0.65)", flexShrink: 0, background: "#0a0c10" }}>
              <AnimatePresence mode="wait">
                <motion.a
                  key={active}
                  href={p.link} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: dir === "down" ? "100%" : "-100%" }}
                  animate={{ opacity: 1, y: "0%", transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } }}
                  exit={{ opacity: 0, y: dir === "down" ? "-100%" : "100%", transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } }}
                  style={{ position: "absolute", inset: 0, display: "block", background: "#0a0c10" }}
                >
                  <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block" }} onError={e => { e.target.parentElement.style.background = "#0d1117"; e.target.style.display = "none"; }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }} onMouseEnter={e => e.currentTarget.style.opacity = "1"} onMouseLeave={e => e.currentTarget.style.opacity = "0"}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6, background: "#fff", color: "#000", fontWeight: 800, fontSize: "0.75rem", padding: "9px 20px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Visit Site <ArrowUpRight size={13} />
                    </span>
                  </div>
                </motion.a>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Progress indicators */}
        <div style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 7 }}>
          {PROJECTS.map((_, i) => (
            <div
              key={i}
              onClick={() => {
                const el = sectionRef.current;
                if (!el) return;
                const targetScrollY = el.offsetTop + (i * PX_PER_SLIDE);
                window.scrollTo({ top: targetScrollY, behavior: "smooth" });
              }}
              style={{ width: i === active ? 8 : 5, height: i === active ? 8 : 5, borderRadius: "50%", background: i === active ? "#7aa2ff" : "rgba(255,255,255,0.2)", transition: "all 0.3s", cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   MOBILE — vertical card list
═══════════════════════════════════════════ */
function MobileList() {
  return (
    <section id="projectsSkillsSection" style={{ background: "#000", padding: "70px 20px" }}>
      <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff", textTransform: "uppercase", fontFamily: "'Orbitron',sans-serif", marginBottom: "2.5rem" }}>
        <GlitchText enableShadows enableOnHover speed={0.6} className="text-white">Projects</GlitchText>
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {PROJECTS.map(p => {
          const Icon = p.icon;
          return (
            <motion.div key={p.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, overflow: "hidden", background: "#0a0a0a" }}>
              <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", aspectRatio: "16/9", overflow: "hidden", background: "#0a0c10" }}>
                <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }} onError={e => { e.target.parentElement.style.background = "#0d1117"; e.target.style.display = "none"; }} />
              </a>
              <div style={{ padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
                  {p.logo ? <img src={p.logo} alt="" style={{ width: 30, height: 30, objectFit: "contain", borderRadius: 7, background: "#fff", padding: 2 }} onError={e => e.target.style.display = "none"} /> : <Icon size={26} color="#7aa2ff" />}
                  <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.25rem", textTransform: "uppercase", margin: 0 }}>{p.name}</h3>
                </div>
                <p style={{ color: "#7aa2ff", fontSize: "0.8rem", fontWeight: 700, marginBottom: 10 }}>{p.category}</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 14 }}>{p.description}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "10px 0", marginBottom: 14, display: "flex", flexDirection: "column", gap: 7 }}>
                  {[["Language", p.language], ["Libraries", p.libraries], ["Approach", p.approach]].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 10, fontSize: "0.74rem" }}>
                      <span style={{ color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 800, flexShrink: 0 }}>{k}</span>
                      <span style={{ color: "#fff", textAlign: "right" }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: 24 }}>
                    {[[p.s1n, p.s1l], [p.s2n, p.s2l]].map(([n, l]) => (
                      <div key={l}>
                        <div style={{ color: "#fff", fontWeight: 900, fontSize: "1rem" }}>{n}</div>
                        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.58rem", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 2 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 15px", background: "#7aa2ff", color: "#000", fontWeight: 800, fontSize: "0.7rem", borderRadius: 999, textDecoration: "none", textTransform: "uppercase" }}>
                    Visit <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
