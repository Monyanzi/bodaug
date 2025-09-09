import { BodaButton } from "@/components/ui/boda-button";
import { Link } from "react-router-dom";

const Nambi = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="/nambi-goddess.jpg"
                alt="Nambi - Goddess of the Sky"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nambi
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Goddess of the Sky - Buganda Origin
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                A legendary name from the Baganda creation story, associated with beauty, grace, and royalty.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="text-center bg-secondary rounded-lg p-8 my-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Content Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              This section is currently under development. The complete exploration
              of Ugandan names and their meanings will be available in the Boda Book Series.
            </p>
            <Link to="/preorder">
              <BodaButton variant="primary" size="lg">
                Pre-order the Boda Book Series
              </BodaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nambi;