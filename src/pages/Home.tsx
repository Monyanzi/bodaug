import { Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import heroPassengerView from "@/assets/hero-boda-passenger-view.jpg";
import culturalGreetings from "@/assets/cultural-greetings-respect.jpg";

const Home = () => {
  const quickPathCards = [
    { title: "Why the name Boda?", description: "The origin story of the boda-boda.", href: "/blog/why-boda", icon: "🏍️" },
    { title: "Before You Go", description: "Essential preparation tips.", href: "/blog/etiquette-starter", icon: "✈️" },
    { title: "Greetings & Respect", description: "Master cultural etiquette.", href: "/blog/etiquette-starter", icon: "🤝" },
    { title: "Food You Must Try", description: "Culinary highlights of Uganda.", href: "/food/luwombo", icon: "🍲" },
    { title: "Stories in 60s", description: "Quick cultural insights.", href: "/stories/kintu-and-nambi", icon: "📖" },
    { title: "Packing & Dress", description: "What to wear and bring.", href: "/attire/gomesi", icon: "👗" },
  ];

  const featuredHighlights = [
    "Understand the importance of greetings in Ugandan culture",
    "Learn proper etiquette when visiting traditional ceremonies", 
    "Discover respectful ways to engage with local communities",
    "Master basic phrases in major local languages"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Clean, focused, Apple-like */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - no distracting animation */}
        <div className="absolute inset-0">
          <img 
            src={heroPassengerView} 
            alt="First-person view from boda-boda passenger riding through Uganda's beautiful landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>
        
        {/* Hero content - Simplified hierarchy */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center pt-16">
          <div className="max-w-3xl mx-auto">
            {/* Subhead - understated */}
            <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-6">
              Your gateway to authentic Uganda
            </p>
            
            {/* Main headline - let typography shine */}
            <h1 className="text-white mb-6">
              Discover Uganda
              <span className="block text-accent">Like Never Before</span>
            </h1>
            
            {/* Description - refined line length */}
            <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-xl mx-auto">
              We connect you to the rich tapestry of traditions, stories, and heritage that make Uganda extraordinary.
            </p>
            
            {/* Single primary CTA - Apple-style focus */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/tribes">
                <BodaButton variant="primary" size="lg">
                  Explore Culture
                  <ArrowRight className="ml-2 h-5 w-5" />
                </BodaButton>
              </Link>
              <Link to="/preorder" className="text-white/80 hover:text-white transition-colors text-sm font-medium underline underline-offset-4">
                Pre-order the Book
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator - subtle */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-white/40 animate-bounce" />
        </div>
      </section>

      {/* Quick Path Cards - Clean grid with generous spacing */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Start Here
            </p>
            <h2 className="text-foreground mb-4">
              Your Cultural Journey
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Six pathways to understanding Uganda's rich heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickPathCards.map((card, index) => (
              <Link key={index} to={card.href} className="group">
                <Card className="h-full bg-card border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="text-3xl mb-5">{card.icon}</div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {card.description}
                    </p>
                    <span className="inline-flex items-center text-accent text-sm font-medium">
                      Explore
                      <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guide - Asymmetric layout with breathing room */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image - simple elegant frame */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <img 
                    src={culturalGreetings} 
                    alt="Traditional Ugandan greeting showing cultural respect"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content - clear hierarchy */}
              <div className="order-1 lg:order-2">
                <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                  Essential Knowledge
                </p>
                <h2 className="text-white mb-6">
                  Cultural Etiquette 101
                </h2>
                <p className="text-xl text-white/60 mb-10 leading-relaxed">
                  Master the essential cultural practices that will help you connect authentically with Ugandan communities.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {featuredHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-accent-foreground" />
                      </div>
                      <span className="text-white/70 text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/blog/etiquette-starter">
                  <BodaButton variant="primary" size="lg">
                    Read the Full Guide
                  </BodaButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Minimal, focused */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-foreground mb-4">
              Boda in your inbox
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Get curated stories, travel tips, and cultural insights delivered weekly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-secondary border-0 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <BodaButton variant="primary" size="default" className="px-8">
                Subscribe
              </BodaButton>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Join 2,000+ culture enthusiasts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;