import React from 'react';
import magSafeImg from '../assets/figure (23).png';
import airTagImg from '../assets/figure (24).png';
import airPodsImg from '../assets/figure (25).png';

import iconDelivery from '../assets/figure (26).png';
import iconFinance from '../assets/figure (27).png';
import iconSpecialist from '../assets/figure (28).png';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function EcosystemSection() {
  return (
    <section id="accessories" className="bg-[#f5f5f7] py-16 text-[#1d1d1f]">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <ScrollReveal direction="down" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-[36px] sm:text-[44px] md:text-[48px] font-bold tracking-tight">
              Featured accessories
            </h2>
          </div>
        </ScrollReveal>

        {/* 1. MagSafe Card (Full Width) */}
        <ScrollReveal direction="up" delay={0.2}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 mb-8 overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 min-h-[380px]"
          >
            <div className="md:w-1/2 flex flex-col items-center justify-center text-center mb-8 md:mb-0">
              <h3 className="text-[32px] sm:text-[38px] md:text-[44px] font-bold tracking-tight text-[#1d1d1f] mb-3">
                MagSafe
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#6e6e73] font-normal mb-4 max-w-[340px]">
                Snap on a magnetic case,<br />
                wallet, or both. And get faster<br />
                wireless charging.
              </p>
              <div>
                <a
                  href="#shop-magsafe"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Shop MagSafe accessories
                </a>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex justify-center items-center">
              <img
                src={magSafeImg}
                alt="MagSafe accessories lineup"
                className="w-full max-w-[440px] h-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </ScrollReveal>

        {/* 2. AirTag Card (Full Width - Image Left, Text Right) */}
        <ScrollReveal direction="up" delay={0.25}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 mb-8 overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-12 min-h-[380px]"
          >
            <div className="md:w-1/2 w-full flex justify-center items-center mt-8 md:mt-0">
              <img
                src={airTagImg}
                alt="AirTag and colorful key rings"
                className="w-full max-w-[480px] h-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 flex flex-col items-center justify-center text-center">
              <h3 className="text-[32px] sm:text-[38px] md:text-[44px] font-bold tracking-tight text-[#1d1d1f] mb-3">
                AirTag
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#6e6e73] font-normal mb-4 max-w-[340px]">
                Attach one to your keys. Put another in<br />
                your backpack. If they're misplaced,<br />
                just use the Find My app.
              </p>
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="#buy-airtag"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Buy
                </a>
                <a
                  href="#learn-airtag"
                  className="text-[#0066cc] text-[15px] md:text-[17px] hover:underline font-normal inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* 3. AirPods Card (Full Width Vertical Banner) */}
        <ScrollReveal direction="up" delay={0.3}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-none border border-[#d2d2d7]/30 shadow-sm hover:shadow-lg transition-all duration-300 mb-6 overflow-hidden flex flex-col items-center justify-between pt-10 md:pt-14 px-6 md:px-12 pb-0 text-center min-h-[420px] md:min-h-[480px]"
          >
            <h3 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold tracking-tight text-[#1d1d1f] mb-6 leading-tight">
              Magic runs<br />in the family.
            </h3>
            <div className="w-full flex justify-center items-center mt-auto">
              <img
                src={airPodsImg}
                alt="AirPods lineup - Magic runs in the family"
                className="w-full max-w-[680px] md:max-w-[780px] h-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Shop All iPhone Accessories Link */}
        <div className="text-center mb-16 mt-6">
          <a
            href="#all-accessories"
            className="text-[#0066cc] text-[17px] md:text-[19px] font-normal hover:underline inline-block"
          >
            Shop all iPhone accessories
          </a>
        </div>

        {/* 4. Three Column Value Props Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-12 pb-16">
          {/* Column 1: Fast, free delivery */}
          <ScrollReveal direction="up" delay={0.35}>
            <div className="flex flex-col items-center">
              <img src={iconDelivery} alt="Delivery" className="h-14 md:h-16 w-auto mb-4 object-contain" />
              <h4 className="text-[17px] sm:text-[19px] font-bold text-[#1d1d1f] mb-2">Fast, free delivery</h4>
              <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-normal leading-relaxed mb-2">
                Or pick up available items at<br />
                an Apple Store.
              </p>
              <div>
                <a
                  href="#delivery-info"
                  className="text-[#0066cc] text-[14px] sm:text-[15px] hover:underline font-normal inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2: Pay monthly at 0% APR */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-col items-center">
              <img src={iconFinance} alt="Financing" className="h-14 md:h-16 w-auto mb-4 object-contain" />
              <h4 className="text-[17px] sm:text-[19px] font-bold text-[#1d1d1f] mb-2">Pay monthly at 0% APR</h4>
              <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-normal leading-relaxed mb-2">
                You can pay over time when<br />
                you choose to check out with<br />
                Apple Card Monthly<br />
                Installments.**
              </p>
              <div>
                <a
                  href="#finance-info"
                  className="text-[#0066cc] text-[14px] sm:text-[15px] hover:underline font-normal inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 3: Get help buying */}
          <ScrollReveal direction="up" delay={0.45}>
            <div className="flex flex-col items-center">
              <img src={iconSpecialist} alt="Specialist" className="h-14 md:h-16 w-auto mb-4 object-contain" />
              <h4 className="text-[17px] sm:text-[19px] font-bold text-[#1d1d1f] mb-2">Get help buying</h4>
              <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-normal leading-relaxed mb-2">
                Have a question? Call a<br />
                Specialist or chat online.<br />
                Call 1-800-MY-APPLE.
              </p>
              <div>
                <a
                  href="#help-info"
                  className="text-[#0066cc] text-[14px] sm:text-[15px] hover:underline font-normal inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Section Heading: What makes an iPhone an iPhone? */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-center pt-16 pb-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-tight text-[#1d1d1f]">
              What makes an iPhone an iPhone?
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
