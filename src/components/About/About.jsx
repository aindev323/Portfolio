import "./About.scss";
import { useScrollAnimation } from "../../hook/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className={`about fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={ref}>
      <div className="container">
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div className="about-card">
          <div className="card-top">
            <span>PROFILE</span>
          </div>
          <div className="profile">
            <i className="xi-user-o"></i>
          </div>
          <div className="name">
            <h3>성아인</h3>
            <span>UI/UX Developer</span>
          </div>
          <div className="line"></div>
          <ul className="info">
            <li>
              <i className="xi-maker"></i>
              <span>서울시 마포구</span>
            </li>
            <li>
              <i className="xi-calendar"></i>
              <span>91.07.24</span>
            </li>
            <li>
              <i className="xi-library"></i>
              <span>웹퍼블리셔 및 프론트엔드 개발 과정 수료</span> 
            </li>
            <li>
              <i className="xi-mail"></i>
              <span>ain323@gmail.com</span>
            </li>
          </ul>
          <div className="status">
            ● AVAILABLE
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;