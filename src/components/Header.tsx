
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Plane, User, Search, Heart, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Voyages sur mesure', href: '/custom-trips' },
    { name: 'Inspiration', href: '/blog' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-travel-emerald text-white">
              <Plane className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-travel-emerald">VoyageÉlite</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isActiveLink(item.href)
                    ? 'text-travel-emerald border-b-2 border-travel-emerald pb-1'
                    : 'text-gray-700 hover:text-travel-emerald'
                }`}
              >
                {item.name}
              </Link>
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
            <Link to="/contact">
              <Button size="sm" className="bg-travel-emerald hover:bg-travel-emerald/90">
                Devis gratuit
              </Button>
            </Link>
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
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block transition-colors duration-200 font-medium ${
                    isActiveLink(item.href)
                      ? 'text-travel-emerald'
                      : 'text-gray-700 hover:text-travel-emerald'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button variant="outline" className="w-full border-travel-emerald text-travel-emerald">
                  <User className="h-4 w-4 mr-2" />
                  Connexion
                </Button>
                <Link to="/contact">
                  <Button className="w-full bg-travel-emerald hover:bg-travel-emerald/90">
                    Devis gratuit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
