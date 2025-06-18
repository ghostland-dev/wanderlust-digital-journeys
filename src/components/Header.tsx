
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Plane, User, Search, Heart, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Voyages sur mesure', href: '#custom' },
    { name: 'Inspiration', href: '#blog' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-travel-emerald text-white">
              <Plane className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-travel-emerald">VoyageÉlite</span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-travel-emerald transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-travel-emerald">
              <Search className="h-4 w-4 mr-2" />
              Rechercher
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-travel-emerald">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-travel-emerald">
              <ShoppingBag className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="border-travel-emerald text-travel-emerald hover:bg-travel-emerald hover:text-white">
              <User className="h-4 w-4 mr-2" />
              Connexion
            </Button>
            <Button size="sm" className="bg-travel-emerald hover:bg-travel-emerald/90">
              Devis gratuit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-travel-emerald transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button variant="outline" className="w-full border-travel-emerald text-travel-emerald">
                  <User className="h-4 w-4 mr-2" />
                  Connexion
                </Button>
                <Button className="w-full bg-travel-emerald hover:bg-travel-emerald/90">
                  Devis gratuit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
