import logo from "@/assets/logo.png";
import { Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="engineersTech Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-lg font-bold">engineersTech</h3>
                <p className="text-xs opacity-80">Innovative Software Solutions</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Transforming ideas into digital reality with cutting-edge technology and expert development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Services", "Process", "Tech Stack", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Custom Software</li>
              <li>Mobile Apps</li>
              <li>Cloud & DevOps</li>
              <li>UI/UX Design</li>
              <li>AI & ML Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@engineerstechbd.com" className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-primary transition-all">
                <Mail className="h-4 w-4" />
                info@engineerstechbd.com
              </a>
              <a 
                href="https://wa.me/8801873722228" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-primary transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                +880 1873 722228
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>© {currentYear} engineersTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
