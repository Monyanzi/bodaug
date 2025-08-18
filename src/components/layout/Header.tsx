import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/tribes" },
    { name: "Etiquette", href: "/blog/etiquette-starter" },
    { name: "Stories", href: "/stories/kintu-and-nambi" },
    { name: "Food", href: "/food/luwombo" },
    { name: "Book", href: "/book" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold italic text-xl">B</span>
              </div>
              <span className="font-semibold text-xl text-foreground boda-underline">
                boda
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-accent boda-underline ${
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Link to="/preorder">
              <Button className="btn-primary">Pre-order</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-accent ${
                    isActive(item.href)
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Link to="/preorder" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full btn-primary">Pre-order</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation (Sticky) */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-50">
        <div className="flex justify-around items-center h-16 px-4">
          <Link to="/" className="flex flex-col items-center justify-center">
            <span className={`text-xs ${isActive("/") ? "text-accent" : "text-muted-foreground"}`}>
              Home
            </span>
          </Link>
          <Link to="/tribes" className="flex flex-col items-center justify-center">
            <span className={`text-xs ${isActive("/tribes") ? "text-accent" : "text-muted-foreground"}`}>
              Guides
            </span>
          </Link>
          <button className="flex flex-col items-center justify-center">
            <Search className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Search</span>
          </button>
          <Link to="/join" className="flex flex-col items-center justify-center">
            <span className={`text-xs ${isActive("/join") ? "text-accent" : "text-muted-foreground"}`}>
              Join
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;