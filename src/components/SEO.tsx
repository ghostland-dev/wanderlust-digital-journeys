
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = 'VoyageÉlite - Agence de voyage de luxe',
  description = 'Découvrez des destinations exceptionnelles avec VoyageÉlite. Voyages sur mesure, expériences authentiques et service premium pour des moments inoubliables.',
  keywords = 'voyage, luxe, sur mesure, destinations, agence voyage, vacances, séjour, authentique',
  image = '/og-image.jpg',
  url = 'https://voyageelite.fr',
  type = 'website'
}: SEOProps) => {
  const siteTitle = 'VoyageÉlite';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="VoyageÉlite" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@voyageelite" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#059669" />
      <meta name="msapplication-TileColor" content="#059669" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "VoyageÉlite",
          "description": description,
          "url": url,
          "logo": `${url}/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33-1-23-45-67-89",
            "contactType": "customer service",
            "availableLanguage": ["French", "English"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Avenue des Champs-Élysées",
            "addressLocality": "Paris",
            "postalCode": "75008",
            "addressCountry": "FR"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
