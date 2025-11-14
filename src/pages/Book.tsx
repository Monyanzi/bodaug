import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BodaButton } from "@/components/ui/boda-button";
import { Book, Users, GraduationCap, Briefcase, Baby } from "lucide-react";
import bookSeriesImage from "@/assets/boda-book-series.jpg";
import readingBodaBook from "@/assets/reading-boda-book.jpg";
import definitiveEditionImage from "@/assets/boda-definitive-edition.jpg";
import travellersEditionImage from "@/assets/boda-travellers-edition.jpg";
import childrensEditionImage from "@/assets/boda-childrens-edition.jpg";
import scholarEditionImage from "@/assets/boda-scholar-edition.jpg";
import investorEditionImage from "@/assets/boda-investor-edition.jpg";

const BookPage = () => {
  const editions = [
    {
      id: "definitive",
      title: "Definitive Edition",
      audience: "Cultural enthusiasts & collectors",
      format: "Premium hardcover, 500+ pages",
      description: "The complete cultural encyclopedia of Uganda with exclusive photography and detailed cultural maps.",
      features: ["Premium hardcover binding", "500+ pages of content", "Exclusive photography", "Cultural heritage maps", "Limited edition numbering"],
      mockup: definitiveEditionImage,
      badge: "Most Complete",
      icon: Book
    },
    {
      id: "traveler", 
      title: "Traveler Edition",
      audience: "Tourists & adventurers",
      format: "Compact paperback, travel-ready",
      description: "Essential cultural guide perfect for travelers who want to connect authentically with Uganda.",
      features: ["Pocket-friendly size", "Essential cultural insights", "Quick reference guides", "Travel etiquette tips", "Waterproof cover"],
      mockup: travellersEditionImage,
      badge: "Most Popular",
      icon: Users
    },
    {
      id: "children",
      title: "Children's Edition", 
      audience: "Ages 6-12",
      format: "Illustrated storybook format",
      description: "Colorful stories and traditions designed to introduce young minds to Uganda's rich cultural heritage.",
      features: ["Beautiful illustrations", "Age-appropriate language", "Interactive elements", "Cultural activities", "Parent/teacher guides"],
      mockup: childrensEditionImage,
      badge: "Family Friendly",
      icon: Baby
    },
    {
      id: "scholar",
      title: "Scholar Edition",
      audience: "Academics & researchers",
      format: "Academic reference, 600+ pages", 
      description: "Comprehensive academic resource with extensive research, citations, and detailed cultural analysis.",
      features: ["Extensive bibliography", "Research methodologies", "Academic citations", "Peer-reviewed content", "University-grade analysis"],
      mockup: scholarEditionImage,
      badge: "In-Depth",
      icon: GraduationCap
    },
    {
      id: "investor",
      title: "Investor Edition",
      audience: "Business professionals",
      format: "Business guide, market insights",
      description: "Business-focused guide covering investment opportunities, market culture, and economic insights.",
      features: ["Market analysis", "Investment opportunities", "Business etiquette", "Economic data", "Success case studies"],
      mockup: investorEditionImage,
      badge: "Business Focus",
      icon: Briefcase
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-16 md:py-20 rounded-xl mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={bookSeriesImage} 
              alt="Boda Book Series collection" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>
          <div className="relative z-10 text-center text-white px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Boda Book Series
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-6">
              The Boda Book Series is the ultimate collection of Ugandan culture, containing the full, unabridged versions of all the stories, articles, and guides found on our website, plus exclusive content you won't find anywhere else.
              From a luxury Definitive Edition to a pocket-friendly Traveler's Edition, a joyful Children's Book, 
              a rigorous Scholar Edition, and a focused Investor Guide — one master knowledge base, many beautiful books.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/preorder">
                <BodaButton variant="primary" size="lg">
                  Pre-order Any Edition
                </BodaButton>
              </Link>
              <Link to="/tribes">
                <BodaButton variant="secondary" size="lg">
                  Explore Content Preview
                </BodaButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Inspiration Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={readingBodaBook} 
              alt="Person immersed in reading Boda book in a cozy setting"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="text-center mt-8">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of readers discovering Uganda's rich cultural heritage through our comprehensive book series.
            </p>
          </div>
        </div>

        {/* Editions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {editions.map((edition, index) => {
            const IconComponent = edition.icon;
            return (
              <Card key={index} className="boda-card overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={edition.mockup} 
                    alt={`${edition.title} book cover mockup`}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {edition.badge}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{edition.title}</CardTitle>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">For:</span> {edition.audience}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Format:</span> {edition.format}
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {edition.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {edition.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={`/preorder?edition=${edition.id}`} className="block">
                    <BodaButton variant="primary" className="w-full">
                      Pre-order {edition.title}
                    </BodaButton>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "When will the books be published?",
                answer: "The Boda Book Series is planned for launch in Q2 2025. Pre-order customers will receive the first copies with exclusive early access and special pricing."
              },
              {
                question: "What's included in the pre-order?",
                answer: "Pre-ordering guarantees you a copy at launch, early-bird pricing, exclusive updates during the writing process, and first access to digital content as it's created."
              },
              {
                question: "Are the books available internationally?",
                answer: "Yes! We'll ship worldwide. Shipping costs will be calculated at checkout and we're working to minimize international shipping fees."
              },
              {
                question: "Can I change my edition choice?",
                answer: "Absolutely. You can update your edition preference at any time before the final order confirmation, approximately 2 months before launch."
              },
              {
                question: "Will there be digital versions?",
                answer: "Yes, digital editions will be available for all formats. Pre-order customers will receive both physical and digital copies when available."
              },
              {
                question: "How do I know this project is legitimate?",
                answer: "The Boda project is backed by extensive cultural research, partnerships with Ugandan cultural institutions, and transparent development updates shared with our community."
              }
            ].map((item, index) => (
              <Card key={index} className="boda-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-secondary rounded-lg p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Reserve Your Copy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of culture enthusiasts who are already pre-ordering their journey into Uganda's extraordinary heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/preorder">
              <BodaButton variant="primary" size="lg">
                Pre-order Now
              </BodaButton>
            </Link>
            <Link to="/join">
              <BodaButton variant="secondary" size="lg">
                Join Our Newsletter
              </BodaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;