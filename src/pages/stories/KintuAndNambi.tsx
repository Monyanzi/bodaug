import storyImage from "@/assets/kintu-nambi-story.jpg";

const KintuAndNambi = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={storyImage} 
                alt="Ancient storytelling scene depicting Kintu and Nambi" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Kintu and Nambi
              </h1>
              <p className="text-xl text-white/90 mb-8">
                The Creation Story of Buganda
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                Discover the foundational Baganda creation story of the first man and woman on earth, a tale that shaped the cultural identity of Uganda's largest kingdom.
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
                    The Origin of Life
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In the beginning, according to Baganda tradition, there was only Ggulu (the Sky God) and his children in heaven. 
                    Among them was his beautiful daughter Nambi, who would become the mother of all humanity.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    On earth lived only one man, Kintu, who dwelled alone with his single cow, which provided him with 
                    all his needs - milk for nourishment and companionship in the vast emptiness of the world.
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Story Significance</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Explains the origin of humanity in Buganda</li>
                    <li>• Establishes the connection between earth and heaven</li>
                    <li>• Introduces concepts of death and suffering</li>
                    <li>• Validates the divine authority of Buganda kings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Meeting */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                When Heaven Meets Earth
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Nambi's Discovery</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    One day, Nambi and her siblings descended from heaven to explore the earth. When they discovered Kintu, 
                    Nambi was immediately struck by his nobility and self-sufficiency. While her brothers mocked this 
                    solitary man, Nambi saw in him the perfect companion.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">The Test</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To prove Kintu's worthiness, Ggulu devised a series of tests. He stole Kintu's beloved cow and challenged 
                    him to identify it among the vast herds of heaven. Through wisdom and divine favor, Kintu succeeded, 
                    earning the right to marry Nambi.
                  </p>
                </div>
              </div>
            </div>

            {/* The Warning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The Fatal Warning
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When Ggulu finally blessed their union, he gave Kintu and Nambi permission to return to earth with provisions 
                  for their new life. However, he issued one crucial warning: they must not return to heaven, no matter what 
                  they had forgotten, for Nambi's brother Walumbe (Death) would follow them.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  But as they journeyed to earth, Nambi realized she had forgotten grain to feed their chickens. 
                  Despite Kintu's pleas, she returned to heaven, unwittingly allowing Walumbe to follow them down to earth.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Cultural Lesson</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  This story teaches several important cultural values:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• The importance of obedience to divine authority</li>  
                  <li>• How human curiosity can lead to unintended consequences</li>
                  <li>• The eternal struggle between life and death</li>
                  <li>• The divine origin of Buganda's royal lineage</li>
                </ul>
              </div>
            </div>

            {/* Modern Relevance */}
            <div className="text-center bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Living Heritage
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                The story of Kintu and Nambi continues to influence Buganda culture today, appearing in ceremonies, 
                traditional education, and cultural celebrations across Uganda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Explore More Buganda Stories
                </button>
                <button className="btn-secondary">
                  Visit Cultural Sites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KintuAndNambi;