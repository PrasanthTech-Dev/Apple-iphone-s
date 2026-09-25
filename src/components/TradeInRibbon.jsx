import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function TradeInRibbon() {
  return (
    <div className="bg-[#fbfbfd] border-b border-[#d2d2d7]/30 py-3.5 px-4 text-center text-[14px] text-[#1d1d1f]">
      <div className="max-w-[1024px] mx-auto flex items-center justify-center space-x-1 flex-wrap leading-normal">
        <span>Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher. 1</span>
        <a
          href="#shop-iphone"
          className="text-[#0066cc] hover:underline inline-flex items-center font-normal ml-1"
        >
          <span>Shop iPhone</span>
        </a>
      </div>
    </div>
  );
}
