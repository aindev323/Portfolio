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
        <button onClick={() => move("home")}>홈</button>
        <button onClick={() => move("skills")}>핵심 역량</button>
        <button onClick={() => move("portfolio")}>프로젝트</button>
      </nav>
    </header>
  );
};

export default Nav;