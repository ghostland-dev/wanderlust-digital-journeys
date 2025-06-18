
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Les 10 destinations incontournables pour 2024",
    excerpt: "Découvrez notre sélection exclusive des destinations qui vont marquer l'année 2024. Des merveilles cachées aux classiques revisités.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Destinations",
    author: "Sophie Dubois",
    date: "15 Mars 2024",
    readTime: "8 min",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Guide complet pour un safari au Kenya",
      excerpt: "Tout ce que vous devez savoir pour vivre l'expérience safari ultime dans les réserves kenyanes.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Guides",
      author: "Marc Laurent",
      date: "12 Mars 2024",
      readTime: "12 min"
    },
    {
      id: 3,
      title: "Les temples cachés de Kyoto",
      excerpt: "Explorez les trésors spirituels moins connus de l'ancienne capitale japonaise.",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Culture",
      author: "Emma Chen",
      date: "8 Mars 2024",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Conseils pour voyager de manière responsable",
      excerpt: "Comment minimiser votre impact environnemental tout en découvrant le monde.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Conseils",
      author: "Sophie Dubois",
      date: "5 Mars 2024",
      readTime: "10 min"
    },
    {
      id: 5,
      title: "Les aurores boréales en Islande",
      excerpt: "Le guide ultime pour observer les aurores boréales dans les meilleures conditions.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Destinations",
      author: "Marc Laurent",
      date: "2 Mars 2024",
      readTime: "7 min"
    },
    {
      id: 6,
      title: "Gastronomie française : les régions à découvrir",
      excerpt: "Un voyage culinaire à travers les terroirs français les plus authentiques.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Gastronomie",
      author: "Emma Chen",
      date: "28 Février 2024",
      readTime: "9 min"
    }
  ];

  const categories = ["Tous", "Destinations", "Guides", "Culture", "Conseils", "Gastronomie"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-travel-ocean to-travel-emerald text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white">Blog & Inspiration</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Inspiration voyage
              <span className="block text-travel-gold">& conseils d'experts</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Découvrez nos guides, conseils et récits de voyage pour préparer votre prochaine aventure
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Rechercher un article..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Tous" ? "default" : "outline"}
                  size="sm"
                  className={category === "Tous" ? "bg-travel-emerald hover:bg-travel-emerald/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">À la une</h2>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-travel-emerald">{featuredPost.category}</Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{featuredPost.author}</span>
                  </div>
                  <Button className="bg-travel-emerald hover:bg-travel-emerald/90">
                    Lire l'article <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Derniers articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="text-travel-emerald border-travel-emerald">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
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

      {/* Newsletter Section */}
      <section className="py-16 bg-travel-emerald text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez inspiré</h2>
          <p className="text-xl mb-8 opacity-90">
            Recevez nos derniers articles et conseils voyage directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="bg-white text-gray-900 border-white"
            />
            <Button className="bg-travel-gold hover:bg-travel-gold/90 text-gray-900 font-semibold">
              S'abonner
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
