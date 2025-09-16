import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Settings, 
  Bell, 
  Shield, 
  CreditCard,
  Gift,
  LogOut,
  Edit
} from 'lucide-react';

const Account = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Account Settings</h1>
              <p className="text-muted-foreground">
                Manage your profile, preferences, and account security.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">John Doe</h3>
                    <p className="text-muted-foreground">john.doe@email.com</p>
                    <Badge className="mt-2 bg-brand-green text-primary-foreground">
                      Level 1 Member
                    </Badge>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Member Since</span>
                      <span className="text-sm font-medium">Sep 2025</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Surveys Completed</span>
                      <span className="text-sm font-medium">23</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Total Earned</span>
                      <span className="text-sm font-medium text-primary">$47.80</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Current Streak</span>
                      <span className="text-sm font-medium">3 days</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    <Edit size={16} className="mr-2" />
                    Edit Profile Photo
                  </Button>
                </Card>

                {/* Quick Actions */}
                <Card className="p-4 mt-4">
                  <h4 className="font-semibold text-foreground mb-3">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <Gift size={16} className="mr-2" />
                      Redeem Rewards
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <CreditCard size={16} className="mr-2" />
                      Payment Methods
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Account Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    <Button variant="outline" size="sm">
                      <Edit size={14} className="mr-2" />
                      Edit
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="john.doe@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="birthdate">Date of Birth</Label>
                      <Input id="birthdate" type="date" defaultValue="1990-01-01" />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="United States" />
                    </div>
                  </div>
                </Card>

                {/* Account Preferences */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Preferences</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Notifications</Label>
                      <div className="mt-2 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Bell size={16} className="text-muted-foreground" />
                            <div>
                              <p className="text-sm font-medium">Email Notifications</p>
                              <p className="text-xs text-muted-foreground">Receive updates about new surveys</p>
                            </div>
                          </div>
                          <Badge variant="secondary">Enabled</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Bell size={16} className="text-muted-foreground" />
                            <div>
                              <p className="text-sm font-medium">Push Notifications</p>
                              <p className="text-xs text-muted-foreground">Get notified on your device</p>
                            </div>
                          </div>
                          <Badge variant="outline">Disabled</Badge>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <Label className="text-base font-medium">Privacy</Label>
                      <div className="mt-2 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Shield size={16} className="text-muted-foreground" />
                            <div>
                              <p className="text-sm font-medium">Profile Visibility</p>
                              <p className="text-xs text-muted-foreground">Show on leaderboard</p>
                            </div>
                          </div>
                          <Badge variant="secondary">Public</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Shield size={16} className="text-muted-foreground" />
                            <div>
                              <p className="text-sm font-medium">Data Sharing</p>
                              <p className="text-xs text-muted-foreground">Anonymous usage data</p>
                            </div>
                          </div>
                          <Badge variant="secondary">Enabled</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Account Security */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Security</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Password</p>
                        <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                      </div>
                      <Button variant="outline">Change Password</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Button variant="outline">Setup 2FA</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Connected Devices</p>
                        <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                      </div>
                      <Button variant="outline">View Devices</Button>
                    </div>
                  </div>
                </Card>

                {/* Danger Zone */}
                <Card className="p-6 border-destructive/20">
                  <h3 className="text-lg font-semibold text-destructive mb-4">Danger Zone</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                      <div>
                        <p className="font-medium text-destructive">Delete Account</p>
                        <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                      </div>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Account;