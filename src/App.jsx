import React from 'react';
import Navbar from './components/Navbar';
import Subnav from './components/Subnav';
import TradeInRibbon from './components/TradeInRibbon';
import HeroIphone14 from './components/HeroIphone14';
import HeroIphone14Pro from './components/HeroIphone14Pro';
import HeroIphoneSE from './components/HeroIphoneSE';
import GuidedTour from './components/GuidedTour';
import ComparisonSection from './components/ComparisonSection';
import WhyAppleSection from './components/WhyAppleSection';
import EcosystemSection from './components/EcosystemSection';
import Ios16Section from './components/Ios16Section';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans antialiased selection:bg-[#0071e3] selection:text-white">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Subnav Chapter Bar */}
      <Subnav />

      {/* 3. Trade-in Promo Ribbon */}
      <TradeInRibbon />

      {/* Main Content Sections matching Figma top-to-bottom with smooth reveal animations */}
      <main>
        {/* 4. iPhone 14 White Hero */}
        <HeroIphone14 />

        {/* 5. iPhone 14 Pro Dark Hero */}
        <HeroIphone14Pro />

        {/* 6. iPhone SE Hero */}
        <HeroIphoneSE />

        {/* 7. Guided Tour Banner */}
        <GuidedTour />

        {/* 8. Which iPhone is right for you? Comparison Table */}
        <ComparisonSection />

        {/* 9. Why Apple is the best place to buy iPhone */}
        <WhyAppleSection />

        {/* 10. Featured Accessories (MagSafe, AirTag, AirPods) */}
        <EcosystemSection />

        {/* 11. iOS 16 Feature Showcase */}
        <Ios16Section />

        {/* 12. Entertainment & Apple Services Grid */}
        <ServicesSection />
      </main>

      {/* 13. Footnotes and Apple Site Footer */}
      <Footer />
    </div>
  );
}
