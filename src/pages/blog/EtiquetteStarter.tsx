import { BodaButton } from "@/components/ui/boda-button";

const EtiquetteStarter = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Cultural Etiquette 101
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your essential guide to respectful cultural engagement in Uganda
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Master the cultural practices that will help you connect authentically and respectfully with Ugandan communities.
            </p>
          </div>

          {/* Key Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Greetings Matter",
                description: "Always greet people properly before any interaction. In Luganda, 'Oli otya?' (How are you?) shows respect.",
                tips: ["Use both hands when shaking hands", "Take time for proper greetings", "Acknowledge elders first"]
              },
              {
                title: "Dress Appropriately", 
                description: "Conservative dress is important, especially when visiting cultural sites or meeting elders.",
                tips: ["Cover shoulders and knees", "Remove hats in sacred spaces", "Wear traditional attire when offered"]
              },
              {
                title: "Gift-Giving Protocol",
                description: "Understand appropriate gifts and the cultural significance of giving and receiving.",
                tips: ["Present gifts with both hands", "Avoid alcohol unless certain it's appropriate", "Simple gifts like fruits are always welcome"]
              },
              {
                title: "Sacred Spaces",
                description: "Show proper respect when visiting traditional sites, tombs, or participating in ceremonies.",
                tips: ["Follow local guide instructions", "Ask permission before taking photos", "Maintain quiet, respectful behavior"]
              }
            ].map((principle, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 boda-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">{principle.title}</h3>
                <p className="text-muted-foreground mb-4">{principle.description}</p>
                <ul className="space-y-2">
                  {principle.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Language Basics */}
          <div className="bg-secondary rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Essential Phrases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { phrase: "Oli otya?", meaning: "How are you?", response: "Bulungi" },
                { phrase: "Webale", meaning: "Thank you", response: "Kale/Tewali kuzibu" },
                { phrase: "Nsaba", meaning: "Please/Excuse me", response: "" },
                { phrase: "Nkwagala", meaning: "I love you/I like you", response: "Nange nkwagala" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <div className="font-semibold text-foreground">{item.phrase}</div>
                  <div className="text-sm text-muted-foreground">{item.meaning}</div>
                  {item.response && (
                    <div className="text-xs text-muted-foreground">Response: {item.response}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Do's and Don'ts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent-foreground font-bold text-sm">✓</span>
                </div>
                Cultural Do's
              </h3>
              <ul className="space-y-3">
                {[
                  "Accept food and drink when offered - it's a sign of hospitality",
                  "Remove shoes when entering someone's home",
                  "Use your right hand for giving and receiving",
                  "Show interest in local customs and traditions",
                  "Be patient with time concepts - relationships matter more than schedules"
                ].map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-destructive font-bold text-sm">✗</span>
                </div>
                Cultural Don'ts
              </h3>
              <ul className="space-y-3">
                {[
                  "Don't refuse food or drink outright - politely accept or explain",
                  "Don't point with one finger - use an open hand",
                  "Don't photograph people without permission",
                  "Don't touch someone's head - it's considered sacred",
                  "Don't rush conversations - allow time for proper social interaction"
                ].map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-accent/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Explore Respectfully?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Use these guidelines as your foundation for meaningful cultural connections in Uganda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BodaButton variant="primary">
                Explore Tribes & Culture
              </BodaButton>
              <BodaButton variant="secondary">
                Plan Your Cultural Journey
              </BodaButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtiquetteStarter;