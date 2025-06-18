
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="VoyageÉlite - Agence de voyage de luxe"
        description="Découvrez des destinations exceptionnelles avec VoyageÉlite. Voyages sur mesure, expériences authentiques et service premium pour des moments inoubliables."
        keywords="voyage luxe, agence voyage, destinations exclusives, voyages sur mesure, séjours premium"
        url="https://voyageelite.fr"
      />
      <Header />
      <main>
        <HeroSection />
        <FeaturedDestinations />
        <Testimonials />
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Newsletter />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
