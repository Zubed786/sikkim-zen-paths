import { Heart, Users, Globe, Target, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Tenzin Norbu",
      role: "Heritage Conservation Expert",
      description: "25+ years in Buddhist monastery preservation and cultural heritage documentation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Pema Lhamo",
      role: "Digital Preservation Specialist",
      description: "Expert in 3D scanning, virtual reality, and digital archival of monastery artifacts",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c434?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Karma Bhutia",
      role: "Community Outreach Director",
      description: "Bridges traditional monastery communities with modern preservation efforts",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Mitchell",
      role: "Technology Integration Lead",
      description: "Develops innovative solutions for virtual tours and digital monastery experiences",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Project Inception",
      description: "Digital Monasteries project launched with first monastery documentation"
    },
    {
      year: "2021", 
      title: "Virtual Tours Debut",
      description: "First 360° virtual tour of Rumtek Monastery goes live"
    },
    {
      year: "2022",
      title: "Community Platform",
      description: "Online community and educational workshops program established"
    },
    {
      year: "2023",
      title: "Heritage Recognition",
      description: "Project receives UNESCO recognition for digital heritage preservation"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Platform reaches 50,000+ users worldwide with comprehensive monastery coverage"
    }
  ];

  const impactStats = [
    { number: "12", label: "Monasteries Documented", icon: Heart },
    { number: "50,000+", label: "Global Visitors", icon: Globe },
    { number: "2,847", label: "Community Members", icon: Users },
    { number: "₹75L+", label: "Heritage Funds Raised", icon: Target }
  ];

  const achievements = [
    {
      title: "UNESCO Digital Heritage Award",
      year: "2023",
      description: "Recognition for innovative preservation of intangible cultural heritage"
    },
    {
      title: "National Tourism Excellence",
      year: "2023",
      description: "Best Digital Tourism Initiative for virtual monastery experiences"
    },
    {
      title: "Cultural Preservation Medal",
      year: "2022",
      description: "Government of Sikkim recognition for monastery heritage conservation"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-saffron">
            About Digital Monasteries
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging ancient wisdom with modern technology to preserve and share 
            the sacred heritage of Sikkim's monasteries with the world.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <Card className="monastery-card">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gradient-saffron">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Digital Monasteries is dedicated to preserving, documenting, and sharing the rich cultural 
                and spiritual heritage of Sikkim's Buddhist monasteries. Through cutting-edge digital technology, 
                immersive virtual experiences, and community engagement, we ensure that these sacred spaces 
                and their timeless wisdom remain accessible to future generations while supporting ongoing 
                conservation efforts.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Impact Statistics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="monastery-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient-saffron mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            What We Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Digital Preservation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use advanced 3D scanning, high-resolution photography, and virtual reality technology 
                  to create comprehensive digital archives of monastery architecture, artifacts, and sacred spaces.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Virtual Experiences</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our immersive 360° virtual tours allow people worldwide to experience the serenity 
                  and magnificence of Sikkim's monasteries from anywhere in the world.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Educational Outreach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through workshops, community programs, and educational content, we share Buddhist 
                  teachings, cultural practices, and the historical significance of these sacred sites.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
                  alt="Digital preservation"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1571678608051-3c37753bd5c3?w=300&h=200&fit=crop"
                  alt="Virtual reality"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300&h=200&fit=crop"
                  alt="Community engagement"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
                  alt="Educational programs"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {milestone.year}
                  </div>
                  <Card className="monastery-card flex-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="monastery-card text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-saffron font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Recognition & Awards
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="monastery-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-2">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <p className="text-saffron font-medium">{achievement.year}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="mb-20">
          <Card className="monastery-card">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient-saffron">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We envision a world where the sacred heritage of Sikkim's monasteries is not just 
                    preserved but actively shared, celebrated, and learned from by people across the globe. 
                    Through technology and community, we aim to build bridges between ancient wisdom 
                    and modern life.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-saffron" />
                      <span>Global accessibility to Buddhist heritage</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-saffron" />
                      <span>Sustainable conservation funding</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-saffron" />
                      <span>Thriving international community</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop"
                    alt="Monastery heritage vision"
                    className="w-full rounded-lg shadow-elegant"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <div className="bg-gradient-monastery rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Us in Preserving Sacred Heritage
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Whether you're a heritage enthusiast, technology expert, or simply someone who believes 
            in preserving cultural treasures, we welcome you to be part of our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-maroon hover:bg-white/90 transition-gentle rounded-lg px-8 py-3 font-medium">
              Get Involved
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-maroon transition-gentle rounded-lg px-8 py-3 font-medium">
              Contact Us
            </button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            info@digitalmonasteries.org • +91 98765 43210
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;