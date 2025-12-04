import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BodaButton } from "@/components/ui/boda-button";
import { Heart, Users, BookOpen, Globe, Mail, Phone } from "lucide-react";
import culturalResearchTeam from "@/assets/cultural-research-team.jpg";
import editorialStandards from "@/assets/editorial-standards-workspace.jpg";
import partnershipCollaboration from "@/assets/partnership-collaboration.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Why Boda?
          </h1>
          <div className="bg-accent/10 rounded-lg p-8 mb-8">
            <p className="text-xl text-foreground leading-relaxed">
              "Just like boda-bodas connect people across Uganda, we connect you to the rich tapestry of traditions, stories, and heritage that make Uganda extraordinary."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Boda began as a simple observation: Uganda's incredible cultural diversity deserves 
                a modern, accessible platform that honors tradition while embracing the future. 
                Too many stories remain untold, too many traditions undocumented.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're creating the definitive cultural resource for Uganda – bridging generations, 
                connecting communities, and ensuring that the wisdom of our ancestors becomes 
                accessible knowledge for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Research Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={culturalResearchTeam} 
              alt="Cultural researchers collaborating with Ugandan elders to document traditional knowledge"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Authenticity",
                description: "Every story, tradition, and cultural insight is researched and verified with cultural custodians."
              },
              {
                icon: Users,
                title: "Community",
                description: "We work directly with tribal elders, cultural leaders, and community members as partners."
              },
              {
                icon: BookOpen,
                title: "Education",
                description: "Making cultural knowledge accessible to everyone – from children to scholars."
              },
              {
                icon: Globe,
                title: "Connection",
                description: "Bridging Uganda with the world, and connecting diaspora communities to their roots."
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="boda-card text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Editorial Standards */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="boda-card">
            <CardHeader>
              <CardTitle className="text-2xl">Editorial Standards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src={editorialStandards} 
                  alt="Editorial workspace with research materials and cultural artifacts"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Research Methodology</h3>
                <p className="text-muted-foreground mb-3">
                  All cultural content is researched through primary sources including interviews with cultural elders, 
                  historical documentation, and collaboration with recognized cultural institutions.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cultural Sensitivity</h3>
                <p className="text-muted-foreground mb-3">
                  We work closely with community leaders to ensure respectful representation of traditions, 
                  sacred practices, and cultural knowledge. Sensitive content is reviewed by cultural custodians.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Accuracy & Updates</h3>
                <p className="text-muted-foreground">
                  Our content is continuously reviewed and updated as we learn more. We welcome corrections 
                  and additional insights from community members and cultural experts.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partnerships Section */}
        <div id="partnerships" className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Partnerships
          </h2>
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={partnershipCollaboration} 
              alt="Diverse partners collaborating on cultural preservation initiatives in Uganda"
              className="w-full h-80 object-cover"
            />
          </div>
          <Card className="boda-card">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6 text-center">
                We collaborate with cultural institutions, tourism boards, and local communities 
                to ensure authentic and respectful cultural representation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Cultural Partners</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Traditional Kingdom Councils</li>
                    <li>• Cultural Research Institutions</li>
                    <li>• Community Elder Networks</li>
                    <li>• Heritage Preservation Groups</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Tourism Partners</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Uganda Tourism Board</li>
                    <li>• Cultural Heritage Sites</li>
                    <li>• Local Lodge Partners</li>
                    <li>• Community Tourism Initiatives</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Interested in partnering with Boda?
                </p>
                <Link to="/contact">
                  <BodaButton variant="primary">
                    Contact Us About Partnerships
                  </BodaButton>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Press Section */}
        <div id="press" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Press & Media
          </h2>
          <Card className="boda-card">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-6">
                For press inquiries, brand assets, or media requests, please contact our media team.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Press Kit Includes</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• High-resolution logos and brand assets</li>
                    <li>• Founder and team photography</li>
                    <li>• Project background and story</li>
                    <li>• Cultural partnership details</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Media Contact</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>press@boda.ug</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+256 XXX XXX XXX</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <BodaButton variant="secondary">
                Download Press Kit
              </BodaButton>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-foreground rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Have questions about Uganda's culture? Want to contribute stories? 
            Interested in partnerships? We'd love to hear from you.
          </p>
          <Link to="/contact">
            <BodaButton variant="primary" size="lg">
              Contact Us
            </BodaButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;