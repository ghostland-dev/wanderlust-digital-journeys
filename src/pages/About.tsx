
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Heart, Shield, MapPin, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "15,000+", label: "Voyageurs satisfaits" },
    { icon: MapPin, value: "85", label: "Destinations uniques" },
    { icon: Award, value: "12", label: "Années d'expérience" },
    { icon: Heart, value: "98%", label: "Taux de satisfaction" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Confiance & Sécurité",
      description: "Partenaires certifiés et assurances complètes pour voyager l'esprit tranquille."
    },
    {
      icon: Heart,
      title: "Passion du Voyage",
      description: "Une équipe de passionnés qui connaît chaque destination sur le bout des doigts."
    },
    {
      icon: Award,
      title: "Excellence & Qualité",
      description: "Standards élevés et attention aux détails pour des expériences exceptionnelles."
    },
    {
      icon: Clock,
      title: "Service 24/7",
      description: "Support disponible à tout moment pendant votre voyage."
    }
  ];

  const team = [
    {
      name: "Sophie Dubois",
      role: "Fondatrice & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face",
      description: "15 ans d'expérience dans le luxe et les voyages d'exception."
    },
    {
      name: "Marc Laurent",
      role: "Directeur des Opérations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Expert en logistique voyage et relations partenaires."
    },
    {
      name: "Emma Chen",
      role: "Responsable Destinations Asie",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Spécialiste Asie avec plus de 50 voyages dans la région."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-travel-ocean to-travel-emerald text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white">À propos de nous</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Créateurs d'expériences
              <span className="block text-travel-gold">extraordinaires</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Depuis 2012, nous transformons vos rêves de voyage en souvenirs inoubliables
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-travel-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-travel-emerald" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre histoire commence par une passion
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tout a commencé par un rêve : rendre les voyages d'exception accessibles à tous. 
                Sophie Dubois, notre fondatrice, a créé VoyageÉlite après avoir vécu des expériences 
                transformatrices lors de ses propres aventures autour du monde.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Aujourd'hui, notre équipe de 25 experts voyage partage cette même passion et cet 
                engagement à créer des moments magiques pour nos clients. Chaque voyage que nous 
                concevons est unique, personnalisé et pensé dans les moindres détails.
              </p>
              <Button size="lg" className="bg-travel-emerald hover:bg-travel-emerald/90">
                Découvrir nos voyages
              </Button>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Notre équipe"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et font de nous votre partenaire de confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-travel-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-travel-emerald" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre équipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les experts passionnés qui rendent vos voyages extraordinaires
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-travel-emerald font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
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

export default About;
