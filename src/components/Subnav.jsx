import React from 'react';
import icon14Pro from '../assets/iphone_14_pro_light__dfhcc00ur2oi_large.svg.png';
import icon14 from '../assets/iphone_14_light__fwknsxkf80uq_large.svg.png';
import icon13 from '../assets/iphone_13_light__ewo3e0sf67o2_large.svg.png';
import iconSE from '../assets/iphone_se_light__fhg8duy6ffau_large.svg.png';
import icon12 from '../assets/iphone_12_light__cxh2ll1zwpw2_large.svg.png';
import iconCompare from '../assets/iphone_compare_light__f4jj7brpbvm2_large.svg.png';
import iconAirPods from '../assets/airpods_light__8oj157p2476a_large.svg.png';
import iconAirTag from '../assets/airtag_light__cb2bmnv6aoeu_large.svg.png';
import iconAcc from '../assets/accessories_light__ed5l6ipsevqu_large.svg.png';
import iconCard from '../assets/iphone_apple_card_light__dtut839e76c2_large.svg.png';
import iconIos16 from '../assets/iphone_ios_light__b8s4ws8o77iq_large.svg.png';
import iconShop from '../assets/shop_iphone_light__b2toggskllle_large.svg.png';

const subnavItems = [
  { name: 'iPhone 14 Pro', icon: icon14Pro, href: '#iphone-14-pro', isNew: true },
  { name: 'iPhone 14', icon: icon14, href: '#iphone-14', isNew: true },
  { name: 'iPhone 13', icon: icon13, href: '#iphone-13' },
  { name: 'iPhone SE', icon: iconSE, href: '#iphone-se' },
  { name: 'iPhone 12', icon: icon12, href: '#iphone-12' },
  { name: 'Compare', icon: iconCompare, href: '#compare' },
  { name: 'AirPods', icon: iconAirPods, href: '#airpods' },
  { name: 'AirTag', icon: iconAirTag, href: '#airtag' },
  { name: 'Accessories', icon: iconAcc, href: '#accessories' },
  { name: 'Apple Card', icon: iconCard, href: '#apple-card' },
  { name: 'iOS 16', icon: iconIos16, href: '#ios-16' },
  { name: 'Shop iPhone', icon: iconShop, href: '#shop' },
];

export default function Subnav() {
  return (
    <div className="bg-[#fbfbfd] border-b border-[#d2d2d7]/30 py-3 px-4 overflow-x-auto scrollbar-none sticky top-[44px] z-40">
      <div className="max-w-[1024px] mx-auto flex items-end justify-between min-w-max space-x-6 md:space-x-8 text-center">
        {subnavItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="flex flex-col items-center justify-end group hover:opacity-80 transition-all duration-200 min-w-[56px]"
            title={item.name}
          >
            <div className="h-[42px] flex items-center justify-center mb-1">
              <img
                src={item.icon}
                alt={item.name}
                className="h-[38px] md:h-[40px] lg:h-[42px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <span className="text-[12px] font-normal text-[#1d1d1f] tracking-tight whitespace-nowrap group-hover:text-[#0066cc]">
              {item.name}
            </span>
            <span className={`text-[10px] font-normal tracking-tight -mt-0.5 ${item.isNew ? 'text-[#bf4800]' : 'invisible'}`}>
              New
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
