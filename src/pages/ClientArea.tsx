
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { User, MapPin, Calendar, CreditCard, Settings, LogOut, Eye } from 'lucide-react';

const ClientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const userBookings = [
    {
      id: 'B001',
      destination: 'Marrakech Impériale',
      date: '2024-08-15',
      status: 'Confirmé',
      price: '1,200 DH',
      duration: '3 jours'
    },
    {
      id: 'B002',
      destination: 'Désert du Sahara',
      date: '2024-09-20',
      status: 'En attente',
      price: '2,500 DH',
      duration: '3 jours'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de connexion
    setIsLoggedIn(true);
  };

  const LoginForm = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Connexion à votre espace
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Accédez à vos réservations et gérez votre profil
          </p>
        </div>
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  placeholder="••••••••"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Se connecter
              </Button>
              <div className="text-center">
                <Link to="/contact" className="text-red-600 hover:text-red-700 text-sm">
                  Mot de passe oublié ?
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ClientDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mon Espace Client</h1>
          <Button 
            variant="outline" 
            onClick={() => setIsLoggedIn(false)}
            className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>

        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="bookings">Mes Réservations</TabsTrigger>
            <TabsTrigger value="profile">Mon Profil</TabsTrigger>
            <TabsTrigger value="favorites">Mes Favoris</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-6">
            <div className="grid gap-6">
              {userBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-red-100 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{booking.destination}</h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{booking.date}</span>
                            <span className="mx-2">•</span>
                            <span>{booking.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={booking.status === 'Confirmé' ? 'default' : 'secondary'}>
                          {booking.status}
                        </Badge>
                        <p className="text-xl font-bold text-red-600 mt-2">{booking.price}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Eye className="h-4 w-4 mr-1" />
                          Détails
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" defaultValue="Ahmed" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" defaultValue="Benali" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="ahmed.benali@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" defaultValue="+212 6 12 34 56 78" />
                </div>
                <Button className="bg-red-600 hover:bg-red-700">
                  Mettre à jour
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <div className="text-center py-12">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Aucun favori pour le moment
              </h3>
              <p className="text-gray-600 mb-4">
                Explorez nos destinations et ajoutez vos circuits préférés
              </p>
              <Link to="/">
                <Button className="bg-red-600 hover:bg-red-700">
                  Découvrir nos circuits
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <div className="text-center py-12">
              <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Aucun document disponible
              </h3>
              <p className="text-gray-600">
                Vos factures et documents de voyage apparaîtront ici
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );

  if (!isLoggedIn) {
    return (
      <>
        <SEO 
          title="Espace Client - VoyageMaroc"
          description="Connectez-vous à votre espace client pour gérer vos réservations et votre profil"
        />
        <LoginForm />
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Mon Espace Client - VoyageMaroc"
        description="Gérez vos réservations, votre profil et vos documents de voyage"
      />
      <ClientDashboard />
    </>
  );
};

export default ClientArea;
