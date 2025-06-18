
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie & Pierre Dubois",
      location: "Lyon, France",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b587?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      destination: "Bali, Indonésie",
      review: "Un voyage absolument magique ! L'équipe de VoyageÉlite a créé un itinéraire parfaitement adapté à nos envies. Chaque détail était pensé, des hôtels de charme aux expériences authentiques. Nous recommandons vivement !",
      date: "Septembre 2023"
    },
    {
      id: 2,
      name: "Sophie Martin",
      location: "Paris, France",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      destination: "Îles Grecques",
      review: "Service client exceptionnel et organisation parfaite. Notre lune de miel en Grèce restera gravée dans nos mémoires. Les conseils personnalisés et la disponibilité de l'équipe ont fait toute la différence.",
      date: "Juin 2023"
    },
    {
      id: 3,
      name: "Jean-Luc Moreau",
      location: "Bordeaux, France",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      destination: "Safari Tanzanie",
      review: "Une aventure extraordinaire ! Le safari en Tanzanie organisé par VoyageÉlite était bien au-delà de nos espérances. Guides experts, logements d'exception et moments inoubliables au cœur de la savane africaine.",
      date: "Août 2023"
    },
    {
      id: 4,
      name: "Céline & Thomas",
      location: "Nantes, France",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      destination: "Japon",
      review: "Le Japon comme nous ne l'aurions jamais découvert seuls ! L'expertise culturelle de l'équipe nous a permis de vivre des expériences authentiques, loin des sentiers battus. Un voyage transformateur !",
      date: "Octobre 2023"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ce que disent nos
            <span className="block text-travel-emerald">voyageurs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 2 000 voyageurs nous font confiance chaque année pour créer leurs moments d'exception
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative card-hover">
              <CardContent className="p-8">
                <div className="absolute top-6 right-6 text-travel-emerald/20">
                  <Quote className="h-12 w-12" />
                </div>
                
                <div className="flex items-center mb-6">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed mb-4 text-lg">
                  "{testimonial.review}"
                </blockquote>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium text-travel-emerald">{testimonial.destination}</span>
                  <span>{testimonial.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-travel-emerald mb-2">2000+</div>
            <div className="text-gray-600">Voyageurs satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-travel-emerald mb-2">4.9/5</div>
            <div className="text-gray-600">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-travel-emerald mb-2">50+</div>
            <div className="text-gray-600">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-travel-emerald mb-2">98%</div>
            <div className="text-gray-600">Taux de satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
