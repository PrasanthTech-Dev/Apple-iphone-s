import React from 'react';
import { X, Play, Pause, Volume2 } from 'lucide-react';
import tourBanner from '../assets/div (1).png';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-[#1d1d1f] rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-white">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0071e3]" />
            <h3 className="text-[16px] font-medium">A guided tour of iPhone 14 & iPhone 14 Pro</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <img
            src={tourBanner}
            alt="Guided Tour Film"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Playing Simulation Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-6">
            <div className="self-end bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[12px] flex items-center space-x-1">
              <Volume2 className="w-3.5 h-3.5" />
              <span>HD 4K</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#0071e3]/90 text-white flex items-center justify-center pl-1 shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-8 h-8 fill-current" />
              </div>
              <p className="text-[14px] font-medium mt-4 tracking-wide text-white/90">Click to Play Official Apple Guided Tour</p>
            </div>

            {/* Video Controls Bar */}
            <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-3 flex items-center space-x-4">
              <button className="text-white hover:text-[#2997ff]">
                <Play className="w-4 h-4 fill-current" />
              </button>
              <div className="flex-1 bg-white/20 h-1.5 rounded-full overflow-hidden relative">
                <div className="bg-[#0071e3] h-full w-[35%]" />
              </div>
              <span className="text-[12px] font-mono text-white/70">02:45 / 07:15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
