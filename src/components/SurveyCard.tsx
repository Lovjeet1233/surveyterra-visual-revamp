import React from 'react';
import { Clock, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SurveyCardProps {
  title: string;
  duration: string;
  reward: string;
  rating: number;
  totalRatings: number;
  category?: string;
}

export const SurveyCard: React.FC<SurveyCardProps> = ({
  title,
  duration,
  reward,
  rating,
  totalRatings,
  category
}) => {
  return (
    <Card className="p-4 hover:shadow-medium transition-all duration-300 cursor-pointer group">
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {category && (
              <Badge variant="secondary" className="mt-1 text-xs">
                {category}
              </Badge>
            )}
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-primary">
              {reward} <span className="text-sm text-muted-foreground">USD</span>
            </p>
          </div>
        </div>

        {/* Duration and Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock size={16} />
            <span className="text-sm">{duration}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-1">
              {rating}/5 ({totalRatings})
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};