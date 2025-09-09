import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold italic text-xl">B</span>
              </div>
              <span className="font-semibold text-xl text-foreground">boda</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Just like boda-bodas connect people across Uganda, we connect you to the rich tapestry of traditions, stories, and heritage that make Uganda extraordinary.
            </p>
            <div className="flex items-center space-x-4">
            <a 
              href="https://ko-fi.com/boda" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent boda-underline"
            >
                <Heart className="h-4 w-4" />
                <span>Support on Ko-fi</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tribes" className="text-muted-foreground hover:text-accent text-sm boda-underline">
                  Tribes & Culture
                </Link>
              </li>
              <li>
                <Link to="/food/luwombo" className="text-muted-foreground hover:text-accent text-sm boda-underline">
                  Food & Cuisine  
                </Link>
              </li>
              <li>
                <Link to="/stories/kintu-and-nambi" className="text-muted-foreground hover:text-accent text-sm boda-underline">
                  Stories & Legends
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-muted-foreground hover:text-accent text-sm boda-underline">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-accent text-sm boda-underline">
                  Blog & Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent text-sm boda-underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/about#partnerships" className="text-muted-foreground hover:text-accent text-sm boda-underline">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/about#press" className="text-muted-foreground hover:text-accent text-sm boda-underline">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent text-sm boda-underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-accent text-sm boda-underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-accent text-sm boda-underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Boda. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-accent text-sm boda-underline">
              Privacy Policy
            </Link>
            <Link to="/faq" className="text-muted-foreground hover:text-accent text-sm boda-underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;