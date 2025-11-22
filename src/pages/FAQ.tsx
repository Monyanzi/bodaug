import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { HelpCircle, Book, Users, Globe, Mail } from "lucide-react";
import faqCategories from "@/data/faq.json";

const iconMap = {
  HelpCircle,
  Book,
  Users,
  Globe,
};

const FAQ = () => {
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
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
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
                <h2 className="text-2xl font-bold text-white mb-4">
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