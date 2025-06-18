
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cookie, X, Settings } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Cookie className="h-8 w-8 text-travel-emerald" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nous utilisons des cookies
              </h3>
              
              {!showDetails ? (
                <p className="text-gray-600 mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience de navigation, 
                  analyser le trafic du site et personnaliser le contenu. 
                  En continuant à utiliser notre site, vous acceptez notre utilisation des cookies.
                </p>
              ) : (
                <div className="space-y-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Cookies nécessaires</h4>
                    <p className="text-sm text-gray-600">
                      Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Cookies analytiques</h4>
                    <p className="text-sm text-gray-600">
                      Ces cookies nous aident à comprendre comment vous interagissez avec notre site.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Cookies marketing</h4>
                    <p className="text-sm text-gray-600">
                      Ces cookies sont utilisés pour personnaliser les publicités selon vos intérêts.
                    </p>
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={acceptAll}
                  className="bg-travel-emerald hover:bg-travel-emerald/90"
                >
                  Accepter tout
                </Button>
                
                <Button
                  onClick={acceptNecessary}
                  variant="outline"
                  className="border-travel-emerald text-travel-emerald hover:bg-travel-emerald hover:text-white"
                >
                  Nécessaires uniquement
                </Button>
                
                <Button
                  onClick={() => setShowDetails(!showDetails)}
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  {showDetails ? 'Masquer' : 'Personnaliser'}
                </Button>
                
                <Button
                  onClick={reject}
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Refuser
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                Pour plus d'informations, consultez notre{' '}
                <a href="/privacy" className="text-travel-emerald hover:underline">
                  politique de confidentialité
                </a>
                .
              </p>
            </div>
            
            <Button
              onClick={reject}
              variant="ghost"
              size="sm"
              className="flex-shrink-0 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
