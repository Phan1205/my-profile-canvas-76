import { Mail, Phone, MapPin, Calendar, GraduationCap, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const info = [
    { icon: Calendar, label: "Ngày sinh", value: "12/05/2005" },
    { icon: MapPin, label: "Địa chỉ", value: "Gia Lai" },
    { icon: Mail, label: "Email", value: "hoapm8386@ut.edu.vn" },
    { icon: Phone, label: "Số điện thoại", value: "0394925351" },
    { icon: GraduationCap, label: "Ngành học", value: "Công nghệ thông tin" },
  ];

  const hobbies = [
    { icon: "🎵", text: "Nghe nhạc" },
    { icon: "🏔️", text: "Du lịch tham quan cảnh đẹp" },
    { icon: "🌅", text: "Ngắm hoàng hôn" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Về tôi
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Personal Info Card */}
          <Card className="p-8 shadow-card hover:shadow-glow transition-smooth border-0 gradient-card">
            <h3 className="text-2xl font-bold mb-6 text-primary">Thông tin cá nhân</h3>
            <div className="space-y-4">
              {info.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Trường</p>
              <p className="font-medium">Đại học Giao thông Vận tải TP.HCM</p>
            </div>
          </Card>

          {/* Hobbies Card */}
          <Card className="p-8 shadow-card hover:shadow-glow transition-smooth border-0 gradient-card">
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Sở thích
            </h3>
            <div className="space-y-6">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth"
                >
                  <span className="text-4xl">{hobby.icon}</span>
                  <p className="text-lg font-medium">{hobby.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-lg bg-gradient-primary text-white">
              <p className="text-sm leading-relaxed">
                "Tôi yêu thích lập trình, thiết kế website và học hỏi các công nghệ mới để phát triển bản thân."
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
