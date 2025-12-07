import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BodaButton } from "@/components/ui/boda-button";
import { Utensils } from "lucide-react";
import foodData from "@/data/food.json";
import NotFound from "@/pages/NotFound";
import ReactMarkdown from 'react-markdown';

const FoodDetails = () => {
  const { foodId } = useParams();
  const food = foodData.find((f) => f.id === foodId);

  if (!food) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={food.image}
                alt={food.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {food.description || food.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                  {food.teaser}
              </p>
              {food.intro && (
                <p className="text-white/80 max-w-2xl mx-auto">
                  {food.intro}
                </p>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction */}
            {food.sections?.introduction && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {food.sections.introduction.title || "About"}
                  </h2>
                  {food.sections.introduction.content.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {food.sections.introduction.sidebar && (
                    <div className="bg-accent/10 rounded-lg p-6">
                        <h3 className="font-semibold text-foreground mb-3">{food.sections.introduction.sidebar.title}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                        {food.sections.introduction.sidebar.items.map((item, index) => (
                            <li key={index}>• {item}</li>
                        ))}
                        </ul>
                    </div>
                )}
              </div>
            )}

             {/* Anatomy */}
            {food.sections?.anatomy && (
                <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">{food.sections.anatomy.title}</h2>
                {food.sections.anatomy.intro && (
                    <p className="text-muted-foreground mb-6">
                        {food.sections.anatomy.intro}
                    </p>
                )}
                <ul className="space-y-4">
                    {food.sections.anatomy.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                            <strong className="text-foreground">{item.title}:</strong>
                            <span className="text-muted-foreground ml-2">{item.text}</span>
                        </div>
                        </li>
                    ))}
                </ul>
                </div>
            )}

            {/* Process */}
            {food.sections?.process && (
              <div className={food.id === 'rolex' ? "mb-12" : "bg-secondary rounded-lg p-8"}>
                <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                  {food.sections.process.title}
                </h2>
                 {food.sections.process.intro && (
                    <p className="text-muted-foreground mb-6">
                        {food.sections.process.intro}
                    </p>
                )}
                {food.id === 'rolex' ? (
                    <ol className="space-y-4">
                        {food.sections.process.steps.map((step, index) => (
                            <li key={index} className="flex items-start">
                                <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">{step.step}</div>
                                <div>
                                    <strong className="text-foreground">{step.title}:</strong>
                                    <span className="text-muted-foreground ml-2">{step.description}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {food.sections.process.steps.map((process, index) => (
                        <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-accent-foreground font-bold">{process.step}</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{process.title}</h3>
                        <p className="text-sm text-muted-foreground">{process.description}</p>
                        </div>
                    ))}
                    </div>
                )}
              </div>
            )}

            {/* Quote */}
            {food.sections?.quote && (
                 <div className="bg-secondary border-l-4 border-accent rounded-lg p-6 mb-12">
                    <blockquote className="text-muted-foreground italic text-lg">
                        {food.sections.quote.text}
                    </blockquote>
                 </div>
            )}

            {/* Varieties */}
            {food.sections?.varieties && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {food.sections.varieties.items.map((variety, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 boda-card">
                    <h3 className="font-semibold text-foreground mb-2">{variety.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{variety.description}</p>
                    <h4 className="font-medium text-foreground mb-2">Key Ingredients:</h4>
                    <ul className="space-y-1">
                      {variety.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Extras */}
            {food.sections?.extras && (
                <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">{food.sections.extras.title}</h2>
                <p className="text-muted-foreground">
                    {food.sections.extras.text}
                </p>
                </div>
            )}

            {/* Context */}
            {food.sections?.context && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {food.sections.context.columns.map((col, index) => (
                         <div key={index}>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                {col.title}
                            </h2>
                            {col.content.map((para, i) => (
                                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                                    {para}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {/* Experience / CTA */}
             {food.sections?.experience && (
                <div className="text-center bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                    {food.sections.experience.title}
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {food.sections.experience.text}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {food.sections.experience.buttons.map((btn, index) => (
                        <BodaButton key={index} variant={btn.variant === "hero" ? "primary" : btn.variant as "primary" | "secondary" | "ghost" | "outline" | "destructive" | null | undefined}>
                            {btn.text}
                        </BodaButton>
                    ))}
                </div>
                </div>
             )}
             {food.sections?.cta && (
                 <div className="mt-16 text-center bg-secondary rounded-lg p-12">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                    {food.sections.cta.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
                     <ReactMarkdown>{food.sections.cta.text}</ReactMarkdown>
                    </p>
                    <Link to={food.sections.cta.button.link}>
                    <BodaButton variant="primary" size="lg">
                        {food.sections.cta.button.text}
                    </BodaButton>
                    </Link>
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
