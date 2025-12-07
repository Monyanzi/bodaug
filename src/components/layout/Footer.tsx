import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border/50 mt-24">
      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold italic text-lg">B</span>
              </div>
              <span className="font-heading font-semibold text-xl text-foreground">boda</span>
            </div>
            <p className="text-muted-foreground text-base mb-8 max-w-sm leading-relaxed">
              Connecting you to the traditions, stories, and heritage that make Uganda extraordinary.
            </p>
            <a 
              href="https://ko-fi.com/boda" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              <Heart className="h-4 w-4" />
              <span>Support on Ko-fi</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tribes" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
                  Tribes & Culture
                </Link>
              </li>
              <li>
                <Link to="/food/luwombo" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
                  Food & Cuisine  
                </Link>
              </li>
              <li>
                <Link to="/stories/kintu-and-nambi" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
                  Stories & Legends
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
                  Blog & Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/about#partnerships" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/about#press" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm md:text-base">
            © {currentYear} Boda. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
              Privacy Policy
            </Link>
            <Link to="/faq" className="text-muted-foreground hover:text-accent text-sm md:text-base transition-colors duration-200 boda-underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;