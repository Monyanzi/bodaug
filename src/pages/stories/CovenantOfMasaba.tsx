import storyImage from "/placeholder.svg";
import { BodaButton } from "@/components/ui/boda-button";
import { StoryExcerptCTA } from "@/components/ui/StoryExcerptCTA";

const CovenantOfMasaba = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={storyImage}
                alt="The Covenant of Masaba"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Covenant of Masaba
              </h1>
              <p className="text-xl text-white/90 mb-8">
                The Origin of the Bagisu People
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                This is the origin story of the Bagisu people who live on the slopes of Mount Elgon (which they call Masaba). The tale is deeply intertwined with their most significant cultural ritual, the Imbalu.
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
                    The Hunter and the Mountain
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In the beginning, the plains below the great mountain were vast and empty. From these plains came a man named Masaba, a hunter strong and solitary. One day, he followed a mighty antelope up the slopes of the colossal mountain that scraped the sky, a place shrouded in a mist that felt like the breath of the gods.
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Core Message</h3>
                  <p className="text-sm text-muted-foreground">
                    True leadership is born from courage, embracing one's destiny, and founding a legacy through sacred tradition.
                  </p>
                </div>
              </div>
            </div>

            {/* The Covenant */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                The Serpent's Test
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Spirit of the Mountain</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As he climbed higher, he encountered a serpent of immense size, its scales shimmering with all the colours of the earth. This was no ordinary snake; it was a spirit of the mountain. It spoke to him, its voice like the rustling of a thousand leaves, telling him that this mountain would only welcome him as its son if he proved his courage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Blood Covenant</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To claim the land and found a people, he had to perform a sacred act: a covenant of blood, an offering of his own flesh. Masaba descended the mountain, his mind filled with the serpent’s prophecy. He journeyed to find a wife to be the mother of his nation, and brought her back to the foot of the mountain.
                  </p>
                </div>
              </div>
            </div>

            {/* The Imbalu */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The First Imbalu
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With her as his witness, Masaba prepared for the serpent’s test. He took a sharpened blade and, in an act of ultimate bravery and commitment to his destiny, circumcised himself. His cry of pain echoed through the valleys, and in that moment of sacrifice, the mountain seemed to sigh in acceptance. The mists cleared, and the land felt settled, claimed. He was no longer just a man; he was the first of the Bagisu, the father of a nation.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Cultural Lesson</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  The Imbalu ritual teaches several important cultural values:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Courage as the foundation of manhood.</li>
                  <li>• The importance of sacrifice for community.</li>
                  <li>• The sacred bond between the Bagisu and their land.</li>
                  <li>• The transformation from boyhood to adulthood.</li>
                </ul>
              </div>
            </div>

            {/* Modern Relevance */}
            <div className="text-center bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Living Heritage
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                His sons, and their sons after them, followed his example, creating the sacred Imbalu ritual. To this day, when the drums of the Imbalu beat across the slopes of Mount Elgon, it is the spirit of Masaba being honoured—the story of a brave hunter who, through a single act of courage, carved a people out of a mountain.
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
          </div>
          <StoryExcerptCTA storyName="The Covenant of Masaba" />
        </div>
      </div>
    </div>
  );
};

export default CovenantOfMasaba;
