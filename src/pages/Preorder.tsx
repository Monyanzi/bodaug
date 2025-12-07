import { useState, useEffect } from "react";
import { BodaButton } from "@/components/ui/boda-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Check, X, Book } from "lucide-react";
import definitiveEditionImage from "@/assets/boda-definitive-edition.jpg";
import travellersEditionImage from "@/assets/boda-travellers-edition.jpg";
import childrensEditionImage from "@/assets/boda-childrens-edition.jpg";
import scholarEditionImage from "@/assets/boda-scholar-edition.jpg";
import investorEditionImage from "@/assets/boda-investor-edition.jpg";

const Preorder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
  });
  const [selectedEditions, setSelectedEditions] = useState<
    { id: string; quantity: number }[]
  >([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedEmail = localStorage.getItem("preorderEmail");
    if (storedEmail) {
      setFormData((prev) => ({ ...prev, email: storedEmail }));
    }
  }, []);

  const editions = [
    {
      id: "definitive",
      name: "Boda: Definitive Edition",
      description: "The complete cultural encyclopedia of Uganda",
      features: ["Premium hardcover", "500+ pages", "Exclusive photography", "Cultural maps"],
      badge: "Most Complete",
      image: definitiveEditionImage
    },
    {
      id: "traveller",
      name: "Boda: Travellers Edition",
      description: "Pocket-friendly guide for explorers",
      features: ["Compact size", "Essential insights", "Travel-ready", "Quick reference"],
      badge: "Getting Around",
      image: travellersEditionImage
    },
    {
      id: "children",
      name: "Boda: Children's Edition",
      description: "Stories and traditions for young minds",
      features: ["Colorful illustrations", "Simple language", "Interactive elements", "Age 6-12"],
      badge: "Family Friendly",
      image: childrensEditionImage
    },
    {
      id: "scholar",
      name: "Boda: Scholar Edition",
      description: "Academic research and detailed analysis",
      features: ["Extensive references", "Research notes", "Academic format", "University-grade"],
      badge: "In-Depth",
      image: scholarEditionImage
    },
    {
      id: "investor",
      name: "Boda: Investor Edition",
      description: "Business and investment opportunities",
      features: ["Market analysis", "Investment guides", "Business culture", "Economic insights"],
      badge: "Business Focus",
      image: investorEditionImage
    }
  ];

  const handleAddEdition = (editionId: string) => {
    if (selectedEditions.some((e) => e.id === editionId)) {
      toast({
        title: "Already Selected",
        description: "You have already selected this edition.",
        variant: "destructive",
      });
      return;
    }
    setSelectedEditions([...selectedEditions, { id: editionId, quantity: 1 }]);
  };

  const handleRemoveEdition = (index: number) => {
    const newEditions = [...selectedEditions];
    newEditions.splice(index, 1);
    setSelectedEditions(newEditions);
  };

  const handleQuantityChange = (index: number, quantity: number) => {
    if (quantity < 1) {
        return;
    }
    const newEditions = [...selectedEditions];
    newEditions[index].quantity = quantity;
    setSelectedEditions(newEditions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || selectedEditions.length === 0) {
      toast({
        title: "Missing information",
        description:
          "Please fill in your name, email, and select at least one edition.",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem("preorderEmail", formData.email);

    const newPreorders = selectedEditions.map((edition) => ({
      ...formData,
      edition: edition.id,
      quantity: edition.quantity,
      id: `${new Date().toISOString()}-${edition.id}`,
      date: new Date().toISOString(),
    }));

    const existingPreorders = JSON.parse(
      localStorage.getItem("preorders") || "[]"
    );
    const updatedPreorders = [...existingPreorders, ...newPreorders];
    localStorage.setItem("preorders", JSON.stringify(updatedPreorders));

    setIsSubmitted(true);
    toast({
      title: "Pre-order Confirmed!",
      description: `Thank you for your pre-order.`,
    });

    setSelectedEditions([]);
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
              Thank you for your pre-order!
            </h1>
            <p className="text-muted-foreground mb-6">
              You can pre-order another edition below.
            </p>
            <div className="space-y-3">
              <BodaButton
                variant="primary"
                className="w-full"
                onClick={() => setIsSubmitted(false)}
              >
                Pre-order Another Edition
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
              Reserve your copy and be the first to own the definitive cultural &
              travel showcase of Uganda.
            </p>
          </div>

          {/* Edition Selection */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Choose Your Edition(s)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {editions.map((edition) => (
                <Card
                  key={edition.id}
                  className={`boda-card cursor-pointer transition-all overflow-hidden ${
                    selectedEditions.some(e => e.id === edition.id) ? 'border-accent border-2' : ''
                  }`}
                  onClick={() => handleAddEdition(edition.id)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={edition.image} 
                      alt={`${edition.name} book cover mockup`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{edition.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {edition.badge}
                      </Badge>
                    </div>
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
          <Card className="max-w-2xl mx-auto boda-card mb-12">
            <CardHeader>
              <CardTitle className="text-xl text-center">Your Pre-order</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {selectedEditions.length > 0 ? (
                  <div className="space-y-4">
                    {selectedEditions.map((edition, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <Input
                          value={editions.find(e => e.id === edition.id)?.name}
                          className="boda-input"
                          readOnly
                        />
                        <Input
                          type="number"
                          min="1"
                          value={edition.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              index,
                              parseInt(e.target.value)
                            )
                          }
                          className="boda-input w-24"
                        />
                        <BodaButton
                          variant="destructive"
                          onClick={() => handleRemoveEdition(index)}
                        >
                          <X className="h-4 w-4" />
                        </BodaButton>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground">
                    Select one or more editions above to begin your pre-order.
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="boda-input"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your email *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="boda-input"
                    required
                  />
                </div>

                <Input
                  placeholder="Country (optional)"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      country: e.target.value,
                    }))
                  }
                  className="boda-input"
                />

                <BodaButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={selectedEditions.length === 0}
                >
                  Reserve your copies
                </BodaButton>

                <p className="text-xs text-muted-foreground text-center">
                  * Required fields. No spam - you'll only receive launch
                  updates and early access.
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