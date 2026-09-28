import React from 'react';
import tourBanner from '../assets/figure (3).png';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function GuidedTour() {
  return (
    <section id="guided-tour" className="bg-white pt-2 pb-10 md:pt-4 md:pb-14">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" delay={0.2} scale={0.96}>
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative rounded-[28px] overflow-hidden shadow-xl group"
          >
            {/* Background Image */}
            <img
              src={tourBanner}
              alt="A guided tour of iPhone 14 & iPhone 14 Pro"
              className="w-full h-auto min-h-[445px] md:min-h-[580px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent flex flex-col justify-center p-8 sm:p-12 md:p-16 text-white">
              <ScrollReveal direction="down" delay={0.3}>
                <span className="text-[16px] md:text-[19px] font-medium text-white/90 mb-2 block tracking-tight">
                  A Guided Tour of
                </span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <h2 className="text-[32px] sm:text-[42px] md:text-[52px] font-bold leading-[1.08] max-w-[480px] mb-6 tracking-tight">
                  iPhone 14 &<br />
                  iPhone 14 Pro
                </h2>
              </ScrollReveal>
              
              {/* Watch Film Button */}
              <ScrollReveal direction="up" delay={0.5}>
                <div>
                  <a
                    href="#watch-guided-tour"
                    className="inline-flex items-center bg-white text-[#1d1d1f] hover:bg-white/95 px-5 py-2.5 rounded-full font-normal text-[15px] shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-95"
                  >
                    Watch the film
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
