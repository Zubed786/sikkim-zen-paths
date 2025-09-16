import { BookOpen, Download, Eye, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import rumtekImage from '@/assets/rumtek-monastery.jpg';
import pemayangsteImage from '@/assets/pemayangtse-monastery.jpg';
import tashidingImage from '@/assets/tashiding-monastery.jpg';

const Manuscripts = () => {
  const manuscripts = [
    {
      title: "Kanjur Collection",
      monastery: "Rumtek Monastery",
      period: "17th Century",
      language: "Tibetan",
      pages: 108,
      description: "Sacred Buddhist canonical texts containing the direct teachings of Buddha, meticulously preserved in gold ink on handmade paper.",
      image: rumtekImage,
      category: "Religious Texts",
      rarity: "Extremely Rare"
    },
    {
      title: "Tanjur Commentaries", 
      monastery: "Pemayangtse Monastery",
      period: "18th Century",
      language: "Tibetan",
      pages: 245,
      description: "Scholarly commentaries and treatises on Buddhist philosophy, medicine, and astronomy by great masters.",
      image: pemayangsteImage,
      category: "Philosophical Texts",
      rarity: "Rare"
    },
    {
      title: "Padmasambhava Chronicles",
      monastery: "Tashiding Monastery", 
      period: "16th Century",
      language: "Tibetan & Sanskrit",
      pages: 89,
      description: "Biographical accounts and teachings of Guru Padmasambhava, the lotus-born master who brought Buddhism to Tibet.",
      image: tashidingImage,
      category: "Biographical",
      rarity: "Very Rare"
    },
    {
      title: "Medical Tantras",
      monastery: "Rumtek Monastery",
      period: "19th Century", 
      language: "Tibetan",
      pages: 156,
      description: "Ancient Tibetan medical knowledge including diagnosis, treatment methods, and medicinal plant studies.",
      image: rumtekImage,
      category: "Medical Texts",
      rarity: "Rare"
    },
    {
      title: "Monastery Chronicles",
      monastery: "Pemayangtse Monastery",
      period: "18th-19th Century",
      language: "Tibetan & Nepali", 
      pages: 78,
      description: "Historical records of monastery construction, lineage transmissions, and significant events in Sikkim.",
      image: pemayangsteImage,
      category: "Historical Records",
      rarity: "Uncommon"
    },
    {
      title: "Tantric Practices Manual",
      monastery: "Tashiding Monastery",
      period: "17th Century",
      language: "Sanskrit",
      pages: 124,
      description: "Sacred tantric meditation practices and rituals for advanced practitioners, with detailed mandala descriptions.",
      image: tashidingImage,
      category: "Esoteric Texts", 
      rarity: "Extremely Rare"
    }
  ];

  const getRarityColor = (rarity: string) => {
    const colors = {
      'Extremely Rare': 'bg-accent text-accent-foreground',
      'Very Rare': 'bg-primary text-primary-foreground',
      'Rare': 'bg-secondary text-secondary-foreground',
      'Uncommon': 'bg-muted text-muted-foreground'
    };
    return colors[rarity as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Religious Texts': BookOpen,
      'Philosophical Texts': BookOpen,
      'Biographical': BookOpen,
      'Medical Texts': BookOpen,
      'Historical Records': Calendar,
      'Esoteric Texts': BookOpen
    };
    return icons[category as keyof typeof icons] || BookOpen;
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-saffron mb-6">
            Sacred Manuscripts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover ancient Buddhist manuscripts preserved in Sikkim's monasteries. These sacred texts 
            contain centuries of wisdom, medical knowledge, and spiritual teachings passed down through generations.
          </p>
        </div>

        {/* Preservation Notice */}
        <div className="bg-gradient-primary p-6 rounded-2xl text-white mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2">Digital Preservation Initiative</h2>
          <p className="text-white/90">
            These manuscripts are being digitally preserved to ensure their wisdom remains accessible 
            while protecting the original documents from deterioration.
          </p>
        </div>

        {/* Manuscripts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manuscripts.map((manuscript, index) => {
            const CategoryIcon = getCategoryIcon(manuscript.category);
            
            return (
              <Card key={index} className="monastery-card overflow-hidden h-full">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={manuscript.image} 
                    alt={manuscript.title}
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={getRarityColor(manuscript.rarity)}>
                      {manuscript.rarity}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="secondary" className="bg-black/80 text-white">
                      {manuscript.pages} pages
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-2 mb-2">
                    <CategoryIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <CardTitle className="text-lg leading-tight">{manuscript.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{manuscript.category}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {manuscript.monastery}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {manuscript.period} • {manuscript.language}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {manuscript.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Study Guide Section */}
        <section className="mt-20 bg-card rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Understanding Sacred Manuscripts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Kanjur</h3>
              <p className="text-muted-foreground text-sm">Direct teachings of Buddha translated into Tibetan</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Tanjur</h3>
              <p className="text-muted-foreground text-sm">Commentaries and treatises by Buddhist scholars</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Historical Records</h3>
              <p className="text-muted-foreground text-sm">Chronicles of monastery and regional history</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Medical Texts</h3>
              <p className="text-muted-foreground text-sm">Traditional Tibetan medicine and healing practices</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <Card className="monastery-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Help Preserve Sacred Knowledge</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Support our digital preservation efforts to ensure these invaluable manuscripts 
                remain accessible for future generations of scholars and practitioners.
              </p>
              <Button size="lg" className="btn-monastery">
                Support Preservation
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Manuscripts;