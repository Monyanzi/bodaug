import { useState } from "react";
import culturalStoriesImage from "@/assets/cultural-stories-blog.jpg";
import { BodaButton } from "@/components/ui/boda-button";

const articles = [
  {
    title: "Cultural Etiquette 101",
    description: "Essential cultural practices for respectful engagement with Ugandan communities",
    category: "Cultural Guides",
    readTime: "8 min read",
    href: "/blog/etiquette-starter"
  },
  {
    title: "Why the Name Boda?",
    description: "The fascinating origin story of Uganda's iconic boda-boda transport",
    category: "Cultural Stories",
    readTime: "5 min read",
    href: "/blog/why-boda"
  },
];

const categories = ["All Stories", "Travel Tips", "Cultural Guides", "Food & Recipes", "Traditional Crafts", "Languages", "Cultural Stories", "Traditional Stories"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");

  const filteredArticles = selectedCategory === "All Stories"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={culturalStoriesImage}
                alt="Traditional African storytelling and cultural heritage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Stories & Guides
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Discover Uganda's Rich Cultural Heritage
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                Explore articles, guides, and stories about Ugandan culture, travel tips, and heritage insights from across the country.
              </p>
            </div>
          </div>

          {/* Blog Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`boda-chip ${selectedCategory === category ? 'bg-accent text-accent-foreground' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredArticles.map((article, index) => (
              <a key={index} href={article.href} className="group boda-card block">
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="bg-muted h-48 flex items-center justify-center">
                    <span className="text-muted-foreground">Featured Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="boda-chip text-xs">{article.category}</span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {article.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-secondary rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with New Stories
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get notified when we publish new cultural guides, travel stories, and heritage insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 boda-input"
              />
              <BodaButton variant="primary">
                Subscribe
              </BodaButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;