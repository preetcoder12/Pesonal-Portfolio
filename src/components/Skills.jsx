import { motion } from 'framer-motion';

const Skills = () => {
    const categorizedSkills = [
        {
            label: "Networking & CCNA",
            items: [
                { name: "Routers & Switches", code: "RS", img: "/netwrokinglogo.png" },
                { name: "CCNA Protocols", code: "CC", img: "/server.png" },
                { name: "TCP/IP & DNS", code: "IP" },
                { name: "Firewall & ASA FW", code: "FW" },
                { name: "WebSockets & Sockets", code: "WS" },
                { name: "GNS3 & Packet Tracer", code: "PT" }
            ]
        },
        {
            label: "VPN & Tunneling",
            items: [
                { name: "WireGuard", code: "WG", img: "/vpnlogo.png" },
                { name: "OpenVPN", code: "OV" },
                { name: "NetworkExtension (Packet Tunnel)", code: "NE" },
                { name: "Split Tunneling & Kill Switch", code: "KS" },
                { name: "Handshake & Key Exchange", code: "KX" }
            ]
        },
        {
            label: "Systems & Mobile",
            items: [
                { name: "Swift & SwiftUI (MVVM)", code: "SW", img: "https://cdn.worldvectorlogo.com/logos/apple-1.svg", iconClass: "is-inverted" },
                { name: "Kotlin (Android)", code: "KT", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
                { name: "Java & UIAutomator2", code: "JV" },
                { name: "C++", code: "CP", img: "/cpp.png" }
            ]
        },
        {
            label: "Backend & Infra",
            items: [
                { name: "Node JS", code: "ND", img: "/nodejs.png" },
                { name: "Express JS", code: "EX", img: "https://cdn.worldvectorlogo.com/logos/express-109.svg", iconClass: "is-inverted" },
                { name: "REST APIs", code: "AP" },
                { name: "MongoDB & PostgreSQL", code: "DB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
                { name: "Docker", code: "DK", img: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
                { name: "VPS & CI/CD (GitHub Actions)", code: "CI", img: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", iconClass: "is-inverted" }
            ]
        },
        {
            label: "Security",
            items: [
                { name: "Encrypted Storage (Keychain)", code: "ES" },
                { name: "JWT & OAuth", code: "AU" },
                { name: "RBAC", code: "RB" },
                { name: "Secure Sessions & TLS", code: "SS" }
            ]
        },
        {
            label: "Frontend",
            items: [
                { name: "React JS", code: "RE", img: "/atom.png" },
                { name: "Nextjs", code: "NX", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg", iconClass: "is-inverted" },
                { name: "JavaScript", code: "JS", img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
                { name: "TailWind", code: "TW", img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" }
            ]
        }
    ];

    const splitTitle = (title) => {
        return Array.from(title).map((char, index) => {
            if (char === " ") {
                return (
                    <span
                        key={index}
                        className="skills-title-char is-space"
                        style={{ "--char-index": index }}
                        aria-hidden="true"
                    >
                        &nbsp;
                    </span>
                );
            }
            return (
                <span
                    key={index}
                    className="skills-title-char"
                    style={{ "--char-index": index }}
                    aria-hidden="true"
                >
                    <span className="skills-title-char-clip">
                        <span className="skills-title-char-inner">
                            <span>{char}</span>
                            <span>{char}</span>
                        </span>
                    </span>
                </span>
            );
        });
    };

    return (
        <section id="skillsSection">
            <div className="section-shell">
                <h2 className="skills-title" aria-label="Tech Stack">
                    {splitTitle("TECH STACK")}
                </h2>

                <div className="skills-groups">
                    {categorizedSkills.map((group) => (
                        <article className="skills-group" key={group.label}>
                            <motion.p 
                                className="skills-nav-label"
                                initial={{ opacity: 0, y: 34 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {group.label}
                            </motion.p>
                            
                            <motion.div 
                                className="skills-list"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.05 } }
                                }}
                            >
                                {group.items.map((item) => (
                                    <motion.div 
                                        key={item.name} 
                                        className="skill-row"
                                        variants={{
                                            hidden: { opacity: 0, y: 34 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        {item.img ? (
                                            <img 
                                                className={`skill-icon skill-icon-image${item.iconClass ? ` ${item.iconClass}` : ''}`}
                                                src={item.img}
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <span className="skill-icon" aria-hidden="true">
                                                {item.code}
                                            </span>
                                        )}
                                        <span className="skill-name">{item.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;