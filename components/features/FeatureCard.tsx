'use client';

import React from 'react';
import { Calendar, CreditCard, Lock, LucideIcon } from 'lucide-react';
import { Card, CardLink } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';

export type IconName = 'Calendar' | 'CreditCard' | 'Lock';

const iconMap: Record<IconName, LucideIcon> = {
  Calendar,
  CreditCard,
  Lock,
};

export interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
  href?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  href = '#',
}) => {
  const IconComponent = iconMap[icon];
  
  if (!IconComponent) {
    return null;
  }

  return (
    <Card hoverable className="flex flex-col h-full bg-orange-50 hover:bg-orange-100 transition-colors duration-300">
      <div className="mb-6">
        <IconComponent 
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

