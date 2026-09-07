'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from 'next-themes';
import { Search, User, Moon, Sun, Menu, X, Warehouse } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Explore', href: '/' },
    { label: 'Archive', href: '/archive' },
    { label: 'Stories', href: '/stories' },
    { label: 'Community', href: '/community' },
    { label: 'Partners', href: '/partners' },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className={`fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl h-[72px] z-50 rounded-full flex items-center justify-between px-6 md:px-8 transition-all duration-300 ${
          isScrolled ? 'glass-panel shadow-lg' : 'bg-transparent'
        }`}
      >
        <motion.div 
          initial={{ left: '-100%', opacity: 0 }}
          animate={{ left: '200%', opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
          className="absolute top-0 w-[200px] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] pointer-events-none"
        />
        
        <Link href="/" className="flex items-center gap-2 group cursor-pointer relative z-10">
          <div className="w-8 h-8 rounded-full relative overflow-hidden">
             <Image src="/assets/images/logo.jpeg" alt="Logo" fill className="object-cover" unoptimized />
          </div>
          <span className="font-semibold text-lg tracking-tight">Classic Cars</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 relative z-10">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4 relative z-10">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground/10 transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <Link href="/garage" className="hidden md:flex relative w-10 h-10 rounded-full items-center justify-center hover:bg-foreground/10 transition-colors">
            <Warehouse className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-background"></span>
          </Link>
          <Link href="/profile" className="hidden md:flex w-10 h-10 rounded-full items-center justify-center hover:bg-foreground/10 transition-colors">
            <User className="w-4 h-4" />
          </Link>
          <button 
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-background/80 dark:bg-[#050505]/80 flex flex-col px-8 py-12"
          >
            <div className="flex justify-between items-center mb-16">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="w-8 h-8 rounded-full relative overflow-hidden">
                   <Image src="/assets/images/logo.jpeg" alt="Logo" fill className="object-cover" unoptimized />
                </div>
                <span className="font-semibold text-lg tracking-tight">Classic Cars</span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-foreground/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6 mt-10">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground/80 hover:text-foreground transition-colors block border-b border-foreground/10 pb-6"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-auto pt-8 flex items-center gap-6 text-sm font-medium text-foreground/50 uppercase tracking-widest"
            >
              <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-foreground transition-colors flex items-center gap-2">
                <User className="w-4 h-4" /> Sign In
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-xl z-[110] border-b border-foreground/10"
          >
            <div className="max-w-7xl mx-auto px-6 h-32 flex items-center gap-6">
              <Search className="w-8 h-8 text-foreground/40" />
              <input 
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, brands, or eras..."
                className="flex-1 bg-transparent text-2xl md:text-4xl outline-none placeholder:text-foreground/20 font-serif"
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-foreground/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
