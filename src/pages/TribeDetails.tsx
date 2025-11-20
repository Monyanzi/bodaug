import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { Crown, MapPin, Users, Book, Utensils, Shirt, Home, Shield, Sun } from "lucide-react";
import tribesData from "@/data/tribes.json";
import NotFound from "@/pages/NotFound";
import ReactMarkdown from 'react-markdown';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Crown,
  Shield,
  Sun,
  MapPin,
  Users,
  Book,
  Utensils,
  Shirt,
  Home,
};

const TribeDetails = () => {
  const { tribeId } = useParams();
  const tribe = tribesData.find((t) => t.id === tribeId);

  if (!tribe) {
    return <NotFound />;
  }

  const Icon = tribe.icon ? iconMap[tribe.icon] : Users;
  const iconColor = tribe.iconColor || "text-accent";

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <div className="aspect-video relative">
              <img
                src={tribe.heroImage || tribe.image}
                alt={`${tribe.name} people`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon className={`h-16 w-16 ${iconColor} mx-auto mb-4`} />
                  <h1 className="text-5xl font-bold mb-2">{tribe.name}</h1>
                  <p className="text-xl">{tribe.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            {tribe.badges?.map((badge, index) => (
              <Badge key={index} variant={index === 0 ? "default" : "outline"} className={index === 0 ? "flex items-center gap-2" : ""}>
                {badge.icon && iconMap[badge.icon] && (
                  (() => {
                    const BadgeIcon = iconMap[badge.icon];
                    return <BadgeIcon className="h-3 w-3" />;
                  })()
                )}
                {badge.text}
              </Badge>
            ))}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {tribe.description}
          </p>
        </div>

        {/* Main Content Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="clothing">Clothing</TabsTrigger>
              <TabsTrigger value="food">Food</TabsTrigger>
              <TabsTrigger value="traditions">Traditions</TabsTrigger>
              <TabsTrigger value="names">Names</TabsTrigger>
              <TabsTrigger value="places">Places</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {tribe.sections?.overview ? (
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {tribe.sections.overview.map((section, idx) => {
                        const SectionIcon = section.icon ? iconMap[section.icon] : Users;
                        return (
                            <Card key={idx} className="boda-card">
                                <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <SectionIcon className="h-5 w-5 text-accent" />
                                    {section.title}
                                </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                {section.content.map((item, i) => (
                                    <div key={i}>
                                    <h4 className="font-medium text-foreground mb-2">{item.heading}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {item.text}
                                    </p>
                                    </div>
                                ))}
                                </CardContent>
                            </Card>
                        )
                    })}
                  </div>

                  {tribe.sections.quote && (
                    <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted/50 rounded-r-lg">
                      <p className="text-lg italic text-foreground mb-2">
                        {tribe.sections.quote.text}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {tribe.sections.quote.subtext}
                      </p>
                    </blockquote>
                  )}
                </>
              ) : (
                <ComingSoon />
              )}
            </TabsContent>

            <TabsContent value="clothing">
              {tribe.sections?.clothing ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {tribe.sections.clothing.map((item, index) => (
                    <Card key={index} className="boda-card">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{item.title}</span>
                          {item.link && (
                            <Link to={item.link}>
                              <BodaButton variant="ghost" size="sm">Learn More</BodaButton>
                            </Link>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-3">{item.description}</p>
                        <div>
                          <span className="text-sm font-medium text-foreground">Worn for: </span>
                          <span className="text-sm text-muted-foreground">{item.occasions}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : tribe.sections?.clothingDetails ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {tribe.sections.clothingDetails.map((item, index) => (
                        <Card key={index} className="boda-card">
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4 prose">{item.content}</p>
                                <div className="space-y-2">
                                    {item.meta.map((metaItem, i) => (
                                        <div key={i} className="flex justify-between text-sm">
                                            <span className="font-medium text-foreground">{metaItem.label}:</span>
                                            <span className="text-muted-foreground">{metaItem.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                  </div>
              ) : (
                <ComingSoon />
              )}
            </TabsContent>

            <TabsContent value="food">
              {tribe.sections?.food ? (
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Utensils className="h-5 w-5 text-accent" />
                        {tribe.sections.food.title}
                      </div>
                      {tribe.sections.food.link && (
                        <Link to={tribe.sections.food.link}>
                          <BodaButton variant="ghost" size="sm">Full Recipe</BodaButton>
                        </Link>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {tribe.sections.food.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tribe.sections.food.details.map((detail, index) => (
                        <div key={index}>
                          <h4 className="font-medium text-foreground mb-2">{detail.heading}</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {detail.items.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : tribe.sections?.foodDetails ? (
                  <Card className="boda-card">
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                              <Utensils className="h-5 w-5 text-accent" />
                              {tribe.sections.foodDetails.title}
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground mb-6 prose">
                              {tribe.sections.foodDetails.content}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {tribe.sections.foodDetails.columns.map((col, index) => (
                                  <div key={index}>
                                      <h4 className="font-medium text-foreground mb-3">{col.heading}</h4>
                                      <ul className="text-sm text-muted-foreground space-y-2">
                                          {col.items.map((item, i) => (
                                              <li key={i}>
                                                <ReactMarkdown>{item.startsWith('•') ? item : `• ${item}`}</ReactMarkdown>
                                              </li>
                                          ))}
                                      </ul>
                                  </div>
                              ))}
                          </div>
                      </CardContent>
                  </Card>
              ) : (
                <ComingSoon />
              )}
            </TabsContent>

            <TabsContent value="traditions">
                {tribe.sections?.traditionsDetails ? (
                    <div className="space-y-8">
                        <Card className="boda-card">
                            <CardHeader>
                                <CardTitle>{tribe.sections.traditionsDetails.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-6 prose">
                                    {tribe.sections.traditionsDetails.content}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {tribe.sections.traditionsDetails.columns.map((col, index) => (
                                        <div key={index}>
                                            <h4 className="font-medium text-foreground mb-3">{col.heading}</h4>
                                            <p className="text-sm text-muted-foreground prose">
                                                {col.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ) : (
                    <ComingSoon />
                )}
            </TabsContent>

            <TabsContent value="names">
              {tribe.sections?.names?.featured ? (
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Featured Name: {tribe.sections.names.featured.name}</span>
                      {tribe.sections.names.featured.link && (
                        <Link to={tribe.sections.names.featured.link}>
                          <BodaButton variant="ghost" size="sm">Learn More</BodaButton>
                        </Link>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {tribe.sections.names.featured.description}
                    </p>
                    <div>
                      <span className="text-sm font-medium text-foreground">Cultural Context: </span>
                      <span className="text-sm text-muted-foreground">
                        {tribe.sections.names.featured.context}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ) : tribe.sections?.namesDetails ? (
                  <Card className="boda-card">
                      <CardHeader>
                          <CardTitle>{tribe.sections.namesDetails.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground mb-6 prose">
                              {tribe.sections.namesDetails.content}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {tribe.sections.namesDetails.columns.map((col, index) => (
                                  <div key={index}>
                                      <h4 className="font-medium text-foreground mb-3">{col.heading}</h4>
                                      <ul className="text-sm text-muted-foreground space-y-2">
                                          {col.items.map((item, i) => (
                                              <li key={i}>
                                                  <ReactMarkdown>{item}</ReactMarkdown>
                                              </li>
                                          ))}
                                      </ul>
                                  </div>
                              ))}
                          </div>
                      </CardContent>
                  </Card>
              ) : (
                <ComingSoon />
              )}
            </TabsContent>

            <TabsContent value="places">
                {tribe.sections?.placesDetails ? (
                    <Card className="boda-card">
                        <CardHeader>
                            <CardTitle>{tribe.sections.placesDetails.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6 prose">
                                {tribe.sections.placesDetails.content}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {tribe.sections.placesDetails.columns.map((col, index) => (
                                    <div key={index}>
                                        <h4 className="font-medium text-foreground mb-3">{col.heading}</h4>
                                        <ul className="text-sm text-muted-foreground space-y-2">
                                            {col.items.map((item, i) => (
                                                <li key={i}>
                                                    <ReactMarkdown>{item.startsWith('•') ? item : `• ${item}`}</ReactMarkdown>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <ComingSoon />
                )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Content */}
        {tribe.relatedContent && (
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Explore More {tribe.name} Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {tribe.relatedContent.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Home;
                return (
                  <Link key={index} to={item.href} className="group">
                    <Card className="boda-card">
                      <CardContent className="p-4 flex items-center space-x-4">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Related Tribes */}
        {tribe.relatedTribes && (
            <div className="max-w-6xl mx-auto mt-8 bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Related Tribes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tribe.relatedTribes.map((related, index) => (
                    <div key={index} className="boda-chip flex items-center justify-between p-4 rounded-lg">
                    <div>
                        <div className="font-medium text-foreground">{related.name}</div>
                        <div className="text-sm text-muted-foreground">{related.description}</div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        )}
        {!tribe.relatedContent && !tribe.relatedTribes && (
            <div className="max-w-6xl mx-auto mt-16">
                <h2 className="text-2xl font-semibold text-foreground mb-8">Explore More Culture</h2>
                <div className="text-center text-muted-foreground">
                More content will be linked here soon.
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

const ComingSoon = () => (
  <div className="text-center bg-secondary rounded-lg p-8 my-12">
    <h2 className="text-3xl font-bold text-foreground mb-4">
      Content Coming Soon
    </h2>
    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
      This section is currently under development. The complete, unabridged
      content will be available in the Boda Book Series. Pre-order now to
      be the first to get access.
    </p>
    <Link to="/preorder">
      <BodaButton variant="primary" size="lg">
        Pre-order the Boda Book Series
      </BodaButton>
    </Link>
  </div>
);

export default TribeDetails;
