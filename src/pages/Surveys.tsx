import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { SurveyCard } from '@/components/SurveyCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search, Filter, SortDesc } from 'lucide-react';

const allSurveys = [
  {
    title: "Consumer Behavior Analysis",
    duration: "15 min",
    reward: "$0.85",
    rating: 4,
    totalRatings: 234,
    category: "Market Research"
  },
  {
    title: "Product Feedback Survey", 
    duration: "8 min",
    reward: "$0.45",
    rating: 5,
    totalRatings: 89,
    category: "Product Development"
  },
  {
    title: "Brand Awareness Study",
    duration: "12 min", 
    reward: "$0.67",
    rating: 4,
    totalRatings: 156,
    category: "Marketing"
  },
  {
    title: "Technology Usage Survey",
    duration: "20 min",
    reward: "$1.25",
    rating: 5,
    totalRatings: 78,
    category: "Technology"
  },
  {
    title: "Health & Wellness Study",
    duration: "18 min",
    reward: "$0.95",
    rating: 4,
    totalRatings: 145,
    category: "Healthcare"
  },
  {
    title: "Shopping Preferences",
    duration: "10 min",
    reward: "$0.58",
    rating: 3,
    totalRatings: 203,
    category: "Retail"
  },
  {
    title: "Entertainment Survey",
    duration: "6 min",
    reward: "$0.32",
    rating: 4,
    totalRatings: 189,
    category: "Media"
  },
  {
    title: "Food & Dining Preferences",
    duration: "14 min",
    reward: "$0.72",
    rating: 5,
    totalRatings: 112,
    category: "Food & Beverage"
  }
];

const Surveys = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Available Surveys</h1>
              <p className="text-muted-foreground">
                Browse and complete surveys to earn rewards. Filter by category or search for specific topics.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="Search surveys..." 
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter size={16} className="mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <SortDesc size={16} className="mr-2" />
                  Sort
                </Button>
              </div>
            </div>

            {/* Survey Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-lg">
                <TabsTrigger value="all">All Surveys</TabsTrigger>
                <TabsTrigger value="short">Short (≤10min)</TabsTrigger>
                <TabsTrigger value="medium">Medium (11-20min)</TabsTrigger>
                <TabsTrigger value="long">Long (&gt;20min)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {allSurveys.map((survey, index) => (
                    <SurveyCard key={index} {...survey} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="short" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {allSurveys
                    .filter(survey => parseInt(survey.duration) <= 10)
                    .map((survey, index) => (
                      <SurveyCard key={index} {...survey} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="medium" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {allSurveys
                    .filter(survey => {
                      const duration = parseInt(survey.duration);
                      return duration >= 11 && duration <= 20;
                    })
                    .map((survey, index) => (
                      <SurveyCard key={index} {...survey} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="long" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {allSurveys
                    .filter(survey => parseInt(survey.duration) > 20)
                    .map((survey, index) => (
                      <SurveyCard key={index} {...survey} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Surveys;