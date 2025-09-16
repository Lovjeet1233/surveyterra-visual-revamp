import React from 'react';
import { SurveyCard } from './SurveyCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Filter } from 'lucide-react';

const surveys = [
  {
    title: "Consumer Behavior Study",
    duration: "17 min",
    reward: "$0.83",
    rating: 4,
    totalRatings: 156,
    category: "Market Research"
  },
  {
    title: "Product Feedback Survey", 
    duration: "12 min",
    reward: "$0.65",
    rating: 5,
    totalRatings: 89,
    category: "Product Development"
  },
  {
    title: "Shopping Preferences",
    duration: "8 min", 
    reward: "$0.42",
    rating: 3,
    totalRatings: 203,
    category: "Retail"
  },
  {
    title: "Technology Usage Survey",
    duration: "15 min",
    reward: "$0.78",
    rating: 4,
    totalRatings: 124,
    category: "Technology"
  },
  {
    title: "Health & Wellness Study",
    duration: "20 min",
    reward: "$1.15",
    rating: 5,
    totalRatings: 67,
    category: "Healthcare"
  },
  {
    title: "Entertainment Preferences",
    duration: "6 min",
    reward: "$0.32",
    rating: 4,
    totalRatings: 189,
    category: "Media"
  }
];

export const FeaturedSection = () => {
  return (
    <div className="space-y-6">
      {/* Featured Offers Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Featured Surveys</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Settings size={16} className="mr-2" />
            Change Devices
          </Button>
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="best-match" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="best-match">Best Match</TabsTrigger>
          <TabsTrigger value="short-surveys">Short Surveys</TabsTrigger>
          <TabsTrigger value="highest-payout">Highest Payout</TabsTrigger>
        </TabsList>
        
        <TabsContent value="best-match" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {surveys.map((survey, index) => (
              <SurveyCard key={index} {...survey} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="short-surveys" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {surveys
              .filter(survey => parseInt(survey.duration) <= 10)
              .map((survey, index) => (
                <SurveyCard key={index} {...survey} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="highest-payout" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {surveys
              .sort((a, b) => parseFloat(b.reward.slice(1)) - parseFloat(a.reward.slice(1)))
              .map((survey, index) => (
                <SurveyCard key={index} {...survey} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};