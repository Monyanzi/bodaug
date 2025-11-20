import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BodaButton } from "@/components/ui/boda-button";
import { Shirt, Calendar, Users, MapPin, ArrowLeft, Crown } from "lucide-react";
import attireData from "@/data/attire.json";
import NotFound from "@/pages/NotFound";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shirt,
  Crown,
  Users,
  MapPin,
  Calendar
};

const AttireDetails = () => {
  const { attireId } = useParams();
  const attire = attireData.find((a) => a.id === attireId);

  if (!attire) {
    return <NotFound />;
  }

  const HeroIcon = attire.heroIcon ? iconMap[attire.heroIcon] : Shirt;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/tribes" className="hover:text-accent boda-underline">Tribes</Link>
            <span>›</span>
            <Link to={`/tribes/${attire.tribeId}`} className="hover:text-accent boda-underline">{attire.tribeName}</Link>
            <span>›</span>
            <span className="text-foreground">{attire.title}</span>
          </div>

          {/* Back Link */}
          <Link to={`/tribes/${attire.tribeId}`} className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to {attire.tribeName} Culture
          </Link>

          {/* Header */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={attire.image}
                alt={`Traditional Ugandan ${attire.title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeroIcon className="h-8 w-8 text-yellow-400" />
              </div>
              <h1 className="text-4xl font-bold mb-4">{attire.title}</h1>
              <p className="text-xl">
                {attire.description}
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              {attire.sections?.overview && (
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle>{attire.sections.overview.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {attire.sections.overview.content.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* History & Origin */}
              {attire.sections?.history && (
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle>{attire.sections.history.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {attire.sections.history.items.map((item, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-foreground mb-2">{item.heading}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Construction & Design */}
              {attire.sections?.design && (
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle>{attire.sections.design.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {attire.sections.design.columns.map((column, index) => (
                        <div key={index}>
                          <h4 className="font-medium text-foreground mb-2">{column.heading}</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {column.items.map((item, i) => (
                              <li key={i}>{item.startsWith('•') ? item : `• ${item}`}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {attire.sections.design.extra && (
                        <div className="bg-muted/50 rounded-lg p-4">
                            <h4 className="font-medium text-foreground mb-2">{attire.sections.design.extra.heading}</h4>
                            <p className="text-sm text-muted-foreground">
                            {attire.sections.design.extra.text}
                            </p>
                        </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Facts */}
              {attire.sections?.sidebar?.quickFacts && (
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {attire.sections.sidebar.quickFacts.map((fact, index) => {
                      const FactIcon = iconMap[fact.icon] || Users;
                      return (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <FactIcon className="h-4 w-4 text-accent" />
                          <span className="text-muted-foreground">{fact.text}</span>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              )}

              {/* When to Wear */}
              {attire.sections?.sidebar?.occasions && (
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle className="text-lg">When to Wear</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {attire.sections.sidebar.occasions.map((item, index) => (
                        <li key={index}>{item.startsWith('•') ? item : `• ${item}`}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Etiquette */}
              {attire.sections?.sidebar?.etiquette && (
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{attire.sections.sidebar.etiquetteTitle || "Wearing Etiquette"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {attire.sections.sidebar.etiquette.map((item, index) => (
                        <li key={index}>{item.startsWith('•') ? item : `• ${item}`}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Related Links */}
              {attire.sections?.sidebar?.related && (
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Related</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {attire.sections.sidebar.related.map((link, index) => (
                      <Link key={index} to={link.link} className="block text-sm text-accent hover:underline">
                        {link.text}
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Learn More About Ugandan Culture
            </h2>
            <p className="text-muted-foreground mb-6">
              The {attire.title} is just one example of Uganda's rich cultural heritage.
              Explore more traditions, stories, and cultural practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={`/tribes/${attire.tribeId}`}>
                <BodaButton variant="primary">
                  Explore {attire.tribeName} Culture
                </BodaButton>
              </Link>
              <Link to="/preorder">
                <BodaButton variant="secondary">
                  Pre-order Cultural Guide
                </BodaButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttireDetails;
