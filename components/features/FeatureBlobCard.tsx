'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';
import tokens from '@/lib/design-tokens';

export interface FeatureBlobCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  blobColor?: 'blue' | 'green' | 'purple' | 'cyan' | string;
}

// Blob color mapping using design tokens
const blobColors = {
  blue: tokens.colors.primary,
  green: tokens.colors.success,
  purple: '#8B5CF6',
  cyan: tokens.colors.cyan,
};

export const FeatureBlobCard: React.FC<FeatureBlobCardProps> = ({
  icon: Icon,
  title,
  description,
  blobColor = 'blue',
}) => {
  // Get color value from design tokens or use directly if hex
  const colorValue = blobColors[blobColor as keyof typeof blobColors] || blobColor;
  
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon with organic blob background */}
      <div className="relative mb-6">
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center relative"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${colorValue}40, ${colorValue}20)`,
          }}
        >
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-30"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${colorValue}, transparent)`,
            }}
          />
          <Icon 
            size={40} 
            className="text-primary relative z-10" 
            aria-hidden="true" 
          />
        </div>
      </div>
      
      <Heading level={3} className="mb-3">
        {title}
      </Heading>
      <Text variant="body" className="max-w-sm">
        {description}
      </Text>
    </div>
  );
};
