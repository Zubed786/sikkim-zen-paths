import { MapPin, Calendar, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import rumtekImage from '@/assets/rumtek-monastery.jpg';
import pemayangsteImage from '@/assets/pemayangtse-monastery.jpg';
import tashidingImage from '@/assets/tashiding-monastery.jpg';

const Heritage = () => {
  const monasteries = [
    {
      name: "Rumtek Monastery",
      founded: 1966,
      sect: "Kagyu",
      image: rumtekImage,
      highlights: [
        "Seat of the 16th Karmapa",
        "Golden Stupa with relics",
        "Traditional Tibetan architecture",
        "Monastery school and college"
      ],
      description: "The most significant monastery in Sikkim, Rumtek serves as the main seat of the Karma Kagyu lineage. Built as a replica of the original Tsurphu monastery in Tibet, it houses precious relics and maintains traditional Tibetan Buddhist practices.",
      location: "24 km from Gangtok",
      significance: "Seat of His Holiness the 17th Karmapa"
    },
    {
      name: "Pemayangtse Monastery",
      founded: 1705,
      sect: "Nyingma",
      image: pemayangsteImage,
      highlights: [
        "Second oldest monastery in Sikkim",
        "Perfect sublime lotus meaning",
        "Seven-tiered wooden sculpture",
        "Museum with ancient artifacts"
      ],
      description: "One of Sikkim's oldest and most important monasteries, Pemayangtse means 'Perfect Sublime Lotus'. It was built for 'ta-tshang' (pure monks) of the Nyingma sect and offers stunning views of the Kanchenjunga range.",
      location: "110 km from Gangtok, Pelling",
      significance: "Head monastery of Nyingma sect in Sikkim"
    },
    {
      name: "Tashiding Monastery",
      founded: 1717,
      sect: "Nyingma",
      image: tashidingImage,
      highlights: [
        "Most sacred monastery in Sikkim",
        "Bhumchu festival water blessing",
        "Scenic hilltop location",
        "Ancient stone inscriptions"
      ],
      description: "Located on a hilltop between the Rathong and Rangeet rivers, Tashiding is considered the most sacred monastery in Sikkim. The annual Bhumchu festival, where holy water is blessed, attracts thousands of devotees.",
      location: "40 km from Pelling",
      significance: "Most sacred monastery, Bhumchu festival site"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-saffron">
            Monastery Heritage
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the sacred monasteries of Sikkim, each a treasure trove of Buddhist culture, 
            ancient wisdom, and architectural magnificence preserved through centuries.
          </p>
        </div>

        {/* Monasteries Grid */}
        <div className="space-y-16">
          {monasteries.map((monastery, index) => (
            <Card key={index} className="monastery-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="order-2 lg:order-1">
                  <div className="aspect-video lg:aspect-square overflow-hidden rounded-lg">
                    <img
                      src={monastery.image}
                      alt={monastery.name}
                      className="w-full h-full object-cover transition-smooth hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="order-1 lg:order-2 p-6 lg:p-8">
                  <CardHeader className="px-0 pt-0">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge variant="secondary" className="bg-saffron/20 text-saffron-dark">
                        {monastery.sect} Sect
                      </Badge>
                      <Badge variant="outline">
                        Est. {monastery.founded}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">
                      {monastery.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {monastery.description}
                    </p>

                    {/* Key Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-saffron" />
                        <span className="text-sm">Founded: {monastery.founded}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-saffron" />
                        <span className="text-sm">{monastery.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-saffron" />
                        <span className="text-sm">{monastery.sect} Tradition</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-saffron" />
                        <span className="text-sm">{monastery.significance}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Key Highlights</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {monastery.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-saffron rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-20 bg-gradient-sunset rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Discover More Sacred Sites
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            These three monasteries represent just a glimpse of Sikkim's rich Buddhist heritage. 
            Each monastery has its own unique history, architectural style, and spiritual significance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/virtual" 
              className="btn-monastery inline-flex items-center justify-center"
            >
              Take Virtual Tours
            </a>
            <a 
              href="/donations" 
              className="bg-white/20 hover:bg-white/30 transition-gentle rounded-lg px-6 py-3 font-medium inline-flex items-center justify-center"
            >
              Support Heritage Preservation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;