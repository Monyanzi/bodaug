import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { Utensils, Filter } from "lucide-react";
import foodImage from "@/assets/luwombo-dish.jpg";
import foodData from "@/data/food.json";

const FoodIndexPage = () => {
  const foodTypes = ["All", ...Array.from(new Set(foodData.map(f => f.metadata.Type)))];
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredFood = activeFilter === 'All'
    ? foodData
    : foodData.filter(food => food.metadata.Type === activeFilter);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-16 md:py-20 rounded-xl mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={foodImage}
              alt="A delicious Ugandan luwombo dish"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>
          <div className="relative z-10 text-center text-white px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Ugandan Cuisine Traditions
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Experience the authentic tastes of Uganda, from time-honored royal recipes to beloved street food that brings communities together.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filter by type:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {foodTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={activeFilter === type ? 'boda-chip-active' : 'boda-chip'}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFood.map((item, index) => (
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
                      <Utensils className="h-12 w-12 text-accent" />
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {item.title}
                    </CardTitle>
                    <Badge variant="outline">{item.metadata.Tribe || item.metadata.Origin}</Badge>
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
        <div className="text-center bg-secondary rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Hungry for More?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Food is a gateway to culture. Discover the stories and people behind these delicious dishes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/stories">
              <BodaButton variant="primary">
                Read Stories
              </BodaButton>
            </Link>
            <Link to="/attire">
              <BodaButton variant="secondary">
                Explore Attire
              </BodaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodIndexPage;
