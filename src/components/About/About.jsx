import "./About.scss";
import { useScrollAnimation } from "../../hook/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className={`about fade-in-section ${isVisible ? "is-visible" : ""}`} ref={ref}>
      <div className="about-circle">
      <div className="title">
          <h2>About Me</h2>
      </div>
        <ul className="info">
          <li>
            <i className="xi-user-o"></i>
            <span>성아인</span>
          </li>
          <li>
            <i className="xi-maker"></i>
            <span>서울시 마포구</span>
          </li>
          <li>
            <i className="xi-calendar"></i>
            <span>91.07.24</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;