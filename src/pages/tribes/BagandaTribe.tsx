import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { Crown, MapPin, Users, Book, Utensils, Shirt, Home } from "lucide-react";
import bagandaTribeImage from "@/assets/baganda-tribe.jpg";

const BagandaTribe = () => {
  const relatedContent = [
    { title: "Gomesi", description: "Traditional women's attire", href: "/attire/gomesi", icon: Shirt },
    { title: "Kanzu", description: "Traditional men's garment", href: "/attire/kanzu", icon: Shirt },
    { title: "Bark Cloth", description: "Ancient fabric tradition", href: "/materials/bark-cloth", icon: Home },
    { title: "Luwombo", description: "Steamed delicacy", href: "/food/luwombo", icon: Utensils },
    { title: "Mukasa", description: "Lake spirit name", href: "/names/mukasa", icon: Book },
    { title: "Kintu & Nambi", description: "Creation story", href: "/stories/kintu-and-nambi", icon: Book }
  ];

  const relatedTribes = [
    { name: "Banyoro", description: "Western neighbors with shared history" },
    { name: "Basoga", description: "Eastern cousins along the Nile" },
    { name: "Batooro", description: "Mountain kingdom connections" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <div className="aspect-video relative">
              <img 
                src={bagandaTribeImage} 
                alt="Baganda people in traditional dress" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                  <h1 className="text-5xl font-bold mb-2">Baganda</h1>
                  <p className="text-xl">The Kingdom Builders</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <Badge className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              Central Uganda
            </Badge>
            <Badge variant="outline">Buganda Kingdom</Badge>
            <Badge variant="outline">Luganda Language</Badge>
            <Badge variant="outline">Est. 14th Century</Badge>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The Baganda people form the largest ethnic group in Uganda and are the core of the ancient Buganda Kingdom. 
            Known for their sophisticated political system, rich cultural traditions, and influential role in Uganda's history, 
            the Baganda have preserved centuries-old customs while adapting to modern times.
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-accent" />
                      Cultural Identity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Kingdom Structure</h4>
                      <p className="text-sm text-muted-foreground">
                        The Baganda maintain a sophisticated monarchical system with the Kabaka (king) at its center, 
                        supported by chiefs and clan leaders who govern different aspects of society.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Clan System</h4>
                      <p className="text-sm text-muted-foreground">
                        Society is organized around 52 clans (ebika), each with its own totem (muziro), 
                        taboos, and ancestral lands that define identity and marriage customs.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="boda-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-accent" />
                      Language & Literature
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Luganda Language</h4>
                      <p className="text-sm text-muted-foreground">
                        Luganda serves as both the native language and lingua franca of central Uganda, 
                        known for its tonal complexity and rich proverb tradition.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Oral Traditions</h4>
                      <p className="text-sm text-muted-foreground">
                        Stories, proverbs (engero), and praise songs preserve historical knowledge, 
                        moral teachings, and cultural values passed down through generations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted/50 rounded-r-lg">
                <p className="text-lg italic text-foreground mb-2">
                  "Omukama w'eggwanga ye Kabaka" - The king is the leader of the nation
                </p>
                <p className="text-sm text-muted-foreground">
                  This proverb reflects the central role of the Kabaka in Baganda society and governance.
                </p>
              </blockquote>
            </TabsContent>

            <TabsContent value="clothing">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    title: "Gomesi",
                    description: "The elegant traditional dress for women, featuring a square neckline and sash",
                    link: "/attire/gomesi",
                    occasions: "Weddings, ceremonies, cultural events"
                  },
                  {
                    title: "Kanzu", 
                    description: "Men's formal white robe worn during important ceremonies",
                    link: "/attire/kanzu",
                    occasions: "Royal functions, religious ceremonies, graduations"
                  }
                ].map((item, index) => (
                  <Card key={index} className="boda-card">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{item.title}</span>
                        <Link to={item.link}>
                          <BodaButton variant="ghost" size="sm">Learn More</BodaButton>
                        </Link>
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
            </TabsContent>

            <TabsContent value="food">
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-accent" />
                      Luwombo - The Royal Delicacy
                    </div>
                    <Link to="/food/luwombo">
                      <BodaButton variant="ghost" size="sm">Full Recipe</BodaButton>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Luwombo is the signature dish of Buganda, traditionally prepared by steaming meat, 
                    fish, or chicken with vegetables and groundnut sauce wrapped in banana leaves.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Cultural Significance</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Originally prepared only for the Kabaka</li>
                        <li>• Symbol of hospitality and celebration</li>
                        <li>• Represents harmony of ingredients</li>
                        <li>• Passed down through royal cooks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Traditional Preparation</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Fresh banana leaves as wrapping</li>
                        <li>• Slow steaming over charcoal</li>
                        <li>• Groundnuts (peanuts) for sauce base</li>
                        <li>• Local spices and herbs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Featured Name: Mukasa</span>
                    <Link to="/names/mukasa">
                      <BodaButton variant="ghost" size="sm">Learn More</BodaButton>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Mukasa is one of the most important traditional names in Buganda, 
                    associated with lake spirits and divine protection.
                  </p>
                  <div>
                    <span className="text-sm font-medium text-foreground">Cultural Context: </span>
                    <span className="text-sm text-muted-foreground">
                      Connected to Mukasa, the god of Lake Victoria and fertility in traditional Baganda religion.
                    </span>
                  </div>
                </CardContent>
              </Card>
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

        {/* Related Content */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Explore More Baganda Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {relatedContent.map((item, index) => {
              const IconComponent = item.icon;
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

          {/* Related Tribes */}
          <div className="bg-secondary rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Related Tribes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedTribes.map((tribe, index) => (
                <div key={index} className="boda-chip flex items-center justify-between p-4 rounded-lg">
                  <div>
                    <div className="font-medium text-foreground">{tribe.name}</div>
                    <div className="text-sm text-muted-foreground">{tribe.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagandaTribe;