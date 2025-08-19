import React from 'react';
import { Link } from 'react-router-dom';
import { BodaButton } from "@/components/ui/boda-button";

const RolexPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Ugandan Rolex: A National Treasure Wrapped in a Chapati
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover the story behind the iconic street food that fuels Uganda, a delicious and clever play on "rolled eggs."
            </p>
          </div>

          <div className="space-y-12">
            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Across Uganda, from the bustling streets of Kampala to quiet village trading posts, there is one sound that promises a quick, delicious, and satisfying meal: the sizzle of eggs on a hot plate. This is the sound of the Rolex being born. Far from a luxury timepiece, the Ugandan Rolex is the country's undisputed king of street food—a warm chapati embracing a savory omelette filled with fresh tomatoes and onions. It's a cultural unifier, enjoyed by students, business people, and travelers alike. It's not just food; it's a piece of Ugandan identity.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Anatomy of a Perfect Rolex 🍳</h2>
              <p className="text-muted-foreground mb-6">
                At its heart, the Rolex is beautifully simple, but the magic is in the combination of fresh, hot ingredients, cooked right before your eyes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">The Foundation (The Chapati):</strong> 
                    <span className="text-muted-foreground ml-2">A soft, flaky, and slightly chewy flatbread, cooked to a perfect golden-brown on a griddle. It's the vessel that holds everything together.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">The Heart (The Eggs):</strong> 
                    <span className="text-muted-foreground ml-2">Two or three eggs are whisked and fried into a thin, wide omelette. This isn't a fluffy French omelette; it's a robust, flavorful sheet of egg that becomes the savory core.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">The Crunch & Flavour (The Vegetables):</strong> 
                    <span className="text-muted-foreground ml-2">Finely chopped fresh ingredients are mixed into the eggs or added on top before rolling. The holy trinity is: Tomatoes, Onions, and Cabbage.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Theatre of the Street: How It's Made</h2>
              <p className="text-muted-foreground mb-6">
                Watching a Rolex vendor—or "Rolex guy"—is pure street theatre. The process is a rapid, mesmerizing dance of skill and efficiency.
              </p>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">1</div>
                  <div>
                    <strong className="text-foreground">The Sizzle:</strong> 
                    <span className="text-muted-foreground ml-2">A ladle of oil hits the hot flat-top griddle with a satisfying sizzle.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">2</div>
                  <div>
                    <strong className="text-foreground">The Pour:</strong> 
                    <span className="text-muted-foreground ml-2">The whisked egg and vegetable mixture is poured onto the griddle, spreading out into a thin circle.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">3</div>
                  <div>
                    <strong className="text-foreground">The Flip:</strong> 
                    <span className="text-muted-foreground ml-2">With a flick of the wrist and a wide spatula, the omelette is expertly flipped.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">4</div>
                  <div>
                    <strong className="text-foreground">The Union:</strong> 
                    <span className="text-muted-foreground ml-2">A ready-made chapati is placed on top of the cooking omelette, warming it through and fusing the two together.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">5</div>
                  <div>
                    <strong className="text-foreground">The Roll:</strong> 
                    <span className="text-muted-foreground ml-2">The entire combination is lifted from the griddle, placed on a piece of paper, and rolled tightly into a delicious, portable cylinder. It's handed to you piping hot, ready to eat on the go.</span>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-secondary border-l-4 border-accent rounded-lg p-6 mb-12">
              <blockquote className="text-muted-foreground italic text-lg">
                "It's perfect for this time of day here in Johannesburg, just after 3 PM. In Kampala, this is prime time for grabbing a Rolex to power through the rest of the afternoon."
              </blockquote>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Make It Your Own: Popular Variations</h2>
              <p className="text-muted-foreground">
                While the classic Rolex is perfect as is, many vendors offer extras to customize your meal. Common additions include avocado, beans, sausage, or spiced minced meat.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Go Deeper with Boda 🔗</h2>
              <p className="text-muted-foreground">
                The Rolex is just the beginning of Uganda's incredible culinary journey. From the steamed perfection of Luwombo to the smoky flavour of grilled tilapia, there's a world of taste to explore.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-secondary rounded-lg p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want the ultimate food guide for your trip?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              The Boda <strong>Traveler's Edition</strong> book features a dedicated chapter on street food, with maps to the best spots and a guide to can't-miss dishes beyond the Rolex.
            </p>
            <Link to="/preorder">
              <BodaButton variant="primary" size="lg">
                Pre-order the Traveler's Edition
              </BodaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolexPage;