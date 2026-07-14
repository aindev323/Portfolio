import { useEffect, useState, useRef } from "react";
import "./Nav.scss";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "skills", "portfolio", "contact"];
  const sectionNames = {
    home: "HOME",
    skills: "EXPERTISE",
    portfolio: "WORKS",
    contact: "CONTACT"
  };
  const isMovingRef = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (isMovingRef.current) return;
      const currentScroll = window.scrollY;
      if (currentScroll <= 10) {
        setActiveSection("home");
        return;
      }

      const isBottom = window.innerHeight + currentScroll >= document.documentElement.scrollHeight - 50;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = currentScroll + window.innerHeight / 3;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const move = (id) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;
    isMovingRef.current = true;
    setActiveSection(id);
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      const basePadding = -100; 
      const targetOffsetTop = targetElement.offsetTop - basePadding;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    }
    setTimeout(() => {
      isMovingRef.current = false;
    }, 500);
  };

  return (
    <nav className="dot-nav">
      {sections.map((id) => (
        <button
          key={id}
          className={`dot-btn ${activeSection === id ? "active" : ""}`}
          onClick={() => move(id)}
          aria-label={`Go to ${id}`}>
          <span className="dot-tooltip">
            {sectionNames[id]}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Nav;