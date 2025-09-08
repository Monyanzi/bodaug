import storyImage from "@/assets/hero-boda-passenger-view.jpg";
import { BodaButton } from "@/components/ui/boda-button";
import { Link } from "react-router-dom";

const WhyBoda = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={storyImage}
                alt="First-person view from a boda-boda passenger amid Uganda's hills and morning mist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Why the name Boda?
              </h1>
              <p className="text-xl text-white/90 mb-8">
                The Origin Story of an East African Icon
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                Discover how a simple border-crossing service evolved into the ubiquitous boda-boda, a name that defines urban mobility and connection across Uganda.
              </p>
            </div>
          </div>

          {/* Story Content */}
          <div className="space-y-12">
            {/* Story Introduction */}
            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    The "Border-to-Border" Origin
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The story begins not in a city, but on the dusty frontier between Kenya and Uganda. To cross the half-mile of "no-man's land" between official border posts in a car was a nightmare of paperwork and delays.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Local entrepreneurs saw a gap and filled it, using sturdy bicycles to ferry people and goods across the divide. Their call to customers was simple and direct: "border, border!" Street slang and daily repetition soon compressed this into the single, unforgettable name: "boda-boda".
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Story Significance</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Explains the etymology of "boda-boda"</li>
                    <li>• Highlights entrepreneurial spirit</li>
                    <li>• Connects the name to a specific place and time</li>
                    <li>• Shows language evolution in action</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Evolution */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                From Service to Identity
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">A Proud Badge</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In the late 1980s and early 1990s, the name became more than a description; it became a "proud badge for being a fast expert rider". "Boda-boda" was now synonymous with speed, agility, and the ingenuity to connect people and places where formal systems couldn't.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Motorcycle Adoption</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When cheaper, more powerful motorcycles arrived in the mid-1990s, they were the perfect upgrade. They naturally inherited the "boda-boda" name and the maverick spirit that came with it, amplifying its ability to connect.
                  </p>
                </div>
              </div>
            </div>

            {/* The Urban Definition */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The Urban Definition
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  From the 2000s to today, the boda-boda migrated from the border to the heart of East Africa's cities. In the gridlocked streets of Kampala, it became the essential urban connector—the unofficial circulatory system that keeps the city alive.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Cultural Lesson</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  The evolution of the boda-boda teaches us:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Innovation often arises from necessity.</li>
                  <li>• A name can carry a powerful cultural identity.</li>
                  <li>• Technology adapts to and inherits existing cultures.</li>
                  <li>• Connection is a fundamental human need.</li>
                </ul>
              </div>
            </div>

            {/* Modern Relevance */}
            <div className="text-center bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Living Heritage
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                At its heart, the boda-boda has always been about one thing: connection. It connects people to places, goods to markets, and ambition to opportunity. That same spirit is the driving force behind our name, Boda. We are your ride into the heart of the Pearl of Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tribes">
                  <BodaButton variant="primary">
                    Explore Culture
                  </BodaButton>
                </Link>
                <Link to="/preorder">
                  <BodaButton variant="secondary">
                    Preorder the Book
                  </BodaButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBoda;
