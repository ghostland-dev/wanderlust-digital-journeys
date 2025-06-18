
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  Camera, 
  Utensils, 
  Bed,
  Plane,
  CheckCircle,
  Shield,
  Heart,
  Share
} from 'lucide-react';

// Données des voyages (normalement ces données viendraient d'une API)
const tripsData = {
  'bali': {
    id: 'bali',
    title: "Bali Authentique",
    location: "Indonésie",
    price: "À partir de 1 890€",
    duration: "12 jours",
    rating: 4.9,
    reviews: 127,
    description: "Découvrez la magie de Bali à travers ses temples anciens, ses rizières en terrasses et ses plages paradisiaques. Un voyage authentique au cœur de la culture balinaise.",
    images: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    highlights: ["Vol inclus", "Guide francophone", "Hôtels charme"],
    badge: "Bestseller",
    longDescription: "Plongez dans l'univers mystique de Bali, où spiritualité et beauté naturelle se rencontrent. Notre circuit de 12 jours vous emmène à la découverte des plus beaux temples hindous de l'île, des rizières en terrasses de Jatiluwih classées au patrimoine mondial de l'UNESCO, et des plages idylliques de la péninsule de Bukit.",
    itinerary: [
      { day: 1, title: "Arrivée à Denpasar", activities: ["Accueil à l'aéroport", "Transfert à Ubud", "Dîner de bienvenue"] },
      { day: 2, title: "Ubud - Centre culturel", activities: ["Visite du Palais Royal", "Marché traditionnel", "Atelier de batik"] },
      { day: 3, title: "Temples sacrés", activities: ["Temple Besakih", "Temple Kehen", "Déjeuner traditionnel"] },
      { day: 4, title: "Rizières de Jatiluwih", activities: ["Randonnée dans les rizières", "Rencontre avec les agriculteurs", "Spa balinais"] }
    ],
    inclusions: [
      "Vols internationaux",
      "Hébergement en hôtels 4* charme",
      "Tous les petits-déjeuners",
      "6 déjeuners et 4 dîners",
      "Guide francophone",
      "Tous les transferts",
      "Visites et activités mentionnées"
    ],
    exclusions: [
      "Visa (gratuit à l'arrivée)",
      "Assurance voyage",
      "Boissons",
      "Pourboires",
      "Dépenses personnelles"
    ]
  },
  'grece': {
    id: 'grece',
    title: "Îles Grecques Premium",
    location: "Grèce",
    price: "À partir de 2 490€",
    duration: "10 jours",
    rating: 4.8,
    reviews: 89,
    description: "Un voyage de luxe à travers les plus belles îles grecques : Santorini, Mykonos et Crète, avec des hôtels 5 étoiles et une croisière privée.",
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    highlights: ["Hôtels 5*", "Croisière privée", "Couchers de soleil"],
    badge: "Luxe",
    longDescription: "Explorez les joyaux de la mer Égée dans un cadre luxueux. Ce voyage premium vous fait découvrir les îles les plus emblématiques de Grèce, de la romantique Santorini avec ses couchers de soleil légendaires, à la cosmopolite Mykonos et ses plages dorées, en passant par la Crète et son riche patrimoine historique.",
    itinerary: [
      { day: 1, title: "Arrivée à Athènes", activities: ["Vol vers Athènes", "Transfert hôtel 5*", "Dîner gastronomique"] },
      { day: 2, title: "Athènes historique", activities: ["Acropole et Parthénon", "Musée archéologique", "Quartier de Plaka"] },
      { day: 3, title: "Santorini", activities: ["Vol vers Santorini", "Village d'Oia", "Coucher de soleil à Imerovigli"] },
      { day: 4, title: "Croisière privée", activities: ["Îles volcaniques", "Sources chaudes", "Déjeuner à bord"] }
    ],
    inclusions: [
      "Vols internationaux et domestiques",
      "Hôtels 5* avec vue mer",
      "Tous les repas",
      "Croisière privée",
      "Guide expert",
      "Transferts privés",
      "Accès VIP aux sites"
    ],
    exclusions: [
      "Assurance voyage premium",
      "Activités optionnelles",
      "Soins spa",
      "Achats personnels"
    ]
  }
};

const TripDetails = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const trip = tripId ? tripsData[tripId as keyof typeof tripsData] : null;

  if (!trip) {
    return <Navigate to="/not-found" replace />;
  }

  const getBadgeColor = (badge: string) => {
    const colors = {
      'Bestseller': 'bg-travel-emerald text-white',
      'Luxe': 'bg-travel-gold text-white',
      'Aventure': 'bg-travel-sunset text-white',
      'Culture': 'bg-travel-ocean text-white'
    };
    return colors[badge as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${trip.title} - ${trip.location}`}
        description={trip.longDescription}
        keywords={`${trip.title}, ${trip.location}, voyage, ${trip.badge.toLowerCase()}`}
        image={trip.images[0]}
        url={`https://voyageelite.fr/trip/${trip.id}`}
      />
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-20 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Accueil', href: '/' },
            { label: 'Voyages', href: '/#destinations' },
            { label: trip.title, href: `/trip/${trip.id}` }
          ]} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={trip.images[0]}
            alt={trip.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          <div className="absolute bottom-8 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <Badge className={`mb-4 ${getBadgeColor(trip.badge)}`}>
                  {trip.badge}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{trip.title}</h1>
                <div className="flex items-center space-x-6 text-lg">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {trip.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-400 fill-current" />
                    {trip.rating} ({trip.reviews} avis)
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-8 right-8">
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Description */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Description du voyage</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{trip.longDescription}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {trip.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="bg-travel-emerald/10 text-travel-emerald">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Photo Gallery */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Galerie photos</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {trip.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${trip.title} ${index + 2}`}
                        className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinéraire détaillé</h2>
                  <div className="space-y-6">
                    {trip.itinerary.map((day, index) => (
                      <div key={index} className="border-l-4 border-travel-emerald pl-6 pb-6">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-travel-emerald rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                            {day.day}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">{day.title}</h3>
                        </div>
                        <ul className="space-y-2 ml-12">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-travel-emerald mr-2 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <Shield className="h-4 w-4 inline mr-2" />
                      Itinéraire détaillé complet fourni après réservation
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Inclusions/Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Inclus dans le prix
                    </h3>
                    <ul className="space-y-2">
                      {trip.inclusions.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-700 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-5 h-5 rounded-full border-2 border-red-500 mr-2 flex items-center justify-center">
                        <span className="w-2 h-0.5 bg-red-500"></span>
                      </span>
                      Non inclus
                    </h3>
                    <ul className="space-y-2">
                      {trip.exclusions.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-700 text-sm">
                          <span className="w-4 h-4 rounded-full border border-red-300 mr-2 mt-0.5 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-travel-emerald mb-2">{trip.price}</div>
                      <p className="text-gray-600">par personne</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Durée</span>
                        <span className="font-semibold">{trip.duration}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Groupe</span>
                        <span className="font-semibold">Max 16 personnes</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600">Départ</span>
                        <span className="font-semibold">Toute l'année</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full bg-travel-emerald hover:bg-travel-emerald/90 text-lg py-3">
                        <Plane className="h-5 w-5 mr-2" />
                        Réserver maintenant
                      </Button>
                      <Link to="/contact">
                        <Button variant="outline" className="w-full border-travel-emerald text-travel-emerald hover:bg-travel-emerald hover:text-white">
                          Demander un devis
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center text-green-800 text-sm">
                        <Shield className="h-4 w-4 mr-2" />
                        <span>Annulation gratuite jusqu'à 30 jours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TripDetails;
