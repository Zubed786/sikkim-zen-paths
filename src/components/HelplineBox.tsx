import { Phone, Shield, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HelplineBox = () => {
  const emergencyContacts = [
    {
      title: "Police Emergency",
      number: "100",
      icon: Shield,
      description: "For immediate police assistance"
    },
    {
      title: "Medical Emergency", 
      number: "108",
      icon: AlertCircle,
      description: "Ambulance and medical help"
    },
    {
      title: "Tourist Helpline",
      number: "1363",
      icon: Phone,
      description: "24x7 tourist assistance"
    }
  ];

  return (
    <Card className="monastery-card bg-accent/10 border-2 border-accent/30">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-accent">
          <AlertCircle className="w-5 h-5" />
          Emergency Helpline
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {emergencyContacts.map((contact, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                <contact.icon className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">{contact.title}</p>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
              </div>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-accent border-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => window.open(`tel:${contact.number}`)}
            >
              {contact.number}
            </Button>
          </div>
        ))}
        <div className="text-center pt-2">
          <p className="text-xs text-muted-foreground">
            Save these numbers for emergency situations while visiting monasteries
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HelplineBox;