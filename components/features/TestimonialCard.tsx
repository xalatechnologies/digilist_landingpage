import React from 'react';
import { Quote } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Text } from '@/components/ui/Typography';

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
}) => {
  return (
    <Card hoverable className="relative h-full flex flex-col group bg-green-50/40 hover:bg-green-50 transition-colors duration-300">
      <Quote 
        className="text-background-light fill-background-light absolute top-6 right-6 group-hover:text-action-blue/20 group-hover:fill-action-blue/20 transition-colors duration-300" 
        size={36} 
        aria-hidden="true" 
      />
      <Text 
        variant="body" 
        className="font-medium leading-relaxed mb-6 relative z-10 flex-grow group-hover:text-navy-base transition-colors duration-300"
      >
        {quote}
      </Text>
      <div className="pt-6 border-t-2 border-gray-200 group-hover:border-action-blue/50 transition-colors duration-300">
        <p className="font-bold text-navy-base text-base mb-1 group-hover:text-action-blue transition-colors duration-300">
          {author}
        </p>
        <p className="text-sm text-text-secondary group-hover:text-text-secondary transition-colors duration-300">
          {role}
        </p>
      </div>
    </Card>
  );
};

