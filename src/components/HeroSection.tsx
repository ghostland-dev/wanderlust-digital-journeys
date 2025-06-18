
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Users, Search, Play } from 'lucide-react';

const HeroSection = () => {
  const [destination, setDestination] = useState('');
  const [travelers, setTravelers] = useState('');
  const [budget, setBudget] = useState('');

  const popularDestinations = [
    'Marrakech',
    'Fès',
    'Casablanca',
    'Rabat',
    'Désert du Sahara',
    'Chefchaouen'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Place Jemaa el-Fna à Marrakech"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Découvrez la magie du
            <span className="block text-red-500 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Maroc authentique
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Vivez des expériences uniques dans le Royaume, des médinas impériales aux dunes du Sahara
          </p>

          {/* Video Play Button */}
          <div className="mb-12">
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/20 border-2 border-white/30 rounded-full p-4 animate-float"
            >
              <Play className="h-8 w-8 mr-3 fill-current" />
              Découvrir en vidéo
            </Button>
          </div>
        </div>

        {/* Search Form */}
        <div className="animate-slide-up max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Planifiez votre voyage au Maroc</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Quelle ville souhaitez-vous visiter ?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-10 bg-white/90 border-white/30 text-gray-800 placeholder:text-gray-500"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="date"
                  placeholder="Date de départ"
                  className="pl-10 bg-white/90 border-white/30 text-gray-800"
                />
              </div>
              
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Select value={travelers} onValueChange={setTravelers}>
                  <SelectTrigger className="pl-10 bg-white/90 border-white/30 text-gray-800">
                    <SelectValue placeholder="Voyageurs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 voyageur</SelectItem>
                    <SelectItem value="2">2 voyageurs</SelectItem>
                    <SelectItem value="3-4">3-4 voyageurs</SelectItem>
                    <SelectItem value="5+">5+ voyageurs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger className="bg-white/90 border-white/30 text-gray-800">
                  <SelectValue placeholder="Budget (DH)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000-3000">1 000 - 3 000 DH</SelectItem>
                  <SelectItem value="3000-5000">3 000 - 5 000 DH</SelectItem>
                  <SelectItem value="5000-10000">5 000 - 10 000 DH</SelectItem>
                  <SelectItem value="10000+">10 000+ DH</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold w-full md:w-auto"
            >
              <Search className="h-5 w-5 mr-2" />
              Rechercher mon circuit
            </Button>
          </div>

          {/* Popular Destinations */}
          <div className="mt-8 text-center">
            <p className="text-white/80 mb-4">Destinations populaires :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularDestinations.map((dest) => (
                <Button
                  key={dest}
                  variant="ghost"
                  size="sm"
                  className="text-white/90 hover:text-white hover:bg-white/20 border border-white/30 rounded-full"
                >
                  {dest}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
