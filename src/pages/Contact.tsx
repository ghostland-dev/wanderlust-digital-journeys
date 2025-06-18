
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "+33 1 23 45 67 89",
      subtitle: "Lun-Ven: 9h-18h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@voyageelite.fr",
      subtitle: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: "123 Avenue des Champs-Élysées",
      subtitle: "75008 Paris, France"
    },
    {
      icon: Clock,
      title: "Horaires",
      info: "Lun-Ven: 9h-18h",
      subtitle: "Sam: 10h-16h"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-travel-ocean to-travel-emerald text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white">Contactez-nous</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Planifions ensemble
              <span className="block text-travel-gold">votre voyage de rêve</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Notre équipe d'experts est là pour vous accompagner dans tous vos projets voyage
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Demandez votre devis gratuit
              </h2>
              <p className="text-gray-600 mb-8">
                Remplissez ce formulaire et notre équipe vous recontactera dans les 24h pour créer ensemble votre voyage sur mesure.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <Input placeholder="Votre prénom" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <Input placeholder="Votre nom" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="votre@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input placeholder="+33 1 23 45 67 89" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination souhaitée
                    </label>
                    <Input placeholder="Ex: Japon, Bali, Safari Kenya..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget approximatif
                    </label>
                    <Input placeholder="Ex: 3000€ pour 2 personnes" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez votre projet de voyage
                  </label>
                  <Textarea 
                    placeholder="Parlez-nous de vos envies, dates de voyage, nombre de personnes, expériences souhaitées..."
                    rows={6}
                  />
                </div>
                
                <Button size="lg" className="w-full bg-travel-emerald hover:bg-travel-emerald/90">
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer ma demande
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h2>
              
              <div className="grid grid-cols-1 gap-6 mb-8">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="p-6">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-travel-emerald/10 rounded-full flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-travel-emerald" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                            <p className="text-gray-900 mb-1">{item.info}</p>
                            <p className="text-gray-600 text-sm">{item.subtitle}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Carte interactive</p>
                    <p className="text-sm text-gray-500">123 Avenue des Champs-Élysées, Paris</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
