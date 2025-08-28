import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { Shield, MapPin, Users, Book, Utensils, Shirt, Home } from "lucide-react";
import alurHeroImage from "@/assets/alur-tribe-hero.jpg";

const AlurTribe = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <div className="aspect-video relative">
              <img
                src={alurHeroImage}
                alt="Alur highland warrior in traditional attire"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                  <h1 className="text-5xl font-bold mb-2">Alur</h1>
                  <p className="text-xl">The Highland People</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Badge className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              West Nile Region
            </Badge>
            <Badge variant="outline">Alur Kingdom</Badge>
            <Badge variant="outline">Luo Language Family</Badge>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed prose">
            The Alur are a resilient highland people from the West Nile region of Uganda, distinguished by their sophisticated chiefdom system and profound spiritual connection to the mountainous terrain they call home. Known for their warrior traditions and skilled craftsmanship, the Alur have maintained their cultural identity while serving as guardians of Uganda's northwestern frontiers.
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

            <TabsContent value="overview" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-accent" />
                      Highland Warriors
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Chiefdom Structure</h4>
                      <p className="text-sm text-muted-foreground prose">
                        The Alur maintain one of Uganda's most sophisticated traditional governance systems, with hereditary chiefs (Rwodi) who serve as both political and spiritual leaders of their communities, bridging ancient wisdom with modern administration.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Mountain Guardians</h4>
                      <p className="text-sm text-muted-foreground prose">
                        Living in the highland regions along the Congo border, the Alur have developed unique agricultural and cultural practices adapted to mountainous terrain, making them expert cultivators of highland crops and skilled metalworkers.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-accent" />
                      Cultural Identity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Luo Heritage</h4>
                      <p className="text-sm text-muted-foreground prose">
                        As part of the larger Luo language family, the Alur share linguistic and cultural connections with communities across East Africa, while maintaining their distinct highland identity and traditions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Oral Traditions</h4>
                      <p className="text-sm text-muted-foreground prose">
                        Alur history is preserved through powerful oral narratives that tell of migrations, battles, and the establishment of chiefdoms, with specialized storytellers keeping these traditions alive across generations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted/50 rounded-r-lg mt-8">
                <p className="text-lg italic text-foreground mb-2">
                  "Rwodi mar alur - tek ma tiyo kod jogi"
                </p>
                <p className="text-sm text-muted-foreground">
                  "The Alur chief works together with the people" - This proverb emphasizes the collaborative leadership style central to Alur governance.
                </p>
              </blockquote>
            </TabsContent>
            <TabsContent value="clothing" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle>Traditional Warrior Attire</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 prose">
                      Alur warriors traditionally wear distinctive leather garments decorated with cowrie shells and metal ornaments. The iconic war shield (lwedo) features geometric patterns that identify clan lineage and spiritual protection.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground">Materials:</span>
                        <span className="text-muted-foreground">Leather, cowrie shells, metals</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground">Significance:</span>
                        <span className="text-muted-foreground">Clan identity, spiritual protection</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle>Ceremonial Dress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 prose">
                      During important ceremonies, Alur people wear elaborate headdresses made from feathers and beads, with colorful cloth wraps that indicate social status and ceremonial role within the community.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground">Occasions:</span>
                        <span className="text-muted-foreground">Chieftaincy ceremonies, festivals</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground">Colors:</span>
                        <span className="text-muted-foreground">Earth tones, royal blues, whites</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="food" className="animate-fade-in">
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-accent" />
                    Highland Cuisine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 prose">
                    Alur cuisine reflects their highland environment with hearty root vegetables, mountain greens, and river fish. Meals are communal affairs that strengthen family bonds and community relationships.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Signature Dishes</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <strong>Malakwang</strong> - Wild vegetables cooked with ground simsim</li>
                        <li>• <strong>Boo</strong> - Fermented millet bread, a highland staple</li>
                        <li>• <strong>Ngara fish</strong> - River fish prepared with local herbs</li>
                        <li>• <strong>Sweet potato dishes</strong> - Various preparations of highland tubers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Cultural Significance</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Communal eating reinforces social bonds</li>
                        <li>• Seasonal foods connect people to the land</li>
                        <li>• Special foods for ceremonies and rituals</li>
                        <li>• Food sharing demonstrates hospitality</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="traditions" className="animate-fade-in">
              <div className="space-y-8">
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle>Sacred Ceremonies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 prose">
                      Alur ceremonial life centers around the installation of chiefs, seasonal festivals, and life transition rituals that connect the living with ancestral spirits and ensure community harmony.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Chief Installation</h4>
                        <p className="text-sm text-muted-foreground prose">
                          The ceremony of installing a new Rwodi involves ritual purification, ancestral invocation, and community blessing. Sacred objects are passed down, symbolizing the continuity of leadership and spiritual protection.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Harvest Celebrations</h4>
                        <p className="text-sm text-muted-foreground prose">
                          Annual harvest festivals include traditional dances, communal feasting, and gratitude ceremonies to mountain spirits who bless the highland crops with abundance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="names" className="animate-fade-in">
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle>Traditional Names</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 prose">
                    Alur names carry deep cultural significance, often reflecting circumstances of birth, family lineage, spiritual beliefs, or aspirations for the child's future within the community.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Common Male Names</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li><strong>Okello</strong> - Born after twins</li>
                        <li><strong>Ojok</strong> - Born in the dry season</li>
                        <li><strong>Otim</strong> - Born during difficult times</li>
                        <li><strong>Odong</strong> - Born during war</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Common Female Names</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li><strong>Akello</strong> - Born after twins (female)</li>
                        <li><strong>Ayok</strong> - Born in the dry season (female)</li>
                        <li><strong>Atim</strong> - Born during difficult times (female)</li>
                        <li><strong>Adong</strong> - Born during war (female)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="places" className="animate-fade-in">
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle>Cultural Landmarks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 prose">
                    The Alur homeland features sacred sites, historical settlements, and natural landmarks that hold deep spiritual and cultural significance for the community.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Sacred Sites</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li><strong>Pakwach</strong> - Historic crossing point on the Nile</li>
                        <li><strong>Nebbi</strong> - Traditional administrative center</li>
                        <li><strong>Mount Otzi</strong> - Sacred mountain for rituals</li>
                        <li><strong>River Nyagak</strong> - Spiritual cleansing site</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Cultural Significance</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Ancient migration routes and settlements</li>
                        <li>• Traditional fishing and farming areas</li>
                        <li>• Sites of historical battles and victories</li>
                        <li>• Sacred groves for ancestral worship</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

export default AlurTribe;