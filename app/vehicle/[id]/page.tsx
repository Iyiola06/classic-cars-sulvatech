'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Bookmark, Plus, ArrowLeftRight, Share, X, ArrowRight } from 'lucide-react';
import Navigation from '@/components/navigation';
import { useParams } from 'next/navigation';

export default function VehicleDetailPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen selection:bg-foreground/10 pb-20 relative">
      {/* Light Mode Lilac/Pearl Atmosphere */}
      <div className="fixed inset-0 z-[-1] pointer-events-none block dark:hidden bg-gradient-to-br from-[#F5F3F7] via-[#EFEAF5] to-[#E6E0F0]" />
      
      {/* Dark Mode Obsidian Atmosphere */}
      <div className="fixed inset-0 z-[-1] pointer-events-none hidden dark:block bg-[#050505]">
        {/* Subtle noise/texture simulation could go here */}
      </div>

      <Navigation />
      
      <HeroSection />
      <QuickDataSection />
      <HistoryTimeline />
      <EngineeringSection />
      <ImageGallery />
      <RelatedVehicles />
      <RelatedStories />
      <UserCollectionCTA />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-end pb-12 overflow-hidden">
      {/* Cinematic Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.03 }}
        transition={{ 
          opacity: { delay: 0.0, duration: 0.8 },
          scale: { delay: 0.0, duration: 15, ease: "easeOut" }
        }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2400&auto=format&fit=crop"
          alt="Ferrari F40"
          fill
          className="object-cover object-[70%_center]"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent dark:from-[#050505] dark:via-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent dark:from-[#050505]/80" />
      </motion.div>

      {/* Vehicle Title Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-bold tracking-[0.2em] uppercase mb-4 block text-sm md:text-base text-foreground/70">
              Legendary Supercar
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4"
          >
            <h1 className="text-white font-semibold leading-[0.9] tracking-[-0.03em] text-4xl md:text-6xl lg:text-[80px]">
              Ferrari F40
            </h1>
            <span className="text-white/80 font-medium tracking-tight text-xl md:text-2xl lg:text-4xl">
              1987 – 1992
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-medium leading-relaxed max-w-xl text-lg md:text-xl lg:text-2xl">
              "The last Ferrari personally approved by Enzo Ferrari."
            </p>
          </motion.div>
        </div>

        {/* Floating Action Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-2xl p-2 flex md:flex-col gap-2 group transition-transform duration-500 hover:-translate-y-2"
        >
          {[
            { icon: Bookmark, label: "Save Vehicle" },
            { icon: Plus, label: "Add To Garage" },
            { icon: ArrowLeftRight, label: "Compare" },
            { icon: Share, label: "Share" }
          ].map((action, i) => (
            <button 
              key={i} 
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex flex-col items-center justify-center gap-1 hover:bg-foreground/10 transition-colors relative group/btn"
              title={action.label}
            >
              <action.icon className="w-5 h-5 group-hover/btn:text-foreground group-hover/btn:scale-110 transition-all duration-300 text-foreground/80 group-hover/btn:text-foreground" />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function QuickDataSection() {
  const specs = [
    { label: "Production Years", value: "1987–1992" },
    { label: "Engine", value: "2.9L Twin Turbo V8" },
    { label: "Power", value: "471 HP" },
    { label: "Top Speed", value: "201 MPH" },
    { label: "Production", value: "1,311 Units" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-20 -mt-8">
      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
        {specs.map((spec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel shrink-0 w-[240px] p-6 rounded-3xl snap-start border border-foreground/5 dark:border-white/10 flex flex-col justify-between h-[140px] hover:-translate-y-1 transition-transform duration-500"
          >
            <span className="font-semibold tracking-wider uppercase text-sm text-foreground/50">{spec.label}</span>
            <span className="text-white/80 font-medium tracking-tight text-lg md:text-xl lg:text-2xl">{spec.value}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HistoryTimeline() {
  const events = [
    { year: "1987", text: "Ferrari F40 introduced to celebrate Ferrari's 40th anniversary." },
    { year: "1988", text: "Production expands globally, exceeding initial 400-unit projection." },
    { year: "1989", text: "F40 LM (Le Mans) version developed for racing." },
    { year: "1992", text: "Final production year. 1,311 total units built." },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-semibold tracking-tight mb-16 text-2xl md:text-4xl lg:text-5xl"
      >
        The Story
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="relative border-l border-foreground/10 ml-4 md:ml-0">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10 pb-16 last:pb-0 group"
            >
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-foreground/20 group-hover:bg-foreground group-hover:scale-150 transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_var(--foreground)]" />
              <h3 className="font-semibold tracking-tight mb-3 group-hover:text-foreground/80 transition-colors text-xl md:text-2xl lg:text-3xl">{event.year}</h3>
              <p className="font-medium leading-relaxed text-xl text-foreground/60">{event.text}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Sticky Parallax Image Area */}
        <div className="hidden md:block">
           <div className="sticky top-32 w-full h-[600px] rounded-[40px] overflow-hidden glass-panel p-2">
             <div className="relative w-full h-full rounded-[32px] overflow-hidden">
               <Image 
                 src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=1200&auto=format&fit=crop"
                 alt="Ferrari F40 Details"
                 fill
                 className="object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function EngineeringSection() {
  const specs = [
    { label: "Engine", value: "Twin Turbo V8" },
    { label: "Displacement", value: "2936cc" },
    { label: "Transmission", value: "5-speed Manual" },
    { label: "Weight", value: "1,100 kg" },
  ];

  return (
    <section className="w-full py-32 bg-foreground/[0.02] border-y border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-semibold tracking-tight mb-20 max-w-3xl mx-auto text-3xl md:text-4xl lg:text-6xl"
        >
          Engineering Without Compromise
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-10 rounded-[32px] group hover:bg-foreground/5 transition-colors duration-700 text-center"
            >
              <h4 className="font-semibold tracking-[0.15em] uppercase mb-6 text-sm text-foreground/50">{spec.label}</h4>
              <p className="font-medium tracking-tight text-xl md:text-2xl lg:text-4xl">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1592853625511-84e12e1329a4?q=80&w=1600&auto=format&fit=crop", span: "col-span-2 row-span-2" },
    { src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`relative rounded-[32px] overflow-hidden cursor-pointer group glass-panel p-2 ${img.span}`}
            onClick={() => setSelectedImage(img.src)}
          >
            <div className="relative w-full h-full rounded-[24px] overflow-hidden">
              <Image 
                src={img.src} 
                alt="Vehicle Gallery Image" 
                fill 
                className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Immersive Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 dark:bg-black/95 backdrop-blur-xl"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 w-14 h-14 glass-panel rounded-full flex items-center justify-center hover:bg-foreground/10 transition-colors z-10 text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[90vw] h-[85vh] rounded-[40px] overflow-hidden glass-panel p-2"
            >
              <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                <Image 
                  src={selectedImage} 
                  alt="Expanded Vehicle Image" 
                  fill 
                  className="object-contain bg-black/5"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function RelatedVehicles() {
  const related = [
    { name: "Porsche 959", year: "1986", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop" },
    { name: "Lamborghini Countach", year: "1974", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop" },
    { name: "Mercedes 300SL", year: "1954", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      <h2 className="font-semibold tracking-tight mb-12 text-xl md:text-2xl lg:text-4xl">Continue Exploring Legends</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((car, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group glass-panel rounded-[32px] overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
          >
            <div className="relative h-[240px] w-full overflow-hidden">
              <Image 
                src={car.img} 
                alt={car.name} 
                fill 
                className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 relative bg-background/50 dark:bg-[#0f0f13]/50 backdrop-blur-md">
              <h3 className="font-semibold leading-tight mb-1 group-hover:text-foreground/80 transition-colors text-xl text-foreground group-hover:text-foreground/80">{car.name}</h3>
              <span className="font-medium block mb-4 text-sm text-foreground/50">{car.year}</span>
              
              <div className="flex items-center gap-2 font-medium opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-sm">
                View Specifications <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RelatedStories() {
  const stories = [
    { title: "The Ferrari F40 Legacy", img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800&auto=format&fit=crop" },
    { title: "Why Analog Supercars Matter", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop" },
    { title: "Inside Ferrari's Golden Era", img: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="w-full py-20 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-semibold tracking-tight mb-12 text-xl md:text-2xl lg:text-4xl">Stories Behind This Machine</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-6 border border-foreground/5 glass-panel p-2">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                  <Image 
                    src={story.img} 
                    alt={story.title} 
                    fill 
                    className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <h3 className="font-semibold tracking-tight group-hover:text-foreground/70 transition-colors leading-snug text-xl group-hover:text-foreground/70">
                {story.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UserCollectionCTA() {
  return (
    <section className="w-full px-6 py-24 mb-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto glass-panel rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-foreground/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="font-semibold tracking-tight mb-10 max-w-2xl mx-auto text-2xl md:text-4xl lg:text-5xl">
            Add This Legend To Your Garage.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-14 px-10 rounded-full bg-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-background">
              <Bookmark className="w-5 h-5" /> Save Vehicle
            </button>
            <button className="h-14 px-10 rounded-full border border-foreground/20 font-semibold hover:bg-foreground/5 transition-colors flex items-center justify-center gap-2 text-foreground">
              <Plus className="w-5 h-5" /> Create Collection
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
