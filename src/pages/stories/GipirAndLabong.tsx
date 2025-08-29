import storyImage from "@/assets/gipir-labong-story.jpg";
import { BodaButton } from "@/components/ui/boda-button";
import StoryExcerptCTA from "@/components/StoryExcerptCTA";

const GipirAndLabong = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={storyImage}
                alt="The Parting of Gipir and Labong"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Parting of Gipir and Labong
              </h1>
              <p className="text-xl text-white/90 mb-8">
                The Origin of the Acholi and Alur Peoples
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                From the Luo peoples of northern Uganda, this foundational myth explains the historic separation of the Acholi and Alur. It is a deeply resonant story about how pride and rigid adherence to principle can fracture even the strongest bonds of kinship.
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
                    A Bond Broken by Pride
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Listen, and I will tell you of Gipir and Labong, two brothers, sons of a great chief, who lived as one heart in two bodies. Their bond was the envy of their clan, and their strength together was a shield for their people.
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Core Message</h3>
                  <p className="text-sm text-muted-foreground">
                    A minor dispute, when fueled by pride, can sever the deepest ties of kinship forever.
                  </p>
                </div>
              </div>
            </div>

            {/* The Dispute */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                The Bead and The Spear
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Swallowed Bead</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    One day, as the sun sat high and hot, a treasured family bead, small and smooth as a drop of water, was accidentally swallowed by a young goat belonging to Gipir. When Labong, whose household was responsible for the bead, learned of this, he went to his brother. “Brother,” he said, “a misfortune has happened. Let me give you a hundred goats to replace the one that swallowed your bead.” But Gipir’s pride was a stone in his throat. “No. I want that very bead.” And so, with a heavy heart, Labong was forced to kill the young goat to retrieve the heirloom. The brotherhood between them grew cold from that day.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Lost Spear</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Not long after, a great elephant, its hide the colour of twilight, wandered into Labong’s garden, trampling the young millet. Labong, seeing his family's food destroyed, took up Gipir’s sacred spear—a spear passed down from their ancestors—and struck the beast. The elephant, wounded but mighty, fled into the deep forest with the spear still lodged in its side. When Gipir discovered his ancestral spear was gone, his anger was a storm. "That spear is the spirit of our lineage," he roared. "You will walk until you find it."
                  </p>
                </div>
              </div>
            </div>

            {/* The Parting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The Parting of Ways
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Labong’s pleas were dust in the wind. Gipir would not be moved. So Labong began his journey, following the trail of the wounded elephant for many days and nights. He grew thin and weary, but he finally found the beast, dead, in a clearing. He retrieved the spear, but he was in a strange land, far from home. The people there, the Alur, nursed him to health and, seeing his wisdom, eventually made him their chief. When he finally returned home, he looked at Gipir and said, “Our paths are now different. I will go west, and you will remain here.” At the bank of the great Nile, they divided their heritage and parted, never to meet again.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Cultural Lesson</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  This story teaches several important cultural values:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pride can fracture the strongest bonds.</li>
                  <li>• The significance of ancestral heritage.</li>
                  <li>• How disputes can lead to the creation of new peoples.</li>
                  <li>• The tragic consequences of unyielding principles.</li>
                </ul>
              </div>
            </div>

            {/* Modern Relevance */}
            <div className="text-center bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Living Heritage
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                From them grew two great peoples: the Acholi and the Alur, forever separated by a spear and a bead. The story of Gipir and Labong remains a powerful cautionary tale in Luo culture, often retold to emphasize the importance of compromise.
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

export default GipirAndLabong;
