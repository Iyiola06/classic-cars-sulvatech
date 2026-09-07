'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { Search, User, Moon, Sun, ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-foreground/10">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <CollectionSection />
      <EditorialSection />
      <PartnershipSection />
      <Footer />
    </main>
  );
}


function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center pt-28 pb-12">
      {/* Preloader */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="w-16 h-16 rounded-full relative overflow-hidden mb-6 shadow-xl shadow-foreground/10">
          <Image src="/assets/images/logo.jpeg" alt="Logo" fill className="object-cover" unoptimized />
        </div>
        <Loader2 className="w-6 h-6 animate-spin text-foreground/40" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVideoLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.0, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <video 
          src="/assets/videos/Ferrari LaFerrari  4K.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setIsVideoLoaded(true)}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent dark:from-[#050505]/90 dark:via-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVideoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col gap-6"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-foreground/60">
            The Global Automotive Archive
          </span>
          <h1 className="text-[52px] md:text-[88px] font-semibold leading-[1.05] tracking-[-0.02em]">
            Where Automotive Legends Live.
          </h1>
          <p className="text-xl text-foreground/70 max-w-[550px] leading-relaxed">
            650K+ enthusiasts. One curated destination for automotive legends, rare vehicles, and stories that shaped the world of cars.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button className="glass-panel h-14 px-8 rounded-full flex items-center justify-center font-medium transition-all hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-white/10 group">
              <span className="relative z-10 flex items-center gap-2">
                Explore Collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="h-14 px-8 rounded-full flex items-center justify-center font-medium border border-foreground/20 hover:bg-foreground/5 transition-colors">
              Discover Stories
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVideoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block absolute bottom-12 right-6 xl:right-0 w-[380px]"
        >
          <div className="glass-panel rounded-2xl p-4 group cursor-pointer transition-all hover:-translate-y-2">
            <div className="flex items-center justify-between mb-4 px-2 pt-2 relative z-10">
              <span className="text-xs font-bold tracking-wider uppercase text-foreground/50">Car of the week</span>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-foreground/10">1987 - 1992</span>
            </div>
            <div className="relative h-[160px] w-full rounded-xl overflow-hidden mb-4 z-10">
              <Image 
                src="/assets/images/ferrari-f40-lm.jpeg"
                alt="Ferrari F40 LM"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="px-2 pb-2 relative z-10">
              <h3 className="text-xl font-semibold mb-3">Ferrari F40 LM</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-foreground/5 border border-foreground/10">Twin Turbo V8</span>
                <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-foreground/5 border border-foreground/10">720 HP</span>
                <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-foreground/5 border border-foreground/10">229 mph</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TrustSection() {
  const stats = [
    { number: "650K+", label: "Automotive enthusiasts" },
    { number: "10,000+", label: "Vehicle stories" },
    { number: "Global", label: "Car culture community" }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-10 rounded-3xl text-center md:text-left"
          >
            <h3 className="text-4xl lg:text-5xl font-semibold mb-2 relative z-10">{stat.number}</h3>
            <p className="text-foreground/60 text-lg font-medium relative z-10">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CollectionSection() {
  const cards = [
    { title: "Classic Icons", desc: "The foundation of automotive history.", img: "/assets/images/lamborghini-miura.jpeg" },
    { title: "Supercars", desc: "Pushing the limits of engineering.", img: "/assets/images/koenigsegg-ccr.jpeg" },
    { title: "Rare Collections", desc: "One-of-one unicorns of the road.", img: "/assets/images/lexus-is500.jpeg" },
    { title: "Motorsport Legends", desc: "Born on the track.", img: "/assets/images/ferrari-f40-lm.jpeg" },
    { title: "Future Classics", desc: "Modern marvels destined for greatness.", img: "/assets/images/mercedes-e63.jpeg" },
  ];

  return (
    <section className="w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Explore Automotive Legends</h2>
      </div>
      
      <div className="flex gap-6 overflow-x-auto px-6 pb-12 hide-scrollbar snap-x snap-mandatory" style={{ scrollPaddingLeft: '24px' }}>
        <div className="w-[calc((100vw-1280px)/2)] shrink-0 hidden xl:block" />
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 w-[300px] md:w-[340px] h-[440px] rounded-3xl overflow-hidden relative group snap-start cursor-pointer border border-foreground/5"
          >
            <Image 
              src={card.img} 
              alt={card.title} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-panel !bg-white/10 dark:!bg-black/20 !border-white/20 p-5 rounded-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-white font-semibold text-xl mb-1 relative z-10">{card.title}</h3>
                <p className="text-white/70 text-sm opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 relative z-10">
                  {card.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function EditorialSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">Stories Behind The Machines</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 group cursor-pointer"
        >
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-6 border border-foreground/5">
            <Image 
              src="/assets/images/ferrari-f40-lm.jpeg" 
              alt="Feature Story" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
            <div className="absolute top-6 left-6 glass-panel !bg-black/40 !border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="relative z-10">Exclusive</span>
            </div>
          </div>
          <h3 className="text-3xl lg:text-4xl font-semibold mb-3 group-hover:text-foreground/80 transition-colors">The Ferrari F40: The Last Ferrari Approved By Enzo</h3>
          <p className="text-foreground/60 font-medium">8 min read</p>
        </motion.div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          {[
            { cat: "Heritage", title: "The Golden Era Of Analog Supercars", time: "5 min read", img: "/assets/images/lamborghini-miura.jpeg" },
            { cat: "Culture", title: "Inside The World Of Automotive Collectors", time: "12 min read", img: "/assets/images/koenigsegg-ccr.jpeg" },
            { cat: "Design", title: "Sculpted by Wind: Lexus IS 500 F SPORT", time: "6 min read", img: "/assets/images/lexus-is500.jpeg" },
          ].map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer grid grid-cols-3 gap-4 items-center"
            >
              <div className="relative col-span-1 aspect-square rounded-2xl overflow-hidden border border-foreground/5">
                <Image src={story.img} alt={story.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
              </div>
              <div className="col-span-2">
                <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2 block">{story.cat}</span>
                <h4 className="text-lg font-semibold leading-tight mb-2 group-hover:text-foreground/80 transition-colors">{story.title}</h4>
                <p className="text-sm text-foreground/50 font-medium">{story.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnershipSection() {
  return (
    <section className="w-full py-32 px-6">
      <div className="max-w-5xl mx-auto glass-panel rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-foreground/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 max-w-3xl mx-auto">
            Built For Enthusiasts. Ready For Global Automotive Brands.
          </h2>
          <p className="text-xl text-foreground/60 mb-16 max-w-2xl mx-auto">
            Connect with the world's most engaged community of classic car collectors, drivers, and admirers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold mb-2">650K+</span>
              <span className="text-foreground/60 font-medium">Community</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold mb-2">Global</span>
              <span className="text-foreground/60 font-medium">Automotive audience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold mb-2">Premium</span>
              <span className="text-foreground/60 font-medium">Brand partnerships</span>
            </div>
          </div>

          <button className="glass-panel h-14 px-10 rounded-full inline-flex items-center justify-center font-medium transition-all hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-white/10 text-lg">
            <span className="relative z-10">Partner With Classic Cars</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 pt-20 pb-10 px-6 mt-12 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full relative overflow-hidden">
                <Image src="/assets/images/logo.jpeg" alt="Logo" fill className="object-cover" unoptimized />
              </div>
              <span className="font-semibold text-xl tracking-tight">Classic Cars</span>
            </div>
            <p className="text-foreground/50 font-medium max-w-xs">
              The world's premium automotive archive and enthusiast platform.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h5 className="font-semibold mb-6">Platform</h5>
            <ul className="flex flex-col gap-4 text-foreground/60 font-medium">
              <li><a href="#" className="hover:text-foreground transition-colors">Explore</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Archive</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Stories</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h5 className="font-semibold mb-6">Company</h5>
            <ul className="flex flex-col gap-4 text-foreground/60 font-medium">
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4">
            <h5 className="font-semibold mb-6">The Newsletter</h5>
            <p className="text-foreground/50 font-medium mb-4">Curated stories delivered weekly.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-foreground/5 border border-foreground/10 rounded-full px-6 h-12 flex-1 focus:outline-none focus:border-foreground/30 transition-colors" />
              <button className="h-12 px-6 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-foreground/10 text-sm text-foreground/40 font-medium">
          <p>© {new Date().getFullYear()} Classic Cars Archive. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
