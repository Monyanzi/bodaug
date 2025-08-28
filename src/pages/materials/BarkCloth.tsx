import barkClothImage from "@/assets/bark-cloth-making.jpg";
import { BodaButton } from "@/components/ui/boda-button";

const BarkCloth = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={barkClothImage} 
                alt="Traditional bark cloth making process" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Bark Cloth
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Ancient Fabric Tradition of Uganda
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                Explore the time-honored craft of bark cloth making, its deep cultural symbolism, and how this sustainable traditional practice continues today.
              </p>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    A Living Heritage
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bark cloth, known locally as "olubugo," represents one of Uganda's most ancient and sustainable textile traditions. 
                    Made from the inner bark of the mutuba tree (Ficus natalensis), this remarkable fabric has clothed royalty, 
                    served in ceremonies, and embodied the ingenuity of Ugandan craftsmanship for centuries.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    In 2005, UNESCO recognized the art of bark cloth making in Uganda as a Masterpiece of Oral and 
                    Intangible Heritage of Humanity, cementing its place as a treasure of world cultural heritage.
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Did You Know?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bark cloth predates woven textiles by thousands of years</li>
                    <li>• The mutuba tree can be harvested without killing it</li>
                    <li>• Royal bark cloth was traditionally dyed with natural pigments</li>
                    <li>• One tree can provide bark cloth for decades</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Traditional Process */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                The Traditional Making Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Harvesting",
                    description: "Carefully strip bark from mature mutuba trees during the rainy season when sap flows freely."
                  },
                  {
                    step: "2", 
                    title: "Preparation",
                    description: "Remove the outer bark and soak the inner bark in water to soften the fibers."
                  },
                  {
                    step: "3",
                    title: "Beating",
                    description: "Use traditional wooden mallets to beat the bark on a log, spreading and softening the fibers."
                  },
                  {
                    step: "4",
                    title: "Finishing",
                    description: "Shape and size the cloth, then dry it in the sun to create the final fabric."
                  }
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent-foreground font-bold">{process.step}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Significance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Royal and Ceremonial Use
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bark cloth holds deep cultural significance in Buganda kingdom. The finest pieces, known as "ekitambala," 
                  were reserved for the Kabaka (king) and royal family. Different patterns and colors indicated social status, 
                  with white bark cloth being the most sacred.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Traditional ceremonies still feature bark cloth garments, connecting modern Ugandans to their ancestral heritage. 
                  The fabric serves as burial shrouds, ceremonial dress, and decorative elements in important cultural events.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Modern Revival
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Today, bark cloth artisans are working to preserve this ancient craft while finding contemporary applications. 
                  Modern designers incorporate bark cloth into fashion, home décor, and art pieces, creating new markets 
                  for traditional skills.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Organizations support bark cloth makers through training programs, fair trade initiatives, and cultural tourism, 
                  ensuring this UNESCO-recognized heritage continues for future generations.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Experience Bark Cloth Tradition
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Visit bark cloth making workshops, support traditional artisans, and witness this ancient craft in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BodaButton variant="primary">
                  Find Workshop Experiences
                </BodaButton>
                <BodaButton variant="secondary">
                  Support Artisan Communities
                </BodaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarkCloth;