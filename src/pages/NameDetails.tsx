import { useParams, Link } from "react-router-dom";
import { BodaButton } from "@/components/ui/boda-button";
import { Book } from "lucide-react";
import namesData from "@/data/names.json";
import NotFound from "@/pages/NotFound";
import ReactMarkdown from 'react-markdown';

const NameDetails = () => {
  const { nameId } = useParams();
  const name = namesData.find((n) => n.id === nameId);

  if (!name) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className={name.image ? "relative py-16 md:py-20 rounded-xl mb-8 overflow-hidden" : "text-center mb-12"}>
             {name.image ? (
                <>
                <div className="absolute inset-0">
                    <img
                        src={name.image}
                        alt={name.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                </div>
                 <div className="relative z-10 text-center text-white px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {name.title}
                    </h1>
                    <p className="text-xl text-white/90 mb-8">
                        {name.description}
                    </p>
                    {name.intro && (
                        <p className="text-white/80 max-w-2xl mx-auto">
                        {name.intro}
                        </p>
                    )}
                </div>
                </>
             ) : (
                <>
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        {name.title}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        {name.description}
                    </p>
                    {name.intro && (
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {name.intro}
                        </p>
                    )}
                </>
             )}
          </div>

          {name.comingSoon ? (
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
          ) : (
            /* Main Content */
            <div className="space-y-12">
               {/* Meaning */}
                {name.sections?.meaning && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
                    <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        {name.sections.meaning.title}
                    </h2>
                    {name.sections.meaning.content.map((para, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {para}
                        </p>
                    ))}
                    </div>
                    {name.sections.meaning.sidebar && (
                        <div className="bg-accent/10 rounded-lg p-6">
                            <h3 className="font-semibold text-foreground mb-3">{name.sections.meaning.sidebar.title}</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {name.sections.meaning.sidebar.items.map((item, index) => (
                                    <li key={index}>
                                        <ReactMarkdown>{item.startsWith('•') ? item : `• ${item}`}</ReactMarkdown>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                )}

                {/* Context */}
                {name.sections?.context && (
                <div className="bg-secondary rounded-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                    {name.sections.context.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {name.sections.context.items.map((aspect, index) => (
                        <div key={index} className="text-center bg-card border border-border rounded-lg p-6">
                        <div className="text-3xl mb-4">{aspect.symbol}</div>
                        <h3 className="font-semibold text-foreground mb-2">{aspect.aspect}</h3>
                        <p className="text-sm text-muted-foreground">{aspect.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
                )}

                {/* Modern Usage */}
                {name.sections?.modernUsage && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {name.sections.modernUsage.columns.map((col, index) => (
                        <div key={index}>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                {col.title}
                            </h2>
                            {col.content.map((para, i) => (
                                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                                    {para}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
                )}

                {/* Famous Bearers */}
                {name.sections?.famousBearers && (
                <div className="bg-card border border-border rounded-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                    {name.sections.famousBearers.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {name.sections.famousBearers.items.map((achievement, index) => (
                        <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                        </div>
                    ))}
                    </div>
                </div>
                )}

                {/* Call to Action */}
                {name.sections?.cta && (
                <div className="text-center bg-accent/10 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                    {name.sections.cta.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {name.sections.cta.text}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {name.sections.cta.buttons.map((btn, index) => (
                        <BodaButton key={index} variant={btn.variant === "hero" ? "primary" : btn.variant as "primary" | "secondary" | "ghost" | "outline" | "destructive" | null | undefined}>
                            {btn.text}
                        </BodaButton>
                    ))}
                    </div>
                </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameDetails;
