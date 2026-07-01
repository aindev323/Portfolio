import "./Hero.scss";
import { useScrollAnimation } from "../../hook/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="home" className={`hero fade-in-section ${isVisible ? "is-visible" : ""}`} ref={ref}>
      <div className="bg-glow glow-1" />
      <div className="bg-glow glow-2" />
      <div className="container">
        <div className="text">
          <div className="badge">PORTFOLIO 2026</div>
          <h1>
            안녕하세요!<br/>
            UI를 구현하는<br/>
            성아인입니다.
          </h1>
          <p>
            사용자 경험을 고려해 화면을 만들고,<br/>
            유지보수가 쉬운 구조를 고민합니다.
          </p>
          <div className="btns">
            <a href="https://github.com/aindev323" target="_blank" rel="noreferrer">
            <i className="xi-github"></i>
              Github
            </a>
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;