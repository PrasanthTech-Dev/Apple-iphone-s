import React from 'react';
import iphone14ProBanner from '../assets/figure (1).png';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function HeroIphone14Pro() {
  return (
    <section id="iphone-14-pro" className="bg-[#000000] text-white pt-16 pb-0 overflow-hidden text-center dark-section relative">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Title */}
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-[24px] md:text-[28px] font-semibold text-white tracking-tight mb-2">
            iPhone 14 Pro
          </h2>
        </ScrollReveal>

        {/* Tagline */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-white tracking-tight leading-tight mb-4">
            Pro. Beyond.
          </h1>
        </ScrollReveal>

        {/* Pricing */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-[17px] md:text-[19px] text-[#86868b] font-normal mb-6">
            From $999 or $41.62/mo. for 24 mo. before trade-in²
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a
              href="#buy-iphone-14-pro"
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-5 py-2 rounded-full text-[15px] font-normal transition-all duration-300 shadow-sm inline-block hover:scale-105 active:scale-95"
            >
              Buy
            </a>
            <a
              href="#learn-iphone-14-pro"
              className="text-[#2997ff] text-[17px] hover:underline inline-flex items-center font-normal group"
            >
              <span>Learn more</span>
              <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal direction="up" delay={0.5} scale={0.97}>
          <div className="relative mx-auto max-w-[960px]">
            <motion.img
              src={iphone14ProBanner}
              alt="iPhone 14 Pro lineup in Space Black, Silver, Gold, and Deep Purple"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full h-auto object-contain mx-auto transition-transform duration-700"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
