
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Star } from 'lucide-react';

interface TripHighlight {
  id: string;
  title: string;
  image: string;
  duration: string;
  groupSize: string;
  rating: number;
  price: string;
  highlights: string[];
  location: string;
}

const TripHighlights = () => {
  const trips: TripHighlight[] = [
    {
      id: '1',
      title: 'Circuit Impérial - Marrakech, Fès & Meknès',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '7 jours',
      groupSize: '2-12 personnes',
      rating: 4.9,
      price: '8,500 DH',
      location: 'Villes Impériales',
      highlights: [
        'Visite guidée de la médina de Fès',
        'Nuit dans un riad traditionnel',
        'Place Jemaa el-Fna au coucher du soleil',
        'Souks et artisans locaux'
      ]
    },
    {
      id: '2',
      title: 'Aventure Sahara - 3 jours Merzouga',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3 jours',
      groupSize: '2-8 personnes',
      rating: 5.0,
      price: '3,200 DH',
      location: 'Désert du Sahara',
      highlights: [
        'Randonnée à dos de chameau',
        'Nuit sous les étoiles en bivouac',
        'Lever de soleil sur les dunes',
        'Musique berbère autour du feu'
      ]
    },
    {
      id: '3',
      title: 'Perle Bleue - Chefchaouen',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '2 jours',
      groupSize: '2-6 personnes',
      rating: 4.8,
      price: '1,800 DH',
      location: 'Montagnes du Rif',
      highlights: [
        'Exploration de la ville bleue',
        'Randonnée dans les montagnes',
        'Rencontre avec les artisans locaux',
        'Panorama exceptionnel'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos circuits
            <span className="text-red-600 block">les plus populaires</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos expériences les mieux notées, conçues pour vous offrir 
            le meilleur du Maroc authentique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <Card key={trip.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0">
              <div className="relative overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white font-semibold">
                    {trip.location}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{trip.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {trip.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{trip.groupSize}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {trip.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-red-600">{trip.price}</span>
                    <span className="text-gray-600 text-sm ml-1">/ personne</span>
                  </div>
                  <Badge variant="outline" className="border-red-600 text-red-600">
                    À partir de
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripHighlights;
