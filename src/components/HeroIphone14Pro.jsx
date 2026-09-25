import React from 'react';
import iphone14ProBanner from '../assets/figure (1).png';
import { ChevronRight } from 'lucide-react';

export default function HeroIphone14Pro() {
  return (
    <section id="iphone-14-pro" className="bg-[#000000] text-white pt-16 pb-0 overflow-hidden text-center dark-section relative">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Title */}
        <h2 className="text-[24px] md:text-[28px] font-semibold text-white tracking-tight mb-2">
          iPhone 14 Pro
        </h2>

        {/* Tagline */}
        <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-white tracking-tight leading-tight mb-4">
          Pro. Beyond.
        </h1>

        {/* Pricing */}
        <p className="text-[17px] md:text-[19px] text-[#86868b] font-normal mb-6">
          From $999 or $41.62/mo. for 24 mo. before trade-in2
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <a
            href="#buy-iphone-14-pro"
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-5 py-2 rounded-full text-[15px] font-normal transition-colors shadow-sm inline-block"
          >
            Buy
          </a>
          <a
            href="#learn-iphone-14-pro"
            className="text-[#2997ff] text-[17px] hover:underline inline-flex items-center font-normal group"
          >
            <span>Learn more</span>
            <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto max-w-[960px]">
          <img
            src={iphone14ProBanner}
            alt="iPhone 14 Pro lineup in Space Black, Silver, Gold, and Deep Purple"
            className="w-full h-auto object-contain mx-auto transition-transform duration-700 hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  );
}
