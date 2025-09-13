import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Scroll, Utensils, Shirt, Gem } from "lucide-react";

interface ContentTileProps {
  title: string;
  link: string;
  icon: string; // For now, we'll pass an icon name or path
  metadata: Record<string, string>;
  teaser: string;
  detail: string;
}

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    'story-icon': Scroll,
    'food-icon': Utensils,
    'dress-icon': Shirt,
    'attire-icon': Shirt,
    'material-icon': Gem,
    'name-icon': Scroll,
    'default': ArrowUpRight
  };
  
  const IconComponent = iconMap[iconName] || iconMap['default'];
  return <IconComponent className="h-5 w-5 text-accent" />;
};

export const ContentTile = ({ title, link, icon, metadata, teaser, detail }: ContentTileProps) => {
  return (
    <Link to={link} className="group">
      <Card className="boda-card h-full overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl group-hover:text-accent transition-colors">
              {title}
            </CardTitle>
            <div className="p-2 bg-muted rounded-full">
              {getIconComponent(icon)}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {Object.entries(metadata).map(([key, value]) => (
              <Badge key={key} variant="secondary">{`${key}: ${value}`}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground mb-3">{teaser}</p>
          <p className="text-xs text-muted-foreground">{detail}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
