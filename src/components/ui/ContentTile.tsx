import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ContentTileProps {
  title: string;
  link: string;
  icon: string; // For now, we'll pass an icon name or path
  metadata: Record<string, string>;
  teaser: string;
  detail: string;
}

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
              {/* Placeholder for icon */}
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
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
