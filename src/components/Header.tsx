
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Plane, User, Heart, ShoppingBag } from 'lucide-react';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Circuits au Maroc', href: '/custom-trips' },
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
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 w-full">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
              <div className={`p-2 rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:scale-110 ${
                isScrolled ? 'shadow-md' : ''
              }`}>
                <Plane className="h-6 w-6" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-red-600 transition-colors duration-300 group-hover:text-green-600 whitespace-nowrap">
                VoyageMaroc
              </span>
            </Link>

            {/* Navigation Desktop - Full Width */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-6 xl:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative transition-all duration-300 font-medium group text-sm xl:text-base whitespace-nowrap ${
                      isActiveLink(item.href)
                        ? 'text-red-600'
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transition-transform duration-300 origin-left ${
                      isActiveLink(item.href) 
                        ? 'scale-x-100' 
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                ))}
              </div>
            </nav>

            {/* Actions Desktop */}
            <div className="hidden md:flex items-center space-x-2 xl:space-x-4 flex-shrink-0">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 relative"
              >
                <Heart className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
              >
                <ShoppingBag className="h-4 w-4" />
              </Button>
              <Link to="/client-area">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 text-xs xl:text-sm"
                >
                  <User className="h-4 w-4 mr-1 xl:mr-2" />
                  <span className="hidden xl:inline">Mon espace</span>
                  <span className="xl:hidden">Espace</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="sm" 
                  className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-xs xl:text-sm"
                >
                  <span className="hidden xl:inline">Devis gratuit</span>
                  <span className="xl:hidden">Devis</span>
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300"
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
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 py-4 space-y-4 bg-white/95 backdrop-blur-md border-t border-gray-200">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block transition-all duration-300 font-medium py-2 ${
                    isActiveLink(item.href)
                      ? 'text-red-600 border-l-4 border-red-600 pl-4'
                      : 'text-gray-700 hover:text-red-600 hover:border-l-4 hover:border-red-600 hover:pl-4'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link to="/client-area">
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Mon espace client
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300">
                    Devis gratuit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar - only on homepage */}
      {isHomePage && (
        <div className="fixed top-20 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
