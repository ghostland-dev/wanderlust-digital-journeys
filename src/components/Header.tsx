
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Plane, User, Search, Heart, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Voyages sur mesure', href: '/custom-trips' },
    { name: 'Inspiration', href: '/blog' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`p-2 rounded-full bg-travel-emerald text-white transition-transform duration-300 group-hover:scale-110 ${
              isScrolled ? 'shadow-md' : ''
            }`}>
              <Plane className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-travel-emerald transition-colors duration-300 group-hover:text-travel-ocean">
              VoyageÉlite
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative transition-all duration-300 font-medium group ${
                  isActiveLink(item.href)
                    ? 'text-travel-emerald'
                    : 'text-gray-700 hover:text-travel-emerald'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-travel-emerald transition-transform duration-300 origin-left ${
                  isActiveLink(item.href) 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700 hover:text-travel-emerald hover:bg-travel-emerald/10 transition-all duration-300"
            >
              <Search className="h-4 w-4 mr-2" />
              Rechercher
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700 hover:text-travel-emerald hover:bg-travel-emerald/10 transition-all duration-300 relative"
            >
              <Heart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700 hover:text-travel-emerald hover:bg-travel-emerald/10 transition-all duration-300"
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-travel-emerald text-travel-emerald hover:bg-travel-emerald hover:text-white transition-all duration-300"
            >
              <User className="h-4 w-4 mr-2" />
              Connexion
            </Button>
            <Link to="/contact">
              <Button 
                size="sm" 
                className="bg-travel-emerald hover:bg-travel-emerald/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
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
              className="text-gray-700 hover:text-travel-emerald transition-colors duration-300"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 -translate-y-2'
                }`} />
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : '-translate-x-1/2 -translate-y-1/2'
                }`} />
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 translate-y-1'
                }`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 space-y-4 bg-white/95 backdrop-blur-md border-t border-gray-200">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block transition-all duration-300 font-medium py-2 ${
                  isActiveLink(item.href)
                    ? 'text-travel-emerald border-l-4 border-travel-emerald pl-4'
                    : 'text-gray-700 hover:text-travel-emerald hover:border-l-4 hover:border-travel-emerald hover:pl-4'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Button 
                variant="outline" 
                className="w-full border-travel-emerald text-travel-emerald hover:bg-travel-emerald hover:text-white transition-all duration-300"
              >
                <User className="h-4 w-4 mr-2" />
                Connexion
              </Button>
              <Link to="/contact">
                <Button className="w-full bg-travel-emerald hover:bg-travel-emerald/90 transition-all duration-300">
                  Devis gratuit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
