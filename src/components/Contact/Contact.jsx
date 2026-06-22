import "./Contact.scss";
import { useScrollAnimation } from "../../hook/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className={`contact fade-in-section ${isVisible ? "is-visible" : ""}`} ref={ref}>
      <div className="container">
        <h2 className="title">Contact</h2>
        <p className="desc">
          저에게 궁금한 점이 있으시다면 편하게 연락 주세요.
        </p>
        <div className="card">
          <div className="info">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <img src="/img/contact.png" alt="contact" />
                <span>010-2993-2407</span>
              </li>

              <li>
                <img src="/img/email.png" alt="contact" />
                <span>ain323@naver.com</span>
              </li>
            </ul>
            <div className="note">
              최대한 빠르게 답장 드리겠습니다.<br/>
              오늘도 좋은 하루 되세요!
            </div>
          </div>
          <form className="form" action="https://formspree.io/f/xlgyejae" method="POST">
              <input type="text" placeholder="Name" name="name"/>
              <input type="email" placeholder="Email Address" name="email"/>
            <input type="text" placeholder="Subject" name="subject"/>
            <textarea placeholder="Your message" rows="6" name="message"></textarea>
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;