import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BodaButton } from "@/components/ui/boda-button";
import { Shirt, Calendar, Users, MapPin, ArrowLeft, Crown } from "lucide-react";
import kanzuImage from "@/assets/kanzu-traditional.jpg";

const Kanzu = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/tribes" className="hover:text-accent boda-underline">Tribes</Link>
            <span>›</span>
            <Link to="/tribes/baganda" className="hover:text-accent boda-underline">Baganda</Link>
            <span>›</span>
            <span className="text-foreground">Kanzu</span>
          </div>

          {/* Back Link */}
          <Link to="/tribes/baganda" className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Baganda Culture
          </Link>

          {/* Header */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={kanzuImage} 
                alt="Traditional Ugandan Kanzu robe" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-8 w-8 text-yellow-400" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Kanzu</h1>
              <p className="text-xl">
                The distinguished traditional robe of Baganda men
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle>About the Kanzu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The Kanzu is a traditional white or cream-colored robe worn by Baganda men during 
                    formal occasions and cultural ceremonies. This flowing, ankle-length garment 
                    represents dignity, respect, and cultural identity in Ugandan society.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Characterized by its simple yet elegant design, the Kanzu features a round neckline, 
                    long sleeves, and a loose-fitting silhouette that allows for comfortable movement 
                    during ceremonies and formal gatherings.
                  </p>
                </CardContent>
              </Card>

              {/* History & Significance */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle>History & Cultural Significance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Royal Origins</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The Kanzu has deep roots in the Buganda Kingdom, traditionally worn by the 
                      Kabaka (king), chiefs, and court officials. Its design symbolizes purity, 
                      wisdom, and the wearer's respect for cultural traditions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Ceremonial Importance</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The Kanzu is essential attire for significant life events including weddings, 
                      graduations, religious ceremonies, and traditional court proceedings. 
                      The white color represents peace, truth, and spiritual purity.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Modern Relevance</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Today, the Kanzu remains a powerful symbol of Ugandan cultural identity. 
                      It's worn with pride by men in the diaspora and continues to play a central 
                      role in preserving Baganda cultural heritage.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Design & Construction */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle>Design & Construction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Design Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Round neckline (no collar)</li>
                        <li>• Long, loose-fitting sleeves</li>
                        <li>• Ankle-length flowing design</li>
                        <li>• Front button or tie closure</li>
                        <li>• Minimal embellishment</li>
                        <li>• Straight, comfortable cut</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Traditional Materials</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• White cotton (most common)</li>
                        <li>• Cream-colored linen</li>
                        <li>• Fine cotton blends</li>
                        <li>• Lightweight wool (special occasions)</li>
                        <li>• High-quality cotton muslin</li>
                        <li>• Silk (for royalty/VIPs)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Care & Maintenance</h4>
                    <p className="text-sm text-muted-foreground">
                      The Kanzu requires careful maintenance to preserve its pristine white appearance. 
                      Traditional care involves hand washing, proper starching, and careful pressing 
                      to maintain the garment's dignity and symbolic purity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">Baganda men & boys</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">Buganda Kingdom</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">Centuries-old tradition</span>
                  </div>
                </CardContent>
              </Card>

              {/* Occasions */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle className="text-lg">When to Wear</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Wedding ceremonies (groom & guests)</li>
                    <li>• Graduation ceremonies</li>
                    <li>• Religious services (special occasions)</li>
                    <li>• Traditional court proceedings</li>
                    <li>• Cultural festivals and celebrations</li>
                    <li>• Funeral ceremonies (showing respect)</li>
                    <li>• Government ceremonial events</li>
                    <li>• International cultural presentations</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Wearing Protocol */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle className="text-lg">Proper Wearing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Ensure garment is clean and pressed</li>
                    <li>• Wear appropriate undergarments</li>
                    <li>• Maintain dignified posture</li>
                    <li>• Avoid rushing or hurried movement</li>
                    <li>• Respect the cultural significance</li>
                    <li>• Consider the occasion's formality</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Related Content */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle className="text-lg">Related</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/attire/gomesi" className="block text-sm text-accent hover:underline">
                    Gomesi (Women's traditional dress)
                  </Link>
                  <Link to="/materials/bark-cloth" className="block text-sm text-accent hover:underline">
                    Bark Cloth (Traditional material)
                  </Link>
                  <Link to="/tribes/baganda" className="block text-sm text-accent hover:underline">
                    Baganda Culture Overview
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Discover More Cultural Traditions
            </h2>
            <p className="text-muted-foreground mb-6">
              The Kanzu represents just one facet of Uganda's rich cultural tapestry. 
              Explore more traditions, stories, and heritage from across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tribes/baganda">
                <BodaButton variant="primary">
                  Explore Baganda Heritage
                </BodaButton>
              </Link>
              <Link to="/book">
                <BodaButton variant="secondary">
                  Learn About Book Series
                </BodaButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanzu;