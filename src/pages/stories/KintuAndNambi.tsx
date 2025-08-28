import storyImage from "@/assets/kintu-nambi-story.jpg";
import { BodaButton } from "@/components/ui/boda-button";
import StoryExcerptCTA from "@/components/StoryExcerptCTA";

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
                alt="Kintu and Nambi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Kintu and Nambi
              </h1>
              <p className="text-xl text-white/90 mb-8">
                The Creation of the Baganda People
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                This is the foundational creation story for the Baganda people, the largest ethnic group in Uganda. It is a tale of love, loss, and the origins of death.
              </p>
            </div>
          </div>

          {/* Story Content */}
          <div className="space-y-12">
            <div className="prose prose-lg max-w-none text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Coming Soon
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The full story of Kintu and Nambi is being prepared and will be available here soon. Thank you for your patience.
              </p>
            </div>
            <StoryExcerptCTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KintuAndNambi;
