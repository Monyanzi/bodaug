import { useState } from "react";
import { BodaButton } from "@/components/ui/boda-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Check, Book } from "lucide-react";

const Preorder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    edition: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const editions = [
    {
      id: "definitive",
      name: "Definitive Edition",
      description: "The complete cultural encyclopedia of Uganda",
      features: ["Premium hardcover", "500+ pages", "Exclusive photography", "Cultural maps"],
      badge: "Most Complete"
    },
    {
      id: "traveler",
      name: "Travel Guide",
      description: "Pocket-friendly guide for explorers",
      features: ["Compact size", "Essential insights", "Travel-ready", "Quick reference"],
      badge: "Getting Around"
    },
    {
      id: "children",
      name: "Children's Edition",
      description: "Stories and traditions for young minds",
      features: ["Colorful illustrations", "Simple language", "Interactive elements", "Age 6-12"],
      badge: "Family Friendly"
    },
    {
      id: "scholar",
      name: "Scholar Edition",
      description: "Academic research and detailed analysis",
      features: ["Extensive references", "Research notes", "Academic format", "University-grade"],
      badge: "In-Depth"
    },
    {
      id: "investor",
      name: "Investor Edition",
      description: "Business and investment opportunities",
      features: ["Market analysis", "Investment guides", "Business culture", "Economic insights"],
      badge: "Business Focus"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitted(true);
    toast({
      title: "Pre-order confirmed!",
      description: "You'll receive launch updates and early access.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <Card className="max-w-md w-full mx-4 boda-card">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-accent-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Thank you for pre-ordering!
            </h1>
            <p className="text-muted-foreground mb-6">
              You'll be the first to know when the Boda Book Series launches. Share with friends who love Uganda!
            </p>
            <div className="space-y-3">
              <BodaButton variant="primary" className="w-full">
                Share with Friends
              </BodaButton>
              <BodaButton variant="secondary" className="w-full" onClick={() => window.location.href = "/tribes"}>
                Explore Tribes
              </BodaButton>
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Pre-order the Boda Book Series
            </h1>
            <p className="text-xl text-muted-foreground">
              Reserve your copy and be the first to own the definitive cultural & travel showcase of Uganda.
            </p>
          </div>

          {/* Edition Selection */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Choose Your Edition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {editions.map((edition) => (
                <Card 
                  key={edition.id}
                  className={`boda-card cursor-pointer transition-all ${
                    formData.edition === edition.id ? 'border-accent border-2' : ''
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, edition: edition.id }))}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Book className="h-8 w-8 text-accent" />
                      <Badge variant="secondary" className="text-xs">
                        {edition.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{edition.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {edition.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {edition.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pre-order Form */}
          <Card className="max-w-2xl mx-auto boda-card">
            <CardHeader>
              <CardTitle className="text-xl text-center">Reserve Your Copy</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your name *"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="boda-input"
                    required
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
                
                <Input
                  placeholder="Country (optional)"
                  value={formData.country}
                  onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                  className="boda-input"
                />
                
                <Select value={formData.edition} onValueChange={(value) => setFormData(prev => ({ ...prev, edition: value }))}>
                  <SelectTrigger className="boda-input">
                    <SelectValue placeholder="Select preferred edition" />
                  </SelectTrigger>
                  <SelectContent>
                    {editions.map((edition) => (
                      <SelectItem key={edition.id} value={edition.id}>
                        {edition.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <BodaButton type="submit" variant="hero" size="lg" className="w-full">
                  Reserve your copy
                </BodaButton>
                
                <p className="text-xs text-muted-foreground text-center">
                  * Required fields. No spam - you'll only receive launch updates and early access.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "When will the books be available?",
                  a: "The Boda Book Series is planned for launch in Q2 2025. Pre-order customers will receive early access."
                },
                {
                  q: "How much will the books cost?",
                  a: "Pricing will be announced closer to launch. Pre-order customers will receive exclusive early-bird pricing."
                },
                {
                  q: "Can I change my edition choice later?",
                  a: "Yes, you can update your preferences until the final order confirmation before launch."
                }
              ].map((item, index) => (
                <Card key={index} className="boda-card">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
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

export default Preorder;