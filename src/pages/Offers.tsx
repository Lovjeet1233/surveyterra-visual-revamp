import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, DollarSign, Star, Download, Smartphone } from 'lucide-react';

const offers = [
  {
    title: "Opera GX Browser",
    description: "Install & Open",
    reward: "$0.16",
    users: "890",
    rating: 4.2,
    category: "App Install",
    icon: "🌐",
    estimated: "2 min"
  },
  {
    title: "Spotify Premium Trial",
    description: "Sign up for free trial",
    reward: "$2.50",
    users: "1.2k",
    rating: 4.8,
    category: "Subscription",
    icon: "🎵",
    estimated: "5 min"
  },
  {
    title: "Survey Monkey App",
    description: "Download and complete tutorial",
    reward: "$1.25",
    users: "567",
    rating: 4.1,
    category: "App Install",
    icon: "📱",
    estimated: "8 min"
  },
  {
    title: "Cash App Registration",
    description: "Sign up and verify account",
    reward: "$3.00",
    users: "2.1k",
    rating: 4.6,
    category: "Finance",
    icon: "💰",
    estimated: "10 min"
  },
  {
    title: "Disney+ Free Trial",
    description: "Start your free trial",
    reward: "$4.25",
    users: "856",
    rating: 4.9,
    category: "Subscription",
    icon: "🎬",
    estimated: "3 min"
  },
  {
    title: "Food Delivery App",
    description: "Download and place first order",
    reward: "$2.80",
    users: "743",
    rating: 4.3,
    category: "Shopping",
    icon: "🍔",
    estimated: "15 min"
  }
];

const OfferCard = ({ offer }: { offer: any }) => (
  <Card className="p-4 hover:shadow-medium transition-all duration-300 cursor-pointer group">
    <div className="flex items-start gap-4">
      <div className="text-4xl">{offer.icon}</div>
      
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {offer.title}
            </h3>
            <p className="text-sm text-muted-foreground">{offer.description}</p>
            <Badge variant="secondary" className="mt-1 text-xs">
              {offer.category}
            </Badge>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-primary">
              {offer.reward} <span className="text-sm text-muted-foreground">USD</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{offer.estimated}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{offer.users}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span>{offer.rating}</span>
          </div>
        </div>
        
        <Button className="w-full bg-gradient-primary text-primary-foreground">
          Complete Offer
        </Button>
      </div>
    </div>
  </Card>
);

const Offers = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold text-foreground">Offers</h1>
                <Badge className="bg-brand-green text-primary-foreground">NEW</Badge>
              </div>
              <p className="text-muted-foreground">
                Complete offers to earn extra rewards. Download apps, sign up for services, and more!
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <DollarSign className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">$47.32</p>
                    <p className="text-sm text-muted-foreground">Total Earned from Offers</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-earnings rounded-lg">
                    <Download className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">23</p>
                    <p className="text-sm text-muted-foreground">Offers Completed</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-secondary rounded-lg">
                    <Smartphone className="text-secondary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">15</p>
                    <p className="text-sm text-muted-foreground">Apps Installed</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Offers Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-lg">
                <TabsTrigger value="all">All Offers</TabsTrigger>
                <TabsTrigger value="apps">App Installs</TabsTrigger>
                <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {offers.map((offer, index) => (
                    <OfferCard key={index} offer={offer} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="apps" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {offers
                    .filter(offer => offer.category === "App Install")
                    .map((offer, index) => (
                      <OfferCard key={index} offer={offer} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="subscriptions" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {offers
                    .filter(offer => offer.category === "Subscription")
                    .map((offer, index) => (
                      <OfferCard key={index} offer={offer} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="finance" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {offers
                    .filter(offer => offer.category === "Finance")
                    .map((offer, index) => (
                      <OfferCard key={index} offer={offer} />
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

export default Offers;