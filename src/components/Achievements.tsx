import { Card } from "@/components/ui/card";
import { Award, TrendingUp } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Chứng chỉ - Giải thưởng
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Card className="max-w-4xl mx-auto p-12 shadow-card border-0 gradient-card text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative p-6 rounded-full bg-muted">
                <Award className="w-16 h-16 text-muted-foreground" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-muted-foreground">
                Không có
              </h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Hiện tại chưa có chứng chỉ hoặc giải thưởng nào. 
                Đang nỗ lực học tập và phấn đấu để đạt được những thành tựu trong tương lai.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium pt-4">
                <TrendingUp className="w-4 h-4" />
                <span>Đang phát triển</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;
