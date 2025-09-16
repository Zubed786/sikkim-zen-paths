import { MapPin, Camera, Clock, Star, Navigation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import rumtekImage from '@/assets/rumtek-monastery.jpg';
import pemayangsteImage from '@/assets/pemayangtse-monastery.jpg';
import tashidingImage from '@/assets/tashiding-monastery.jpg';

const MonasteryMap = () => {
  const monasteries = [
    {
      name: "Rumtek Monastery",
      location: "East Sikkim",
      coordinates: "27.3389° N, 88.5583° E",
      altitude: "1,550 m",
      founded: "1966",
      sect: "Kagyu",
      description: "The largest monastery in Sikkim, seat of the Karmapa and center of the Kagyu lineage.",
      features: ["Golden Stupa", "Sacred Relics", "Monastery School", "Traditional Architecture"],
      image: rumtekImage,
      distance: "24 km from Gangtok",
      visitingHours: "6:00 AM - 6:00 PM",
      rating: 4.8,
      mapPosition: { top: "45%", left: "65%" }
    },
    {
      name: "Pemayangtse Monastery", 
      location: "West Sikkim",
      coordinates: "27.2969° N, 88.2464° E",
      altitude: "2,085 m",
      founded: "1705",
      sect: "Nyingma",
      description: "One of the oldest and most important monasteries in Sikkim, meaning 'Perfect Sublime Lotus'.",
      features: ["Seven-tiered Wooden Model", "Ancient Murals", "Library", "Meditation Halls"],
      image: pemayangsteImage,
      distance: "110 km from Gangtok",
      visitingHours: "7:00 AM - 5:00 PM", 
      rating: 4.7,
      mapPosition: { top: "40%", left: "25%" }
    },
    {
      name: "Tashiding Monastery",
      location: "West Sikkim", 
      coordinates: "27.3333° N, 88.2833° E",
      altitude: "1,450 m",
      founded: "1717",
      sect: "Nyingma",
      description: "Sacred monastery on a hilltop, believed to be blessed by Guru Padmasambhava himself.",
      features: ["Sacred Chorten", "Holy Water Spring", "Festival Grounds", "Panoramic Views"],
      image: tashidingImage,
      distance: "85 km from Gangtok",
      visitingHours: "6:00 AM - 7:00 PM",
      rating: 4.6,
      mapPosition: { top: "35%", left: "30%" }
    }
  ];

  const regions = [
    { name: "North Sikkim", color: "bg-blue-500", monasteries: 8 },
    { name: "East Sikkim", color: "bg-green-500", monasteries: 12 },
    { name: "West Sikkim", color: "bg-orange-500", monasteries: 15 },
    { name: "South Sikkim", color: "bg-purple-500", monasteries: 6 }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-saffron mb-6">
            Monastery Map of Sikkim
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the sacred geography of Sikkim's monasteries. Discover their locations, 
            history, and plan your spiritual journey through the Himalayan kingdom.
          </p>
        </div>

        {/* Interactive Map Section */}
        <section className="mb-16">
          <Card className="monastery-card overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Interactive Monastery Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative bg-gradient-to-b from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-8 h-96 overflow-hidden">
                {/* Simplified Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Simplified Sikkim outline */}
                    <path
                      d="M50 50 L350 50 L350 250 L50 250 Z"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.1"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Region Labels */}
                <div className="absolute top-4 left-4 text-sm font-medium text-muted-foreground">North Sikkim</div>
                <div className="absolute top-4 right-4 text-sm font-medium text-muted-foreground">East Sikkim</div>
                <div className="absolute bottom-4 left-4 text-sm font-medium text-muted-foreground">West Sikkim</div>
                <div className="absolute bottom-4 right-4 text-sm font-medium text-muted-foreground">South Sikkim</div>

                {/* Monastery Markers */}
                {monasteries.map((monastery, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{ top: monastery.mapPosition.top, left: monastery.mapPosition.left }}
                  >
                    <div className="w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-smooth">
                      <div className="absolute inset-0 bg-accent/50 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap z-10">
                      <div className="text-sm font-medium">{monastery.name}</div>
                      <div className="text-xs text-muted-foreground">{monastery.location}</div>
                    </div>
                  </div>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span>Monastery Location</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Region Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Monasteries by Region</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className="monastery-card text-center">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${region.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{region.name}</h3>
                  <p className="text-2xl font-bold text-primary">{region.monasteries}</p>
                  <p className="text-sm text-muted-foreground">Monasteries</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Monasteries */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Monasteries</h2>
          <div className="space-y-8">
            {monasteries.map((monastery, index) => (
              <Card key={index} className="monastery-card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img 
                      src={monastery.image} 
                      alt={monastery.name}
                      className="w-full h-full object-cover transition-smooth hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{monastery.name}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{monastery.location} • {monastery.distance}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{monastery.rating}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Founded:</span>
                        <p className="font-medium">{monastery.founded}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Sect:</span>
                        <p className="font-medium">{monastery.sect}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Altitude:</span>
                        <p className="font-medium">{monastery.altitude}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Hours:</span>
                        <p className="font-medium">{monastery.visitingHours}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{monastery.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {monastery.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary">{feature}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline">
                        <Camera className="w-4 h-4 mr-2" />
                        Virtual Tour
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Travel Tips */}
        <section className="bg-gradient-primary text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Planning Your Monastery Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Best Time to Visit</h3>
              <p className="text-white/80 text-sm">October to May for clear mountain views and pleasant weather</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Permits Required</h3>
              <p className="text-white/80 text-sm">Inner Line Permit needed for some monasteries in restricted areas</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Photography</h3>
              <p className="text-white/80 text-sm">Ask permission before photographing inside monastery halls</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MonasteryMap;