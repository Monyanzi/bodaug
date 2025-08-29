import storyImage from "@/assets/indecision-bat-story.jpg";
import { BodaButton } from "@/components/ui/boda-button";
import StoryExcerptCTA from "@/components/StoryExcerptCTA";

const IndecisionOfTheBat = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={storyImage}
                alt="The Indecision of the Bat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Indecision of the Bat
              </h1>
              <p className="text-xl text-white/90 mb-8">
                A Baganda Fable
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                This classic fable from the Baganda serves as a moral lesson about loyalty, integrity, and the consequences of opportunism.
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
                    War Between Land and Sky
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Long, long ago, a great war erupted between the Animals of the Land and the Birds of the Air. The Lion commanded the beasts, and the mighty Eagle led the birds. The fighting was fierce, shaking the forests and darkening the skies. In this time of conflict lived the Bat, a strange creature with the furry body of a mouse but the leathery wings of a bird.
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Core Message</h3>
                  <p className="text-sm text-muted-foreground">
                    Those who refuse to choose a side in times of conflict out of self-interest will ultimately be rejected by all and live in shame.
                  </p>
                </div>
              </div>
            </div>

            {/* Switching Sides */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                An Opportunist's Game
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">With the Beasts</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Being a cunning opportunist, he decided to wait and see who was winning. On the first day, the armies of the Lion were victorious. That evening, the Bat flew to the Lion’s camp. "I am with you!" he declared, puffing out his chest to show his furry body and sharp teeth. "I am a beast of the land!" The Lion, pleased, welcomed him.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">With the Birds</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    But the next day, the Eagle rallied his forces and attacked from the sky, driving the animals back. That night, the Bat quietly slipped away and flew to the Eagle's roost. "My true brothers!" he squeaked, spreading his wings wide. "Look at these wings! I am one of you, a creature of the air!" The Eagle, suspicious but needing more fighters, allowed him to join.
                  </p>
                </div>
              </div>
            </div>

            {/* The Rejection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Cast Out by All
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For days, the Bat switched his allegiance back and forth. Finally, the wisest of the animals and birds grew tired of the endless fighting and made a lasting peace. As the two sides gathered to celebrate, the Bat flew confidently into the centre of the clearing. But a silence fell over the crowd.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">A Life of Shame</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  The Lion looked at him with contempt. "You are no beast," he growled. The Eagle glared down from his perch. "And you are no bird," he screeched. Both sides, the animals and the birds, turned their backs on him. Cast out and despised for his disloyalty, the Bat was overcome with a shame so deep he could no longer bear the light of day.
                </p>
              </div>
            </div>

            {/* Modern Relevance */}
            <div className="text-center bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Creature of the Night
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                And that is why, to this very day, he hides in dark caves, emerging only in the twilight shadows of the night, forever flying alone. The story remains a popular cautionary tale about the importance of loyalty and conviction.
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

export default IndecisionOfTheBat;
