import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { Sun, MapPin, Shield } from "lucide-react";
import tribeImage from "@/assets/karamojong-tribe-hero.jpg";

const KaramojongTribe = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <div className="aspect-video relative">
              <img
                src={tribeImage}
                alt="Karamojong people"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Shield className="h-16 w-16 text-red-400 mx-auto mb-4" />
                  <h1 className="text-5xl font-bold mb-2">Karamojong</h1>
                  <p className="text-xl">The Warrior Pastoralists</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Badge className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              North-Eastern Uganda
            </Badge>
            <Badge variant="outline">Nilotic Language Family</Badge>
            <Badge variant="outline">Pastoralism & Cattle</Badge>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The Karamojong are a proud, semi-nomadic pastoralist people from the semi-arid plains of northeastern Uganda, renowned for their fierce warrior traditions and deep cultural attachment to cattle.
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
            </TabsContent>
            <TabsContent value="clothing">
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
            </TabsContent>
            <TabsContent value="food">
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
            </TabsContent>
            <TabsContent value="traditions">
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
            </TabsContent>
            <TabsContent value="names">
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
            </TabsContent>
            <TabsContent value="places">
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

export default KaramojongTribe;