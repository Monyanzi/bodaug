import storyImage from "/placeholder.svg";
import { BodaButton } from "@/components/ui/boda-button";
import { StoryExcerptCTA } from "@/components/ui/StoryExcerptCTA";

const SorrowOfIsheKatabazi = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={storyImage}
                alt="The Sorrow of Ishe-Katabazi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Sorrow of Ishe-Katabazi
              </h1>
              <p className="text-xl text-white/90 mb-8">
                An Ankole Heroic Epic
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                From the Ankole kingdom, this epic follows a hero who dares to challenge the natural order, reflecting beliefs in a creator god, Ruhanga, and an underworld, okuzimu.
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
                    War on Death Itself
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    There once lived a man in Ankole named Ishe-Katabazi, whose strength was as great as his love for his family. But a shadow fell upon his house: one by one, his children and beloved wife were taken by sickness and vanished from the world of the living. Mad with grief, Ishe-Katabazi swore an oath to wage war on Death itself.
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Core Message</h3>
                  <p className="text-sm text-muted-foreground">
                    Even the greatest of mortals cannot conquer death, for the cycles of life and loss are the foundation of the world's order.
                  </p>
                </div>
              </div>
            </div>

            {/* The Underworld */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                The Journey to Okuzimu
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Confronting the King</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    He journeyed to the edge of the world and found the path leading down to okuzimu, the underworld. It was a place of shadows and silence, ruled by the king of the dead. Ishe-Katabazi stormed the king’s throne and demanded the return of his family.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Impossible Tests</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The king, ancient and weary, was intrigued by his defiance and offered him a series of impossible tests to win them back, which Ishe-Katabazi, with the help of grateful animals he had once saved, miraculously passed.
                  </p>
                </div>
              </div>
            </div>

            {/* The Final Test */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The One Condition
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bound by his word, the king agreed to release the family, but with one final condition: "You may lead them out, but you must not look back until you are fully in the world of the living. If you do, they will be mine forever." Ishe-Katabazi began the long climb, his family following silently behind him. He could hear their footsteps on the dusty path, a sound of impossible joy.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">A Moment of Doubt</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  He felt the warmth of the sun on his face as he stepped back into the world of light. But in his moment of relief, he heard the footsteps of his children, but not his wife's. Overcome by a sudden, terrible fear that she had been left behind, his love and doubt overwhelmed his discipline. He turned. He saw his children right behind him, but his wife was only halfway out of the shadow of the underworld. At his glance, they all dissolved like smoke, pulled back into darkness, lost to him forever.
                </p>
              </div>
            </div>

            {/* Modern Relevance */}
            <div className="text-center bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                A Tragic Lesson
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                He had matched wits with Death and won, but he could not overcome the final test of faith. He returned to the world above a broken, empty man, a living testament that the laws of life and death cannot be unwritten by mortal hands.
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
          <StoryExcerptCTA storyName="The Sorrow of Ishe-Katabazi" />
        </div>
      </div>
    </div>
  );
};

export default SorrowOfIsheKatabazi;
