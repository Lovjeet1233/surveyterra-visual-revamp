import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Medal, Award, Crown, Target, TrendingUp } from 'lucide-react';
import leaderboardIllustration from '@/assets/leaderboard-illustration.png';

const topEarners = [
  { rank: 1, name: "Sarah M.", earnings: "$2,847.50", surveys: 234, avatar: "👩‍💼", badge: "👑" },
  { rank: 2, name: "Mike J.", earnings: "$2,156.30", surveys: 189, avatar: "👨‍💻", badge: "🥈" },
  { rank: 3, name: "Emma R.", earnings: "$1,983.75", surveys: 167, avatar: "👩‍🎓", badge: "🥉" },
  { rank: 4, name: "David L.", earnings: "$1,745.20", surveys: 145, avatar: "👨‍🔬", badge: "🏅" },
  { rank: 5, name: "Lisa K.", earnings: "$1,632.90", surveys: 134, avatar: "👩‍🏫", badge: "🏅" },
  { rank: 6, name: "Alex P.", earnings: "$1,523.45", surveys: 128, avatar: "👨‍🎨", badge: "🏅" },
  { rank: 7, name: "Maria S.", earnings: "$1,456.80", surveys: 121, avatar: "👩‍⚕️", badge: "🏅" },
  { rank: 8, name: "John D.", earnings: "$1,387.25", surveys: 115, avatar: "👨‍🏭", badge: "🏅" },
];

const achievements = [
  { name: "First Survey", description: "Complete your first survey", progress: 100, icon: Target, earned: true },
  { name: "Survey Streak", description: "Complete surveys for 7 days in a row", progress: 3, total: 7, icon: TrendingUp, earned: false },
  { name: "High Earner", description: "Earn $100 in total", progress: 67, total: 100, icon: Trophy, earned: false },
  { name: "Survey Master", description: "Complete 50 surveys", progress: 23, total: 50, icon: Award, earned: false },
];

const Leaderboard = () => {
  const currentUserRank = 156;
  const currentUserEarnings = "$47.80";
  const surveysToNext = 9;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Leaderboard</h1>
              <p className="text-muted-foreground">
                Compete with other users and climb the rankings. Complete more surveys to earn your spot!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Leaderboard */}
              <div className="lg:col-span-2 space-y-6">
                {/* Current Status */}
                <Card className="p-6 bg-gradient-earnings text-primary-foreground border-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Your Current Rank</h3>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold">#{currentUserRank}</div>
                        <div>
                          <p className="text-lg font-semibold">{currentUserEarnings}</p>
                          <p className="text-sm opacity-90">Total Earnings</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm opacity-90 mb-2">
                          Complete {surveysToNext} more surveys to unlock leaderboard!
                        </p>
                        <Progress value={10} className="h-2 bg-white/20" />
                      </div>
                    </div>
                    <div className="w-24 h-24">
                      <img 
                        src={leaderboardIllustration} 
                        alt="Leaderboard" 
                        className="w-full h-full object-contain opacity-80"
                      />
                    </div>
                  </div>
                </Card>

                {/* Top Earners */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-foreground">Top Earners</h3>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">$18,732.00</p>
                      <p className="text-sm text-muted-foreground">Weekly Prize Pool</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {topEarners.map((user) => (
                      <div 
                        key={user.rank}
                        className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                          user.rank <= 3 
                            ? 'bg-gradient-to-r from-brand-green/10 to-transparent border border-brand-green/20' 
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-2xl font-bold text-muted-foreground w-8">
                            #{user.rank}
                          </div>
                          <div className="text-2xl">{user.avatar}</div>
                          <div className="text-lg">{user.badge}</div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-foreground">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.surveys} surveys completed</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-primary">{user.earnings}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Achievements Sidebar */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Achievements</h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center gap-3">
                          <achievement.icon 
                            size={20} 
                            className={achievement.earned ? "text-brand-green" : "text-muted-foreground"} 
                          />
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{achievement.name}</p>
                            <p className="text-xs text-muted-foreground">{achievement.description}</p>
                          </div>
                          {achievement.earned && (
                            <Badge className="bg-brand-green text-primary-foreground">
                              ✓
                            </Badge>
                          )}
                        </div>
                        {!achievement.earned && (
                          <div className="ml-8">
                            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                              <span>{achievement.progress}</span>
                              <span>{achievement.total}</span>
                            </div>
                            <Progress 
                              value={(achievement.progress / achievement.total) * 100} 
                              className="h-1"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-secondary text-secondary-foreground">
                  <h3 className="text-lg font-bold mb-2">Weekly Challenge</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Complete 10 surveys this week to earn a bonus reward!
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>3/10</span>
                    </div>
                    <Progress value={30} className="h-2 bg-white/20" />
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-white/20 border-white/30 hover:bg-white/30">
                    View Details
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Leaderboard;