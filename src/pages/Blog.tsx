
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Les 10 destinations tendance pour 2024",
      excerpt: "Découvrez les pays qui montent et les nouvelles expériences à ne pas manquer cette année.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Tendances",
      author: "Marie Dubois",
      date: "15 Mars 2024",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Comment bien préparer son safari en Afrique",
      excerpt: "Tous nos conseils d'experts pour vivre une expérience safari inoubliable en toute sécurité.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Conseils",
      author: "Pierre Martin",
      date: "10 Mars 2024",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "Bali authentique : sortir des sentiers battus",
      excerpt: "Explorez la vraie Bali loin des foules touristiques avec nos adresses secrètes.",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Destinations",
      author: "Sophie Chen",
      date: "5 Mars 2024",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Voyage responsable : nos engagements",
      excerpt: "Comment nous contribuons au tourisme durable et comment vous pouvez faire de même.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Responsable",
      author: "Thomas Green",
      date: "1 Mars 2024",
      readTime: "4 min"
    }
  ];

  const categories = ["Tous", "Tendances", "Conseils", "Destinations", "Responsable"];

  const getBadgeColor = (category: string) => {
    const colors = {
      'Tendances': 'bg-travel-sunset text-white',
      'Conseils': 'bg-travel-emerald text-white',
      'Destinations': 'bg-travel-ocean text-white',
      'Responsable': 'bg-travel-gold text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-travel-ocean to-travel-emerald text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white">Inspiration voyage</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Inspirez-vous pour
              <span className="block text-travel-gold">votre prochain voyage</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Conseils d'experts, destinations secrètes et tendances voyage
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tous" ? "default" : "outline"}
                className={category === "Tous" ? "bg-travel-emerald" : "border-travel-emerald text-travel-emerald hover:bg-travel-emerald hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${getBadgeColor(article.category)}`}>
                    {article.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-travel-emerald transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <Button variant="ghost" className="p-0 h-auto text-travel-emerald hover:text-travel-emerald/80">
                    Lire la suite
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-travel-emerald text-travel-emerald hover:bg-travel-emerald hover:text-white">
              Voir plus d'articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
