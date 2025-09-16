import React from 'react';
import { Home, FileText, Gift, Trophy, User, MoreHorizontal, UserPlus, HelpCircle, Tag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const sidebarItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: FileText, label: 'Surveys', path: '/surveys' },
  { icon: Gift, label: 'Offers', path: '/offers', badge: 'NEW' },
  { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
  { icon: User, label: 'Account', path: '/account' },
];

const moreItems = [
  { icon: UserPlus, label: 'Refer A Friend' },
  { icon: HelpCircle, label: 'Help' },
  { icon: Tag, label: 'Redeem Bonus Code' },
];

export const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link to="/" className="block">
          <span className="text-2xl font-logo text-foreground">Surveyterra</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Button
                  asChild
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-3 ${
                    isActive 
                      ? "bg-secondary text-secondary-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Link to={item.path}>
                    <item.icon size={20} />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-medium bg-brand-green text-primary-foreground rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </Button>
              </li>
            );
          })}
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