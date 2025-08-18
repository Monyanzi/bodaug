import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BodaButton } from "@/components/ui/boda-button";
import { Shirt, Calendar, Users, MapPin, ArrowLeft } from "lucide-react";
import gomesiImage from "@/assets/gomesi-traditional.jpg";

const Gomesi = () => {
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
            <span className="text-foreground">Gomesi</span>
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
                src={gomesiImage} 
                alt="Traditional Ugandan Gomesi dress" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shirt className="h-8 w-8 text-yellow-400" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Gomesi</h1>
              <p className="text-xl">
                The elegant traditional dress of Baganda women
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle>About the Gomesi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The Gomesi is a traditional Ugandan dress worn by women, particularly among the Baganda people. 
                    Known for its distinctive square neckline, colorful sash (omusuka), and floor-length design, 
                    the Gomesi represents elegance, cultural pride, and Ugandan femininity.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    The dress features a unique silhouette with puffed shoulders, a fitted bodice, and a flowing 
                    skirt that gracefully sweeps the ground. The omusuka (sash) is worn around the waist and 
                    serves both decorative and symbolic purposes.
                  </p>
                </CardContent>
              </Card>

              {/* History & Origin */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle>History & Cultural Significance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Origins</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The Gomesi evolved from traditional bark cloth garments and was influenced by 
                      Victorian-era dressing styles during the colonial period. It became standardized 
                      in the early 20th century as a symbol of cultural identity and resistance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cultural Meaning</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Beyond clothing, the Gomesi represents dignity, cultural continuity, and Ugandan 
                      womanhood. The way it's worn, the colors chosen, and the occasions for wearing it 
                      all carry cultural significance and social messages.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Modern Evolution</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Today's Gomesi maintains its traditional structure while incorporating modern fabrics, 
                      colors, and subtle design variations. It remains a source of pride for Ugandan women 
                      both at home and in the diaspora.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Construction & Design */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle>Design Elements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Key Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Square neckline (distinctive identifier)</li>
                        <li>• Puffed shoulders and sleeves</li>
                        <li>• Fitted bodice with princess seaming</li>
                        <li>• Floor-length flowing skirt</li>
                        <li>• Omusuka (decorative sash)</li>
                        <li>• Traditional button closure</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Fabric Choices</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Silk (premium occasions)</li>
                        <li>• Cotton (everyday wear)</li>
                        <li>• Kitenge fabric (colorful patterns)</li>
                        <li>• Linen (formal events)</li>
                        <li>• Modern synthetic blends</li>
                        <li>• Traditional bark cloth (ceremonial)</li>
                      </ul>
                    </div>
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
                    <span className="text-muted-foreground">Primarily Baganda women</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">Central Uganda origin</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">Evolved early 1900s</span>
                  </div>
                </CardContent>
              </Card>

              {/* When to Wear */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle className="text-lg">When to Wear</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Wedding ceremonies (bride and guests)</li>
                    <li>• Cultural celebrations and festivals</li>
                    <li>• Graduation ceremonies</li>
                    <li>• Religious services (Sunday best)</li>
                    <li>• Traditional kingdom functions</li>
                    <li>• Important family gatherings</li>
                    <li>• Cultural presentations abroad</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Etiquette */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle className="text-lg">Wearing Etiquette</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Always wear appropriate undergarments</li>
                    <li>• Sash should be tied properly on the side</li>
                    <li>• Hem should touch the ground gracefully</li>
                    <li>• Choose colors appropriate for occasion</li>
                    <li>• Maintain modest posture and movement</li>
                    <li>• Respect the cultural significance</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Related Links */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle className="text-lg">Related</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/attire/kanzu" className="block text-sm text-accent hover:underline">
                    Kanzu (Men's traditional wear)
                  </Link>
                  <Link to="/materials/bark-cloth" className="block text-sm text-accent hover:underline">
                    Bark Cloth (Traditional fabric)
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
              Learn More About Ugandan Culture
            </h2>
            <p className="text-muted-foreground mb-6">
              The Gomesi is just one example of Uganda's rich cultural heritage. 
              Explore more traditions, stories, and cultural practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tribes/baganda">
                <BodaButton variant="primary">
                  Explore Baganda Culture
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

export default Gomesi;