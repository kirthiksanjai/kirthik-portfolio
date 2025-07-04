
import { Link } from "react-scroll";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kirthik B. All rights reserved.</p>
        <div className="my-4 space-y-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <a href="mailto:kirthik0071@gmail.com" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>kirthik0071@gmail.com</span>
              </a>
              <a href="tel:+918870914014" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 8870914014</span>
              </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/kirthik-dev" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/kirthik-sanjai/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
            <Link to="hero" smooth={true} duration={500} className="text-sm hover:text-primary cursor-pointer">Back to Top</Link>
        </div>
      </div>
    </footer>
  );
}
