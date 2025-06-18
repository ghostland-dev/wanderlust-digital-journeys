
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Accueil', href: '/' }];
    
    const routeNames: Record<string, string> = {
      'about': 'À propos',
      'blog': 'Blog',
      'custom-trips': 'Voyages sur mesure',
      'contact': 'Contact',
      'trip': 'Détails du voyage'
    };
    
    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = routeNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      
      if (segment !== 'trip' || index === pathSegments.length - 1) {
        breadcrumbs.push({ label, href });
      }
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();
  
  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.href}>
          {index === 0 ? (
            <Link
              to={item.href}
              className="flex items-center text-gray-500 hover:text-travel-emerald transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">{item.label}</span>
            </Link>
          ) : (
            <>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-gray-500 hover:text-travel-emerald transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
