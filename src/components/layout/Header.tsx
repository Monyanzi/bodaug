import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchModal } from "@/components/SearchModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const cultureLinks = [
    { name: "Tribes", href: "/tribes" },
    { name: "Attire", href: "/attire" },
    { name: "Food", href: "/food" },
    { name: "Materials", href: "/materials" },
    { name: "Names", href: "/names" },
  ];

  const writingsLinks = [
    { name: "Stories", href: "/stories" },
    { name: "Blog", href: "/blog" },
  ];

  const navigation = [
    { name: "Experiences", href: "/experiences" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/98 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 border-b border-border/50">
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <span className="text-accent-foreground font-bold italic text-lg">B</span>
            </div>
            <span className="font-heading font-semibold text-xl text-foreground">
              boda
            </span>
          </Link>

          {/* Desktop Navigation - clearer affordance */}
          <div className="hidden md:flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors duration-150">
                Culture <ChevronDown className="h-3.5 w-3.5 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="min-w-[160px] p-1.5">
                {cultureLinks.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.href} className="cursor-pointer rounded-md px-3 py-2">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors duration-150">
                Writings <ChevronDown className="h-3.5 w-3.5 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="min-w-[160px] p-1.5">
                {writingsLinks.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.href} className="cursor-pointer rounded-md px-3 py-2">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  isActive(item.href)
                    ? "text-foreground bg-muted/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions - refined spacing */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSearchOpen(true)} 
              aria-label="Search"
              className="h-10 w-10 rounded-full hover:bg-muted/50"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Link to="/preorder">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-5 h-10 text-sm font-medium">
                Preorder
              </Button>
            </Link>
          </div>
          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden space-x-2 sm:space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Culture <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {cultureLinks.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Writings <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {writingsLinks.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 py-1 sm:px-3 sm:py-2 text-sm font-medium transition-colors hover:text-accent boda-underline ${
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link to="/preorder">
              <Button size="sm" className="btn-primary">Preorder</Button>
            </Link>
          </div>

          {/* Mobile menu button (hidden but kept for potential future use) */}
          <div className="md:hidden hidden">
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

        {/* Mobile Navigation (hidden but kept for potential future use) */}
        {isMenuOpen && (
          <div className="md:hidden hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-muted-foreground rounded-md hover:text-accent hover:bg-muted">
                  Culture <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {cultureLinks.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-muted-foreground rounded-md hover:text-accent hover:bg-muted">
                  Writings <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {writingsLinks.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

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
                  <Button className="w-full btn-primary">Preorder</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation (Sticky - hidden) */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-50 hidden">
        <div className="flex justify-around items-center h-16 px-4">
          <Link to="/" className="flex flex-col items-center justify-center">
            <span className={`text-xs ${isActive("/") ? "text-accent" : "text-muted-foreground"}`}>
              Home
            </span>
          </Link>
          <Link to="/tribes" className="flex flex-col items-center justify-center">
            <span className={`text-xs ${isActive("/tribes") ? "text-accent" : "text-muted-foreground"}`}>
              Culture
            </span>
          </Link>
          <Link to="/preorder" className="flex flex-col items-center justify-center">
            <span className={`text-xs ${isActive("/preorder") ? "text-accent" : "text-muted-foreground"}`}>
              Preorder
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;