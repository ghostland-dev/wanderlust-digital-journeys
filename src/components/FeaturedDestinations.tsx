
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock } from 'lucide-react';

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 'bali',
      title: "Bali Authentique",
      location: "Indonésie",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "À partir de 1 890€",
      duration: "12 jours",
      rating: 4.9,
      reviews: 127,
      description: "Temples anciens, rizières en terrasses et plages paradisiaques",
      highlights: ["Vol inclus", "Guide francophone", "Hôtels charme"],
      badge: "Bestseller"
    },
    {
      id: 'grece',
      title: "Îles Grecques Premium",
      location: "Grèce",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "À partir de 2 490€",
      duration: "10 jours",
      rating: 4.8,
      reviews: 89,
      description: "Santorini, Mykonos et Crète dans un voyage de luxe",
      highlights: ["Hôtels 5*", "Croisière privée", "Couchers de soleil"],
      badge: "Luxe"
    },
    {
      id: 3,
      title: "Safari Tanzanie",
      location: "Afrique",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "À partir de 3 290€",
      duration: "14 jours",
      rating: 4.9,
      reviews: 156,
      description: "Serengeti, Ngorongoro et ascension du Kilimandjaro",
      highlights: ["Safari 4x4", "Lodges premium", "Guide expert"],
      badge: "Aventure"
    },
    {
      id: 4,
      title: "Japon Traditionnel",
      location: "Asie",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "À partir de 2 790€",
      duration: "15 jours",
      rating: 4.7,
      reviews: 98,
      description: "Tokyo moderne, Kyoto traditionnel et mont Fuji",
      highlights: ["JR Pass inclus", "Ryokan authentique", "Expériences uniques"],
      badge: "Culture"
    }
  ];

  const getBadgeColor = (badge: string) => {
    const colors = {
      'Bestseller': 'bg-travel-emerald text-white',
      'Luxe': 'bg-travel-gold text-white',
      'Aventure': 'bg-travel-sunset text-white',
      'Culture': 'bg-travel-ocean text-white'
    };
    return colors[badge as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos destinations
            <span className="block text-travel-emerald">coup de cœur</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos voyages les plus prisés, soigneusement sélectionnés pour leur authenticité et leur caractère exceptionnel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group cursor-pointer card-hover overflow-hidden">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${getBadgeColor(destination.badge)}`}>
                  {destination.badge}
                </Badge>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-900">{destination.rating}</span>
                    <span className="text-gray-600 text-sm">({destination.reviews})</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{destination.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{destination.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-travel-emerald">{destination.price}</p>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{destination.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="bg-travel-emerald/10 text-travel-emerald">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {typeof destination.id === 'string' ? (
                    <Link to={`/trip/${destination.id}`} className="flex-1">
                      <Button className="w-full bg-travel-emerald hover:bg-travel-emerald/90">
                        Voir le voyage
                      </Button>
                    </Link>
                  ) : (
                    <Button className="flex-1 bg-travel-emerald hover:bg-travel-emerald/90">
                      Voir le voyage
                    </Button>
                  )}
                  <Link to="/contact">
                    <Button variant="outline" className="border-travel-emerald text-travel-emerald hover:bg-travel-emerald hover:text-white">
                      Devis gratuit
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-travel-emerald text-travel-emerald hover:bg-travel-emerald hover:text-white">
            Voir toutes les destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
