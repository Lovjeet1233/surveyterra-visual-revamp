import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import earningsIllustration from '@/assets/earnings-illustration.png';

export const EarningsCard = () => {
  return (
    <Card className="bg-gradient-earnings p-6 text-primary-foreground border-0 shadow-strong">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">Earn more by referring</h3>
          <p className="text-sm mb-4 opacity-90">
            When someone signs up using your link, you earn a 10% commission on their survey rewards!
          </p>
          <Button 
            variant="outline" 
            className="bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30"
          >
            How it works?
          </Button>
        </div>
        
        <div className="w-24 h-24 relative">
          <img 
            src={earningsIllustration} 
            alt="Earnings illustration" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
        <div className="text-center">
          <DollarSign className="mx-auto mb-1" size={20} />
          <p className="text-2xl font-bold">$127</p>
          <p className="text-xs opacity-80">Total Earned</p>
        </div>
        <div className="text-center">
          <Users className="mx-auto mb-1" size={20} />
          <p className="text-2xl font-bold">23</p>
          <p className="text-xs opacity-80">Referrals</p>
        </div>
        <div className="text-center">
          <TrendingUp className="mx-auto mb-1" size={20} />
          <p className="text-2xl font-bold">15%</p>
          <p className="text-xs opacity-80">This Month</p>
        </div>
      </div>
    </Card>
  );
};