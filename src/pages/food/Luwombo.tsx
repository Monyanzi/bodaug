import luwomboImage from "@/assets/luwombo-dish.jpg";

const Luwombo = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={luwomboImage} 
                alt="Traditional Luwombo dish steamed in banana leaves" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Luwombo
              </h1>
              <p className="text-xl text-white/90 mb-8">
                The Royal Steamed Delicacy of Buganda
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                Discover the traditional cooking method that transforms simple ingredients into a feast fit for kings. Learn about the royal dish of Buganda - its history, preparation, and cultural significance.
              </p>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The Royal Feast
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Luwombo is more than just a cooking method—it's a culinary art form that has graced the tables of Buganda royalty for centuries. 
                  This traditional steaming technique transforms simple ingredients into an aromatic feast, wrapped in banana leaves that infuse every bite with earthy, tropical flavors.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Named after its inventor, the legendary Baganda cook Luwombo, this dish represents the pinnacle of traditional Ugandan cuisine, 
                  combining protein, vegetables, and spices in perfect harmony.
                </p>
              </div>
              <div className="bg-accent/10 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Royal Origins</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Originally prepared for the Kabaka (King) of Buganda</li>
                  <li>• Traditional cooking method dates back over 200 years</li>
                  <li>• Banana leaves were chosen for their natural antimicrobial properties</li>
                  <li>• Each family has its own secret spice combinations</li>
                </ul>
              </div>
            </div>

            {/* Cooking Process */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                The Traditional Luwombo Method
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Prepare Ingredients",
                    description: "Season chicken, beef, or fish with traditional spices including ginger, garlic, and curry powder."
                  },
                  {
                    step: "2",
                    title: "Wrap in Leaves",
                    description: "Place seasoned protein and vegetables in fresh banana leaves, creating individual packets."
                  },
                  {
                    step: "3",
                    title: "Steam Slowly",
                    description: "Steam the wrapped packets in a large pot for 2-3 hours, allowing flavors to meld perfectly."
                  },
                  {
                    step: "4",
                    title: "Serve Hot",
                    description: "Unwrap the aromatic packets to reveal tender, flavorful meat and vegetables."
                  }
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent-foreground font-bold">{process.step}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Varieties */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Enkoko Luwombo",
                  description: "Traditional chicken luwombo with onions, tomatoes, and green peppers",
                  ingredients: ["Free-range chicken", "Fresh ginger", "Curry powder", "Green vegetables"]
                },
                {
                  name: "Ente Luwombo", 
                  description: "Tender beef luwombo slow-cooked with traditional spices",
                  ingredients: ["Lean beef cuts", "Garlic cloves", "Bay leaves", "Local herbs"]
                },
                {
                  name: "Ekyennyanja Luwombo",
                  description: "Fresh fish luwombo featuring tilapia or other lake fish",
                  ingredients: ["Fresh tilapia", "Lemon grass", "Tomatoes", "Onions"]
                }
              ].map((variety, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 boda-card">
                  <h3 className="font-semibold text-foreground mb-2">{variety.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{variety.description}</p>
                  <h4 className="font-medium text-foreground mb-2">Key Ingredients:</h4>
                  <ul className="space-y-1">
                    {variety.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Cultural Context */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Cultural Significance
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Luwombo is more than sustenance—it's a cultural connector. Families gather to prepare it together, 
                  with elders passing down secret spice combinations and techniques to younger generations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The communal aspect of unwrapping and sharing luwombo strengthens family bonds and creates lasting memories, 
                  making every meal a celebration of heritage and togetherness.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Modern Adaptations
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While traditional luwombo requires banana leaves and hours of steaming, modern cooks have adapted the technique 
                  using aluminum foil and pressure cookers without compromising the essential flavors.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Restaurants across Uganda now serve luwombo, making this royal dish accessible to everyone while maintaining 
                  respect for its traditional preparation methods.
                </p>
              </div>
            </div>

            {/* Where to Experience */}
            <div className="text-center bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Experience Authentic Luwombo
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Taste this royal delicacy at traditional restaurants or join a cooking class to learn the time-honored techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Find Luwombo Restaurants
                </button>
                <button className="btn-secondary">
                  Join Cooking Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luwombo;