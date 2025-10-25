import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Skills = () => {
  const skills = [
    { name: "HTML / CSS", level: 90, color: "hsl(20, 80%, 60%)" },
    { name: "JavaScript", level: 75, color: "hsl(50, 90%, 55%)" },
    { name: "C / C++", level: 80, color: "hsl(210, 70%, 55%)" },
    { name: "Thiết kế UI/UX", level: 70, color: "hsl(340, 80%, 60%)" },
  ];

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" id="skills-section">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Kỹ năng
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-card border-0 gradient-card">
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="text-lg font-bold text-primary">{skill.level}%</span>
                </div>
                <div className="relative h-4 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animated ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                      boxShadow: animated ? `0 0 20px ${skill.color}80` : "none",
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-lg bg-muted/50 border border-border">
            <p className="text-center text-muted-foreground">
              Đang tiếp tục học hỏi và phát triển thêm nhiều kỹ năng mới...
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
