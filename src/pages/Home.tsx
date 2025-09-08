import { Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight } from "lucide-react";
import heroPassengerView from "@/assets/hero-boda-passenger-view.jpg";

const Home = () => {
  const quickPathCards = [
    { title: "Why the name Boda?", description: "The origin story of the boda-boda, from border-crossing bicycles to urban icons.", href: "/blog/why-boda" },
    { title: "Before You Go", description: "Essential preparation tips", href: "/blog/etiquette-starter" },
    { title: "Greetings & Respect", description: "Cultural etiquette guide", href: "/blog/etiquette-starter" },
    { title: "Food You Must Try", description: "Culinary highlights", href: "/food/luwombo" },
    { title: "Stories in 60s", description: "Quick cultural insights", href: "/stories/kintu-and-nambi" },
    { title: "Packing & Dress", description: "What to wear and bring", href: "/attire/gomesi" },
  ];

  const featuredHighlights = [
    "Understand the importance of greetings in Ugandan culture",
    "Learn proper etiquette when visiting traditional ceremonies", 
    "Discover respectful ways to engage with local communities",
    "Know what gifts are appropriate and inappropriate",
    "Master basic phrases in major local languages"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroPassengerView} 
            alt="First-person view from boda-boda passenger riding through Uganda's beautiful landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Main content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Discover Uganda Like Never Before
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Just like boda-bodas connect people across Uganda, we connect you to the rich tapestry of traditions, stories, and heritage that make Uganda extraordinary.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/tribes">
                  <BodaButton variant="secondary" size="lg">
                    Explore Culture
                  </BodaButton>
                </Link>
                <BodaButton variant="ghost" size="lg" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch 60-sec intro
                </BodaButton>
              </div>
            </div>
            
            {/* Right column - Preorder module */}
            <div className="flex justify-center lg:justify-end">
              <Link to="/preorder">
                <BodaButton variant="hero" size="lg">
                  Pre-order Now
                </BodaButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Path Cards */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Start Your Cultural Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickPathCards.map((card, index) => (
              <Link key={index} to={card.href} className="group">
                <Card className="boda-card h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {card.description}
                    </p>
                    <div className="flex items-center text-accent text-sm font-medium">
                      Learn more <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Cultural Etiquette 101
                </h2>
                <p className="text-muted-foreground mb-6">
                  Master the essential cultural practices that will help you connect authentically with Ugandan communities.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {featuredHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/blog/etiquette-starter">
                  <BodaButton variant="primary">
                    Read the Full Guide
                  </BodaButton>
                </Link>
              </div>
              
              <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <p className="text-muted-foreground">Cultural Etiquette Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Hop on. Boda in your inbox weekly.
            </h2>
            <p className="text-muted-foreground mb-8">
              Get curated stories, travel tips, and cultural insights delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 boda-input"
              />
              <Link to="/join">
                <BodaButton variant="primary">
                  Join
                </BodaButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;