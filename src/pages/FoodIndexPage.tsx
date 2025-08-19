import { ContentTile } from "@/components/ui/ContentTile";
import foodData from "@/data/food.json";
import { Filter } from "lucide-react";

const FoodIndexPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Food</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Taste the delicious and diverse cuisine of Uganda.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filter by:</span>
          </div>
          {/* Placeholder for filter buttons */}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {foodData.map((item, index) => (
            <ContentTile
              key={index}
              title={item.title}
              link={item.link}
              icon={item.icon}
              metadata={item.metadata}
              teaser={item.teaser}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodIndexPage;
