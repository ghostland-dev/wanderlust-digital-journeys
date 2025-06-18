
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-red-600 text-white font-semibold">
            {post.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold transition-colors group/link"
        >
          <span>Lire la suite</span>
          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
