
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Heart, Award, Clock, MapPin } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Sécurité Garantie',
      description: 'Voyages sécurisés avec guides certifiés et hébergements sélectionnés'
    },
    {
      icon: Users,
      title: 'Expérience Locale',
      description: 'Guides locaux passionnés qui connaissent chaque coin du Maroc'
    },
    {
      icon: Heart,
      title: 'Service Personnalisé',
      description: 'Circuits sur mesure adaptés à vos envies et votre budget'
    },
    {
      icon: Award,
      title: '15 Ans d\'Excellence',
      description: 'Plus de 10,000 voyageurs satisfaits nous font confiance'
    },
    {
      icon: Clock,
      title: 'Support 24/7',
      description: 'Assistance disponible à tout moment pendant votre séjour'
    },
    {
      icon: MapPin,
      title: 'Destinations Uniques',
      description: 'Accès exclusif à des lieux authentiques hors des sentiers battus'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir
            <span className="text-red-600 block">VoyageMaroc ?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depuis plus de 15 ans, nous créons des expériences de voyage authentiques 
            qui révèlent la vraie beauté du Maroc
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-red-100">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">10,000+</div>
                <div className="text-gray-600">Voyageurs satisfaits</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-red-600">15+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-red-600">50+</div>
                <div className="text-gray-600">Destinations uniques</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-red-600">4.9/5</div>
                <div className="text-gray-600">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
