import { Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import tribeImage from "@/assets/uganda-tribes-collage.jpg"; // Placeholder

const LangoTribe = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={tribeImage}
                alt="Lango Tribe"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Lango Tribe
              </h1>
              <p className="text-xl text-white/90">
                Plains people known for their hunting and farming skills.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Content Coming Soon
            </h2>
            <p className="text-muted-foreground mb-8">
              Detailed information about the Lango tribe is being prepared and will be available soon.
            </p>
            <Link to="/tribes">
              <BodaButton variant="primary">
                Back to Tribes
              </BodaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangoTribe;