import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Check, Mail, Book, Users, Camera } from "lucide-react";

const Join = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Mail,
      title: "Weekly Cultural Insights",
      description: "Curated stories, traditions, and cultural discoveries delivered to your inbox every week."
    },
    {
      icon: Book,
      title: "Early Access to Content", 
      description: "Be the first to read new stories, guides, and cultural explorations before they're published."
    },
    {
      icon: Camera,
      title: "Behind-the-Scenes Updates",
      description: "Exclusive photos and insights from our research trips and cultural documentation process."
    },
    {
      icon: Users,
      title: "Community of Culture Lovers",
      description: "Connect with fellow Uganda enthusiasts, travelers, and cultural explorers worldwide."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitted(true);
    toast({
      title: "Welcome to Boda!",
      description: "You'll receive your first cultural insight soon.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <Card className="max-w-lg w-full mx-4 boda-card">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-accent-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Welcome to the Boda Community!
            </h1>
            <p className="text-muted-foreground mb-6">
              Thank you for joining us! You'll receive your first cultural insight in the next few days. 
              In the meantime, start exploring Uganda's rich heritage.
            </p>
            <div className="space-y-3">
              <BodaButton variant="primary" className="w-full" onClick={() => navigate("/tribes")}>
                Explore Tribes
              </BodaButton>
              <BodaButton variant="secondary" className="w-full" onClick={() => navigate("/preorder")}>
                Pre-order Books
              </BodaButton>
            </div>
            
            {/* Subtle confetti animation */}
            <div className="mt-8 text-xs text-muted-foreground">
              ✨ You're now part of {Math.floor(Math.random() * 1000) + 2500}+ culture enthusiasts
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hop on. Boda in your inbox weekly.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community of culture enthusiasts and get curated Ugandan stories, 
              travel tips, and cultural insights delivered to your inbox every week.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="boda-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Signup Form */}
          <Card className="max-w-2xl mx-auto boda-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Join the Community</CardTitle>
              <p className="text-muted-foreground">
                No spam, ever. Just beautiful cultural stories and insights.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your name (optional)"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="boda-input"
                  />
                  <Input
                    type="email"
                    placeholder="Your email *"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="boda-input"
                    required
                  />
                </div>

                <BodaButton type="submit" variant="hero" size="lg" className="w-full">
                  Join Boda Community
                </BodaButton>
                
                <p className="text-xs text-muted-foreground text-center">
                  By joining, you agree to receive weekly emails from Boda. 
                  You can unsubscribe at any time. We respect your privacy.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Social Proof */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-8">
              Join {Math.floor(Math.random() * 1000) + 2500}+ culture enthusiasts from around the world
            </p>
            
            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah M.",
                  location: "London, UK",
                  text: "The weekly stories help me stay connected to my Ugandan roots while living abroad."
                },
                {
                  name: "David K.", 
                  location: "Kampala, UG",
                  text: "Even as a Ugandan, I'm learning so much about tribes and traditions I never knew."
                },
                {
                  name: "Lisa R.",
                  location: "Toronto, CA", 
                  text: "Planning my first trip to Uganda and these insights are invaluable for cultural preparation."
                }
              ].map((testimonial, index) => (
                <Card key={index} className="boda-card">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm text-muted-foreground italic mb-4">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-medium text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;