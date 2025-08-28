import storyImage from "/placeholder.svg";
import { BodaButton } from "@/components/ui/boda-button";

const ManWhoFacedAdroa = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={storyImage}
                alt="The Man Who Faced Adroa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Man Who Faced Adroa
              </h1>
              <p className="text-xl text-white/90 mb-8">
                A Lugbara Cautionary Tale
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                This tale from the Lugbara people features Adroa, a complex deity who is both creator and a dark, earthly aspect. The adroa are feared spirits who punish the greedy.
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
                    A Sickness of Greed
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In a village nestled among the rolling hills of Lugbaraland, there lived a man whose greed was a sickness. He was never content. One evening, as twilight bled across the sky, he was walking home through a grove of tamarind trees, a place the elders warned was a haunt of spirits.
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Core Message</h3>
                  <p className="text-sm text-muted-foreground">
                    Greed and a lack of respect for the spirit world will lead to ruin, for some forces are not meant to be understood, only revered.
                  </p>
                </div>
              </div>
            </div>

            {/* The Encounter */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                The Half-Bodied Spirit
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Meeting</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    He was grumbling to himself when he suddenly felt a chill that had nothing to do with the night air. Standing before him was a figure, tall and white, glowing faintly in the gloom. The man’s breath caught in his throat. The being had only one eye in the centre of its forehead, one arm, and one leg, upon which it hopped with an unnerving silence. It was Adroa.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Avarice Over Fear</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The man knew he should fall to his knees and pray for his life. But his greed was stronger than his fear. He saw that Adroa was carrying a bag that bulged with something heavy. "What is in your bag, spirit?" the man asked, his voice trembling but audacious. Adroa’s single eye fixed upon him, holding no warmth, only ancient knowledge. The spirit did not speak but opened the bag, and from it tumbled countless shimmering cowrie shells, more than the man had ever seen.
                  </p>
                </div>
              </div>
            </div>

            {/* The Consequence */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The Price of Greed
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The man’s heart pounded with avarice. "Give them to me!" he demanded. Emboldened by the spirit's silence, he reached out to grab the bag. The moment his fingers touched the cloth, a searing cold shot up his arm, and the world went dark.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">A Living Warning</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  He awoke the next morning at the edge of the grove. The bag of cowries was gone, and so was Adroa. But the man was changed. His right arm was withered and useless, his right leg was lame, and the vision in his right eye was gone. He was left with only half a body, a living echo of the spirit he had tried to rob, a walking warning to all who saw him that you must never let greed blind you to the power of the unseen world.
                </p>
              </div>
            </div>

            {/* Modern Relevance */}
            <div className="text-center bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Living Heritage
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                The story of the man who faced Adroa is a powerful reminder in Lugbara culture about the dangers of disrespecting the spirit world and the self-destructive nature of greed.
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
        </div>
      </div>
    </div>
  );
};

export default ManWhoFacedAdroa;
