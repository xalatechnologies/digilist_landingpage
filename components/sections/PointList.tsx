import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Text } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';

export interface PointListProps {
  points: string[];
  columns?: 1 | 2;
  className?: string;
  showCard?: boolean;
}

export const PointList: React.FC<PointListProps> = ({
  points,
  columns = 2,
  className = '',
  showCard = true,
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
  };

  const content = (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {points.map((point, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <CheckCircle2 
            className="text-primary shrink-0 mt-0.5" 
            size={20} 
            aria-hidden="true"
          />
          <Text variant="body">
            {point}
          </Text>
        </div>
      ))}
    </div>
  );

  if (showCard) {
    return (
      <div className="max-w-3xl mx-auto">
        <Card variant="gradient">
          <Card.Block>
            {content}
          </Card.Block>
        </Card>
      </div>
    );
  }

  return content;
};
