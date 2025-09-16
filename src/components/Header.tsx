import React from 'react';
import { Wallet, Trophy, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Balance and Stats */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Wallet className="text-muted-foreground" size={20} />
            <div>
              <p className="text-sm text-muted-foreground">Balance:</p>
              <p className="text-lg font-semibold text-foreground">$2.47 USD</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Trophy className="text-muted-foreground" size={16} />
              <span className="text-sm text-muted-foreground">0</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="text-muted-foreground" size={16} />
              <span className="text-sm text-muted-foreground">0</span>
            </div>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-gradient-primary text-primary-foreground border-0">
            <Trophy size={14} className="mr-1" />
            1 Level
          </Badge>
          
          <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 shadow-medium">
            CLAIM REWARD
          </Button>
        </div>
      </div>
    </header>
  );
};