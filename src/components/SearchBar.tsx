
import React, { useState, useRef, useEffect } from 'react';
import { Search, X, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className = '' }: SearchBarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travelers, setTravelers] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  const popularDestinations = [
    'Bali, Indonésie',
    'Îles Grecques',
    'Tanzanie',
    'Japon',
    'Thaïlande',
    'Maroc',
    'Costa Rica',
    'Islande'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    console.log('Search:', { searchQuery, destination, dates, travelers });
    // Implement search logic here
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Simple Search Bar */}
      <div className={`transition-all duration-300 ${isExpanded ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Où souhaitez-vous voyager ?"
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-travel-emerald focus:border-transparent text-lg"
            onFocus={() => setIsExpanded(true)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Expanded Search Form */}
      {isExpanded && (
        <Card className="absolute top-0 left-0 right-0 z-50 shadow-2xl animate-scale-in">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Trouvez votre voyage idéal</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-4">
              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Où voulez-vous aller ?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-travel-emerald focus:border-transparent"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
                {destination === '' && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {popularDestinations.map((dest) => (
                      <button
                        key={dest}
                        onClick={() => setDestination(dest)}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-travel-emerald hover:text-white transition-colors"
                      >
                        {dest}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Quand ?
                  </label>
                  <input
                    type="text"
                    placeholder="Flexible"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-travel-emerald focus:border-transparent"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Voyageurs
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-travel-emerald focus:border-transparent"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                  >
                    <option value="">Sélectionner</option>
                    <option value="1">1 voyageur</option>
                    <option value="2">2 voyageurs</option>
                    <option value="3-4">3-4 voyageurs</option>
                    <option value="5+">5+ voyageurs</option>
                  </select>
                </div>
              </div>

              <Button
                onClick={handleSearch}
                className="w-full bg-travel-emerald hover:bg-travel-emerald/90 text-lg py-3"
              >
                <Search className="h-5 w-5 mr-2" />
                Rechercher
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;
