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
          
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-8">
              Full story - Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KintuAndNambi;