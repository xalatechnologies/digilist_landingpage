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
    <Card hoverable variant="gradient" className="h-full">
      <Card.Block className="relative flex flex-col h-full">
        <Quote 
          className="text-cyan/20 fill-cyan/20 absolute top-0 right-0 group-hover:text-cyan/30 group-hover:fill-cyan/30 transition-colors duration-180" 
          size={36} 
          aria-hidden="true" 
        />
        <Text 
          variant="body" 
          className="font-medium leading-relaxed mb-6 relative z-10 flex-grow text-navy/80 group-hover:text-navy transition-colors duration-180"
        >
          &ldquo;{quote}&rdquo;
        </Text>
        <div className="pt-6 border-t-2 border-sky2/50 group-hover:border-cyan/50 transition-colors duration-180">
          <p className="font-bold text-navy text-base mb-1 group-hover:text-primary transition-colors duration-180">
            {author}
          </p>
          <p className="text-sm text-navy/60">
            {role}
          </p>
        </div>
      </Card.Block>
    </Card>
  );
};
