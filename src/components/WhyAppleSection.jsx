import React from 'react';
import tradeInHandsImg from '../assets/figure (21).png';
import appleCardImg from '../assets/figure (22).png';
import attLogo from '../assets/h4 (1).png';
import verizonLogo from '../assets/h4.png';
import tmobileLogo from '../assets/h4 (2).png';
import whyAppleBestImg from '../assets/ba8b5575dc19e54a58774d200aef30b2f89eb562.jpg';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function WhyAppleSection() {
  return (
    <section id="why-apple" className="bg-[#f5f5f7] py-16 text-[#1d1d1f]">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal direction="down" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-[36px] sm:text-[44px] md:text-[48px] font-bold tracking-tight">
              Ways to save on iPhone
            </h2>
          </div>
        </ScrollReveal>

        {/* 1. Top Wide Trade In Card */}
        <ScrollReveal direction="up" delay={0.2}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-none pt-10 md:pt-14 px-6 md:px-12 pb-0 shadow-sm hover:shadow-lg transition-all duration-300 mb-8 border border-[#d2d2d7]/30 flex flex-col items-center text-center overflow-hidden"
          >
            <h3 className="text-[32px] sm:text-[40px] md:text-[44px] font-bold text-[#1d1d1f] tracking-tight leading-tight mb-3 max-w-[700px]">
              Trade in your current phone for credit toward a new one.
            </h3>
            <p className="text-[15px] md:text-[17px] text-[#6e6e73] font-normal mb-4 max-w-[580px]">
              Get $200–$600 in credit when you trade <br /> in iPhone 11 or higher and upgrade to <br /> iPhone 14 or iPhone 14 Pro. 1
            </p>
            <div className="mb-6">
              <a
                href="#shop-iphone"
                className="text-[#0066cc] text-[17px] font-normal hover:underline inline-block"
              >
                Learn more
              </a>
            </div>
            <div className="w-full mt-auto -mb-1 -mx-6 md:-mx-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)]">
              <img
                src={tradeInHandsImg}
                alt="Trade in your current phone for credit"
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </ScrollReveal>

        {/* 2. Two Grid Cards (Carrier Deals & Apple Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card: Carrier Deals */}
          <ScrollReveal direction="left" delay={0.3}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-none p-8 md:p-12 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#d2d2d7]/30 flex flex-col justify-between text-center h-full"
            >
              <div>
                <h3 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#1d1d1f] tracking-tight leading-tight mb-3 max-w-[460px] mx-auto">
                  Save up to $800 with select<br />carrier deals at Apple.8
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#6e6e73] mb-4 max-w-[420px] mx-auto">
                  Get the carrier deals you love and save<br />on a new iPhone when you trade in and<br />purchase right here at Apple.
                </p>
                <div className="mb-8">
                  <a
                    href="#carrier-deals"
                    className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                  >
                    Find your deal
                  </a>
                </div>
              </div>

              {/* Carrier Logos with Trade-in Details */}
              <div className="space-y-6 pt-4">
                <div className="grid grid-cols-2 gap-6 items-end">
                  <div className="flex flex-col items-center">
                    <img src={attLogo} alt="AT&T" className="h-10 md:h-12 w-auto object-contain mb-3" />
                    <span className="text-[12px] md:text-[13px] text-[#6e6e73] leading-tight">Get up to $800<br />credit after trade-in</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={tmobileLogo} alt="T-Mobile" className="h-10 md:h-12 w-auto object-contain mb-3" />
                    <span className="text-[12px] md:text-[13px] text-[#6e6e73] leading-tight">Get up to $400<br />credit after trade-in</span>
                  </div>
                </div>
                <div className="flex flex-col items-center pt-2">
                  <img src={verizonLogo} alt="Verizon" className="h-8 md:h-10 w-auto object-contain mb-3" />
                  <span className="text-[12px] md:text-[13px] text-[#6e6e73] leading-tight">Get up to $800<br />credit after trade-in</span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right Card: Apple Card */}
          <ScrollReveal direction="right" delay={0.3}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-none pt-8 md:pt-12 px-6 md:px-12 pb-0 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#d2d2d7]/30 flex flex-col justify-between text-center overflow-hidden h-full"
            >
              <div>
                <h3 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#1d1d1f] tracking-tight leading-tight mb-3 max-w-[460px] mx-auto">
                  Get 3% Daily Cash<br />back with Apple Card.
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#6e6e73] mb-4 max-w-[420px] mx-auto">
                  And pay for your new iPhone over 24 months,<br />interest-free when you choose to check out<br />with Apple Card Monthly Installments.**
                </p>
                <div className="mb-6">
                  <a
                    href="#apple-card"
                    className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="w-full mt-auto -mb-1 -mx-6 md:-mx-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)]">
                <img
                  src={appleCardImg}
                  alt="Apple Card Monthly Installments"
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* 3. Bottom Wide Card (Why Apple is the best place to buy iPhone) */}
        <ScrollReveal direction="up" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 mt-8 relative overflow-hidden min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex items-center justify-center p-6 sm:p-10 md:p-12 text-center"
          >
            <img
              src={whyAppleBestImg}
              alt="Why Apple is the best place to buy iPhone"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="relative z-10 max-w-[540px] mx-auto flex flex-col items-center">
              <h3 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-[#1d1d1f] tracking-tight leading-tight mb-3">
                Why Apple is the best<br />place to buy iPhone.
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#1d1d1f] font-normal leading-relaxed mb-4 max-w-[480px]">
                You can choose a payment option that works for<br />
                you, pay less with a trade-in, connect your new<br />
                iPhone to your carrier, and get set up quickly.<br />
                You can also chat with a Specialist anytime.
              </p>
              <div>
                <a
                  href="#why-apple-best"
                  className="text-[#0066cc] text-[15px] sm:text-[17px] font-normal hover:underline inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
