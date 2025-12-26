import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <Heading level={1} className="mb-4 text-3xl sm:text-4xl">
          404
        </Heading>
        <Heading level={2} className="mb-4">
          Siden finnes ikke
        </Heading>
        <Text variant="lead" className="mb-8 text-text-secondary">
          Siden du leter etter kunne ikke bli funnet. Den kan ha blitt flyttet eller slettet.
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary">
              Gå til forsiden
            </Button>
          </Link>
          <Link href="/demo">
            <Button variant="secondary">
              Se demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

