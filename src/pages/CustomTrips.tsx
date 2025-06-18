
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Heart, 
  Star, 
  Camera, 
  Utensils, 
  Bed, 
  Plane,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomTrips = () => {
  const [step, setStep] = useState(1);
  
  const tripTypes = [
    {
      icon: Heart,
      title: "Lune de miel",
      description: "Voyages romantiques pour célébrer votre amour",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      popular: true
    },
    {
      icon: Users,
      title: "Voyage en famille",
      description: "Aventures adaptées à tous les âges",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Camera,
      title: "Voyage photo",
      description: "Expéditions pour les passionnés de photographie",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Utensils,
      title: "Gastronomie",
      description: "Découvertes culinaires et expériences gastronomiques",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Star,
      title: "Luxe & Prestige",
      description: "Le summum du raffinement et du service",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: MapPin,
      title: "Aventure & Nature",
      description: "Explorations hors des sentiers battus",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Consultation personnalisée",
      description: "Échangez avec nos experts pour définir vos envies et besoins",
      icon: Users
    },
    {
      step: 2,
      title: "Conception sur mesure",
      description: "Nous créons un itinéraire unique adapté à votre profil",
      icon: Star
    },
    {
      step: 3,
      title: "Réservation & organisation",
      description: "Nous prenons en charge toute la logistique de votre voyage",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Accompagnement 24/7",
      description: "Support continu pendant toute la durée de votre séjour",
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: "Marie & Jean Dubois",
      trip: "Lune de miel aux Maldives",
      text: "Un voyage absolument magique ! Chaque détail était parfait, de l'accueil à l'aéroport jusqu'au dernier jour.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Famille Martin",
      trip: "Safari au Kenya",
      text: "Nos enfants parlent encore de ce voyage incroyable ! L'organisation était parfaite pour toute la famille.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-travel-ocean to-travel-emerald text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white">Voyages sur mesure</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Votre voyage,
              <span className="block text-travel-gold">exactement comme vous l'imaginez</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Nos experts créent des expériences uniques, personnalisées selon vos désirs et votre budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-travel-gold hover:bg-travel-gold/90 text-gray-900 font-semibold">
                Créer mon voyage
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/20">
                Voir nos exemples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types de voyages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque voyage est unique, mais nous avons l'expertise pour réaliser tous vos rêves d'évasion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tripTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {type.popular && (
                      <Badge className="absolute top-4 left-4 z-10 bg-travel-gold text-gray-900">
                        Populaire
                      </Badge>
                    )}
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                      <p className="text-sm opacity-90">{type.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment ça marche ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et transparent pour créer le voyage de vos rêves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-travel-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-travel-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Commencez dès maintenant</h2>
            <p className="text-xl text-gray-600">
              Remplissez ce formulaire rapide et recevez une première proposition sous 24h
            </p>
          </div>
          
          <Card className="p-8">
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination souhaitée
                    </label>
                    <Input placeholder="Ex: Japon, Bali, Safari..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de voyage
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="honeymoon">Lune de miel</SelectItem>
                        <SelectItem value="family">Famille</SelectItem>
                        <SelectItem value="luxury">Luxe</SelectItem>
                        <SelectItem value="adventure">Aventure</SelectItem>
                        <SelectItem value="culture">Culture</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de voyageurs
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Nombre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 personne</SelectItem>
                        <SelectItem value="2">2 personnes</SelectItem>
                        <SelectItem value="3-4">3-4 personnes</SelectItem>
                        <SelectItem value="5+">5+ personnes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Durée souhaitée
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Durée" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekend">Weekend (2-3j)</SelectItem>
                        <SelectItem value="week">1 semaine</SelectItem>
                        <SelectItem value="2weeks">2 semaines</SelectItem>
                        <SelectItem value="month">1 mois+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget approximatif
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1000-3000">1 000€ - 3 000€</SelectItem>
                        <SelectItem value="3000-5000">3 000€ - 5 000€</SelectItem>
                        <SelectItem value="5000-10000">5 000€ - 10 000€</SelectItem>
                        <SelectItem value="10000+">10 000€+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez vos envies
                  </label>
                  <Textarea 
                    placeholder="Parlez-nous de vos passions, expériences souhaitées, contraintes particulières..."
                    rows={4}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Votre nom *
                    </label>
                    <Input placeholder="Nom complet" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="votre@email.com" required />
                  </div>
                </div>
                
                <Button size="lg" className="w-full bg-travel-emerald hover:bg-travel-emerald/90">
                  <Plane className="h-5 w-5 mr-2" />
                  Recevoir ma proposition de voyage
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ils nous font confiance</h2>
            <p className="text-xl text-gray-600">
              Les témoignages de nos voyageurs parlent mieux que nos mots
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.trip}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-travel-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
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
