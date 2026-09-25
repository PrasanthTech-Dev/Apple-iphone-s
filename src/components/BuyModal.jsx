import React, { useState } from 'react';
import { X, Check, ShieldCheck, Truck } from 'lucide-react';

export default function BuyModal({ isOpen, onClose, productName = 'iPhone 14' }) {
  const [selectedStorage, setSelectedStorage] = useState('128GB');
  const [tradeIn, setTradeIn] = useState(false);
  const [added, setAdded] = useState(false);

  if (!isOpen) return null;

  const storageOptions = [
    { size: '128GB', priceAdd: 0 },
    { size: '256GB', priceAdd: 100 },
    { size: '512GB', priceAdd: 300 },
    { size: '1TB', priceAdd: 500 },
  ];

  const basePrice = productName.includes('Pro') ? 999 : productName.includes('SE') ? 429 : 799;
  const currentPriceAdd = storageOptions.find(s => s.size === selectedStorage)?.priceAdd || 0;
  const finalPrice = basePrice + currentPriceAdd - (tradeIn ? 200 : 0);

  const handleAddToBag = () => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl p-6 text-[#1d1d1f] animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#d2d2d7]/40">
          <div>
            <span className="text-[11px] font-bold text-[#bf4800] uppercase tracking-wide">Buy</span>
            <h3 className="text-[22px] font-semibold">{productName}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Configuration options */}
        <div className="py-5 space-y-5">
          {/* Storage Selection */}
          <div>
            <label className="text-[13px] font-medium text-[#86868b] block mb-2">Storage capacity</label>
            <div className="grid grid-cols-2 gap-3">
              {storageOptions.slice(0, productName.includes('Pro') ? 4 : 3).map((s) => (
                <button
                  key={s.size}
                  onClick={() => setSelectedStorage(s.size)}
                  className={`p-3 rounded-2xl border text-left flex justify-between items-center transition-all ${
                    selectedStorage === s.size
                      ? 'border-[#0071e3] ring-2 ring-[#0071e3]/30 bg-[#0071e3]/5 font-semibold'
                      : 'border-[#d2d2d7] hover:border-black/30'
                  }`}
                >
                  <span className="text-[14px]">{s.size}</span>
                  <span className="text-[12px] text-[#86868b]">
                    {s.priceAdd > 0 ? `+$${s.priceAdd}` : 'Included'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Trade In option */}
          <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/40 flex items-center justify-between">
            <div>
              <p className="text-[14px] font-semibold text-[#1d1d1f]">Apple Trade In</p>
              <p className="text-[12px] text-[#86868b]">Save up to $200 with trade-in</p>
            </div>
            <button
              onClick={() => setTradeIn(!tradeIn)}
              className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                tradeIn
                  ? 'bg-[#0071e3] text-white'
                  : 'bg-white border border-[#d2d2d7] text-[#1d1d1f] hover:bg-gray-50'
              }`}
            >
              {tradeIn ? 'Applied -$200' : 'Add Trade In'}
            </button>
          </div>

          {/* Delivery & Warranty info */}
          <div className="space-y-2 text-[12px] text-[#6e6e73]">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-[#0071e3]" />
              <span>Free 2-hour delivery or store pickup</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#0071e3]" />
              <span>1-Year Limited Warranty & 90 Days Free Tech Support</span>
            </div>
          </div>

          {/* Pricing summary */}
          <div className="pt-4 border-t border-[#d2d2d7]/40 flex items-center justify-between">
            <div>
              <span className="text-[12px] text-[#86868b]">Total Price</span>
              <p className="text-[26px] font-bold text-[#1d1d1f]">${finalPrice}</p>
            </div>
            <button
              onClick={handleAddToBag}
              disabled={added}
              className={`apple-btn-primary px-6 py-3 text-[15px] font-medium shadow-md transition-all ${
                added ? 'bg-emerald-600' : 'hover:scale-105 active:scale-95'
              }`}
            >
              {added ? (
                <span className="flex items-center space-x-1.5">
                  <Check className="w-4 h-4" />
                  <span>Added to Bag!</span>
                </span>
              ) : (
                'Add to Bag'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
