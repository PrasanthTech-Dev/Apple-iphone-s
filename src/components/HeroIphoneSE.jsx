import React from 'react';
import iphoneSEBanner from '../assets/figure (2).png';

export default function HeroIphoneSE() {
  return (
    <section id="iphone-se" className="bg-white pt-8 pb-3 md:pt-10 md:pb-4 border-t border-b border-[#d2d2d7]/30 overflow-hidden relative">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Left Column: Text & CTAs */}
        <div className="md:w-1/2 flex flex-col items-center text-center z-10 py-4">
          {/* iPhone SE Badge */}
          <div className="inline-flex items-center space-x-1.5 mb-3 justify-center">
            <span className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#1d1d1f]">
              iPhone
            </span>
            <span className="text-[13px] md:text-[15px] font-bold text-[#1d1d1f] border-2 border-[#1d1d1f] rounded-md px-1.5 py-0.5 leading-none tracking-tight">
              SE
            </span>
          </div>

          {/* Heading in Apple Vibrant Blue */}
          <h1 className="text-[36px] sm:text-[44px] md:text-[50px] font-semibold text-[#0066cc] tracking-tight leading-[1.08] mb-4">
            Love the power.<br />
            Love the price.
          </h1>

          {/* Pricing */}
          <p className="text-[15px] md:text-[17px] text-[#1d1d1f] font-normal mb-6">
            From $429 or $17.87/mo. for 24 mo. before trade-in2
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href="#buy-iphone-se"
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-5 py-2 rounded-full text-[15px] font-normal transition-colors shadow-sm inline-block"
            >
              Buy
            </a>
            <a
              href="#learn-iphone-se"
              className="text-[#0066cc] text-[17px] md:text-[19px] hover:underline inline-flex items-center font-normal"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Right Column: 3 Angled iPhone SE Phones */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end items-center">
          <img
            src={iphoneSEBanner}
            alt="iPhone SE in (PRODUCT)RED, Starlight, and Midnight"
            className="w-full max-w-[420px] sm:max-w-[460px] md:max-w-[500px] h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
