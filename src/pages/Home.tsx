import { Link } from 'react-router-dom';
import { MapPin, Heart, Camera, Users, ShoppingBag, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-monastery-panorama.jpg';
import rumtekImage from '@/assets/rumtek-monastery.jpg';
import pemayangsteImage from '@/assets/pemayangtse-monastery.jpg';
import tashidingImage from '@/assets/tashiding-monastery.jpg';

const Home = () => {
  const inspirationalQuotes = [
    {
      quote: "Peace comes from within. Do not seek it without.",
      attribution: "Buddha",
      image: rumtekImage
    },
    {
      quote: "Better than a thousand hollow words, is one word that brings peace.",
      attribution: "Buddha", 
      image: pemayangsteImage
    },
    {
      quote: "The mind is everything. What you think you become.",
      attribution: "Buddha",
      image: tashidingImage
    }
  ];

  const features = [
    {
      icon: MapPin,
      title: "Sacred Heritage",
      description: "Explore the rich history and architecture of Sikkim's ancient monasteries"
    },
    {
      icon: Camera,
      title: "Virtual Tours",
      description: "Immersive 360° experiences of monastery interiors and sacred spaces"
    },
    {
      icon: Users,
      title: "Cultural Learning",
      description: "Educational content about Buddhist traditions, festivals, and practices"
    },
    {
      icon: Heart,
      title: "Heritage Preservation",
      description: "Support ongoing conservation efforts through donations and awareness"
    }
  ];

  const quickLinks = [
    { title: "Heritage", path: "/heritage", icon: MapPin, description: "Discover monastery history" },
    { title: "Virtual Tours", path: "/virtual", icon: Camera, description: "360° monastery experiences" },
    { title: "Tourism", path: "/tourism", icon: Users, description: "Visit planning guide" },
    { title: "Donations", path: "/donations", icon: Heart, description: "Support preservation" },
    { title: "Marketplace", path: "/marketplace", icon: ShoppingBag, description: "Sacred artifacts" },
    { title: "About", path: "/about", icon: Info, description: "Our mission" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Digital <span className="text-gradient-saffron">Monasteries</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Preserving and Promoting Sikkim's Sacred Monastery Heritage Through Digital Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-saffron">
              <Link to="/heritage">Explore Heritage</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Link to="/virtual">Virtual Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Inspirational Quotes Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-saffron">
            Wisdom from Sacred Spaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inspirationalQuotes.map((item, index) => (
              <Card key={index} className="monastery-card overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt="Monastery view"
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-center mb-4">
                    "{item.quote}"
                  </blockquote>
                  <p className="text-center text-muted-foreground">— {item.attribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What This Website Provides */}
      <section className="py-20 px-4 bg-gradient-sunset">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            What Digital Monasteries Provides
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            Your comprehensive gateway to understanding and experiencing Sikkim's monastery heritage
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-elegant">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-saffron">
            Explore Our Platform
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <Card className="monastery-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <link.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                        <p className="text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-monastery text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Preserving Sacred Heritage
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Help us maintain and share the spiritual wealth of Sikkim's monasteries with the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-maroon hover:bg-white/90">
              <Link to="/donations">Make a Donation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-maroon">
              <Link to="/community">Join Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;