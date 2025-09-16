import React from 'react';
import { Home, FileText, Gift, Trophy, User, MoreHorizontal, UserPlus, HelpCircle, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sidebarItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: FileText, label: 'Surveys', badge: null },
  { icon: Gift, label: 'Offers', badge: 'NEW' },
  { icon: Trophy, label: 'Leaderboard', badge: null },
  { icon: User, label: 'Account', badge: null },
];

const moreItems = [
  { icon: UserPlus, label: 'Refer A Friend' },
  { icon: HelpCircle, label: 'Help' },
  { icon: Tag, label: 'Redeem Bonus Code' },
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold text-foreground">Surveyterra</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <Button
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  item.active 
                    ? "bg-secondary text-secondary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon size={20} />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-brand-green text-primary-foreground rounded-full">
                    {item.badge}
                  </span>
                )}
              </Button>
            </li>
          ))}
        </ul>

        {/* More section */}
        <div className="mt-8">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <MoreHorizontal size={20} />
            <span className="flex-1 text-left">More</span>
          </Button>
          
          <ul className="mt-2 ml-6 space-y-2">
            {moreItems.map((item) => (
              <li key={item.label}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-muted text-sm"
                >
                  <item.icon size={16} />
                  <span className="flex-1 text-left">{item.label}</span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};