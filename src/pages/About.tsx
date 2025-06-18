
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Users, Globe, Shield, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion du voyage",
      description: "Nous partageons votre passion pour la découverte et l'aventure"
    },
    {
      icon: Users,
      title: "Service personnalisé",
      description: "Chaque voyage est unique, comme chaque voyageur"
    },
    {
      icon: Shield,
      title: "Confiance & sécurité",
      description: "Votre tranquillité d'esprit est notre priorité absolue"
    },
    {
      icon: Globe,
      title: "Expertise mondiale",
      description: "Une connaissance approfondie de toutes nos destinations"
    }
  ];

  const team = [
    {
      name: "Marie Dubois",
      role: "Fondatrice & Directrice",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "15 ans d'expérience",
      specialty: "Asie & Océanie"
    },
    {
      name: "Pierre Martin",
      role: "Expert Safari",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "12 ans d'expérience",
      specialty: "Afrique & Safaris"
    },
    {
      name: "Sophie Chen",
      role: "Spécialiste Luxe",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "10 ans d'expérience",
      specialty: "Voyages de luxe"
    }
  ];

  const achievements = [
    { number: "2000+", label: "Voyageurs satisfaits" },
    { number: "50+", label: "Destinations" },
    { number: "4.9/5", label: "Note moyenne" },
    { number: "15", label: "Années d'expérience" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-travel-emerald to-travel-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white">À propos de nous</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Votre agence de voyage
              <span className="block text-travel-gold">de confiance depuis 2009</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Spécialistes du voyage sur mesure, nous créons vos moments d'exception partout dans le monde
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre histoire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondée en 2009 par Marie Dubois, VoyageÉlite est née d'une passion : celle de faire découvrir 
                le monde de manière authentique et responsable. Après avoir travaillé 10 ans dans le tourisme 
                de masse, Marie a voulu créer une agence différente.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Aujourd'hui, notre équipe d'experts voyage dans le monde entier pour sélectionner les meilleures 
                expériences et créer des voyages qui marquent une vie. Chaque destination est testée, chaque 
                partenaire soigneusement choisi.
              </p>
              <Button className="bg-travel-emerald hover:bg-travel-emerald/90">
                Découvrir nos destinations
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Notre équipe"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-travel-gold" />
                  <div>
                    <div className="font-bold text-gray-900">Prix Excellence</div>
                    <div className="text-gray-600 text-sm">Agence de l'année 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce qui nous guide dans la création de vos voyages d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-travel-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-travel-emerald" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre équipe d'experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des passionnés de voyage qui connaissent leurs destinations sur le bout des doigts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-travel-emerald font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-2">{member.experience}</p>
                  <Badge variant="secondary" className="bg-travel-emerald/10 text-travel-emerald">
                    {member.specialty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-travel-emerald text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Nos réalisations
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Des chiffres qui témoignent de notre engagement et de votre confiance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-travel-gold">
                  {achievement.number}
                </div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
