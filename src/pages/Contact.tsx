import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "General inquiries and partnerships",
      contact: "hello@boda.ug",
      action: "mailto:hello@boda.ug"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick questions and support",
      contact: "+256 XXX XXX XXX", 
      action: "https://wa.me/256XXXXXXX"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Media and partnership inquiries",
      contact: "+256 XXX XXX XXX",
      action: "tel:+256XXXXXXX"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Cultural research headquarters",
      contact: "Kampala, Uganda",
      action: "#"
    }
  ];

  const topics = [
    "General Inquiry",
    "Cultural Contribution", 
    "Partnership Opportunity",
    "Media/Press Inquiry",
    "Book Pre-order Support",
    "Cultural Correction",
    "Tourism Partnership",
    "Technical Support",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24-48 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 boda-card">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-accent-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-muted-foreground mb-6">
              Thank you for reaching out. We'll get back to you within 24-48 hours.
            </p>
            <div className="space-y-3">
              <BodaButton variant="primary" className="w-full" onClick={() => navigate("/")}>
                Return to Home
              </BodaButton>
              <BodaButton variant="secondary" className="w-full" onClick={() => window.location.reload()}>
                Send Another Message
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
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="relative mb-12 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={contactHero} 
              alt="Get in touch with Boda - connecting Uganda's culture with the world"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Get in Touch
              </h1>
            </div>
          </div>
          
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you have cultural stories to share, partnership ideas, or just want to say hello - 
              we'd love to hear from you. Every conversation helps us build a richer cultural resource.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="boda-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  We typically respond within 24-48 hours.
                </p>
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
                  
                  <Select value={formData.topic} onValueChange={(value) => setFormData(prev => ({ ...prev, topic: value }))}>
                    <SelectTrigger className="boda-input">
                      <SelectValue placeholder="What's this about? (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {topics.map((topic, index) => (
                        <SelectItem key={index} value={topic}>
                          {topic}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Textarea
                    placeholder="Your message *"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="boda-input min-h-[120px]"
                    required
                  />

                  <BodaButton type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                  </BodaButton>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. We respect your privacy and won't share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Other Ways to Reach Us
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <Card key={index} className="boda-card">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                              <IconComponent className="h-5 w-5 text-accent" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground">{method.title}</h3>
                              <p className="text-sm text-muted-foreground mb-1">
                                {method.description}
                              </p>
                              <a 
                                href={method.action}
                                className="text-accent hover:underline text-sm font-medium"
                                target={method.action.startsWith('http') ? '_blank' : undefined}
                                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {method.contact}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Office Hours */}
              <Card className="boda-card">
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM EAT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">10:00 AM - 4:00 PM EAT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      <strong>Note:</strong> We're a small team passionate about Ugandan culture. 
                      While we aim to respond quickly, cultural research trips may occasionally delay responses.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contribution Encouragement */}
              <Card className="boda-card bg-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Have Cultural Stories to Share?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We're always looking for authentic cultural stories, traditions, and insights. 
                    If you're a cultural elder, storyteller, or have family traditions to share, 
                    we'd be honored to learn from you.
                  </p>
                  <BodaButton variant="secondary" size="sm">
                    Learn About Contributing
                  </BodaButton>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;