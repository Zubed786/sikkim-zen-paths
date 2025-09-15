import { Users, Calendar, BookOpen, MessageSquare, Video, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Community = () => {
  const forums = [
    {
      title: "Monastery Discussions",
      description: "Share experiences, ask questions, and discuss visits to different monasteries",
      members: 1247,
      posts: 3420,
      category: "General",
      lastActivity: "2 hours ago"
    },
    {
      title: "Buddhist Teachings",
      description: "Learn and discuss Buddhist philosophy, meditation practices, and spiritual insights",
      members: 892,
      posts: 2156,
      category: "Spiritual",
      lastActivity: "1 hour ago"
    },
    {
      title: "Heritage Conservation",
      description: "Discuss preservation efforts, volunteer opportunities, and conservation projects",
      members: 634,
      posts: 1203,
      category: "Conservation",
      lastActivity: "4 hours ago"
    },
    {
      title: "Photography & Art",
      description: "Share monastery photos, traditional art, and creative interpretations",
      members: 1156,
      posts: 2847,
      category: "Creative",
      lastActivity: "30 minutes ago"
    }
  ];

  const workshops = [
    {
      title: "Introduction to Buddhist Meditation",
      instructor: "Lama Tenzin Norbu",
      date: "March 25, 2024",
      time: "6:00 PM - 8:00 PM IST",
      participants: 156,
      level: "Beginner",
      description: "Learn basic meditation techniques practiced in Sikkim monasteries",
      status: "upcoming"
    },
    {
      title: "Monastery Architecture & Symbolism",
      instructor: "Dr. Pema Lhamo",
      date: "March 30, 2024", 
      time: "7:00 PM - 9:00 PM IST",
      participants: 89,
      level: "Intermediate",
      description: "Explore the sacred geometry and symbolism in monastery design",
      status: "upcoming"
    },
    {
      title: "Tibetan Calligraphy Workshop",
      instructor: "Karma Sonam",
      date: "March 28, 2024",
      time: "2:00 PM - 4:00 PM IST",
      participants: 45,
      level: "All Levels",
      description: "Learn traditional Tibetan script used in monastery texts",
      status: "upcoming"
    }
  ];

  const culturalExchanges = [
    {
      title: "Virtual Monastery Pilgrimage",
      type: "Online Event",
      date: "April 15, 2024",
      description: "Join fellow devotees in a guided virtual pilgrimage to all major Sikkim monasteries",
      participants: "200+ registered"
    },
    {
      title: "Cultural Stories Exchange",
      type: "Monthly Meet",
      date: "Last Sunday of Month",
      description: "Share and listen to stories about monastery experiences, local legends, and cultural memories",
      participants: "50-80 regular attendees"
    },
    {
      title: "Monastery Music & Chants",
      type: "Learning Circle",
      date: "Bi-weekly Fridays",
      description: "Learn traditional monastery music, chants, and the significance of ritual sounds",
      participants: "30-40 active learners"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "New York, USA",
      text: "The virtual workshops helped me understand Buddhist philosophy deeply. The community here is incredibly supportive and knowledgeable.",
      role: "Workshop Participant"
    },
    {
      name: "Rajesh Sharma",
      location: "Mumbai, India", 
      text: "Being part of heritage conservation discussions opened my eyes to how we can all contribute to preserving these sacred spaces.",
      role: "Conservation Volunteer"
    },
    {
      name: "Maria Santos",
      location: "São Paulo, Brazil",
      text: "The cultural exchange programs connected me with people worldwide who share the same reverence for monastery heritage.",
      role: "Cultural Exchange Member"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-saffron">
            Community Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow enthusiasts, learn from experts, and participate in cultural 
            preservation efforts. Join our global community dedicated to Sikkim's monastery heritage.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="monastery-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient-saffron">2,847</div>
              <p className="text-muted-foreground text-sm">Active Members</p>
            </CardContent>
          </Card>
          
          <Card className="monastery-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient-saffron">9,626</div>
              <p className="text-muted-foreground text-sm">Forum Posts</p>
            </CardContent>
          </Card>
          
          <Card className="monastery-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Video className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient-saffron">127</div>
              <p className="text-muted-foreground text-sm">Workshops Held</p>
            </CardContent>
          </Card>
          
          <Card className="monastery-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient-saffron">47</div>
              <p className="text-muted-foreground text-sm">Countries Represented</p>
            </CardContent>
          </Card>
        </div>

        {/* Discussion Forums */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Discussion Forums
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {forums.map((forum, index) => (
              <Card key={index} className="monastery-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{forum.title}</CardTitle>
                    <Badge className="bg-saffron/20 text-saffron-dark">{forum.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{forum.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-semibold">{forum.members.toLocaleString()}</div>
                      <div className="text-muted-foreground">Members</div>
                    </div>
                    <div>
                      <div className="font-semibold">{forum.posts.toLocaleString()}</div>
                      <div className="text-muted-foreground">Posts</div>
                    </div>
                    <div>
                      <div className="font-semibold text-saffron">{forum.lastActivity}</div>
                      <div className="text-muted-foreground">Last Activity</div>
                    </div>
                  </div>
                  
                  <Button className="w-full btn-saffron">
                    Join Discussion
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Workshops */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Virtual Workshops & Learning
          </h2>
          <div className="space-y-6">
            {workshops.map((workshop, index) => (
              <Card key={index} className="monastery-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className="bg-saffron/20 text-saffron-dark">{workshop.level}</Badge>
                        <Badge variant="outline">{workshop.participants} registered</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                      <p className="text-muted-foreground mb-3">{workshop.description}</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-saffron" />
                          <span>{workshop.date} • {workshop.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-saffron" />
                          <span>Instructor: {workshop.instructor}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center lg:text-right">
                      <Button className="btn-saffron w-full lg:w-auto">
                        Register Now
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">Free for members</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cultural Exchange Programs */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Cultural Exchange Programs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {culturalExchanges.map((program, index) => (
              <Card key={index} className="monastery-card">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">{program.type}</Badge>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{program.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-saffron" />
                      <span>{program.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-saffron" />
                      <span>{program.participants}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Member Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Community Voices
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="monastery-card">
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-saffron mt-1">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Community CTA */}
        <div className="bg-gradient-monastery rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Be part of a global network dedicated to preserving and celebrating Sikkim's monastery heritage. 
            Connect, learn, and contribute to keeping these sacred traditions alive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-maroon hover:bg-white/90" size="lg">
              Create Account
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-maroon" size="lg">
              Browse Forums
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            Free to join • Over 2,800 active members worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;