import React from 'react';
import img14Pro from '../assets/figure (4).png';
import img14 from '../assets/figure (5).png';
import img13 from '../assets/figure (6).png';
import imgSE from '../assets/figure (7).png';

import iconNotch from '../assets/figure (8).png';
import iconSos from '../assets/figure (9).png';
import iconCamPro from '../assets/figure (10).png';
import iconCamDual from '../assets/figure (11).png';
import iconCamDual13 from '../assets/figure (12).png';
import iconCamSingle from '../assets/figure (13).png';
import iconAction from '../assets/figure (14).png';
import iconBattery from '../assets/figure (15).png';
import iconA16 from '../assets/figure (16).png';
import iconA15 from '../assets/figure (17).png';
import iconFaceId from '../assets/figure (18).png';
import icon5g from '../assets/figure (20).png';
import iconTouchId from '../assets/figure (19).png';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const models = [
  {
    id: '14pro',
    name: 'iPhone 14 Pro',
    image: img14Pro,
    isNew: true,
    tagline: 'The ultimate iPhone.',
    price: 'From $999',
    colors: ['#483f4f', '#f4e8ce', '#f0f2f2', '#3b3a39'],
    display: '6.7″ or 6.1″',
    displaySub: ['Super Retina XDR display3', 'ProMotion technology', 'Always-On display'],
    notchIcon: iconNotch,
    notchText: 'Dynamic Island\nA new way to interact with iPhone',
    sosIcon: iconSos,
    sosText: ['Emergency SOS via satellite4', 'Emergency SOS', 'Crash Detection5'],
    camIcon: iconCamPro,
    camText: ['Pro camera system', '48MP Main | Ultra Wide', 'Telephoto', 'Photonic Engine for incredible detail and color', 'Autofocus on TrueDepth front camera'],
    actionIcon: iconAction,
    actionText: 'Action mode smooths out shaky handheld videos',
    batteryIcon: iconBattery,
    batteryText: 'Up to 29 hours video playback6',
    chipIcon: iconA16,
    chipText: 'A16 Bionic chip',
    idIcon: iconFaceId,
    idText: 'Face ID',
    fiveGIcon: icon5g,
    fiveGText: 'Superfast 5G cellular7'
  },
  {
    id: '14',
    name: 'iPhone 14',
    image: img14,
    isNew: true,
    tagline: 'A total powerhouse.',
    price: 'From $799*',
    colors: ['#a0b4c8', '#e3dbe8', '#f9e87c', '#22252d', '#faf6f2', '#e30016'],
    display: '6.7″ or 6.1″',
    displaySub: ['Super Retina XDR display3', '—', '—'],
    notchIcon: null,
    notchText: '—',
    sosIcon: iconSos,
    sosText: ['Emergency SOS via satellite4', 'Emergency SOS', 'Crash Detection5'],
    camIcon: iconCamDual,
    camText: ['Advanced dual-camera system', '12MP Main | Ultra Wide', '—', 'Photonic Engine for incredible detail and color', 'Autofocus on TrueDepth front camera'],
    actionIcon: iconAction,
    actionText: 'Action mode smooths out shaky handheld videos',
    batteryIcon: iconBattery,
    batteryText: 'Up to 26 hours video playback6',
    chipIcon: iconA15,
    chipText: 'A15 Bionic chip with 5-core GPU',
    idIcon: iconFaceId,
    idText: 'Face ID',
    fiveGIcon: icon5g,
    fiveGText: 'Superfast 5G cellular7'
  },
  {
    id: '13',
    name: 'iPhone 13',
    image: img13,
    isNew: false,
    tagline: 'As amazing as ever.',
    price: 'From $599*',
    colors: ['#3b5062', '#e1cfc6', '#323638', '#faf6f2', '#e30016'],
    display: '6.1″ or 5.4″',
    displaySub: ['Super Retina XDR display3', '—', '—'],
    notchIcon: null,
    notchText: '—',
    sosIcon: iconSos,
    sosText: ['—', 'Emergency SOS', '—'],
    camIcon: iconCamDual13,
    camText: ['Dual-camera system', '12MP Main | Ultra Wide', '—', '—', 'TrueDepth front camera'],
    actionIcon: null,
    actionText: '—',
    batteryIcon: iconBattery,
    batteryText: 'Up to 19 hours video playback6',
    chipIcon: iconA15,
    chipText: 'A15 Bionic chip with 4-core GPU',
    idIcon: iconFaceId,
    idText: 'Face ID',
    fiveGIcon: icon5g,
    fiveGText: 'Superfast 5G cellular7'
  },
  {
    id: 'se',
    name: 'iPhone SE',
    image: imgSE,
    isNew: false,
    tagline: 'Serious power. Serious value.',
    price: 'From $429',
    colors: ['#22252d', '#faf6f2', '#e30016'],
    display: '4.7″',
    displaySub: ['Retina HD display', '—', '—'],
    notchIcon: null,
    notchText: '—',
    sosIcon: iconSos,
    sosText: ['—', 'Emergency SOS', '—'],
    camIcon: iconCamSingle,
    camText: ['Advanced camera system', '12MP Main', '—', '—', 'Front camera'],
    actionIcon: null,
    actionText: '—',
    batteryIcon: iconBattery,
    batteryText: 'Up to 15 hours video playback6',
    chipIcon: iconA15,
    chipText: 'A15 Bionic chip with 4-core GPU',
    idIcon: iconTouchId,
    idText: 'Touch ID',
    fiveGIcon: icon5g,
    fiveGText: '5G cellular7'
  }
];

