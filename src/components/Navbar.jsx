import React, { useState } from 'react';
import appleLogo from '../assets/Vector.png';
import { Search, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  'Store',
  'Mac',
  'iPad',
  'iPhone',
  'Watch',
  'AirPods',
  'TV & Home',
  'Entertainment',
  'Accessories',
  'Support'
];

export default function Navbar({ onOpenBag, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  return (
    <nav className="bg-[#f2f2f2] sticky top-0 z-50 text-[#1d1d1f] text-[12px] font-normal transition-all duration-300 border-b border-[#d2d2d7]/30">
      <div className="max-w-[1024px] mx-auto px-4 h-[44px] flex items-center justify-between">
        {/* Apple Logo */}
        <a href="#" className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
          <img src={appleLogo} alt="Apple" className="h-[16px] md:h-[18px] w-auto object-contain" />
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-7 lg:space-x-8 text-[#1d1d1f]/80 font-normal">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-black transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Action Icons (Search & Bag) */}
        <div className="flex items-center space-x-5 text-[#1d1d1f]/80">
          <button
            onClick={() => setSearchActive(!searchActive)}
            className="hover:text-black transition-colors p-1 cursor-pointer"
            title="Search apple.com"
          >
            <Search className="w-4 h-4 stroke-[1.5]" />
          </button>

          <div className="relative">
            <button
              onClick={() => setBagOpen(!bagOpen)}
              className="hover:text-black transition-colors p-1 flex items-center cursor-pointer"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
            </button>

            {/* Bag Dropdown Popover */}
            <AnimatePresence>
              {bagOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-8 w-72 bg-white/95 backdrop-blur-xl border border-[#d2d2d7]/40 rounded-2xl shadow-2xl p-4 text-[#1d1d1f] z-50"
                >
                  <p className="text-center text-[#86868b] py-6 text-[13px]">Your Bag is empty.</p>
                  <div className="border-t border-[#d2d2d7]/30 pt-3 space-y-2">
                    <a href="#bag" className="flex items-center justify-between text-[#0066cc] hover:underline text-[13px] py-1">
                      <span>Bag</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                    <a href="#saved" className="flex items-center justify-between text-[#0066cc] hover:underline text-[13px] py-1">
                      <span>Saved Items</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                    <a href="#orders" className="flex items-center justify-between text-[#0066cc] hover:underline text-[13px] py-1">
                      <span>Orders</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                    <a href="#account" className="flex items-center justify-between text-[#0066cc] hover:underline text-[13px] py-1">
                      <span>Account</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1d1d1f] hover:text-black p-1 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      <AnimatePresence>
        {searchActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-[#f5f5f7] border-b border-[#d2d2d7]/40 py-3 px-4 overflow-hidden"
          >
            <div className="max-w-[600px] mx-auto flex items-center bg-white rounded-lg px-3 py-1.5 shadow-sm border border-[#d2d2d7]/50">
              <Search className="w-4 h-4 text-[#86868b] mr-2" />
              <input
                type="text"
                placeholder="Search apple.com or products..."
                className="bg-transparent text-[#1d1d1f] text-[14px] outline-none w-full placeholder-[#86868b]"
                autoFocus
              />
              <button
                onClick={() => setSearchActive(false)}
                className="text-[12px] text-[#0066cc] ml-2 hover:underline font-medium cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[44px] bottom-0 bg-[#f5f5f7] z-40 px-8 py-6 space-y-4 overflow-y-auto"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[17px] font-semibold text-[#1d1d1f] border-b border-[#d2d2d7]/30 pb-3 hover:text-[#0066cc] transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
