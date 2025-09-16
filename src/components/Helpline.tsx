import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Phone, X, AlertTriangle, MapPin } from 'lucide-react';

const Helpline = () => {
  const [isOpen, setIsOpen] = useState(false);

  const emergencyContacts = [
    {
      category: "Emergency Services",
      contacts: [
        { name: "Police", number: "100", icon: "🚔" },
        { name: "Fire Department", number: "101", icon: "🚒" },
        { name: "Ambulance", number: "102", icon: "🚑" },
        { name: "Tourist Helpline", number: "1363", icon: "ℹ️" }
      ]
    },
    {
      category: "Tourism & Travel",
      contacts: [
        { name: "Sikkim Tourism", number: "+91-3592-202688", icon: "🏔️" },
        { name: "Mountain Rescue", number: "+91-3592-280024", icon: "⛑️" },
        { name: "Weather Updates", number: "+91-3592-202405", icon: "🌤️" }
      ]
    },
    {
      category: "Medical Emergency",
      contacts: [
        { name: "STNM Hospital", number: "+91-3592-202116", icon: "🏥" },
        { name: "District Hospital", number: "+91-3592-202303", icon: "⚕️" },
        { name: "Blood Bank", number: "+91-3592-202890", icon: "🩸" }
      ]
    }
  ];

  return (
    <>
      {/* Floating Helpline Button */}
      <div className="fixed bottom-20 left-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-destructive hover:bg-destructive/90 text-white shadow-elegant animate-pulse"
          size="icon"
        >
          <AlertTriangle className="w-6 h-6" />
        </Button>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping" />
      </div>

      {/* Helpline Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md max-h-[80vh] overflow-y-auto bg-card border-destructive/20">
            <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <h3 className="text-lg font-bold text-foreground">Emergency Helpline</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-4 space-y-6">
              <div className="text-center p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="text-sm text-destructive font-medium mb-2">
                  In case of immediate emergency, call:
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    className="bg-destructive hover:bg-destructive/90 text-white"
                    onClick={() => window.open('tel:100')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    100
                  </Button>
                  <Button
                    className="bg-destructive hover:bg-destructive/90 text-white"
                    onClick={() => window.open('tel:102')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    102
                  </Button>
                </div>
              </div>

              {emergencyContacts.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-semibold text-foreground border-b border-border pb-2">
                    {category.category}
                  </h4>
                  <div className="space-y-2">
                    {category.contacts.map((contact, contactIndex) => (
                      <div
                        key={contactIndex}
                        className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors wave-text"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{contact.icon}</span>
                          <span className="text-sm font-medium text-foreground">
                            {contact.name}
                          </span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`tel:${contact.number}`)}
                          className="text-xs"
                        >
                          <Phone className="w-3 h-3 mr-1" />
                          {contact.number}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">
                  Share your location with emergency services for faster response
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => {
                    if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition((position) => {
                        const { latitude, longitude } = position.coords;
                        const locationText = `My location: ${latitude}, ${longitude}`;
                        navigator.clipboard.writeText(locationText);
                        alert('Location copied to clipboard!');
                      });
                    }
                  }}
                >
                  Share Location
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default Helpline;