import React from 'react';

export const DashboardPreview: React.FC = () => {
  return (
    <div className="mt-20 relative mx-auto max-w-4xl">
      <div className="bg-white rounded-[8px] border border-border-default shadow-2xl p-6 transform perspective-1000 rotate-x-6 hover:rotate-x-0 transition-transform duration-500">
        {/* Mockup Header */}
        <div className="flex items-center justify-between mb-6 border-b border-zebra-tint pb-4">
          <div className="font-bold text-navy-base text-lg tracking-tight">Oversikt: Idrettshallen</div>
          <div className="text-sm font-semibold text-action-blue tracking-tight">UKE 42</div>
        </div>
        
        {/* Mockup Content Grid */}
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="flex gap-4 items-center">
            <div className="w-12 text-sm text-text-muted font-medium">08:00</div>
            <div className="flex-1 bg-background-light border-l-4 border-action-blue p-3 rounded-digdir">
              <div className="font-bold text-navy-base text-sm tracking-tight">Skolebruk</div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex gap-4 items-center">
            <div className="w-12 text-sm text-text-muted font-medium">10:00</div>
            <div className="flex-1 border border-dashed border-border-default p-3 rounded-digdir text-text-muted text-sm flex items-center gap-2 font-medium">
              <div className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true"></div> 
              Ledig tid
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex gap-4 items-center">
            <div className="w-12 text-sm text-text-muted font-medium">17:00</div>
            <div className="flex-1 bg-background-light border-l-4 border-[#27C93F] p-3 rounded-digdir">
              <div className="font-bold text-navy-base text-sm tracking-tight">Håndballtrening (IL Ørn)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

