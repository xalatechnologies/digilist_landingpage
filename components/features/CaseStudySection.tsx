import React from 'react';
import { CheckCircle2, BarChart3, TrendingUp, Clock, Users } from 'lucide-react';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';

export const CaseStudySection: React.FC = () => {
  const benefits = [
    {
      icon: CheckCircle2,
      text: 'Automatisk godkjenning av enkle bookinger',
    },
    {
      icon: CheckCircle2,
      text: 'Ingen nøkkeladministrasjon',
    },
    {
      icon: CheckCircle2,
      text: 'Full UU-støtte (WCAG 2.1)',
    },
  ];

  const stats = [
    {
      icon: BarChart3,
      value: '70%',
      label: 'Redusert administrasjonstid',
      color: 'text-action-blue',
    },
    {
      icon: TrendingUp,
      value: '30%',
      label: 'Økt utnyttelse av lokaler',
      color: 'text-[#27C93F]',
    },
    {
      icon: Clock,
      value: '2 timer',
      label: 'Spart per uke per ansatt',
      color: 'text-action-blue',
    },
  ];

  return (
    <section id="cases" className="py-section border-t border-border-default" style={{ backgroundColor: '#F0F7FA' }}>
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">
            Resultater fra kommunene
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Se hvordan Digilist har forbedret arbeidsflyten i norske kommuner.
          </Text>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Testimonial */}
          <div className="bg-white p-8 md:p-10 rounded-digdir border border-border-default shadow-sm">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-6">
                <Users className="text-action-blue" size={24} aria-hidden="true" />
                <span className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                  Kundecase
                </span>
              </div>
              
              <Heading level={3} className="mb-6 text-2xl md:text-3xl leading-tight">
                "Digilist har redusert administrasjonstiden vår med 70%"
              </Heading>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <benefit.icon 
                      className="text-action-blue mt-1 shrink-0" 
                      size={20} 
                      aria-hidden="true" 
                    />
                    <Text variant="body" className="font-medium text-navy-base">
                      {benefit.text}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Author Info */}
            <div className="pt-8 border-t border-border-default">
              <p className="font-bold text-navy-base text-base mb-1">
                Olav Hansen
              </p>
              <p className="text-sm text-text-secondary">
                Digitaliseringssjef, Asker Kommune
              </p>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-digdir border border-border-default shadow-sm text-center hover:shadow-md transition-all"
              >
                <stat.icon 
                  className={`${stat.color} mx-auto mb-4`} 
                  size={40} 
                  aria-hidden="true" 
                />
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 tracking-tighter`}>
                  {stat.value}
                </div>
                <Text variant="body" className="font-medium text-navy-base">
                  {stat.label}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

