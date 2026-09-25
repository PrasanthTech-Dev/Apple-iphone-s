import React from 'react';
import ios16HeroImg from '../assets/div (1).png';
import ios16AppsImg from '../assets/figure (29).png';

export default function Ios16Section() {
  return (
    <section id="ios-16" className="bg-[#f5f5f7] py-16 text-[#1d1d1f]">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
        {/* 1. iOS 16 Hero Card */}
        <div className="bg-white rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 mb-8 p-8 md:p-12 overflow-hidden flex flex-col items-center justify-center text-center">
          <img
            src={ios16HeroImg}
            alt="iOS 16 - Personal is powerful"
            className="w-full max-w-[980px] h-auto object-contain mx-auto transition-transform duration-700 hover:scale-[1.01]"
          />
        </div>

        {/* 2. Switching to iPhone Showcase Card */}
        <div className="bg-white rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 mb-12 pt-10 md:pt-14 px-6 md:px-12 pb-0 overflow-hidden max-w-[650px] sm:max-w-[700px] md:max-w-[750px] mx-auto text-center flex flex-col items-center">
          <h3 className="text-[32px] sm:text-[38px] md:text-[44px] font-bold tracking-tight text-[#1d1d1f] mb-2 leading-tight">
            Switching to iPhone<br />is super simple.
          </h3>
          <div className="mb-6">
            <a
              href="#switching-iphone"
              className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
            >
              Learn more
            </a>
          </div>
          <div className="w-full mt-auto -mb-1 -mx-6 md:-mx-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)]">
            <img
              src={ios16AppsImg}
              alt="Switching to iPhone is super simple"
              className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* 3. Section Heading: Get more out of your iPhone */}
        <div className="text-center pt-12 pb-4">
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-tight text-[#1d1d1f]">
            Get more out of your iPhone.
          </h2>
        </div>
      </div>
    </section>
  );
}
