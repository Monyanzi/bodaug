import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { Book, Filter } from "lucide-react";
import namesImage from "@/assets/uganda-tribes-collage.jpg";
import namesData from "@/data/names.json";

const NamesIndexPage = () => {
  const origins = ["All", ...Array.from(new Set(namesData.map(n => n.metadata.Origin)))];
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredNames = activeFilter === 'All'
    ? namesData
    : namesData.filter(name => name.metadata.Origin === activeFilter);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-16 md:py-20 rounded-xl mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={namesImage}
              alt="A collage of diverse Ugandan people"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>
          <div className="relative z-10 text-center text-white px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              What's in a Name?
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              In Uganda, a name is more than a label—it's a story, a blessing, a piece of history. Discover the meanings and origins behind Ugandan names.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filter by origin:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {origins.map((origin) => (
              <button
                key={origin}
                onClick={() => setActiveFilter(origin)}
                className={activeFilter === origin ? 'boda-chip-active' : 'boda-chip'}
              >
                {origin}
              </button>
            ))}
          </div>
        </div>

        {/* Names Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredNames.map((item, index) => (
            <Link key={index} to={item.link} className="group">
              <Card className="boda-card h-full overflow-hidden">
                <div className="aspect-video bg-muted overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-muted flex items-center justify-center">
                      <Book className="h-12 w-12 text-accent" />
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {item.title}
                    </CardTitle>
                    <Badge variant="outline">{item.metadata.Origin}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Meaning: {item.metadata.Meaning}
                  </p>
                </CardHeader>

                <CardContent>
                  <blockquote className="border-l-2 border-accent pl-3 py-2 bg-muted/50 rounded-r">
                    <p className="text-xs italic text-muted-foreground">
                      "{item.teaser}"
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Connect Names to People
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            A name is deeply connected to its cultural roots. Explore the tribes where these names originate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tribes">
              <BodaButton variant="primary">
                Explore Tribes
              </BodaButton>
            </Link>
            <Link to="/book">
              <BodaButton variant="secondary">
                Pre-order the Guide
              </BodaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamesIndexPage;