export default function ComparisonSection() {
  return (
    <section id="compare" className="bg-white py-16 text-[#1d1d1f] border-b border-[#d2d2d7]/30">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-14">
            <h2 className="text-[36px] sm:text-[44px] md:text-[48px] font-bold tracking-tight leading-tight">
              Which iPhone is right for you?
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Models Top Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">
          {models.map((m, idx) => (
            <ScrollReveal key={m.id} direction="up" delay={0.15 + idx * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center pt-6 lg:pt-0 px-2 group"
              >
                {/* Device Image */}
                <div className="h-[260px] flex items-center justify-center mb-6">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="max-h-[250px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Color dots */}
                <div className="flex items-center space-x-2 mb-4 h-6">
                  {m.colors.map((hex, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-sm"
                      style={{ backgroundColor: hex }}
                    />
                  ))}
                </div>

                {/* New Badge & Name */}
                <div className="min-h-[60px] flex flex-col items-center justify-center mb-1">
                  {m.isNew ? (
                    <span className="text-[12px] text-[#bf4800] font-normal mb-0.5">New</span>
                  ) : (
                    <span className="h-4 block" />
                  )}
                  {m.id === 'se' ? (
                    <div className="inline-flex items-center space-x-1 justify-center">
                      <span className="text-[20px] md:text-[22px] font-semibold text-[#1d1d1f] tracking-tight">iPhone</span>
                      <span className="text-[11px] font-bold text-[#1d1d1f] border-2 border-[#1d1d1f] rounded px-1 py-0.2 leading-none tracking-tight">SE</span>
                    </div>
                  ) : (
                    <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1d1d1f] tracking-tight">{m.name}</h3>
                  )}
                </div>

                {/* Tagline */}
                <p className="text-[14px] text-[#1d1d1f] min-h-[36px] mb-2">{m.tagline}</p>

                {/* Price */}
                <p className="text-[14px] text-[#1d1d1f] font-normal mb-5">{m.price}</p>

                {/* CTA Buttons */}
                <div className="flex flex-col items-center space-y-2 mb-4 pb-6 border-b border-[#d2d2d7]/40 w-full">
                  <a
                    href={`#buy-${m.id}`}
                    className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-4 py-1.5 rounded-full text-[13px] font-normal transition-all duration-200 shadow-sm inline-block hover:scale-105 active:scale-95"
                  >
                    Buy
                  </a>
                  <a
                    href={`#learn-${m.id}`}
                    className="text-[#0066cc] text-[14px] hover:underline font-normal"
                  >
                    Learn more
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Specs Section: Row by Row Grid */}
        <div className="space-y-12 text-center text-[13px] text-[#1d1d1f]">
          {/* 1. Display Row */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
              {models.map((m) => (
                <div key={m.id} className="flex flex-col items-center justify-start space-y-0.5">
                  <div className="text-[18px] md:text-[20px] font-bold text-[#1d1d1f] mb-1">{m.display}</div>
                  {Array.isArray(m.displaySub) ? (
                    m.displaySub.map((line, i) => (
                      <p key={i} className="text-[#6e6e73] leading-relaxed text-[13px]">{line}</p>
                    ))
                  ) : (
                    <p className="text-[#6e6e73] leading-relaxed text-[13px]">{m.displaySub}</p>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 2. Dynamic Island Row */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
              {models.map((m) => (
                <div key={m.id} className="flex flex-col items-center justify-center space-y-1 min-h-[90px]">
                  {m.notchIcon ? (
                    <>
                      <img src={m.notchIcon} alt="Notch" className="h-9 w-auto mb-2 object-contain" />
                      <p className="text-[13px] text-[#1d1d1f] whitespace-pre-line leading-relaxed">{m.notchText}</p>
                    </>
                  ) : (
                    <span className="text-[#86868b] text-[18px]">—</span>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 3. Emergency SOS Row */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
              {models.map((m) => (
                <div key={m.id} className="flex flex-col items-center justify-center space-y-0.5 min-h-[110px]">
                  <img src={m.sosIcon} alt="SOS" className="h-9 w-auto mb-2 object-contain" />
                  {Array.isArray(m.sosText) ? (
                    m.sosText.map((line, i) => (
                      <p key={i} className="text-[#6e6e73] leading-relaxed text-[13px]">{line}</p>
                    ))
                  ) : (
                    <p className="text-[#6e6e73] leading-relaxed text-[13px]">{m.sosText}</p>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 4. Camera System Row */}
          <ScrollReveal direction="up" delay={0.35}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
              {models.map((m) => (
                <div key={m.id} className="flex flex-col items-center justify-start space-y-0.5 min-h-[160px]">
                  <img src={m.camIcon} alt="Camera" className="h-9 w-auto mb-2 object-contain" />
                  {Array.isArray(m.camText) ? (
                    m.camText.map((line, i) => (
                      <p
                        key={i}
                        className={`leading-relaxed text-[13px] px-1 ${
                          i === 0 && line !== '—'
                            ? 'font-semibold text-[#1d1d1f]'
                            : 'text-[#6e6e73]'
                        }`}
                      >
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-[#6e6e73] leading-relaxed text-[13px] px-1">{m.camText}</p>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 5. Action Mode Row */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
              {models.map((m) => (
                <div key={m.id} className="flex flex-col items-center justify-center space-y-1 min-h-[70px]">
                  {m.actionIcon ? (
                    <>
                      <img src={m.actionIcon} alt="Action" className="h-9 w-auto mb-2 object-contain" />
                      <p className="text-[13px] text-[#6e6e73] leading-relaxed px-1">{m.actionText}</p>
                    </>
                  ) : (
                    <span className="text-[#86868b] text-[18px]">—</span>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 6. Battery Row */}
          <ScrollReveal direction="up" delay={0.45}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
              {models.map((m) => (
                <div key={m.id} className="flex flex-col items-center justify-center space-y-1">
                  <img src={m.batteryIcon} alt="Battery" className="h-7 w-auto mb-2 object-contain" />
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">{m.batteryText}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 7. Chip Row */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
              {models.map((m) => (
                <div key={m.id} className="flex flex-col items-center justify-center space-y-1">
                  <img src={m.chipIcon} alt="Chip" className="h-9 w-auto mb-2 object-contain" />
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">{m.chipText}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 8. Biometrics Row */}
          <ScrollReveal direction="up" delay={0.55}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
              {models.map((m) => (
                <div key={m.id} className="flex flex-col items-center justify-center space-y-1">
                  <img src={m.idIcon} alt="ID" className="h-9 w-auto mb-2 object-contain" />
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">{m.idText}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 9. 5G Cellular Row */}
          <ScrollReveal direction="up" delay={0.6}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
              {models.map((m) => (
                <div key={m.id} className="flex flex-col items-center justify-center space-y-1">
                  <img src={m.fiveGIcon} alt="5G" className="h-9 w-auto mb-2 object-contain" />
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">{m.fiveGText}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 10. Individual Column Divider Lines Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-4">
            {models.map((m) => (
              <div key={m.id} className="w-full border-t border-[#d2d2d7]/40" />
            ))}
          </div>
        </div>

        {/* Bottom compare & shop links */}
        <ScrollReveal direction="up" delay={0.65}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 mt-8 text-center">
            <a href="#compare-all" className="text-[#0066cc] hover:underline text-[17px] font-normal">
              Compare all iPhone models
            </a>
            <a href="#shop-iphone" className="text-[#0066cc] hover:underline text-[17px] font-normal">
              Shop iPhone
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
