import { BodaButton } from "@/components/ui/boda-button";

const Mukasa = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Mukasa
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The Lake Spirit Name of Prosperity and Protection
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the deep cultural significance of Mukasa, one of Uganda's most revered traditional names, 
              connecting generations to the spiritual guardianship of Lake Victoria.
            </p>
          </div>

          {/* Name Meaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Divine Origins
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mukasa is derived from the name of one of the most powerful deities in traditional Baganda religion—the god of Lake Victoria, 
                fertility, and abundance. Parents who name their children Mukasa invoke divine protection and blessing upon their family lineage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The name carries with it the hope that the child will be a source of prosperity, wisdom, and spiritual guidance for their community, 
                much like the life-giving waters of Lake Victoria sustain the region.
              </p>
            </div>
            <div className="bg-accent/10 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Name Variations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Mukasa:</strong> The primary form (traditionally male)</li>
                <li><strong>Namukasa:</strong> Female version, meaning "one who brings Mukasa's blessings"</li>
                <li><strong>Mukasangye:</strong> Extended form meaning "Mukasa who blesses"</li>
                <li><strong>Mukasadde:</strong> Meaning "father of Mukasa" or "Mukasa's successor"</li>
              </ul>
            </div>
          </div>

          {/* Cultural Context */}
          <div className="bg-secondary rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              The Mukasa Deity in Baganda Culture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  aspect: "Lake Guardian",
                  description: "Mukasa was believed to control the waters of Lake Victoria, ensuring safe fishing and abundant catches.",
                  symbol: "🌊"
                },
                {
                  aspect: "Fertility Provider",
                  description: "Families prayed to Mukasa for children, successful harvests, and the prosperity of their livestock.",
                  symbol: "🌱"
                },
                {
                  aspect: "Weather Controller",
                  description: "Mukasa influenced rainfall patterns, crucial for agriculture in the lake region communities.",
                  symbol: "⛈️"
                }
              ].map((aspect, index) => (
                <div key={index} className="text-center bg-card border border-border rounded-lg p-6">
                  <div className="text-3xl mb-4">{aspect.symbol}</div>
                  <h3 className="font-semibold text-foreground mb-2">{aspect.aspect}</h3>
                  <p className="text-sm text-muted-foreground">{aspect.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Usage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Contemporary Significance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today, Mukasa remains one of the most popular traditional names in Uganda, especially among the Baganda people. 
                It's often given to children born during particularly abundant times or when families seek divine blessings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Many successful business leaders, politicians, and community figures bear the name Mukasa, 
                often attributed to the prosperity and leadership qualities associated with their namesake deity.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Naming Ceremonies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In traditional Baganda naming ceremonies, children named Mukasa receive special blessings from elders, 
                often involving water rituals that connect the child symbolically to Lake Victoria.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These ceremonies typically include prayers for the child's future prosperity, wisdom in decision-making, 
                and the ability to provide for their community as the lake provides for all.
              </p>
            </div>
          </div>

          {/* Famous Bearers */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Notable People Named Mukasa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Traditional leaders who have guided communities through challenges",
                "Successful entrepreneurs who embody the prosperity aspect of the name",
                "Cultural custodians preserving Baganda heritage and traditions",
                "Community organizers bringing people together like the unifying waters of the lake"
              ].map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-accent/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Explore More Ugandan Names
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover the rich meanings and cultural stories behind traditional Ugandan names and their connections to heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BodaButton variant="primary">
                Browse Name Meanings
              </BodaButton>
              <BodaButton variant="secondary">
                Learn About Naming Traditions
              </BodaButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mukasa;