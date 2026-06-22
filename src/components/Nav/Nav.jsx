import { useEffect, useState } from "react";
import "./Nav.scss";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);
  const move = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <nav>
        <button onClick={() => move("home")}>Home</button>
        <button onClick={() => move("about")}>About Me</button>
        <button onClick={() => move("skills")}>Skills</button>
        <button onClick={() => move("portfolio")}>Work</button>
        <button onClick={() => move("contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Nav;