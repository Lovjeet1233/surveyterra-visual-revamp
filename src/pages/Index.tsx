import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { FeaturedSection } from '@/components/FeaturedSection';
import { EarningsCard } from '@/components/EarningsCard';
import dashboardIllustration from '@/assets/dashboard-illustration.png';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        
        {/* Main Dashboard */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Main Content Area */}
              <div className="lg:col-span-3 space-y-6">
                {/* Welcome Section */}
                <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-2">
                        Welcome to Surveyterra
                      </h1>
                      <p className="text-muted-foreground text-lg">
                        Start earning money by taking surveys. Complete tasks, unlock rewards, and climb the leaderboard!
                      </p>
                    </div>
                    <div className="hidden md:block w-32 h-32">
                      <img 
                        src={dashboardIllustration} 
                        alt="Survey dashboard" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Featured Surveys */}
                <FeaturedSection />
              </div>
              
              {/* Sidebar Content */}
              <div className="lg:col-span-1">
                <EarningsCard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
