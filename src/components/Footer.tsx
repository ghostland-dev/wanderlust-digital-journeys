
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    voyages: [
      { name: 'Circuits Marrakech', href: '/' },
      { name: 'Circuits Fès', href: '/custom-trips' },
      { name: 'Excursions Sahara', href: '/custom-trips' },
      { name: 'Circuits Casablanca', href: '/custom-trips' },
      { name: 'Séjours Agadir', href: '/custom-trips' },
    ],
    services: [
      { name: 'Devis gratuit', href: '/contact' },
      { name: 'Guide francophone', href: '/contact' },
      { name: 'Transport privé', href: '/contact' },
      { name: 'Réservation hôtels', href: '/contact' },
      { name: 'Excursions sur mesure', href: '/contact' },
    ],
    support: [
      { name: 'Centre d\'aide', href: '/contact' },
      { name: 'Contact', href: '/contact' },
      { name: 'WhatsApp', href: '/contact' },
      { name: 'Réclamations', href: '/contact' },
      { name: 'FAQ', href: '/contact' },
    ],
    entreprise: [
      { name: 'À propos', href: '/about' },
      { name: 'Notre équipe', href: '/about' },
      { name: 'Emplois', href: '/about' },
      { name: 'Blog voyage', href: '/blog' },
      { name: 'Partenaires', href: '/about' },
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Restez connecté avec le Maroc</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recevez nos meilleures offres de circuits, conseils de voyage et découvertes sur les merveilles du Royaume
            </p>
          </div>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 flex-1"
            />
            <Button className="bg-red-600 hover:bg-red-700 px-6">
              <Mail className="h-4 w-4 mr-2" />
              S'abonner
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-full bg-red-600 text-white">
                <Plane className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-white">VoyageMaroc</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Spécialiste des circuits au Maroc depuis 2015. Nous créons des expériences authentiques et inoubliables dans tout le Royaume.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-red-600" />
                <span>+212 5 24 12 34 56</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-red-600" />
                <span>contact@voyagemaroc.ma</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-red-600" />
                <span>Marrakech, Maroc</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-white mb-4">Circuits</h4>
            <ul className="space-y-3">
              {footerLinks.voyages.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 VoyageMaroc. Tous droits réservés.
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link to="/contact" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                Conditions générales
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                Politique de confidentialité
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
