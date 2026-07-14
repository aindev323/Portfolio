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
            UI/UX Developer<br/>
            성아인입니다.
          </h1>
          <p>
            눈에 보이는 화면뿐만 아니라, 다시 쓰기 편한 코드를 위해 노력합니다.<br/>
            팀원들과 적극적으로 소통하고, 서비스에 꼭 필요한 든든한 보탬이 되겠습니다.
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