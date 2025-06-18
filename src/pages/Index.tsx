
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import WhyChooseUs from '@/components/WhyChooseUs';
import TripHighlights from '@/components/TripHighlights';
import Testimonials from '@/components/Testimonials';
import QuickBooking from '@/components/QuickBooking';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="VoyageMaroc - Agence de voyage au Maroc"
        description="Découvrez le Maroc authentique avec VoyageMaroc. Circuits sur mesure, excursions guidées et expériences uniques dans tout le Royaume."
        keywords="voyage maroc, circuit maroc, excursion marrakech, désert sahara, fès, casablanca, agence voyage maroc"
        url="https://voyagemaroc.ma"
      />
      <Header />
      <main>
        <HeroSection />
        <FeaturedDestinations />
        <WhyChooseUs />
        <TripHighlights />
        <Testimonials />
        <QuickBooking />
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
