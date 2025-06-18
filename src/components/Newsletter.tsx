
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      toast({
        title: "Inscription réussie !",
        description: "Vous recevrez bientôt nos meilleures offres de voyage.",
      });
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <Card className="bg-gradient-to-r from-travel-emerald to-travel-ocean text-white">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Merci pour votre inscription !</h3>
          <p className="text-white/90">
            Vous recevrez bientôt nos meilleures offres et conseils de voyage.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-travel-emerald to-travel-ocean text-white overflow-hidden">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Restez informé</h3>
          <p className="text-white/90">
            Recevez nos meilleures offres et destinations exclusives directement dans votre boîte mail
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-travel-emerald"
              required
            />
          </div>
          
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-travel-emerald hover:bg-gray-100 font-semibold py-3 transition-all duration-300"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-travel-emerald border-t-transparent rounded-full animate-spin"></div>
                <span>Inscription...</span>
              </div>
            ) : (
              "S'inscrire à la newsletter"
            )}
          </Button>
        </form>

        <p className="text-xs text-white/70 text-center mt-4">
          En vous inscrivant, vous acceptez de recevoir nos communications marketing. 
          Vous pouvez vous désabonner à tout moment.
        </p>
      </CardContent>
    </Card>
  );
};

export default Newsletter;
