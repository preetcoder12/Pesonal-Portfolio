import { motion } from 'framer-motion';

const Skills = () => {
    const categorizedSkills = [
        {
            label: "Frontend",
            items: [
                { name: "React JS", code: "RE", img: "/atom.png" },
                { name: "Nextjs", code: "NX", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg", iconClass: "is-inverted" },
                { name: "JavaScript", code: "JS", img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
                { name: "TailWind", code: "TW", img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
                { name: "CSS", code: "CS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" }
            ]
        },
        {
            label: "Backend",
            items: [
                { name: "Python", code: "PY", img: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
                { name: "Node JS", code: "ND", img: "/nodejs.png" },
                { name: "Express JS", code: "EX", img: "https://cdn.worldvectorlogo.com/logos/express-109.svg", iconClass: "is-inverted" },
                { name: "MongoDB", code: "DB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" }
            ]
        },
        {
            label: "Mobile",
            items: [
                { name: "iOS", code: "IO", img: "https://cdn.worldvectorlogo.com/logos/apple-1.svg", iconClass: "is-inverted" },
                { name: "Android", code: "AD", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" }
            ]
        },
        {
            label: "Systems & AI",
            items: [
                { name: "C++", code: "CP", img: "/cpp.png" },
                { name: "ML", code: "ML", img: "/mllogo.jpg" }
            ]
        },
        {
            label: "Platforms",
            items: [
                { name: "Docker", code: "DK", img: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
                { name: "Linux", code: "LX", img: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg", iconClass: "is-inverted" },
                { name: "Ubuntu", code: "UB", img: "https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg" },
                { name: "Terminal", code: "TM", img: "/terminal_logo.svg", iconClass: "is-inverted" },
                { name: "GitHub", code: "GH", img: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", iconClass: "is-inverted" },
                { name: "Networking", code: "NW", img: "/netwrokinglogo.png" }
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