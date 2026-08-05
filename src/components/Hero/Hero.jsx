import "./Hero.scss";
import { useScrollAnimation } from "../../hook/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  return(
    <section id="home" className={`hero fade-in-section ${isVisible ? "is-visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="text">
          <div className="badge">
            PORTFOLIO 2026
          </div>
          <h1>
            안녕하세요!<br/>
            기획부터 배포까지,<br/>
            <span>프론트엔드</span> 성아인입니다.
          </h1>
          <p>
            눈에 보이는 화면뿐만 아니라,<br/>
            다시 쓰기 편하고 유지보수하기 좋은 코드를 고민합니다.<br/>
          </p>
          <div className="btn">
            <a href="https://github.com/aindev323" target="_blank" rel="noreferrer"><i className="xi-github"></i>Github</a>
          </div>
        </div>
        <div className="code-card">
          <div className="window-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <pre>
            <span className="purple">const</span> aboutMe = {"{"}{"\n"}
            &nbsp;&nbsp;name :
            <span className="blue"> "성아인"</span>,{"\n"}
            &nbsp;&nbsp;role :
            <span className="blue"> "Web Publisher & Front-End Developer"</span>,{"\n"}
            &nbsp;&nbsp;location :
            <span className="blue"> "서울시 마포구"</span>,{"\n"}
            &nbsp;&nbsp;birth :
            <span className="blue"> "91.07.24"</span>,{"\n"}
            &nbsp;&nbsp;education :
            <span className="blue"> "웹퍼블리셔 및 프론트엔드 개발 과정 수료"</span>,{"\n"}
            &nbsp;&nbsp;email :
            <span className="blue"> "ain323@gmail.com"</span>{"\n"}
            {"}"}
          </pre>
        </div>
      </div>
    </section>
  );
};
export default Hero;