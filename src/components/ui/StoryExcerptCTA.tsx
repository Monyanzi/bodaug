import { Link } from "react-router-dom";
import { BodaButton } from "./boda-button";

interface StoryExcerptCTAProps {
  storyName: string;
}

export const StoryExcerptCTA = ({ storyName }: StoryExcerptCTAProps) => {
  return (
    <div className="my-12 p-8 bg-secondary rounded-lg text-center">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        This is just the beginning of the tale.
      </h2>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        You've just read an excerpt of the full story. To discover what happens next and to read the complete, unabridged version, you'll find it in the{" "}
        <span className="font-semibold text-accent">Boda Book Series</span>. Our Definitive Edition contains the full versions of every story on this website, beautifully illustrated and with added cultural context.
      </p>
      <Link to="/preorder?edition=definitive">
        <BodaButton variant="primary" size="lg">
          Pre-order to Read the Full Story of {storyName}
        </BodaButton>
      </Link>
    </div>
  );
};
