
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Users, Calendar, MapPin } from 'lucide-react';

const CustomTrips = () => {
  const services = [
    {
      title: "Consultation personnalisée",
      description: "Entretien approfondi pour comprendre vos envies et contraintes",
      icon: Users
    },
    {
      title: "Itinéraire sur mesure",
      description: "Création d'un parcours unique adapté à vos préférences",
      icon: MapPin
    },
    {
      title: "Réservations incluses",
      description: "Prise en charge complète de tous vos hébergements et transports",
      icon: Calendar
    }
  ];

  const testimonials = [
    {
      name: "Claire & Antoine",
      trip: "Voyage de noces en Asie",
      rating: 5,
      comment: "Un voyage parfaitement orchestré selon nos souhaits. Chaque détail était pensé !",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b587?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Michel Durand",
      trip: "Safari familial en Afrique",
      rating: 5,
      comment: "Une expérience inoubliable pour toute la famille. Organisation impeccable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-travel-emerald to-travel-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white">Voyages sur mesure</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Votre voyage,<br />
              <span className="text-travel-gold">exactement comme vous l'imaginez</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Nos experts créent l'itinéraire parfait selon vos envies, votre budget et vos contraintes
            </p>
            <Button size="lg" className="bg-white text-travel-emerald hover:bg-gray-100">
              Commencer mon projet
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple en trois étapes pour créer votre voyage idéal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-travel-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-travel-emerald" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ils nous ont fait confiance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.trip}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomTrips;
