
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedDestinations />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
