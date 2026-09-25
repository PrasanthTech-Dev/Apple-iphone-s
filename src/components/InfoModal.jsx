import React from 'react';
import { X, Sparkles, ChevronRight } from 'lucide-react';

export default function InfoModal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl p-6 text-[#1d1d1f] animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#d2d2d7]/40">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#0071e3]" />
            <h3 className="text-[20px] font-semibold">{title || 'Apple Overview'}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-4 text-[15px] text-[#1d1d1f] leading-relaxed">
          <p>{content || `Explore detailed specifications, features, colors, and capabilities of ${title} on Apple.com.`}</p>

          <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/40 space-y-2">
            <h4 className="font-semibold text-[14px]">Key Highlights:</h4>
            <ul className="text-[13px] text-[#6e6e73] space-y-1 list-disc list-inside">
              <li>Super Retina XDR OLED Display with True Tone</li>
              <li>A-series Bionic Chip for blazing performance</li>
              <li>Advanced Camera System with Cinematic & Action mode</li>
              <li>All-day battery life & MagSafe wireless charging</li>
            </ul>
          </div>
        </div>

        {/* Footer button */}
        <div className="pt-4 border-t border-[#d2d2d7]/40 flex justify-end">
          <button
            onClick={onClose}
            className="apple-btn-primary px-5 py-2 text-[14px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
