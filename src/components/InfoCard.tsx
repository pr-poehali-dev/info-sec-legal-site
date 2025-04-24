import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const InfoCard = ({ icon, title, description, className }: InfoCardProps) => {
  return (
    <Card className={`transition-all duration-300 hover:shadow-lg ${className}`}>
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80 text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
