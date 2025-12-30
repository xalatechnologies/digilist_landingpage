import React from 'react';
import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';

export interface CardItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface CardGridProps {
  items: CardItem[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({
  items,
  columns = 3,
  className = '',
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 sm:gap-6 lg:gap-8 ${className}`}>
      {items.map((item, idx) => (
        <Card key={idx} hoverable variant="gradient">
          <Card.Block>
            {item.icon && <div className="mb-3 sm:mb-4">{item.icon}</div>}
            <Heading level={3} className="mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl group-hover:text-primary transition-colors duration-180">
              {item.title}
            </Heading>
            <Text variant="body" className="text-sm sm:text-base text-navy/70">
              {item.description}
            </Text>
          </Card.Block>
        </Card>
      ))}
    </div>
  );
};

