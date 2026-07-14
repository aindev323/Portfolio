import { useRef, useEffect, useState } from "react";
import "./Skills.scss";

const Skills = () => {
  const sectionRef = useRef(null);
  const [visibleLevels, setVisibleLevels] = useState({});
  const skillsList = [
    { name: "HTML5", lvl: "95", img: "html.png" },
    { name: "CSS3", lvl: "95", img: "css.png" },
    { name: "SCSS", lvl: "90", img: "scss.png" },
    { name: "JavaScript", lvl: "75", img: "javascript.png" },
    { name: "React", lvl: "65", img: "react.png" },
    { name: "TypeScript", lvl: "65", img: "typescript.png" },
    { name: "PHP", lvl: "65", img: "php.png" },
    { name: "MySQL", lvl: "65", img: "mysql.png" },
    { name: "Firebase", lvl: "65", img: "firebase.svg" },
    { name: "GitHub", lvl: "70", img: "github.png" },
    { name: "Vercel", lvl: "65", img: "vercel.svg" },
    { name: "Figma", lvl: "70", img: "figma.png" }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsList.forEach((skill, index) => {
            setTimeout(() => {
              setVisibleLevels(prev => ({...prev, [index]: `${skill.lvl}%`}));
            }, index * 120);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      className={`skills fade-in-section ${visibleLevels[0] ? "is-visible" : ""}`} 
      ref={sectionRef}
    >
      <div className="container">
        <div className="title">
          <span>핵심 역량</span>
          <h2>다양한 환경에 대응하며, 지속해서 관리하기 쉬운 화면을 설계합니다.</h2>
        </div>
        <ul className="skillBox">
          {skillsList.map((skill, idx) => (
            <li 
              key={idx} 
              data-level={skill.lvl}
              style={{"--level": visibleLevels[idx] || "0%"}}>
              <img src={`/img/${skill.img}`} alt={skill.name}/>
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
        <ul className="desc">
          <li className="descTitle">재사용과 수정을 고려한 화면 구현</li>
          <li>• Figma로 직접 구조를 설계하는 기획 단계부터 서비스 배포까지의 전체 과정을 주도적으로 완료했습니다.</li>
          <li>• HTML, CSS, SCSS로 다양한 기기 해상도에 일관성 있게 대응하는 반응형 화면을 구축합니다.</li>
          <li className="descLast">• 자주 사용되는 요소를 공통 컴포넌트로 분리하여 수정과 관리가 편리한 화면 구조를 지향합니다.</li>

          <li className="descTitle">React 기반의 기능 구현과 데이터 연동</li>
          <li>• TMDB 오픈 API를 연동하여 외부 데이터를 호출하고, 비동기 처리를 통해 동적 화면을 구축한 경험이 있습니다.</li>
          <li>• Firebase와 PHP, MySQL로 회원가입 및 CRUD 기능을 구현하며 백엔드 데이터의 전체 흐름을 알고 있습니다.</li>
          <li className="descLast">• Git과 GitHub으로 버전을 관리하며, Vercel을 사용해 빌드 오류를 제어하고 최종 배포를 마쳤습니다.</li>

          <li className="descTitle">직군 간 협업과 업무 조율 역량</li>
          <li>• 현재 디자이너와 Figma로 소통하며 기획 의도에 최적화된 화면을 구현하고 있습니다.</li>
          <li>• 동일 직군 팀원들과 GitHub로 Push, Pull, Merge하며 코드를 병합하고 충돌을 해결해 왔습니다.</li>
          <li className="descLast">• 협업 중 발생한 기술적 이슈를 조율하며, 정해진 일정 내에 최종 결과물을 도출해 냅니다.</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;