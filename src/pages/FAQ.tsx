import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { HelpCircle, Book, Users, Globe, Mail } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "About Boda",
      icon: HelpCircle,
      questions: [
        {
          q: "What is Boda?",
          a: "Boda is a cultural and tourism website dedicated to documenting and sharing Uganda's rich heritage. Just like boda-bodas connect people across Uganda, we connect you to the traditions, stories, and cultural knowledge that make Uganda extraordinary."
        },
        {
          q: "Why is it called 'Boda'?",
          a: "The name comes from 'boda-boda' - Uganda's popular motorcycle taxis that connect people across the country. Similarly, Boda connects people to Uganda's cultural heritage, serving as a bridge between traditions and modern understanding."
        },
        {
          q: "Who is behind Boda?",
          a: "Boda is created by a team of cultural researchers, writers, and Uganda enthusiasts working in partnership with cultural institutions, tribal elders, and community leaders across Uganda."
        },
        {
          q: "Is Boda affiliated with the Ugandan government?",
          a: "While we work with cultural institutions and maintain partnerships with heritage organizations, Boda is an independent cultural documentation project focused on preserving and sharing Uganda's traditions."
        }
      ]
    },
    {
      title: "Book Series",
      icon: Book,
      questions: [
        {
          q: "When will the Boda Book Series be available?",
          a: "The Boda Book Series is planned for launch in Q2 2025. Pre-order customers will receive early access and exclusive early-bird pricing."
        },
        {
          q: "How many editions are there?",
          a: "We're creating five distinct editions: Definitive Edition (complete cultural encyclopedia), Traveler Edition (pocket guide), Children's Edition (illustrated stories), Scholar Edition (academic reference), and Investor Edition (business guide)."
        },
        {
          q: "What's the difference between editions?",
          a: "Each edition serves different audiences: the Definitive Edition is comprehensive and premium, the Traveler Edition is compact and practical, the Children's Edition uses illustrations and simple language, the Scholar Edition includes academic research, and the Investor Edition focuses on business culture."
        },
        {
          q: "Can I pre-order multiple editions?",
          a: "Yes! You can select multiple editions during pre-order, and we offer bundle discounts for customers ordering multiple formats."
        },
        {
          q: "Will there be digital versions?",
          a: "Yes, all editions will be available in both physical and digital formats. Pre-order customers receive both versions when available."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship worldwide. Shipping costs vary by location and will be calculated at checkout. We're working to minimize international shipping fees."
        }
      ]
    },
    {
      title: "Cultural Content",
      icon: Users,
      questions: [
        {
          q: "How do you ensure cultural accuracy?",
          a: "All content is researched through primary sources including interviews with cultural elders, collaboration with traditional kingdom councils, and review by cultural custodians. We prioritize authenticity and respect in all representations."
        },
        {
          q: "Can I contribute cultural stories or corrections?",
          a: "Absolutely! We welcome contributions from community members, cultural practitioners, and anyone with authentic cultural knowledge. Contact us to learn about our contribution process."
        },
        {
          q: "Do you cover all Ugandan tribes?",
          a: "We're working to document all of Uganda's diverse ethnic groups and tribes. While we start with major tribes like the Baganda, our goal is comprehensive coverage of Uganda's cultural landscape."
        },
        {
          q: "How do you handle sensitive cultural information?",
          a: "We work closely with cultural leaders to identify sensitive or sacred information that should be respected and protected. Some traditions are documented with appropriate cultural protocols and permissions."
        },
        {
          q: "Is the website content free to access?",
          a: "Yes, our website content is freely accessible to everyone. The Boda Book Series represents premium, comprehensive content available through pre-order and purchase."
        }
      ]
    },
    {
      title: "Travel & Tourism",
      icon: Globe,
      questions: [
        {
          q: "Do you provide travel planning services?",
          a: "While we don't directly provide travel services, we offer cultural guidance, etiquette tips, and partner with trusted tourism operators who specialize in cultural experiences."
        },
        {
          q: "Are your cultural guides suitable for first-time visitors?",
          a: "Yes! Our content is designed for everyone from first-time visitors to cultural researchers. We provide context and explanations that make Ugandan culture accessible to all audiences."
        },
        {
          q: "Do you have partnerships with hotels or tour operators?",
          a: "We partner with selected lodges, cultural centers, and tour operators who share our commitment to authentic, respectful cultural experiences. These partnerships are clearly marked on our site."
        },
        {
          q: "Can I use Boda content for my own travel blog or business?",
          a: "Please contact us about content licensing and attribution requirements. We're happy to discuss partnerships with travel writers and cultural tourism businesses."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Boda, Uganda's cultural heritage platform, 
              and our upcoming Book Series.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card key={categoryIndex} className="boda-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-accent" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="space-y-2">
                      {category.questions.map((item, questionIndex) => (
                        <AccordionItem 
                          key={questionIndex} 
                          value={`${categoryIndex}-${questionIndex}`}
                          className="border border-border rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left hover:no-underline">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16">
            <Card className="boda-card bg-secondary">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our team is here to help. 
                  Whether it's about cultural content, the book series, or partnerships - we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <BodaButton variant="primary" size="lg">
                      Contact Us
                    </BodaButton>
                  </Link>
                  <Link to="/join">
                    <BodaButton variant="secondary" size="lg">
                      Join Our Newsletter
                    </BodaButton>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/preorder" className="group">
              <Card className="boda-card text-center">
                <CardContent className="p-6">
                  <Book className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    Pre-order Books
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Reserve your copy of the Boda Book Series
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/tribes" className="group">
              <Card className="boda-card text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    Explore Culture
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Discover Uganda's diverse tribes and traditions
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/about" className="group">
              <Card className="boda-card text-center">
                <CardContent className="p-6">
                  <HelpCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    About Boda
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn about our mission and values
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;