import { Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const WhyBoda = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/stories" className="flex items-center text-muted-foreground hover:text-accent transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Stories
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4">Why Boda?</h1>
          <p className="text-xl text-muted-foreground mb-12">The Boda Boda Name: A Timeline</p>

          <div className="space-y-12">
            <Card className="boda-card">
              <CardHeader>
                <CardTitle className="text-2xl">1960s–1980s: The "Border-to-Border" Origin</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  The story begins not in a city, but on the dusty frontier between Kenya and Uganda. To cross the half-mile of "no-man's land" between official border posts in a car was a nightmare of paperwork and delays. Local entrepreneurs saw a gap and filled it, using sturdy bicycles to ferry people and goods across the divide, bypassing the bureaucracy. Their call to customers was simple and direct:
                </p>
                <blockquote>"border, border!"</blockquote>
                <p>
                  Street slang and daily repetition soon compressed this into the single, unforgettable name:
                </p>
                <blockquote>"boda-boda".</blockquote>
              </CardContent>
            </Card>

            <Card className="boda-card">
              <CardHeader>
                <CardTitle className="text-2xl">Late 1980s–Early 1990s: From a Service to an Identity</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  The name quickly became more than a description; it became a "proud badge for being a fast expert rider". "Boda-boda" was now synonymous with speed, agility, and the ingenuity to connect people and places where formal systems couldn't.
                </p>
              </CardContent>
            </Card>

            <Card className="boda-card">
              <CardHeader>
                <CardTitle className="text-2xl">Mid-1990s: The Motorcycle Adoption</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  When cheaper, more powerful motorcycles arrived, they were the perfect upgrade. They naturally inherited the "boda-boda" name and the maverick spirit that came with it, amplifying its ability to connect.
                </p>
              </CardContent>
            </Card>

            <Card className="boda-card">
              <CardHeader>
                <CardTitle className="text-2xl">2000s–Today: The Urban Definition</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  The boda-boda migrated from the border to the heart of East Africa's cities. In the gridlocked streets of Kampala, it became the essential urban connector—the unofficial circulatory system that keeps the city alive. Today, the name is a direct link to this rich history of movement and connection.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center bg-secondary rounded-lg p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              At its heart, the boda-boda has always been about one thing: connection.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              It connects people to places, goods to markets, and ambition to opportunity. It’s the thread that weaves through the urban and rural landscapes of Uganda. That same spirit is the driving force behind our name, Boda.
            </p>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our mission is to Discover Uganda Like Never Before. Just like boda-bodas connect people across Uganda, we connect you to the rich tapestry of traditions, stories, and heritage that make this country extraordinary. We are your ride into the heart of the Pearl of Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tribes">
                <BodaButton variant="primary" size="lg">
                  Explore Culture
                </BodaButton>
              </Link>
              <Link to="/preorder">
                <BodaButton variant="secondary" size="lg">
                  Preorder the Book
                </BodaButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBoda;
