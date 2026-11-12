import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("heroSection");
  const [dotOffset, setDotOffset] = useState(12); // Default vertical offset for active dot
  const linkRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = [
        "heroSection",
        "aboutSection",
        "projectsSkillsSection",
        "skillsSection",
        "experienceSection",
        "contactSection",
      ];
      const scrollPosition = window.scrollY + 250;

      let currentSection = "heroSection";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sections[i];
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update dot position when activeSection changes or drawer opens
  useEffect(() => {
    const activeLink = linkRefs.current[activeSection];
    if (activeLink) {
      // Calculate center of the link minus half of the dot's size (10px / 2 = 5)
      const offset = activeLink.offsetTop + activeLink.offsetHeight / 2 - 5;
      setDotOffset(offset);
    }
  }, [activeSection, isOpen]);

  const navLinks = [
    { to: "heroSection", label: "Home" },
    { to: "aboutSection", label: "About" },
    { to: "projectsSkillsSection", label: "Projects" },
    { to: "skillsSection", label: "Skills" },
    { to: "experienceSection", label: "Experience" },
    { to: "contactSection", label: "Contact" },
  ];

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Smooth scroll to the target section
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isHeroActive = activeSection === "heroSection";

  return (
    <>
      <header className="site-nav">
        <button
          type="button"
          className={`site-nav-toggle${isOpen ? " is-open" : ""}`}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="site-nav-drawer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={isOpen ? "is-on-light" : "is-on-dark"} />
          <span className={isOpen ? "is-on-light" : "is-on-dark"} />
          <span className={isOpen ? "is-on-light" : "is-on-dark"} />
        </button>
      </header>

      {/* Overlay click away to close */}
      <div
        className={`site-nav-overlay${isOpen ? " is-open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        id="site-nav-drawer"
        className={`site-nav-drawer${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="site-nav-panel">
          <nav className="site-nav-section" aria-label="Primary">
            <p className="site-nav-section-title">Navigation</p>
            {/* Active Dot indicator */}
            <span
              className="site-nav-active-dot"
              aria-hidden="true"
              style={{ transform: `translateY(${dotOffset}px)` }}
            />
            {navLinks.map((link) => {
              const isActive = activeSection === link.to;
              return (
                <a
                  key={link.to}
                  href={`#${link.to}`}
                  onClick={(e) => handleLinkClick(e, link.to)}
                  className={`site-nav-link ${isActive ? "is-active is-indicator-target" : ""}`}
                  ref={(el) => (linkRefs.current[link.to] = el)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="flex flex-col gap-3 items-start">
            <p className="site-nav-section-title">Socials</p>
            <div className="site-nav-socials">
              <a
                href="https://www.linkedin.com/in/preet-gusain"
                target="_blank"
                rel="noreferrer"
                className="contact-side-button"
              >
                <FaLinkedin className="contact-side-icon text-xl" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/preetcoder12"
                target="_blank"
                rel="noreferrer"
                className="contact-side-button"
              >
                <FaGithub className="contact-side-icon text-xl" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:preetgusain84@gmail.com"
                className="contact-side-button"
              >
                <FaEnvelope className="contact-side-icon text-xl" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
