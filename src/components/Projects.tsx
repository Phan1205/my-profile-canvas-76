import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Trang web giới thiệu bản thân",
      description: "Thiết kế website portfolio cá nhân bằng HTML, CSS, JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Ứng dụng quản lý sinh viên",
      description: "Xây dựng ứng dụng quản lý sinh viên và điểm số bằng C# & SQL Server.",
      tags: ["C#", "SQL Server"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "To-Do List App",
      description: "Ứng dụng quản lý công việc cá nhân với JavaScript, HTML và CSS.",
      tags: ["JavaScript", "HTML", "CSS"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Dự án
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground">Các dự án đang thực hiện</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Code2 className="w-8 h-8 text-primary" />
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-smooth pointer-events-none`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
