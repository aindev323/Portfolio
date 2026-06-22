import { useEffect } from "react";

export const useSkillBar = (ref) => {
  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const items = section.querySelectorAll("li");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            const level = item.dataset.level;

            setTimeout(() => {
              item.style.setProperty("--level", `${level}%`);
            }, index * 120);
          });
        }
      },
      {threshold: 0.6}
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [ref]);
};