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
            기획부터 구현까지.<br/>
            웹과 앱을 만드는<br/>
            성아인입니다.
          </h1>
          <p>
            유지보수하기 좋은 구조적인 코드를 고민하며,<br/>
            새로운 기술을 학습하고 적용하는 과정에서 가장 큰 성취감을 느낍니다.
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