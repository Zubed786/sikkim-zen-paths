import { ShoppingCart, Star, Heart, Package } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import singingBowlImage from '@/assets/singing-bowl.jpg';
import prayerWheelImage from '@/assets/prayer-wheel.jpg';

const Marketplace = () => {
  const products = [
    {
      id: 1,
      name: "Tibetan Singing Bowl",
      price: 2500,
      originalPrice: 3000,
      image: singingBowlImage,
      description: "Hand-forged bronze singing bowl with traditional mallet",
      category: "Meditation",
      rating: 4.8,
      reviews: 127,
      inStock: true,
      features: ["Hand-forged bronze", "Includes wooden mallet", "Meditation guide included"]
    },
    {
      id: 2,
      name: "Prayer Wheel (Mani Khorlo)",
      price: 1800,
      originalPrice: 2200,
      image: prayerWheelImage,
      description: "Traditional copper prayer wheel with sacred mantras",
      category: "Spiritual",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      features: ["Copper construction", "Om Mani Padme Hum mantras", "Wooden handle"]
    },
    {
      id: 3,
      name: "Thangka Painting - Tara",
      price: 5500,
      originalPrice: 7000,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      description: "Traditional Tibetan Buddhist scroll painting of Green Tara",
      category: "Art",
      rating: 4.7,
      reviews: 45,
      inStock: true,
      features: ["Hand-painted on canvas", "Natural pigments", "Ready for framing"]
    },
    {
      id: 4,
      name: "Buddhist Mala Beads",
      price: 800,
      originalPrice: 1000,
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400",
      description: "108 sandalwood beads for meditation and prayer",
      category: "Meditation",
      rating: 4.6,
      reviews: 203,
      inStock: true,
      features: ["108 sandalwood beads", "Traditional counting", "Cotton pouch included"]
    },
    {
      id: 5,
      name: "Incense Burner (Brass)",
      price: 1200,
      originalPrice: 1500,
      image: "https://images.unsplash.com/photo-1571678608051-3c37753bd5c3?w=400",
      description: "Ornate brass incense burner with Buddhist motifs",
      category: "Ritual",
      rating: 4.5,
      reviews: 76,
      inStock: true,
      features: ["Handcrafted brass", "Traditional design", "Stable base"]
    },
    {
      id: 6,
      name: "Meditation Cushion (Zabuton)",
      price: 2200,
      originalPrice: 2800,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      description: "Traditional meditation cushion with buckwheat filling",
      category: "Meditation",
      rating: 4.8,
      reviews: 154,
      inStock: false,
      features: ["Organic cotton cover", "Buckwheat hull filling", "Removable cover"]
    },
    {
      id: 7,
      name: "Tibetan Ceremonial Scarf (Khata)",
      price: 350,
      originalPrice: 500,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      description: "Pure silk ceremonial offering scarf in traditional white",
      category: "Ceremonial",
      rating: 4.9,
      reviews: 298,
      inStock: true,
      features: ["Pure silk material", "Traditional length", "Blessing ceremony use"]
    },
    {
      id: 8,
      name: "Buddhist Bell & Dorje Set",
      price: 3200,
      originalPrice: 4000,
      image: "https://images.unsplash.com/photo-1571678608051-3c37753bd5c3?w=400",
      description: "Traditional ritual bell and dorje (vajra) set in bronze",
      category: "Ritual",
      rating: 4.7,
      reviews: 67,
      inStock: true,
      features: ["Bronze construction", "Traditional symbols", "Ritual use guide"]
    },
    {
      id: 9,
      name: "Monastery Tea Collection",
      price: 600,
      originalPrice: 800,
      image: "https://images.unsplash.com/photo-1556881286-094536bb2f56?w=400",
      description: "Blend of high-altitude teas from Sikkim monasteries",
      category: "Tea",
      rating: 4.6,
      reviews: 189,
      inStock: true,
      features: ["Organic high-altitude tea", "Monastery blessing", "Gift packaging"]
    },
    {
      id: 10,
      name: "Buddha Statue (Brass)",
      price: 4500,
      originalPrice: 6000,
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400",
      description: "Handcrafted brass Buddha statue in meditation pose",
      category: "Statues",
      rating: 4.8,
      reviews: 92,
      inStock: true,
      features: ["Hand-cast brass", "Meditation mudra", "8-inch height"]
    }
  ];

  const categories = ["All", "Meditation", "Art", "Spiritual", "Ritual", "Ceremonial", "Tea", "Statues"];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-saffron">
            Sacred Artifacts Marketplace
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover authentic Buddhist artifacts, meditation tools, and sacred items directly 
            sourced from Sikkim monasteries. Each purchase supports heritage preservation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full hover:bg-saffron hover:text-white hover:border-saffron"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="monastery-card overflow-hidden group">
              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                {product.originalPrice > product.price && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-accent text-accent-foreground">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                {/* Category */}
                <Badge variant="secondary" className="bg-saffron/20 text-saffron-dark mb-3">
                  {product.category}
                </Badge>

                {/* Product Name */}
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="text-xs text-muted-foreground mb-4 space-y-1">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-1">
                      <div className="w-1 h-1 bg-saffron rounded-full flex-shrink-0 mt-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-gradient-saffron">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Buy Button */}
                <Button 
                  className="w-full btn-saffron"
                  disabled={!product.inStock}
                >
                  {product.inStock ? (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Now
                    </>
                  ) : (
                    'Out of Stock'
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-saffron">
            Why Shop With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="monastery-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Authentic Products</h4>
                <p className="text-sm text-muted-foreground">
                  Direct sourcing from Sikkim monasteries ensures authenticity
                </p>
              </CardContent>
            </Card>

            <Card className="monastery-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Heritage Support</h4>
                <p className="text-sm text-muted-foreground">
                  Every purchase supports monastery preservation efforts
                </p>
              </CardContent>
            </Card>

            <Card className="monastery-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Secure Shopping</h4>
                <p className="text-sm text-muted-foreground">
                  Safe and secure payment processing with buyer protection
                </p>
              </CardContent>
            </Card>

            <Card className="monastery-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Quality Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  30-day return policy and quality assurance on all items
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Support Message */}
        <div className="mt-20 bg-gradient-monastery rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Shop for a Sacred Cause
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Every purchase from our marketplace directly supports the preservation of Sikkim's monastery heritage. 
            When you buy authentic Buddhist artifacts, you're not just acquiring sacred items—you're contributing 
            to keeping these ancient traditions alive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-maroon hover:bg-white/90" size="lg">
              View All Products
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-maroon" size="lg">
              Learn About Our Artisans
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            Free shipping on orders over ₹2,500 • Authentic products guaranteed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;