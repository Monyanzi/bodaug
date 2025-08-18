import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { Users, MapPin, Filter } from "lucide-react";

const Tribes = () => {
  const tribes = [
    {
      name: "Baganda",
      region: "Central",
      language: "Luganda",
      summary: "The kingdom builders and cultural custodians",
      proverb: "Obutaka bw'omukazi si bwamsigwa - A woman's land is not inherited",
      image: "/api/placeholder/400/300",
      href: "/tribes/baganda",
      featured: true
    },
    {
      name: "Banyoro", 
      region: "Western",
      language: "Runyoro",
      summary: "The ancient kingdom with rich oral traditions",
      proverb: "Akasozi k'eyaka, tikamanya kindi - One hill doesn't know another",
      image: "/api/placeholder/400/300",
      href: "/tribes/banyoro"
    },
    {
      name: "Bakiga",
      region: "Western",
      language: "Rukiga", 
      summary: "Mountain people known for terraced farming",
      proverb: "Akabaare k'omwiha tikagwa - A small stone in the wind doesn't fall",
      image: "/api/placeholder/400/300",
      href: "/tribes/bakiga"
    },
    {
      name: "Basoga",
      region: "Eastern",
      language: "Lusoga",
      summary: "River people with strong fishing traditions",
      proverb: "Amazzi tegakomerera mumiro - Water doesn't compete with fire",
      image: "/api/placeholder/400/300", 
      href: "/tribes/basoga"
    },
    {
      name: "Iteso",
      region: "Eastern",
      language: "Ateso",
      summary: "Pastoral nomads with rich cattle culture",
      proverb: "Ejok nguna atap nu - Good fortune follows good people",
      image: "/api/placeholder/400/300",
      href: "/tribes/iteso"  
    },
    {
      name: "Acholi",
      region: "Northern", 
      language: "Luo",
      summary: "Warriors and peace-makers of the north",
      proverb: "Piny ogik i Acholi - The earth belongs to the Acholi",
      image: "/api/placeholder/400/300",
      href: "/tribes/acholi"
    },
    {
      name: "Lugbara",
      region: "Northern",
      language: "Lugbara",
      summary: "Border people with ancient traditions",
      proverb: "A'di mi oku Lugbara - The Lugbara way is strong",
      image: "/api/placeholder/400/300",
      href: "/tribes/lugbara"
    },
    {
      name: "Bakonzo",
      region: "Western",
      language: "Lukonzo",
      summary: "Mountain dwellers of the Rwenzori",
      proverb: "Omukama w'orukonzo - The king of Konzo land",
      image: "/api/placeholder/400/300",
      href: "/tribes/bakonzo"
    }
  ];

  const regions = ["All", "Central", "Eastern", "Northern", "Western"];
  const selectedRegion = "All";

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Uganda's Cultural Tapestry
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the diverse tribes that make Uganda extraordinary. Each community brings unique traditions, wisdom, and stories that have shaped the nation for centuries.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filter by region:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                className={`boda-chip ${selectedRegion === region ? 'active' : ''}`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Tribes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tribes.map((tribe, index) => (
            <Link key={index} to={tribe.href} className="group">
              <Card className="boda-card h-full overflow-hidden">
                {tribe.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                  </div>
                )}
                
                <div className="aspect-video bg-muted overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-muted flex items-center justify-center">
                    <Users className="h-12 w-12 text-accent" />
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {tribe.name}
                    </CardTitle>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {tribe.region}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Language: {tribe.language}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-foreground mb-3">
                    {tribe.summary}
                  </p>
                  <blockquote className="border-l-2 border-accent pl-3 py-2 bg-muted/50 rounded-r">
                    <p className="text-xs italic text-muted-foreground">
                      "{tribe.proverb}"
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Want to Learn More?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Each tribe page contains detailed information about clothing, food, traditions, names, places, and stories. Start your cultural journey with the Baganda people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tribes/baganda">
              <BodaButton variant="primary">
                Explore Baganda Culture
              </BodaButton>  
            </Link>
            <Link to="/book">
              <BodaButton variant="secondary">
                Pre-order the Complete Guide
              </BodaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tribes;