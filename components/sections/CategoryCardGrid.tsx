import React from 'react';
import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';
import { Shield, FileText, Settings, Key, ScrollText, Wrench } from 'lucide-react';

export interface CategoryItem {
  category: string;
  items: string[];
}

export interface CategoryCardGridProps {
  categories: CategoryItem[];
  columns?: 1 | 2 | 3;
  className?: string;
}

// Map category names to icons
const categoryIcons: Record<string, React.ElementType> = {
  'Autentisering og tilgang': Key,
  'Dokumentasjon og compliance': FileText,
  'Drift og ansvar': Settings,
  'Sikkerhet': Shield,
  'Personvern': ScrollText,
  'Teknisk': Wrench,
};

export const CategoryCardGrid: React.FC<CategoryCardGridProps> = ({
  categories,
  columns = 3,
  className = '',
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 sm:gap-6 lg:gap-8 ${className}`}>
      {categories.map((category, idx) => {
        const Icon = categoryIcons[category.category] || Shield;
        return (
          <Card key={idx} hoverable className="bg-white">
            <Card.Block>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth shrink-0">
                  <Icon size={24} className="text-white" aria-hidden="true" />
                </div>
                <Heading level={3} className="text-lg sm:text-xl lg:text-2xl text-navy group-hover:text-primary transition-colors duration-180 pt-2">
                  {category.category}
                </Heading>
              </div>
              <ul className="space-y-1.5 sm:space-y-2">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="text-cyan mt-1 shrink-0">•</span>
                    <Text variant="body" className="text-sm sm:text-base text-navy/70">
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </Card.Block>
          </Card>
        );
      })}
    </div>
  );
};

