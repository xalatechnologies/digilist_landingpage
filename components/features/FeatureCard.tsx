import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardLink } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  href = '#',
}) => {
  return (
    <Card hoverable className="flex flex-col h-full">
      <div className="mb-6">
        <Icon 
          size={40} 
          className="text-action-blue mb-6 group-hover:scale-110 transition-transform duration-300" 
          aria-hidden="true" 
        />
        <Heading 
          level={3} 
          className="group-hover:text-action-blue transition-colors duration-300"
        >
          <span className="group-hover:underline decoration-2 underline-offset-4 transition-all duration-300">
            {title}
          </span>
        </Heading>
        <Text variant="body" className="mt-3">
          {description}
        </Text>
      </div>
      <CardLink href={href}>
        Les mer
      </CardLink>
    </Card>
  );
};

