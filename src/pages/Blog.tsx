import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BodaButton } from "@/components/ui/boda-button";
import { ArrowRight } from "lucide-react";
import culturalStoriesImage from "@/assets/cultural-stories-blog.jpg";

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

const categories = ["All", "Cultural Guides", "Cultural Stories", "Travel Tips", "Food & Recipes"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = useMemo(() => 
    selectedCategory === "All"
      ? articles
      : articles.filter(article => article.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section - Immersive */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={culturalStoriesImage}
            alt="Traditional African storytelling"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-4">
            Insights & Guides
          </p>
          <h1 className="text-white mb-6">
            Stories & Guides
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Articles, guides, and stories about Ugandan culture, travel tips, and heritage insights.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          {/* Category Filters - simplified */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 ${
                  selectedCategory === category 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {filteredArticles.map((article) => (
              <Link key={article.title} to={article.href} className="group">
                <Card className="h-full bg-card border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Featured Image</span>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-accent">{article.category}</span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center text-accent text-sm font-medium">
                      Read article
                      <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA - refined */}
          <div className="text-center bg-foreground rounded-2xl p-12 md:p-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Stay Updated
            </p>
            <h2 className="text-white mb-4">
              New Stories Weekly
            </h2>
            <p className="text-white/60 mb-10 max-w-md mx-auto">
              Get notified when we publish new cultural guides and heritage insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-white/10 border-0 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <BodaButton variant="primary" size="default" className="px-8">
                Subscribe
              </BodaButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;