import { useState } from 'react';
import { Heart, Shield, Users, Building, CheckCircle, IndianRupee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMonastery, setSelectedMonastery] = useState('');

  const donationAmounts = [500, 1000, 2500, 5000, 10000];
  
  const monasteries = [
    { id: 'general', name: 'General Heritage Preservation', description: 'Support all monasteries' },
    { id: 'rumtek', name: 'Rumtek Monastery', description: 'Kagyu sect headquarters' },
    { id: 'pemayangtse', name: 'Pemayangtse Monastery', description: 'Historic Nyingma monastery' },
    { id: 'tashiding', name: 'Tashiding Monastery', description: 'Most sacred monastery' },
    { id: 'enchey', name: 'Enchey Monastery', description: 'Gangtok monastery' },
    { id: 'dubdi', name: 'Dubdi Monastery', description: 'Oldest monastery in Sikkim' }
  ];

  const impactAreas = [
    {
      icon: Building,
      title: "Heritage Restoration",
      description: "Preserve ancient architecture, murals, and sacred artifacts",
      goal: "₹25,00,000",
      raised: "₹18,75,000",
      percentage: 75
    },
    {
      icon: Users,
      title: "Monk Education",
      description: "Support monastic education and traditional learning",
      goal: "₹15,00,000", 
      raised: "₹11,25,000",
      percentage: 75
    },
    {
      icon: Heart,
      title: "Community Programs",
      description: "Cultural workshops, festivals, and community outreach",
      goal: "₹10,00,000",
      raised: "₹6,50,000",
      percentage: 65
    },
    {
      icon: Shield,
      title: "Conservation Technology",
      description: "Digital preservation, 3D scanning, and virtual archives",
      goal: "₹20,00,000",
      raised: "₹8,00,000", 
      percentage: 40
    }
  ];

  const csrPartners = [
    {
      name: "Tech Mahindra Foundation",
      focus: "Digital Heritage Preservation",
      contribution: "₹50,00,000 annually"
    },
    {
      name: "Tata Trust",
      focus: "Education & Cultural Programs", 
      contribution: "₹75,00,000 over 3 years"
    },
    {
      name: "Infosys Foundation",
      focus: "Community Development",
      contribution: "₹30,00,000 annually"
    }
  ];

  const donationImpact = [
    { amount: "₹500", impact: "Supports one monk's meals for a week" },
    { amount: "₹1,000", impact: "Funds basic monastery maintenance for a day" },
    { amount: "₹2,500", impact: "Preserves one ancient manuscript digitally" },
    { amount: "₹5,000", impact: "Sponsors traditional craft workshop" },
    { amount: "₹10,000", impact: "Supports heritage restoration for a month" }
  ];

  const currentAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-saffron">
            Support Heritage Preservation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your donations directly support the preservation of Sikkim's precious monastery heritage, 
            ensuring these sacred spaces continue to inspire future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Donation Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Amount Selection */}
            <Card className="monastery-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <IndianRupee className="w-5 h-5 text-saffron" />
                  <span>Choose Donation Amount</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Predefined Amounts */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Select Amount (INR)</label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-3 rounded-lg border transition-gentle ${
                          selectedAmount === amount && !customAmount
                            ? 'border-saffron bg-saffron/10 text-saffron'
                            : 'border-border hover:border-saffron/50'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Or Enter Custom Amount</label>
                  <Input
                    type="number"
                    placeholder="Enter amount in ₹"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="text-lg"
                  />
                </div>

                {/* Current Amount Display */}
                {currentAmount > 0 && (
                  <div className="bg-saffron/10 p-4 rounded-lg border border-saffron/20">
                    <div className="text-2xl font-bold text-saffron">
                      ₹{currentAmount.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">Selected donation amount</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Monastery Selection */}
            <Card className="monastery-card">
              <CardHeader>
                <CardTitle>Choose Monastery or Program</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedMonastery} onValueChange={setSelectedMonastery}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select monastery or program to support" />
                  </SelectTrigger>
                  <SelectContent>
                    {monasteries.map((monastery) => (
                      <SelectItem key={monastery.id} value={monastery.id}>
                        <div>
                          <div className="font-medium">{monastery.name}</div>
                          <div className="text-sm text-muted-foreground">{monastery.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Donation Button */}
            <Card className="monastery-card">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="text-lg text-muted-foreground">
                    You're about to donate <span className="font-bold text-saffron">₹{currentAmount.toLocaleString()}</span>
                  </div>
                  <Button 
                    className="btn-monastery w-full text-lg py-4"
                    disabled={currentAmount === 0 || !selectedMonastery}
                  >
                    Donate Securely
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Secure payment powered by Razorpay • 100% secure transactions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Impact & Information */}
          <div className="space-y-8">
            {/* Donation Impact */}
            <Card className="monastery-card">
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {donationImpact.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 text-sm">
                    <div className="w-2 h-2 bg-saffron rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-semibold text-saffron">{item.amount}</span>
                      <span className="text-muted-foreground"> {item.impact}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tax Benefits */}
            <Card className="monastery-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Tax Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>✓ 80G Tax Exemption Certificate</p>
                <p>✓ 100% tax deduction under Section 80G</p>
                <p>✓ Instant receipt generation</p>
                <p>✓ Annual contribution summary</p>
              </CardContent>
            </Card>

            {/* Trust & Security */}
            <Card className="monastery-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>Secure & Transparent</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>✓ Registered Trust (12A & 80G)</p>
                <p>✓ Annual impact reports published</p>
                <p>✓ Secure payment gateway</p>
                <p>✓ Regular monastery updates</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Areas */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Current Heritage Preservation Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <Card key={index} className="monastery-card">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-2">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Raised: {area.raised}</span>
                      <span>Goal: {area.goal}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${area.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <Badge variant="outline">{area.percentage}% Complete</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CSR Partnership */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Corporate Social Responsibility Partners
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {csrPartners.map((partner, index) => (
              <Card key={index} className="monastery-card">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-muted-foreground mb-3">{partner.focus}</p>
                  <Badge className="bg-saffron/20 text-saffron-dark">
                    {partner.contribution}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="monastery-card inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient-saffron">
                  Interested in CSR Partnership?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg">
                  Join leading companies in preserving Sikkim's cultural heritage. 
                  Create meaningful impact while fulfilling your CSR objectives.
                </p>
                <Button className="btn-monastery">
                  Explore CSR Opportunities
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-20 bg-gradient-monastery rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Every Contribution Makes a Difference
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Join thousands of supporters worldwide in preserving Sikkim's monastery heritage. 
            Together, we can ensure these sacred spaces continue to inspire and educate for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-maroon hover:bg-white/90" size="lg">
              Make a Donation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-maroon" size="lg">
              Learn More About Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;