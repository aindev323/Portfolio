import { useEffect, useState } from "react";
import "./Nav.scss";

const sections = [
  "home",
  "skills",
  "portfolio",
  "contact",
];
const sectionNames = {
  home: "HOME",
  skills: "EXPERTISE",
  portfolio: "WORKS",
  contact: "CONTACT",
};
const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 80);
      const currentPosition = scrollY + window.innerHeight / 3;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if(!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if(
          currentPosition >= top &&
          currentPosition < top + height
        ){
          setActiveSection(id);
        }
      });
    };
    window.addEventListener(
      "scroll",
      handleScroll
    );
    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const move = (id) => {
    const target =
      document.getElementById(id);
    if(!target) return;
    setActiveSection(id);
    window.scrollTo({
      top: id === "home" ? 0 : target.offsetTop,
      behavior: "smooth",
    });
  };
  return(
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <ul>
        {sections.map((id) => (
          <li key={id}>
            <button className={activeSection === id ? "active" : ""} onClick={() => move(id)}>
              {sectionNames[id]}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;