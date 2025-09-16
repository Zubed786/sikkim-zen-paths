import { Play, Download, Music2, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import singingBowlImage from '@/assets/singing-bowl.jpg';
import prayerWheelImage from '@/assets/prayer-wheel.jpg';

const Music = () => {
  const traditionalMusic = [
    {
      title: "Tibetan Bowl Meditation",
      duration: "15:30",
      description: "Sacred singing bowl sounds for deep meditation and chakra healing",
      category: "Meditation",
      image: singingBowlImage,
      audioUrl: "#"
    },
    {
      title: "Monastery Chants",
      duration: "22:45", 
      description: "Traditional Buddhist chants from Rumtek Monastery",
      category: "Chanting",
      image: prayerWheelImage,
      audioUrl: "#"
    },
    {
      title: "Prayer Wheel Mantras",
      duration: "18:20",
      description: "Om Mani Padme Hum mantras with traditional instruments",
      category: "Mantras",
      image: singingBowlImage,
      audioUrl: "#"
    },
    {
      title: "Peaceful Meditation",
      duration: "30:00",
      description: "Guided meditation with gentle monastery ambience",
      category: "Meditation", 
      image: prayerWheelImage,
      audioUrl: "#"
    },
    {
      title: "Dawn Prayers",
      duration: "12:15",
      description: "Morning prayer sessions from Pemayangtse Monastery",
      category: "Prayers",
      image: singingBowlImage,
      audioUrl: "#"
    },
    {
      title: "Tara Mantra",
      duration: "25:40",
      description: "Green Tara mantras for compassion and protection",
      category: "Mantras",
      image: prayerWheelImage,
      audioUrl: "#"
    }
  ];

  const meditationVideos = [
    {
      title: "Mindfulness in Monastery Gardens",
      duration: "20:00",
      description: "Guided meditation in peaceful monastery surroundings",
      thumbnail: singingBowlImage,
      videoUrl: "#"
    },
    {
      title: "Walking Meditation Path",
      duration: "15:30",
      description: "Learn walking meditation techniques used by monks",
      thumbnail: prayerWheelImage, 
      videoUrl: "#"
    },
    {
      title: "Breathing with Buddhist Bells",
      duration: "25:45",
      description: "Pranayama breathing exercises with traditional bell sounds",
      thumbnail: singingBowlImage,
      videoUrl: "#"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Meditation': 'bg-primary/20 text-primary',
      'Chanting': 'bg-accent/20 text-accent', 
      'Mantras': 'bg-secondary/30 text-secondary-foreground',
      'Prayers': 'bg-muted text-muted-foreground'
    };
    return colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-saffron mb-6">
            Music & Meditation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the sacred sounds of Sikkim's monasteries. Listen to traditional music, 
            chants, and guided meditations to find inner peace and spiritual connection.
          </p>
        </div>

        {/* Traditional Music Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Music2 className="w-8 h-8 text-primary" />
            Traditional Sacred Music
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traditionalMusic.map((track, index) => (
              <Card key={index} className="monastery-card overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={track.image} 
                    alt={track.title}
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{track.title}</CardTitle>
                    <Badge className={getCategoryColor(track.category)}>
                      {track.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{track.duration}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">
                    {track.description}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Meditation Videos Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Heart className="w-8 h-8 text-accent" />
            Guided Meditation Videos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meditationVideos.map((video, index) => (
              <Card key={index} className="monastery-card overflow-hidden">
                <div className="aspect-video overflow-hidden relative group">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Button size="lg" className="rounded-full">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">
                    {video.description}
                  </p>
                  <Button className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-monastery text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Benefits of Sacred Music & Meditation</h2>
          <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto">
            Regular practice with traditional Buddhist music and meditation can help reduce stress, 
            improve focus, enhance spiritual awareness, and bring inner peace to your daily life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Inner Peace</h3>
              <p className="text-white/80 text-sm">Find tranquility through sacred sounds</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Music2 className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Spiritual Connection</h3>
              <p className="text-white/80 text-sm">Deepen your spiritual practice</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Mindfulness</h3>
              <p className="text-white/80 text-sm">Enhance present moment awareness</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Music;