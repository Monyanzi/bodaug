import { Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, Book, Users, ArrowRight } from "lucide-react";

const NotFound = () => {
  const quickLinks = [
    { title: "Explore Tribes", description: "Discover Uganda's cultural diversity", href: "/tribes", icon: Users },
    { title: "Boda Book Series", description: "Pre-order the complete guide", href: "/preorder", icon: Book },
    { title: "Cultural Stories", description: "Read traditional legends", href: "/stories/kintu-and-nambi", icon: Book },
    { title: "Join Our Community", description: "Get cultural insights weekly", href: "/join", icon: Users }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl font-bold text-accent">404</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Like a boda taking a wrong turn, this page seems to have gotten lost.
          </p>
          <p className="text-muted-foreground">
            Don't worry - let's get you back on the right path to exploring Uganda's rich culture.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="flex max-w-md mx-auto mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search tribes, stories, food..."
                className="w-full pl-10 boda-input"
              />
            </div>
            <BodaButton variant="primary" className="ml-2">
              Search
            </BodaButton>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Link key={index} to={link.href} className="group">
                <Card className="boda-card text-left">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                          {link.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {link.description}
                        </p>
                        <div className="flex items-center text-accent text-sm font-medium">
                          Explore <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Main Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <BodaButton variant="primary" size="lg" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Return to Home
            </BodaButton>
          </Link>
          <Link to="/tribes">
            <BodaButton variant="secondary" size="lg">
              Explore Tribes
            </BodaButton>
          </Link>
        </div>

        {/* Helpful Message */}
        <div className="mt-12 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Still can't find what you're looking for? 
            <Link to="/contact" className="text-accent hover:underline ml-1">Contact us</Link> 
            {" "}and we'll help you navigate Uganda's cultural landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;