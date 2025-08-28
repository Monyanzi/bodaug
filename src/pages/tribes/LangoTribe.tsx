import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { Sun, MapPin, Users, Book, Utensils, Shirt, Home } from "lucide-react";
import langoHeroImage from "@/assets/lango-tribe-hero.jpg";

const LangoTribe = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <div className="aspect-video relative">
              <img
                src={langoHeroImage}
                alt="Lango plains dweller in traditional attire"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Sun className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                  <h1 className="text-5xl font-bold mb-2">Lango</h1>
                  <p className="text-xl">The Plains People</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Badge className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              North-Central Uganda
            </Badge>
            <Badge variant="outline">Luo Language Family</Badge>
            <Badge variant="outline">Farming & Hunting</Badge>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed prose">
            The Lango people are master cultivators of the fertile plains of north-central Uganda, renowned for their advanced agricultural techniques and legendary hunting traditions. Their society celebrates the harmony between human settlement and the natural world, with customs that have evolved from centuries of successful adaptation to the savanna ecosystem.
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

            <TabsContent value="overview">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-foreground">Content Coming Soon</h3>
                <p className="text-muted-foreground mt-2">
                  Detailed information about the Lango tribe is being prepared.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="clothing">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-foreground">Content Coming Soon</h3>
                <p className="text-muted-foreground mt-2">
                  Detailed information about Lango clothing is being prepared.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="food">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-foreground">Content Coming Soon</h3>
                <p className="text-muted-foreground mt-2">
                  Detailed information about Lango food is being prepared.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="traditions">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-foreground">Content Coming Soon</h3>
                <p className="text-muted-foreground mt-2">
                  Detailed information about Lango traditions is being prepared.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="names">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-foreground">Content Coming Soon</h3>
                <p className="text-muted-foreground mt-2">
                  Detailed information about Lango names is being prepared.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="places">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-foreground">Content Coming Soon</h3>
                <p className="text-muted-foreground mt-2">
                  Detailed information about Lango places is being prepared.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Content Placeholder */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Explore More Culture</h2>
          <div className="text-center text-muted-foreground">
            More content will be linked here soon.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangoTribe;