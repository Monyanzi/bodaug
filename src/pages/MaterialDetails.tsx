import { useParams, Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { Home, Users, MapPin, Calendar } from "lucide-react";
import materialData from "@/data/materials.json";
import NotFound from "@/pages/NotFound";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Users,
  MapPin,
  Calendar
};

const MaterialDetails = () => {
  const { materialId } = useParams();
  const material = materialData.find((m) => m.id === materialId);

  if (!material) {
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
                src={material.image}
                alt={material.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {material.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                  {material.description}
              </p>
              {material.intro && (
                <p className="text-white/80 max-w-2xl mx-auto">
                  {material.intro}
                </p>
              )}
            </div>
          </div>

          {material.comingSoon ? (
            <div className="text-center bg-secondary rounded-lg p-8 my-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                Content Coming Soon
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                This section is currently under development. The complete exploration
                of traditional Ugandan materials will be available in the Boda Book Series.
                </p>
                <Link to="/preorder">
                <BodaButton variant="primary" size="lg">
                    Pre-order the Boda Book Series
                </BodaButton>
                </Link>
            </div>
          ) : (
            /* Main Content */
            <div className="space-y-12">
                {/* Introduction */}
                {material.sections?.introduction && (
                <div className="prose prose-lg max-w-none">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                        {material.sections.introduction.title}
                        </h2>
                        {material.sections.introduction.content.map((para, index) => (
                            <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                                {para}
                            </p>
                        ))}
                    </div>
                    {material.sections.introduction.sidebar && (
                        <div className="bg-accent/10 rounded-lg p-6">
                            <h3 className="font-semibold text-foreground mb-3">{material.sections.introduction.sidebar.title}</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {material.sections.introduction.sidebar.items.map((item, index) => (
                                    <li key={index}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    </div>
                </div>
                )}

                {/* Process */}
                {material.sections?.process && (
                <div className="bg-secondary rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                    {material.sections.process.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {material.sections.process.steps.map((process, index) => (
                        <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-accent-foreground font-bold">{process.step}</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{process.title}</h3>
                        <p className="text-sm text-muted-foreground">{process.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
                )}

                {/* Significance */}
                {material.sections?.significance && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {material.sections.significance.columns.map((col, index) => (
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

                {/* CTA */}
                {material.sections?.cta && (
                <div className="text-center bg-card border border-border rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                    {material.sections.cta.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {material.sections.cta.text}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {material.sections.cta.buttons.map((btn, index) => (
                        <BodaButton key={index} variant={btn.variant as "primary" | "secondary" | "ghost" | "hero" | "destructive" | null | undefined}>
                            {btn.text}
                        </BodaButton>
                    ))}
                    </div>
                </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaterialDetails;
