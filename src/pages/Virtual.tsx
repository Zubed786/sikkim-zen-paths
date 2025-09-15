import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Info } from 'lucide-react';
import rumtekImage from '@/assets/rumtek-monastery.jpg';
import pemayangsteImage from '@/assets/pemayangtse-monastery.jpg';
import tashidingImage from '@/assets/tashiding-monastery.jpg';

const Virtual = () => {
  const [selectedMonastery, setSelectedMonastery] = useState<string | null>(null);

  const virtualTours = [
    {
      id: 'rumtek',
      name: 'Rumtek Monastery',
      image: rumtekImage,
      sect: 'Kagyu',
      description: 'Experience the grandeur of the main seat of Karma Kagyu lineage with our immersive 360° tour.',
      highlights: ['Golden Stupa Hall', 'Prayer Assembly Hall', 'Monastery Courtyard', 'Sacred Relics Room'],
      tourUrl: 'https://momento360.com/e/u/928b3exxxx', // Placeholder URL
      duration: '15-20 minutes',
      difficulty: 'Easy Navigation'
    },
    {
      id: 'pemayangtse',
      name: 'Pemayangtse Monastery',
      image: pemayangsteImage,
      sect: 'Nyingma',
      description: 'Walk through the historic halls of Sikkim\'s second oldest monastery in stunning 360° detail.',
      highlights: ['Seven-tiered Sculpture', 'Ancient Prayer Hall', 'Museum Collection', 'Mountain Views'],
      tourUrl: 'https://momento360.com/e/u/938b4fxxxx', // Placeholder URL
      duration: '12-15 minutes',
      difficulty: 'Easy Navigation'
    },
    {
      id: 'tashiding',
      name: 'Tashiding Monastery',
      image: tashidingImage,
      sect: 'Nyingma',
      description: 'Explore Sikkim\'s most sacred monastery perched dramatically on a hilltop between two rivers.',
      highlights: ['Sacred Chorten', 'Hilltop Views', 'Prayer Wheel Hall', 'Stone Inscriptions'],
      tourUrl: 'https://momento360.com/e/u/948c5gxxxx', // Placeholder URL
      duration: '10-12 minutes',
      difficulty: 'Easy Navigation'
    }
  ];

  const selectedTour = virtualTours.find(tour => tour.id === selectedMonastery);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-saffron">
            Virtual Monastery Tours
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the sacred spaces of Sikkim's monasteries through our interactive 360° virtual tours. 
            Experience the serenity and magnificence from anywhere in the world.
          </p>
        </div>

        {selectedMonastery ? (
          /* Selected Tour View */
          <div className="space-y-8">
            {/* Back Button */}
            <Button 
              variant="outline" 
              onClick={() => setSelectedMonastery(null)}
              className="mb-6"
            >
              ← Back to Tour Selection
            </Button>

            {/* Tour Header */}
            <Card className="monastery-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge className="bg-saffron/20 text-saffron-dark">
                        {selectedTour?.sect} Sect
                      </Badge>
                      <Badge variant="outline">
                        Virtual Tour
                      </Badge>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{selectedTour?.name}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {selectedTour?.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Camera className="w-4 h-4 text-saffron" />
                        <span>{selectedTour?.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Info className="w-4 h-4 text-saffron" />
                        <span>{selectedTour?.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={selectedTour?.image}
                      alt={selectedTour?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 360° Tour Iframe */}
            <Card className="monastery-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="w-5 h-5 text-saffron" />
                  <span>360° Virtual Tour</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  {/* Placeholder for actual Momento360 iframe */}
                  <div className="text-center p-8">
                    <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Virtual Tour Coming Soon</h3>
                    <p className="text-muted-foreground mb-4">
                      360° virtual tour will be embedded here using Momento360
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tour URL: {selectedTour?.tourUrl}
                    </p>
                  </div>
                  {/* When implementing with real URLs, replace above with:
                  <iframe
                    src={selectedTour?.tourUrl}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                    title={`${selectedTour?.name} Virtual Tour`}
                  />
                  */}
                </div>
              </CardContent>
            </Card>

            {/* Tour Highlights */}
            <Card className="monastery-card">
              <CardHeader>
                <CardTitle>Tour Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedTour?.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-saffron rounded-full flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Tour Selection Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualTours.map((tour) => (
              <Card key={tour.id} className="monastery-card cursor-pointer" onClick={() => setSelectedMonastery(tour.id)}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary" className="bg-saffron/20 text-saffron-dark">
                      {tour.sect}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{tour.description}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <Camera className="w-4 h-4 text-saffron" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-saffron" />
                      <span>{tour.highlights.length} key locations</span>
                    </div>
                  </div>
                  
                  <Button className="w-full btn-saffron">
                    Start Virtual Tour
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Information Section */}
        {!selectedMonastery && (
          <div className="mt-16 bg-gradient-warm rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-saffron">
              Experience Sacred Spaces Digitally
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our virtual tours use cutting-edge 360° technology to bring you closer to the spiritual 
              heart of Sikkim's monasteries. Navigate freely, zoom in on intricate details, and 
              experience the peace of these sacred spaces.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <Camera className="w-8 h-8 text-saffron mx-auto mb-2" />
                <h4 className="font-semibold mb-1">360° Views</h4>
                <p className="text-sm text-muted-foreground">Complete immersive experience</p>
              </div>
              <div className="text-center">
                <Info className="w-8 h-8 text-saffron mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Educational Content</h4>
                <p className="text-sm text-muted-foreground">Learn about architecture & history</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-saffron mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Interactive Navigation</h4>
                <p className="text-sm text-muted-foreground">Explore at your own pace</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Virtual;