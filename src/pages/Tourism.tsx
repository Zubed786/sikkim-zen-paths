import { Calendar, Shield, Users, MapPin, Clock, Camera, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Tourism = () => {
  const festivals = [
    {
      name: "Losar (Tibetan New Year)",
      period: "February/March",
      description: "The most important Buddhist festival celebrating the Tibetan New Year with elaborate ceremonies, masked dances, and feasting.",
      monasteries: ["Rumtek", "Pemayangtse", "Tashiding"]
    },
    {
      name: "Buddha Purnima",
      period: "May (Full Moon)",
      description: "Celebrates the birth, enlightenment, and death of Buddha. Special prayers and meditation sessions in all monasteries.",
      monasteries: ["All Major Monasteries"]
    },
    {
      name: "Drupka Teshi",
      period: "July",
      description: "Commemorates Buddha's first sermon. Features special prayers, butter lamp offerings, and traditional ceremonies.",
      monasteries: ["Rumtek", "Enchey", "Phodong"]
    },
    {
      name: "Bhumchu Festival",
      period: "February/March",
      description: "Sacred water blessing ceremony unique to Tashiding Monastery. The holy water predicts the year's fortune.",
      monasteries: ["Tashiding"]
    }
  ];

  const seasons = [
    {
      season: "Spring (March - May)",
      weather: "15°C - 25°C",
      pros: ["Clear mountain views", "Blooming rhododendrons", "Pleasant weather", "Major festivals"],
      cons: ["Peak tourist season", "Higher prices"],
      bestFor: "Festivals and photography"
    },
    {
      season: "Summer (June - August)",
      weather: "20°C - 28°C",
      pros: ["Lush green landscapes", "Long daylight hours", "Cool evenings"],
      cons: ["Monsoon rains", "Cloudy mountain views", "Landslide risks"],
      bestFor: "Indoor monastery visits"
    },
    {
      season: "Autumn (September - November)",
      weather: "10°C - 20°C",
      pros: ["Crystal clear views", "Perfect weather", "Post-monsoon freshness", "Harvest festivals"],
      cons: ["Popular season", "Booking required early"],
      bestFor: "Mountain views and trekking"
    },
    {
      season: "Winter (December - February)",
      weather: "5°C - 15°C",
      pros: ["Clear skies", "Snow-capped peaks", "Fewer crowds", "Lower prices"],
      cons: ["Cold weather", "Limited transport", "Some roads may close"],
      bestFor: "Peaceful monastery visits"
    }
  ];

  const safetyTips = [
    {
      icon: Shield,
      title: "Altitude Awareness",
      tips: ["Acclimatize gradually", "Stay hydrated", "Avoid alcohol initially", "Recognize altitude sickness symptoms"]
    },
    {
      icon: Camera,
      title: "Photography Etiquette",
      tips: ["Ask permission before photographing", "No photos inside prayer halls", "Respect ongoing ceremonies", "Pay camera fees where required"]
    },
    {
      icon: Users,
      title: "Cultural Respect",
      tips: ["Dress modestly", "Remove shoes in sacred areas", "Don't touch religious artifacts", "Maintain silence during prayers"]
    },
    {
      icon: MapPin,
      title: "Travel Preparation",
      tips: ["Carry valid ID", "Book permits in advance", "Check road conditions", "Pack appropriate clothing"]
    }
  ];

  const localGuides = [
    {
      name: "Tenzin Norbu",
      speciality: "Buddhist Culture & History",
      languages: ["English", "Hindi", "Nepali", "Tibetan"],
      experience: "15 years",
      contact: "+91 98765 43210",
      description: "Expert in monastery history and Buddhist traditions. Licensed guide with deep knowledge of Sikkim's spiritual heritage."
    },
    {
      name: "Pemba Sherpa",
      speciality: "Monastery Tours & Trekking",
      languages: ["English", "Hindi", "Sherpa"],
      experience: "12 years",
      contact: "+91 98765 43211",
      description: "Specialized in monastery visits combined with cultural treks. Excellent for photography tours and spiritual journeys."
    },
    {
      name: "Karma Bhutia",
      speciality: "Festival Tours",
      languages: ["English", "Hindi", "Bhutia"],
      experience: "10 years",
      contact: "+91 98765 43212",
      description: "Festival specialist who can arrange special access to monastery celebrations and cultural events."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-saffron">
            Tourism Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plan your spiritual journey to Sikkim's monasteries with comprehensive information 
            about festivals, seasons, safety, and local guidance.
          </p>
        </div>

        {/* Buddhist Festivals */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Buddhist Festivals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festivals.map((festival, index) => (
              <Card key={index} className="monastery-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{festival.name}</CardTitle>
                    <Badge className="bg-saffron/20 text-saffron-dark">{festival.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{festival.description}</p>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-saffron" />
                    <span className="text-sm">Celebrated at: {festival.monasteries.join(', ')}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Best Times to Visit */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Best Times to Visit
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {seasons.map((season, index) => (
              <Card key={index} className="monastery-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{season.season}</span>
                    <Badge variant="outline">{season.weather}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Advantages</h4>
                    <ul className="space-y-1">
                      {season.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1.5"></div>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-amber-600 mb-2">Considerations</h4>
                    <ul className="space-y-1">
                      {season.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-1.5"></div>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <span className="text-sm font-medium">Best For: </span>
                    <span className="text-sm text-muted-foreground">{season.bestFor}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Safety & Cultural Guidelines */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Safety & Cultural Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyTips.map((category, index) => (
              <Card key={index} className="monastery-card">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-2">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-saffron rounded-full flex-shrink-0 mt-2"></div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Local Guides */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Recommended Local Guides
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {localGuides.map((guide, index) => (
              <Card key={index} className="monastery-card">
                <CardHeader>
                  <CardTitle className="text-xl">{guide.name}</CardTitle>
                  <p className="text-saffron font-medium">{guide.speciality}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{guide.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-saffron" />
                      <span className="text-sm">Experience: {guide.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-saffron" />
                      <span className="text-sm">Languages: {guide.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-saffron" />
                      <span className="text-sm">{guide.contact}</span>
                    </div>
                  </div>
                  
                  <button className="w-full btn-saffron">
                    Contact Guide
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Information */}
        <div className="bg-gradient-monastery rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Emergency Contacts & Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold mb-2">Tourist Helpline</h4>
              <p className="text-white/90">1363 / +91 3592 202425</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Medical Emergency</h4>
              <p className="text-white/90">108 / STNM Hospital Gangtok</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Police Emergency</h4>
              <p className="text-white/90">100 / +91 3592 202033</p>
            </div>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            Keep these numbers handy and inform someone about your travel plans before visiting remote monasteries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tourism;