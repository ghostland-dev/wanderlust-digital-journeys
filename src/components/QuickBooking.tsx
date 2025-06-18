
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Users, Phone, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const QuickBooking = () => {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    travelers: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les 24h pour finaliser votre réservation.",
      });
      setFormData({
        destination: '',
        date: '',
        travelers: '',
        name: '',
        email: '',
        phone: ''
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 via-orange-600 to-red-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              Réservation Express
            </CardTitle>
            <p className="text-gray-600 text-lg">
              Obtenez un devis personnalisé en moins de 24h
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Destination</label>
                  <Select value={formData.destination} onValueChange={(value) => setFormData({...formData, destination: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="marrakech">Marrakech</SelectItem>
                      <SelectItem value="fes">Fès</SelectItem>
                      <SelectItem value="sahara">Désert du Sahara</SelectItem>
                      <SelectItem value="chefchaouen">Chefchaouen</SelectItem>
                      <SelectItem value="casablanca">Casablanca</SelectItem>
                      <SelectItem value="essaouira">Essaouira</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Date de départ</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Voyageurs</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Select value={formData.travelers} onValueChange={(value) => setFormData({...formData, travelers: value})}>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Nombre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 voyageur</SelectItem>
                        <SelectItem value="2">2 voyageurs</SelectItem>
                        <SelectItem value="3-4">3-4 voyageurs</SelectItem>
                        <SelectItem value="5-8">5-8 voyageurs</SelectItem>
                        <SelectItem value="9+">9+ voyageurs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nom complet</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="votre@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Téléphone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+212 6XX XX XX XX"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-4 text-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Obtenir mon devis gratuit
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickBooking;
