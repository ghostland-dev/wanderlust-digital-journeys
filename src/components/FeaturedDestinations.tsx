
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock } from 'lucide-react';

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 'marrakech',
      title: "Marrakech Impériale",
      location: "Marrakech",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73862?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "À partir de 1 200 DH",
      duration: "3 jours",
      rating: 4.9,
      reviews: 234,
      description: "Découvrez la ville rouge, ses souks colorés et la place Jemaa el-Fna",
      highlights: ["Hôtel Riad", "Guide local", "Dîner spectacle"],
      badge: "Populaire"
    },
    {
      id: 'fes',
      title: "Fès Authentique",
      location: "Fès",
      image: "https://images.unsplash.com/photo-1589445768054-f5b9111ca2a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "À partir de 1 800 DH",
      duration: "4 jours",
      rating: 4.8,
      reviews: 156,
      description: "Explorez la médina de Fès, ses artisans et son université Al Quaraouiyine",
      highlights: ["Médina UNESCO", "Artisans locaux", "Cuisine traditionnelle"],
      badge: "Culture"
    },
    {
      id: 'sahara',
      title: "Désert du Sahara",
      location: "Merzouga",
      image: "https://images.unsplash.com/photo-1519409349137-3903f76e0edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "À partir de 2 500 DH",
      duration: "3 jours",
      rating: 5.0,
      reviews: 189,
      description: "Expérience magique dans les dunes de l'Erg Chebbi avec nuit sous les étoiles",
      highlights: ["Caravane chameau", "Bivouac luxe", "Lever de soleil"],
      badge: "Aventure"
    },
    {
      id: 'casablanca',
      title: "Casablanca Moderne",
      location: "Casablanca",
      image: "https://images.unsplash.com/photo-1570896737435-32becd7d5a47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "À partir de 900 DH",
      duration: "2 jours",
      rating: 4.6,
      reviews: 98,
      description: "Découvrez la capitale économique et la mosquée Hassan II",
      highlights: ["Mosquée Hassan II", "Corniche", "Quartier Habous"],
      badge: "Moderne"
    }
  ];

  const getBadgeColor = (badge: string) => {
    const colors = {
      'Populaire': 'bg-red-600 text-white',
      'Culture': 'bg-green-600 text-white',
      'Aventure': 'bg-orange-600 text-white',
      'Moderne': 'bg-blue-600 text-white'
    };
    return colors[badge as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Découvrez le
            <span className="block text-red-600">Maroc authentique</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez les merveilles du Royaume, de Marrakech la rouge au Sahara doré, en passant par Fès l'impériale
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
                    <p className="text-2xl font-bold text-red-600">{destination.price}</p>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{destination.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="bg-red-50 text-red-600">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {typeof destination.id === 'string' ? (
                    <Link to={`/trip/${destination.id}`} className="flex-1">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Voir le circuit
                      </Button>
                    </Link>
                  ) : (
                    <Button className="flex-1 bg-red-600 hover:bg-red-700">
                      Voir le circuit
                    </Button>
                  )}
                  <Link to="/contact">
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                      Devis gratuit
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
            Voir tous nos circuits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
