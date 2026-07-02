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
            기획부터 배포까지,<br/>
            준비된 신입 성아인입니다.
          </h1>
          <p>
            사용자에게는 편안한 경험을, 동료에게는 신뢰받는 협업 파트너가 되고 싶습니다.<br/>
            새로운 기술을 빠르게 흡수하여 팀의 프로젝트에 든든한 보탬이 되겠습니다.
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