import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import storiesData from "@/data/stories.json";

const StoriesPage = () => {
  const [stories, setStories] = useState(storiesData);
  const [sortOrder, setSortOrder] = useState<"date" | "name">("date");

  const sortStories = (criteria: "date" | "name") => {
    const sortedStories = [...storiesData].sort((a, b) => {
      if (criteria === "name") {
        return a.title.localeCompare(b.title);
      }
      // Default to reverse chronological order
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    setStories(sortedStories);
    setSortOrder(criteria);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Stories from Uganda
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of myths, legends, and modern tales that shape the cultural landscape of the Pearl of Africa.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={sortOrder === "date" ? "default" : "secondary"}
            onClick={() => sortStories("date")}
          >
            Sort by Latest
          </Button>
          <Button
            variant={sortOrder === "name" ? "default" : "secondary"}
            onClick={() => sortStories("name")}
          >
            Sort by Name
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Link key={index} to={story.href} className="group">
              <Card className="boda-card h-full overflow-hidden">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {story.description}
                  </p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    Read more <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;
