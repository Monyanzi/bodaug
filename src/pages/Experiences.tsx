import experiencesImage from "@/assets/uganda-experiences.jpg";
import { BodaButton } from "@/components/ui/boda-button";

const Experiences = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-20 md:py-28 rounded-xl mb-12 overflow-hidden shadow-xl">
            <div className="absolute inset-0">
              <img 
                src={experiencesImage} 
                alt="Uganda cultural experiences and tourist destinations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Cultural Experiences
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
                Discover Authentic Uganda
              </p>
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Explore parks, cultural centers, traditional markets, and authentic lodges for genuine Ugandan cultural experiences.
              </p>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-12">
            {/* Experience Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-xl p-6 md:p-8 boda-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm md:text-base text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Experiences */}
            <div className="bg-secondary rounded-xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                Featured Cultural Experiences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {[
                  {
                    title: "Royal Palace Tours",
                    description: "Visit traditional kingdoms and learn about monarchy structures",
                    location: "Buganda Kingdom",
                    duration: "Half Day",
                    image: "/kasubi-royal-tombs.jpg"
                  },
                  {
                    title: "Traditional Craft Workshops",
                    description: "Learn bark cloth making, pottery, and basket weaving",
                    location: "Various Villages",
                    duration: "Full Day",
                    image: "/bark-cloth-making.jpg"
                  }
                ].map((experience, index) => (
                  <div 
                    key={index} 
                    className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img 
                        src={experience.image} 
                        alt={experience.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                        {experience.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      <div className="flex justify-between items-center text-xs md:text-sm text-muted-foreground pt-3 border-t border-border">
                        <span className="font-medium">📍 {experience.location}</span>
                        <span className="font-medium">⏱️ {experience.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <p className="text-white/90 mb-6 text-base md:text-lg">
                  More experiences and interactive partner directory launching soon
                </p>
                <BodaButton variant="primary" size="lg">
                  Join Waitlist for Early Access
                </BodaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;