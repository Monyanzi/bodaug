import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { Users, MapPin, Filter } from "lucide-react";
import tribes from "@/data/tribes.json";

const tribesCollageImage = "/uganda-tribes-collage.jpg";

const Tribes = () => {
  const regions = ["All", ...Array.from(new Set(tribes.map(t => t.region)))];
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTribes = activeFilter === 'All'
    ? tribes
    : tribes.filter(tribe => tribe.region === activeFilter);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-16 md:py-20 rounded-xl mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={tribesCollageImage} 
              alt="Diverse Ugandan tribes and cultures" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>
          <div className="relative z-10 text-center text-white px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg text-white">
              Ugandan Communities & Heritage
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Meet the remarkable communities that call Uganda home. Each tribe preserves ancient traditions and contributes unique stories to the nation's collective identity.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filter by region:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveFilter(region)}
                className={activeFilter === region ? 'boda-chip-active' : 'boda-chip'}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Tribes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTribes.map((tribe, index) => {
            return (
              <Link key={index} to={tribe.href} className="group">
                <Card className="boda-card h-full overflow-hidden">
                  {tribe.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                    </div>
                  )}
                  
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={tribe.image} 
                      alt={`${tribe.name} cultural heritage`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">
                        {tribe.name}
                      </CardTitle>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {tribe.region}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Language: {tribe.language}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-foreground mb-3 prose">
                      {tribe.summary}
                    </p>
                    <blockquote className="border-l-2 border-accent pl-3 py-2 bg-muted/50 rounded-r">
                      <p className="text-xs italic text-muted-foreground">
                        "{tribe.proverb}"
                      </p>
                    </blockquote>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-foreground rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Each tribe page contains detailed information about clothing, food, traditions, names, places, and stories. Start your cultural journey with the Baganda people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tribes/baganda">
              <BodaButton variant="primary">
                Explore Baganda Culture
              </BodaButton>  
            </Link>
            <Link to="/book">
              <BodaButton variant="secondary">
                Pre-order the Complete Guide
              </BodaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tribes;