import { Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";

const StoryExcerptCTA = () => {
  return (
    <div className="text-center bg-secondary rounded-xl p-8 md:p-12 my-12 border border-border shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
        This is just the beginning of the tale.
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        You've just read an excerpt of the full story. To discover what happens next and to read the complete, unabridged version, you'll find it in the Boda Book Series. Our Definitive Edition contains the full versions of every story on this website, beautifully illustrated and with added cultural context.
      </p>
      <Link to="/preorder">
        <BodaButton variant="primary" size="lg">
          Pre-order to Read the Full Story
        </BodaButton>
      </Link>
    </div>
  );
};

export default StoryExcerptCTA;
