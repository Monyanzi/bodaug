import experiencesImage from "@/assets/uganda-experiences.jpg";

const Experiences = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={experiencesImage} 
                alt="Uganda cultural experiences and tourist destinations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Cultural Experiences
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Discover Authentic Uganda
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                Explore parks, cultural centers, traditional markets, and authentic lodges for genuine Ugandan cultural experiences.
              </p>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-12">
            {/* Experience Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cultural Centers",
                  description: "Visit authentic cultural sites and heritage centers",
                  items: ["Uganda Museum", "Kasubi Royal Tombs", "Traditional Craft Centers", "Cultural Villages"]
                },
                {
                  title: "Traditional Markets",
                  description: "Experience vibrant local markets and trading culture",
                  items: ["Owino Market", "Nakasero Market", "Local Village Markets", "Craft Markets"]
                },
                {
                  title: "Authentic Lodges",
                  description: "Stay at culturally immersive accommodations",
                  items: ["Community-run Lodges", "Traditional Homesteads", "Cultural Camps", "Heritage Hotels"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 boda-card">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Experiences */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                Featured Cultural Experiences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Royal Palace Tours",
                    description: "Visit traditional kingdoms and learn about monarchy structures",
                    location: "Buganda Kingdom",
                    duration: "Half Day"
                  },
                  {
                    title: "Traditional Craft Workshops",
                    description: "Learn bark cloth making, pottery, and basket weaving",
                    location: "Various Villages",
                    duration: "Full Day"
                  }
                ].map((experience, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">{experience.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{experience.description}</p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{experience.location}</span>
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  More experiences and interactive partner directory launching soon
                </p>
                <button className="btn-primary">
                  Join Waitlist for Early Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;