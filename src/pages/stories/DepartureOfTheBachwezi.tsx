import storyImage from "/placeholder.svg";
import { BodaButton } from "@/components/ui/boda-button";
import StoryExcerptCTA from "@/components/StoryExcerptCTA";

const DepartureOfTheBachwezi = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={storyImage}
                alt="The Departure of the Bachwezi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Departure of the Bachwezi
              </h1>
              <p className="text-xl text-white/90 mb-8">
                The Great Mythological Epic of the Bunyoro-Kitara
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                The legendary dynasty of demigod rulers revered for their wisdom and supernatural abilities. Their sudden, mysterious vanishing is a pivotal event in the region's mythology.
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
                    The Fading Golden Age
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    There was a time when the lands of Kitara were ruled not by men, but by beings of smoke and light called the Bachwezi. They were tall and fair-skinned, and their reign under their last king, Wamara, was a golden age of peace and prosperity. But even the brightest day must surrender to dusk.
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Core Message</h3>
                  <p className="text-sm text-muted-foreground">
                    Even the most divine power is impermanent, and all great eras must eventually yield to the inevitable march of time and fate.
                  </p>
                </div>
              </div>
            </div>

            {/* The Omens */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                Dark Omens
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Death of Bihogo</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The end of their time began not with a war, but with a series of omens. Wamara’s favourite cow, Bihogo, grew sick and died, an event that sent a tremor of fear through the court. Wamara summoned his diviners, who read the entrails and cast the cowries.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Prophecy</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Their faces were grim. "The signs are dark, oh great king," they announced. "Your reign is ending. A new people, dull and dark, will come from the north to rule in your place." Wamara, in his pride, refused to believe it and commanded great rituals to be performed, but every attempt to reverse the prophecy failed. The magic of the Bachwezi was fading.
                  </p>
                </div>
              </div>
            </div>

            {/* The Departure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The Great Procession
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Seeing that fate was a river that could not be dammed, Wamara accepted the truth. He gathered the Bachwezi chiefs from all corners of the empire. He stood before them, not as a defeated king, but as a ruler guiding his people into eternity. "Our time in the world of men is over," he declared. "We will not be conquered. We will not die. We will simply depart."
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Walking into Water</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  He led his people on a great procession, leaving behind their royal drums and earthly possessions. They walked south towards the great lakes of the land. As they reached the shores, they did not stop. They walked directly into the water, their shimmering forms dissolving into the mist rising from the surface until not a single one was left. They did not die; they withdrew from the world.
                </p>
              </div>
            </div>

            {/* Modern Relevance */}
            <div className="text-center bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Living Heritage
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Their spirits became the guardians of the crater lakes and lonely hills. Soon after, as foretold, the Babiito clan arrived from the north to find a throne empty and a kingdom waiting, built upon the legend of the demigods who walked into water.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BodaButton variant="primary">
                  Explore More Stories
                </BodaButton>
                <BodaButton variant="secondary">
                  Visit Cultural Sites
                </BodaButton>
              </div>
            </div>
            <StoryExcerptCTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartureOfTheBachwezi;
