import { Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight, Check, Sparkles } from "lucide-react";
import heroPassengerView from "@/assets/hero-boda-passenger-view.jpg";
import culturalGreetings from "@/assets/cultural-greetings-respect.jpg";

const Home = () => {
  const quickPathCards = [
    { title: "Why the name Boda?", description: "The origin story of the boda-boda, from border-crossing bicycles to urban icons.", href: "/blog/why-boda", icon: "🏍️" },
    { title: "Before You Go", description: "Essential preparation tips for your Uganda adventure.", href: "/blog/etiquette-starter", icon: "✈️" },
    { title: "Greetings & Respect", description: "Master cultural etiquette that opens doors.", href: "/blog/etiquette-starter", icon: "🤝" },
    { title: "Food You Must Try", description: "Culinary highlights that define Uganda.", href: "/food/luwombo", icon: "🍲" },
    { title: "Stories in 60s", description: "Quick cultural insights and legends.", href: "/stories/kintu-and-nambi", icon: "📖" },
    { title: "Packing & Dress", description: "What to wear and bring for any occasion.", href: "/attire/gomesi", icon: "👗" },
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
      {/* Hero Section - Full viewport with immersive experience */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with refined overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroPassengerView} 
            alt="First-person view from boda-boda passenger riding through Uganda's beautiful landscape" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>
        
        {/* Hero content - Centered for maximum impact */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-white/90 text-sm font-medium">Your gateway to authentic Uganda</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Discover Uganda
              <span className="block text-accent">Like Never Before</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Just like boda-bodas connect people across Uganda, we connect you to the rich tapestry of traditions, stories, and heritage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/tribes">
                <BodaButton variant="primary" size="lg" className="min-w-[200px]">
                  Explore Culture
                </BodaButton>
              </Link>
              <Link to="/blog/why-boda">
                <BodaButton variant="ghost" size="lg" className="flex items-center gap-2 text-white border-white/30 hover:bg-white/10">
                  <Play className="h-5 w-5" />
                  Watch 60-sec intro
                </BodaButton>
              </Link>
            </div>
            
            {/* Floating preorder CTA */}
            <Link to="/preorder" className="inline-block">
              <div className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,209,0,0.4)]">
                Pre-order the Boda Book →
              </div>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Path Cards - Clean white background */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Start Your Cultural Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six pathways to understanding Uganda's rich heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickPathCards.map((card, index) => (
              <Link key={index} to={card.href} className="group">
                <Card className="h-full bg-card border border-border hover:border-accent/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {card.description}
                    </p>
                    <div className="flex items-center text-accent font-semibold">
                      Explore <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guide - Dark immersive section */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image with elegant frame */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition-colors duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={culturalGreetings} 
                    alt="Traditional Ugandan greeting showing cultural respect and connection"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:pl-8">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Essential Knowledge</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                  Cultural Etiquette 101
                </h2>
                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                  Master the essential cultural practices that will help you connect authentically with Ugandan communities.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {featuredHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <span className="text-white/80">{highlight}</span>
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

      {/* Newsletter Section - Clean with accent border */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-card border border-border rounded-3xl p-12 text-center overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-accent rounded-b-full"></div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Hop on. Boda in your inbox.
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                Get curated stories, travel tips, and cultural insights delivered weekly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-secondary border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
                <Link to="/join">
                  <BodaButton variant="primary" size="lg" className="rounded-full px-8">
                    Subscribe
                  </BodaButton>
                </Link>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                Join 2,000+ culture enthusiasts. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;