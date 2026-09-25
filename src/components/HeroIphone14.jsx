import React from 'react';
import iphone14Banner from '../assets/figure.png';
import { ChevronRight } from 'lucide-react';

export default function HeroIphone14() {
  return (
    <section id="iphone-14" className="bg-white pt-14 pb-0 overflow-hidden text-center relative border-t border-[#d2d2d7]/30">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* New Tag */}
        <span className="text-[#6e6e73] text-[15px] md:text-[17px] font-normal tracking-tight block mb-1">
          New
        </span>

        {/* Product Title */}
        <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] tracking-tight mb-2">
          iPhone 14
        </h2>

        {/* Main Headline */}
        <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.08] mb-4 max-w-[850px] mx-auto">
          Two great sizes.<br />Now with a splash of yellow.
        </h1>

        {/* Pricing Subtext */}
        <p className="text-[17px] md:text-[19px] text-[#1d1d1f] font-normal mb-6">
          From $799 or $33.29/mo. for 24 mo. before trade-in2
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <a
            href="#buy-iphone-14"
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-5 py-2 rounded-full text-[15px] font-normal transition-colors shadow-sm inline-block"
          >
            Buy
          </a>
          <a
            href="#learn-iphone-14"
            className="text-[#0066cc] text-[19px] md:text-[21px] hover:underline inline-flex items-center font-normal"
          >
            Learn more
          </a>
        </div>

        {/* Hero Image Banner */}
        <div className="relative mx-auto max-w-[980px]">
          <img
            src={iphone14Banner}
            alt="iPhone 14 lineup in yellow, purple, blue, red, starlight, and midnight"
            className="w-full h-auto object-contain mx-auto transition-transform duration-700 hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  );
}
