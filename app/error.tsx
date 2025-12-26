'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <Heading level={1} className="mb-4 text-3xl sm:text-4xl">
          Noe gikk galt
        </Heading>
        <Text variant="lead" className="mb-8 text-text-secondary">
          Det oppstod en feil. Prøv å oppdatere siden eller kontakt oss hvis problemet vedvarer.
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="primary">
            Prøv igjen
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => window.location.href = '/'}
          >
            Gå til forsiden
          </Button>
        </div>
      </div>
    </div>
  );
}

