
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    voyages: [
      { name: 'Destinations', href: '#' },
      { name: 'Voyages sur mesure', href: '#' },
      { name: 'Groupes & familles', href: '#' },
      { name: 'Lune de miel', href: '#' },
      { name: 'Voyages d\'aventure', href: '#' },
    ],
    services: [
      { name: 'Devis gratuit', href: '#' },
      { name: 'Conciergerie voyage', href: '#' },
      { name: 'Assurances voyage', href: '#' },
      { name: 'Cartes cadeaux', href: '#' },
      { name: 'Programme fidélité', href: '#' },
    ],
    support: [
      { name: 'Centre d\'aide', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Urgence voyage', href: '#' },
      { name: 'Réclamations', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
    entreprise: [
      { name: 'À propos', href: '#' },
      { name: 'Notre équipe', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Presse', href: '#' },
      { name: 'Partenaires', href: '#' },
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
            <h3 className="text-3xl font-bold mb-4">Restez inspiré</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recevez nos meilleures offres de voyage, conseils d'experts et inspiration pour vos prochaines aventures
            </p>
          </div>
          <div className="max-w-md mx-auto flex space-x-4">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
            <Button className="bg-travel-emerald hover:bg-travel-emerald/90 px-6">
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
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-full bg-travel-emerald text-white">
                <Plane className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-white">VoyageÉlite</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Créateur de voyages d'exception depuis 2015. Nous transformons vos rêves d'évasion en souvenirs inoubliables.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-travel-emerald" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-travel-emerald" />
                <span>contact@voyageelite.fr</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-travel-emerald" />
                <span>75001 Paris, France</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full bg-gray-800 hover:bg-travel-emerald transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-white mb-4">Voyages</h4>
            <ul className="space-y-3">
              {footerLinks.voyages.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-travel-emerald transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-travel-emerald transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-travel-emerald transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-travel-emerald transition-colors duration-200">
                    {link.name}
                  </a>
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
              © 2024 VoyageÉlite. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-travel-emerald transition-colors duration-200">
                Conditions générales
              </a>
              <a href="#" className="text-gray-400 hover:text-travel-emerald transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-travel-emerald transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
