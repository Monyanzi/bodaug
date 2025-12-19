import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { MapPin, Filter, ArrowRight } from "lucide-react";
import tribes from "@/data/tribes.json";

const tribesCollageImage = "/uganda-tribes-collage.jpg";

// Tribes page component
const Tribes = () => {
  const regions = useMemo(() => ["All", ...Array.from(new Set(tribes.map(t => t.region)))], []);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTribes = useMemo(() => 
    activeFilter === 'All' ? tribes : tribes.filter(tribe => tribe.region === activeFilter),
    [activeFilter]
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section - Clean, focused */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={tribesCollageImage} 
            alt="Diverse Ugandan tribes and cultures" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-4">
            Explore Uganda
          </p>
          <h1 className="text-white mb-6">
            Communities & Heritage
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Meet the remarkable communities that call Uganda home, each preserving ancient traditions and unique stories.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Filters - simplified */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Region:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveFilter(region)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 ${
                    activeFilter === region 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Tribes Grid - optimized cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredTribes.map((tribe, index) => (
              <Link key={tribe.name} to={tribe.href} className="group">
                <Card className="h-full bg-card border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  {tribe.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-accent text-accent-foreground text-xs">Featured</Badge>
                    </div>
                  )}
                  
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img 
                      src={tribe.image} 
                      alt={`${tribe.name} cultural heritage`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-accent transition-colors duration-200">
                        {tribe.name}
                      </h3>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {tribe.region}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Language: {tribe.language}
                    </p>
                    <p className="text-sm text-foreground mb-4 line-clamp-2">
                      {tribe.summary}
                    </p>
                    <blockquote className="border-l-2 border-accent/50 pl-3 py-1">
                      <p className="text-xs italic text-muted-foreground line-clamp-2">
                        "{tribe.proverb}"
                      </p>
                    </blockquote>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA Section - refined */}
          <div className="text-center bg-foreground rounded-2xl p-12 md:p-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Go Deeper
            </p>
            <h2 className="text-white mb-4">
              Want to Learn More?
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Each tribe page contains detailed information about clothing, food, traditions, names, and stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tribes/baganda">
                <BodaButton variant="primary" size="lg">
                  Explore Baganda Culture
                  <ArrowRight className="ml-2 h-5 w-5" />
                </BodaButton>  
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tribes;