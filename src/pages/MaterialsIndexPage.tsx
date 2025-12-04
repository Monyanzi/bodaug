import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { Home, Filter } from "lucide-react";
import materialsImage from "@/assets/bark-cloth-making.jpg";
import materialsData from "@/data/materials.json";

const MaterialsIndexPage = () => {
  const uses = ["All", ...Array.from(new Set(materialsData.map(m => m.metadata.Use)))];
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredMaterials = activeFilter === 'All'
    ? materialsData
    : materialsData.filter(material => material.metadata.Use === activeFilter);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-16 md:py-20 rounded-xl mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={materialsImage}
              alt="Artisan making bark cloth in Uganda"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>
          <div className="relative z-10 text-center text-white px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Traditional Crafts & Materials
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore the natural resources and traditional materials that form the foundation of Ugandan craftsmanship and cultural expression.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filter by use:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {uses.map((use) => (
              <button
                key={use}
                onClick={() => setActiveFilter(use)}
                className={activeFilter === use ? 'boda-chip-active' : 'boda-chip'}
              >
                {use}
              </button>
            ))}
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredMaterials.map((item, index) => (
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
                      <Home className="h-12 w-12 text-accent" />
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {item.title}
                    </CardTitle>
                    <Badge variant="outline">{item.metadata.Tribe || item.metadata.Region}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.detail}
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
        <div className="text-center bg-foreground rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Craft Your Knowledge
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            The materials are just the beginning. See how they are used in traditional attire and cultural stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/attire">
              <BodaButton variant="primary">
                Explore Attire
              </BodaButton>
            </Link>
            <Link to="/stories">
              <BodaButton variant="secondary">
                Read Stories
              </BodaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialsIndexPage;
