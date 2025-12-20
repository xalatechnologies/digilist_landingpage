import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';
import { Section } from '@/components/layout/Section';
import { VideoController } from '@/components/features/VideoController';

export default function DemoPage() {
  return (
    <div className="bg-white min-h-screen font-sans pb-32">
      
      {/* DEMO HEADER */}
      <Section variant="dark" className="pt-20 pb-32">
        <div className="max-w-[800px] mx-auto text-center">
          <Badge variant="dark">Produktdemo</Badge>
          <Heading level={1} className="text-white mb-6">
            Se Digilist i aksjon
          </Heading>
          <Text variant="lead" className="text-gray-300">
            Utforsk hvordan vi automatiserer utleieprosessen fra start til slutt. Velg visning nedenfor.
          </Text>
        </div>
      </Section>

      {/* VIDEO CONTROLLER INTERFACE */}
      <VideoController />

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border-default p-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-40">
        <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-navy-base text-lg tracking-tight">Klar for å prøve selv?</h4>
            <Text variant="small">
              Start pilotprosjektet i dag og se resultater første uken.
            </Text>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary">Kontakt Salg</Button>
            <Button showArrow>
              Start Pilot
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

