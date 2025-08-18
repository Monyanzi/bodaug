import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { Shield, Mail, Eye, Database, Users, Lock } from "lucide-react";

const Privacy = () => {
  const lastUpdated = "January 2025";

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              How we protect and handle your personal information
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <Card className="boda-card mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Commitment to Your Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Boda, we respect your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you 
                visit our website, join our newsletter, or pre-order our books.
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card className="boda-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Database className="h-5 w-5 text-accent" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Information You Provide</h3>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li>• <strong>Contact Information:</strong> Name and email address for newsletter signup and pre-orders</li>
                  <li>• <strong>Communication Data:</strong> Messages sent through our contact forms</li>
                  <li>• <strong>Preferences:</strong> Book edition preferences and cultural interests</li>
                  <li>• <strong>Optional Information:</strong> Country/location for shipping and cultural context</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Information Collected Automatically</h3>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li>• <strong>Usage Data:</strong> Pages visited, time spent on site, and navigation patterns</li>
                  <li>• <strong>Device Information:</strong> Browser type, operating system, and device characteristics</li>
                  <li>• <strong>Technical Data:</strong> IP address, cookies, and similar tracking technologies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="boda-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-accent" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Newsletter Delivery:</strong> Send weekly cultural insights and updates to subscribers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Pre-order Management:</strong> Process book pre-orders and send launch notifications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Communication:</strong> Respond to inquiries and provide customer support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Site Improvement:</strong> Analyze usage patterns to enhance user experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Security:</strong> Protect against spam, fraud, and unauthorized access</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="boda-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-5 w-5 text-accent" />
                Information Sharing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following limited circumstances:
              </p>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Service Providers:</strong> Trusted partners who help deliver our services (email platform, payment processing)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Business Transfer:</strong> In the unlikely event of a merger or acquisition</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4 text-sm">
                All third-party service providers are bound by confidentiality agreements and comply with applicable privacy laws.
              </p>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="boda-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-accent" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• SSL encryption for all data transmission</li>
                <li>• Secure servers with regular security updates</li>
                <li>• Limited access to personal information on a need-to-know basis</li>
                <li>• Regular security audits and monitoring</li>
                <li>• Secure deletion of data when no longer needed</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="boda-card mb-8">
            <CardHeader>
              <CardTitle>Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email Communications</h3>
                  <p className="text-muted-foreground text-sm">
                    You can unsubscribe from our newsletter at any time using the unsubscribe link in emails 
                    or by contacting us directly.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Access and Correction</h3>
                  <p className="text-muted-foreground text-sm">
                    You can request access to, correction of, or deletion of your personal information 
                    by contacting us at the email below.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    You can disable cookies in your browser settings, though this may limit some site functionality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="boda-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                Contact Us About Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-foreground font-medium mb-2">Privacy Questions</p>
                <p className="text-muted-foreground text-sm">Email: privacy@boda.ug</p>
                <p className="text-muted-foreground text-sm">Response time: Within 48 hours</p>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="boda-card mb-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Policy Updates</h3>
              <p className="text-muted-foreground text-sm">
                We may update this Privacy Policy occasionally to reflect changes in our practices or legal requirements. 
                We'll notify subscribers of significant changes via email and update the "Last updated" date above.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-muted-foreground mb-6">
              We're committed to transparency and protecting your privacy. 
              Don't hesitate to reach out with any questions or concerns.
            </p>
            <Link to="/contact">
              <BodaButton variant="primary" size="lg">
                Contact Us
              </BodaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;