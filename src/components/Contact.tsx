import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Simulate sending
    toast.success("Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Liên hệ
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground">
            Bạn có thể liên hệ với tôi qua email hoặc gửi tin nhắn trực tiếp tại đây
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-card border-0 gradient-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Họ và tên
                </label>
                <Input
                  id="name"
                  placeholder="Nhập họ và tên của bạn"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email của bạn
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Nội dung liên hệ
                </label>
                <Textarea
                  id="message"
                  placeholder="Nhập nội dung tin nhắn..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-primary text-white hover:opacity-90 transition-smooth"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Gửi tin nhắn
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 shadow-card hover:shadow-glow transition-smooth border-0 gradient-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:hoapm8386@ut.edu.vn"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    hoapm8386@ut.edu.vn
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-glow transition-smooth border-0 gradient-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Số điện thoại</h3>
                  <a
                    href="tel:0394925351"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    0394925351
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-card border-0 bg-gradient-primary text-white">
              <h3 className="text-xl font-bold mb-4">Sẵn sàng hợp tác</h3>
              <p className="leading-relaxed opacity-90">
                Tôi luôn mở lòng với các cơ hội mới và dự án thú vị. 
                Hãy liên hệ với tôi để cùng nhau tạo ra những điều tuyệt vời!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
