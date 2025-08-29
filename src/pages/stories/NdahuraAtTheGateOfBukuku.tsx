import storyImage from "@/assets/ndahura-bukuku-story.jpg";
import { BodaButton } from "@/components/ui/boda-button";
import StoryExcerptCTA from "@/components/StoryExcerptCTA";

const NdahuraAtTheGateOfBukuku = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={storyImage}
                alt="Ndahura at the Gate of Bukuku"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Ndahura at the Gate of Bukuku
              </h1>
              <p className="text-xl text-white/90 mb-8">
                The Foundational Epic of the Bachwezi
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                This is the foundational epic of the Bunyoro-Kitara kingdom, explaining the origin of the semi-divine Bachwezi dynasty and the rise of their first king, Ndahura.
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
                    The Usurper King
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The age of the Batembuzi kings ended in shadow when the great king, Isaza, vanished into the underworld. In his place, his chief gatekeeper, Bukuku, seized the throne of Kitara. But Bukuku was not of the royal line, and he ruled through fear, not love. An oracle warned him that a grandson born of his own daughter would one day kill him and take the kingdom.
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Core Message</h3>
                  <p className="text-sm text-muted-foreground">
                    Destiny cannot be avoided by force or fear; the rightful order will always find a path to restore itself, even from the most unlikely of beginnings.
                  </p>
                </div>
              </div>
            </div>

            {/* The Hidden Prince */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                The Imprisoned Princess
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Nyinamwiru's Fate</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Terrified, Bukuku took his only child, the beautiful princess Nyinamwiru, and locked her away in a compound with no door, hoping to keep her from ever meeting a man. Some say he even had one of her eyes and one of her breasts removed to make her undesirable.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">A Secret Union</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    But destiny is a river that carves its own path. Isaza’s son, the handsome prince Isimbwa, returned from the underworld. He heard whispers of the imprisoned princess and, guided by his heart, he found her hidden compound. He climbed the high fence and descended into the enclosure, where he and Nyinamwiru fell in love. In time, a son was born: a boy named Ndahura.
                  </p>
                </div>
              </div>
            </div>

            {/* The Prophecy Fulfilled */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The Royal Well
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When Bukuku heard the baby's cry, his rage was boundless. He seized the child and ordered him cast into the river. But a servant took pity on the infant and instead placed him among the reeds. He was discovered by a potter named Rubumbi, who rescued the boy and raised him as his own. Ndahura grew into a young man of incredible strength and charisma. One day, during a great drought, Ndahura drove his foster-father's cattle to the royal well, reserved for Bukuku’s herds.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Destiny's Return</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  When the king’s herdsmen tried to chase him away, Ndahura fought them off. News of this insolent youth reached Bukuku, who stormed down to the well himself. Bukuku hurled his royal spear, but Ndahura dodged it, seized the weapon, and threw it back with all his might, striking the usurper and killing him instantly. The prophecy was fulfilled.
                </p>
              </div>
            </div>

            {/* Modern Relevance */}
            <div className="text-center bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The First Bachwezi King
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                When the people saw the dead king and the fearless young man, and when the old potter revealed the truth of his origins, they knew their rightful ruler had returned. Ndahura was crowned the first king of the Bachwezi, and he ushered in a golden age of wisdom and prosperity for the kingdom of Kitara.
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

export default NdahuraAtTheGateOfBukuku;
