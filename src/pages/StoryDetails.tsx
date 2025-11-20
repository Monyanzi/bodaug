import { useParams, Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import StoryExcerptCTA from "@/components/StoryExcerptCTA";
import storiesData from "@/data/stories.json";
import NotFound from "@/pages/NotFound";
import ReactMarkdown from 'react-markdown';

const StoryDetails = () => {
  const { storyId } = useParams();
  const story = storiesData.find((s) => s.id === storyId);

  if (!story) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {story.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {story.subtitle}
              </p>
              {story.intro && (
                <p className="text-white/80 max-w-2xl mx-auto">
                  {story.intro}
                </p>
              )}
            </div>
          </div>

          {story.comingSoon ? (
            <div className="text-center bg-secondary rounded-lg p-8 my-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                Content Coming Soon
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                This section is currently under development. The complete, unabridged
                content will be available in the Boda Book Series. Pre-order now to
                be the first to get access.
                </p>
                <Link to="/preorder">
                <BodaButton variant="primary" size="lg">
                    Pre-order the Boda Book Series
                </BodaButton>
                </Link>
            </div>
          ) : (
            /* Story Content */
            <div className="space-y-12">
                {/* Introduction */}
                {story.sections?.introduction && (
                <div className="prose prose-lg max-w-none">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                        {story.sections.introduction.title}
                        </h2>
                        {story.sections.introduction.content.map((para, index) => (
                            <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                                {para}
                            </p>
                        ))}
                    </div>
                    {story.sections.introduction.sidebar && (
                        <div className="bg-accent/10 rounded-lg p-6">
                            <h3 className="font-semibold text-foreground mb-3">{story.sections.introduction.sidebar.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {story.sections.introduction.sidebar.text}
                            </p>
                        </div>
                    )}
                    </div>
                </div>
                )}

                {/* Dispute/Covenant/Underworld/Encounter/Switching/Omens */}
                {(story.sections?.dispute || story.sections?.covenant || story.sections?.underworld || story.sections?.encounter || story.sections?.switching || story.sections?.omens) && (
                    <div className="bg-secondary rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                            {(story.sections.dispute || story.sections.covenant || story.sections.underworld || story.sections.encounter || story.sections.switching || story.sections.omens)?.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {(story.sections.dispute || story.sections.covenant || story.sections.underworld || story.sections.encounter || story.sections.switching || story.sections.omens)?.columns.map((col, index) => (
                                <div key={index}>
                                    <h3 className="font-semibold text-foreground mb-3">{col.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {col.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Parting/Imbalu/FinalTest/Consequence/Rejection/Departure/HiddenPrince/Prophecy */}
                {(story.sections?.parting || story.sections?.imbalu || story.sections?.finalTest || story.sections?.consequence || story.sections?.rejection || story.sections?.departure || story.sections?.hiddenPrince || story.sections?.prophecy) && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                {(story.sections.parting || story.sections.imbalu || story.sections.finalTest || story.sections.consequence || story.sections.rejection || story.sections.departure || story.sections.hiddenPrince || story.sections.prophecy)?.title}
                            </h2>
                            {(story.sections.parting || story.sections.imbalu || story.sections.finalTest || story.sections.consequence || story.sections.rejection || story.sections.departure || story.sections.hiddenPrince || story.sections.prophecy)?.content.map((para, index) => (
                                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                                    {para}
                                </p>
                            ))}
                        </div>
                         {/* Second section like Hidden Prince for Ndahura */}
                        {(story.id === 'ndahura-at-the-gate-of-bukuku' && story.sections?.prophecy && story.sections?.hiddenPrince) && (
                           <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-8">
                                 <div>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                                        {story.sections.prophecy.title}
                                    </h2>
                                    {story.sections.prophecy.content.map((para, index) => (
                                        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                                <div className="bg-card border border-border rounded-lg p-6">
                                    <h3 className="font-semibold text-foreground mb-3">{story.sections.prophecy.sidebar.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {story.sections.prophecy.sidebar.text}
                                    </p>
                                </div>
                           </div>
                        )}

                        {/* Sidebar for Parting/Imbalu/FinalTest/Consequence/Rejection/Departure/HiddenPrince */}
                        {(story.sections.parting || story.sections.imbalu || story.sections.finalTest || story.sections.consequence || story.sections.rejection || story.sections.departure || story.sections.hiddenPrince)?.sidebar && (
                            <div className="bg-card border border-border rounded-lg p-6">
                                <h3 className="font-semibold text-foreground mb-3">{(story.sections.parting || story.sections.imbalu || story.sections.finalTest || story.sections.consequence || story.sections.rejection || story.sections.departure || story.sections.hiddenPrince)?.sidebar.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {(story.sections.parting || story.sections.imbalu || story.sections.finalTest || story.sections.consequence || story.sections.rejection || story.sections.departure || story.sections.hiddenPrince)?.sidebar.text}
                                </p>
                                {(story.sections.parting || story.sections.imbalu || story.sections.finalTest || story.sections.consequence || story.sections.rejection || story.sections.departure || story.sections.hiddenPrince)?.sidebar.items && (
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {(story.sections.parting || story.sections.imbalu || story.sections.finalTest || story.sections.consequence || story.sections.rejection || story.sections.departure || story.sections.hiddenPrince)?.sidebar.items.map((item, i) => (
                                            <li key={i}>• {item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                         {/* Specific handling for Ndahura's hidden prince section which is grid */}
                         {story.id === 'ndahura-at-the-gate-of-bukuku' && story.sections?.hiddenPrince && (
                            <div className="col-span-2 bg-secondary rounded-lg p-8 mt-8">
                                <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                                    {story.sections.hiddenPrince.title}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {story.sections.hiddenPrince.columns.map((col, index) => (
                                        <div key={index}>
                                            <h3 className="font-semibold text-foreground mb-3">{col.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                {col.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                         )}
                    </div>
                )}

                {/* Relevance */}
                {story.sections?.relevance && (
                <div className="text-center bg-secondary rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                    {story.sections.relevance.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {story.sections.relevance.text}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <BodaButton variant="primary">
                        Explore More Stories
                    </BodaButton>
                    <BodaButton variant="secondary">
                        Visit Cultural Sites
                    </BodaButton>
                    </div>
                </div>
                )}
                <StoryExcerptCTA />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
