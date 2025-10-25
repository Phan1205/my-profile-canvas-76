import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Được thiết kế và phát triển với <Heart className="w-4 h-4 text-accent fill-accent" /> bởi Phan Minh Hòa
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Phan Minh Hòa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
