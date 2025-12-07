import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import storiesData from "@/data/stories.json";

const StoriesPage = () => {
  const [sortOrder, setSortOrder] = useState<"date" | "name">("date");

  const stories = useMemo(() => {
    return [...storiesData].sort((a, b) => {
      if (sortOrder === "name") {
        return a.title.localeCompare(b.title);
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [sortOrder]);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Minimal, typography-focused */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Cultural Tales
          </p>
          <h1 className="text-foreground mb-6">
            Stories from Uganda
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Myths, legends, and modern tales that shape the cultural landscape of the Pearl of Africa.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Sort Controls - simplified */}
          <div className="flex justify-center gap-2 mb-12">
            <button
              onClick={() => setSortOrder("date")}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-150 ${
                sortOrder === "date" 
                  ? 'bg-foreground text-background' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Latest
            </button>
            <button
              onClick={() => setSortOrder("name")}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-150 ${
                sortOrder === "name" 
                  ? 'bg-foreground text-background' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              A–Z
            </button>
          </div>

          {/* Stories Grid - optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Link key={story.title} to={story.href} className="group">
                <Card className="h-full bg-card border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-3">
                      {story.description}
                    </p>
                    <span className="inline-flex items-center text-accent text-sm font-medium">
                      Read story
                      <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoriesPage;