'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Search, Plus, X, Star, MoreHorizontal, Settings, ChevronRight, BookmarkMinus, Library, PenTool, LayoutGrid, Trash2 } from 'lucide-react';
import Navigation from '@/components/navigation';

export default function GaragePage() {
  const [mounted, setMounted] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen selection:bg-foreground/10 pb-0 relative overflow-hidden">
      {/* Light Mode Lilac/Pearl Atmosphere */}
      <div className="fixed inset-0 z-[-1] pointer-events-none block dark:hidden bg-gradient-to-br from-[#F5F3F7] via-[#EFEAF5] to-[#E6E0F0]" />
      
      {/* Dark Mode Obsidian Atmosphere */}
      <div className="fixed inset-0 z-[-1] pointer-events-none hidden dark:block bg-[#050505]" />

      <Navigation />
      
      <GarageHero />
      
      <div className="relative z-20 -mt-24 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-6 mb-16">
          <GarageSummaryPanel />
          <CollectorProfilePreview />
        </div>
        
        <FeaturedCollections onOpenCreate={() => setIsCreateModalOpen(true)} />
        <DreamGarageFeature />
        <MyVehicleGrid />
        <RecommendedVehicles />
      </div>

      <CreateCollectionModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </main>
  );
}

function GarageHero() {
  return (
    <section className="relative h-[65vh] min-h-[500px] w-full flex items-center overflow-hidden pt-20 px-6 lg:px-12">
      {/* Cinematic Garage Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="https://images.unsplash.com/photo-1547706248-e87f17b3d395?q=80&w=2400&auto=format&fit=crop"
          alt="Personal Digital Garage"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Dark Garage Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/30 dark:from-[#050505] dark:via-black/60" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-white/80 mb-6 block drop-shadow-md">
            MY GARAGE
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-xl mb-6">
            Your Automotive Collection.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed mb-8 max-w-xl">
            Save legends, build collections, and create your personal archive of automotive icons.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ value, suffix = "", duration = 2.0 }: { value: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      animate(0, value, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => {
          if (ref.current) ref.current.textContent = Math.round(v) + suffix;
        },
      });
    }
  }, [inView, value, duration, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function GarageSummaryPanel() {
  const stats = [
    { value: 12, label: "Saved Vehicles" },
    { value: 4, label: "Collections" },
    { value: 8, label: "Stories Read" },
    { value: 3, label: "Dream Cars" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 glass-panel p-8 md:p-12 rounded-[32px] backdrop-blur-3xl shadow-xl border border-foreground/5 dark:border-white/10 dark:bg-[#111]/80"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col border-l-2 border-foreground/5 pl-6 first:border-l-0 first:pl-0">
            <div className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-2">
              <Counter value={stat.value} />
            </div>
            <div className="text-sm font-semibold tracking-wider uppercase text-foreground/50">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function CollectorProfilePreview() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="w-full lg:w-[350px] glass-panel p-8 rounded-[32px] backdrop-blur-3xl shadow-xl border border-foreground/5 dark:border-white/10 flex flex-col justify-between dark:bg-[#111]/80 group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900 overflow-hidden relative shadow-inner">
          <div className="absolute inset-0 bg-foreground/10 flex items-center justify-center text-foreground font-semibold text-xl">A</div>
        </div>
        <button className="w-10 h-10 rounded-full glass-panel !bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors">
          <Settings className="w-4 h-4 text-foreground/70" />
        </button>
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-tight mb-1">Alex's Archive</h3>
        <p className="text-sm font-medium text-foreground/60 mb-6">Premium Collector</p>
        
        <div className="space-y-3 pt-6 border-t border-foreground/10">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-foreground/40">Fav. Marque</span>
            <span className="text-sm font-medium">Porsche</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-foreground/40">Est. Value</span>
            <span className="text-sm font-medium blur-sm group-hover:blur-0 transition-all duration-500 cursor-default" title="Estimated value based on current auction prices">$12.5M</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedCollections({ onOpenCreate }: { onOpenCreate: () => void }) {
  const collections = [
    { title: "Dream Garage", count: 5, images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620882195018-0937a09d3df3?q=80&w=400&auto=format&fit=crop"
    ]},
    { title: "German Legends", count: 12, images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=400&auto=format&fit=crop"
    ]},
    { title: "Race Heritage", count: 6, images: [
      "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=400&auto=format&fit=crop"
    ]}
  ];

  return (
    <section className="w-full mb-24">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-3xl font-semibold tracking-tight">Your Collections</h2>
        <button 
          onClick={onOpenCreate}
          className="h-10 px-6 rounded-full glass-panel !bg-foreground/5 text-sm font-semibold hover:bg-foreground/10 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Create New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((col, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group glass-panel rounded-[32px] overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-700 border border-foreground/5 hover:border-foreground/20"
          >
            {/* Collage Representation */}
            <div className="h-[220px] w-full p-2">
              <div className="grid grid-cols-2 gap-2 h-full rounded-[24px] overflow-hidden">
                <div className="relative h-full col-span-1 overflow-hidden">
                  <Image src={col.images[0]} alt="Collection Cover" fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" referrerPolicy="no-referrer" />
                </div>
                <div className="grid grid-rows-2 gap-2 h-full col-span-1">
                  <div className="relative overflow-hidden rounded-[12px]">
                    <Image src={col.images[1]} alt="Collection Sub 1" fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] delay-75" referrerPolicy="no-referrer" />
                  </div>
                  <div className="relative overflow-hidden rounded-[12px]">
                    <Image src={col.images[2]} alt="Collection Sub 2" fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] delay-150" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 relative bg-background/50 dark:bg-black/20 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-1 group-hover:text-foreground/80 transition-colors">{col.title}</h3>
              <p className="text-sm font-medium text-foreground/50">{col.count} Vehicles</p>
              
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-lg">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function DreamGarageFeature() {
  const cars = [
    { name: "Ferrari LaFerrari", img: "https://images.unsplash.com/photo-1592853625511-84e12e1329a4?q=80&w=800&auto=format&fit=crop" },
    { name: "Porsche Carrera GT", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop" },
    { name: "McLaren F1", img: "https://images.unsplash.com/photo-1620882195018-0937a09d3df3?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section className="w-full py-24 mb-24 relative overflow-hidden rounded-[48px]">
      <div className="absolute inset-0 z-0 bg-foreground/[0.03] border border-foreground/5 rounded-[48px]" />
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-foreground/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-foreground/40 mb-6">If You Could Own Any Car...</h2>
        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">Current Dream Garage</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {cars.map((car, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] rounded-[32px] overflow-hidden relative mb-6 shadow-2xl shadow-black/10 dark:shadow-black/50 border border-foreground/5">
                <Image 
                  src={car.img} 
                  alt={car.name} 
                  fill 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 ease-[0.16,1,0.3,1]" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-panel !bg-background/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
              <h4 className="text-lg font-semibold tracking-tight group-hover:text-foreground/70 transition-colors">{car.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MyVehicleGrid() {
  const saved = [
    { name: "Ferrari F40", year: "1987", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop" },
    { name: "Porsche 959", year: "1986", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop" },
    { name: "Mercedes 300SL", year: "1954", img: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=800&auto=format&fit=crop" },
    { name: "Lamborghini Miura", year: "1966", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section className="w-full mb-32">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-3xl font-semibold tracking-tight">Saved Legends</h2>
        <button className="text-sm font-semibold text-foreground/50 hover:text-foreground transition-colors flex items-center gap-1">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {saved.map((car, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group glass-panel rounded-[24px] overflow-hidden flex flex-col border border-foreground/5 hover:border-foreground/20 transition-all duration-700 shadow-sm hover:shadow-xl"
          >
            <div className="relative h-[250px] w-full overflow-hidden">
              <Image 
                src={car.img} 
                alt={car.name} 
                fill 
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 ease-[0.16,1,0.3,1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              
              {/* Hover Quick Actions */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <button className="w-12 h-12 rounded-full glass-panel !bg-background/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" title="View">
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full glass-panel !bg-background/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" title="Add to Collection">
                  <Library className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full glass-panel !bg-background/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors" title="Remove">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 bg-background/50 dark:bg-black/20 backdrop-blur-md group-hover:bg-background/80 dark:group-hover:bg-black/40 transition-colors duration-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold tracking-tight">{car.name}</h4>
              </div>
              <p className="text-sm font-medium text-foreground/50">{car.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RecommendedVehicles() {
  const recommendations = [
    { name: "Ferrari 288 GTO", desc: "Because you saved Ferrari F40", img: "https://images.unsplash.com/photo-1592853625511-84e12e1329a4?q=80&w=600&auto=format&fit=crop" },
    { name: "Lamborghini Countach", desc: "Because you saved Porsche 959", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <section className="w-full pb-32">
      <h2 className="text-2xl font-semibold tracking-tight mb-8">Based On Your Garage</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 glass-panel p-4 pr-8 rounded-[32px] group cursor-pointer border border-foreground/5 hover:border-foreground/20 transition-all duration-500"
          >
            <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[24px] overflow-hidden relative shrink-0">
              <Image src={rec.img} alt={rec.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-foreground/40 mb-2 block flex items-center gap-1.5">
                <Star className="w-3 h-3 text-foreground/40" /> Recommended
              </span>
              <h4 className="text-xl font-semibold tracking-tight mb-1">{rec.name}</h4>
              <p className="text-sm font-medium text-foreground/60">{rec.desc}</p>
            </div>
            <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden sm:block">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center">
                <Plus className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CreateCollectionModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/80 dark:bg-[#050505]/80"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl glass-panel p-8 md:p-12 rounded-[40px] shadow-2xl border border-foreground/10 relative bg-background/90 dark:bg-[#111]/95"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 w-10 h-10 rounded-full glass-panel !bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
            >
              <X className="w-4 h-4 text-foreground/70" />
            </button>
            
            <h2 className="text-3xl font-semibold tracking-tight mb-8">Create New Collection</h2>
            
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold tracking-widest uppercase text-foreground/50 mb-3 block">Collection Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. My Dream Garage" 
                  className="w-full h-14 bg-foreground/5 border border-foreground/10 rounded-2xl px-6 text-foreground font-medium outline-none focus:border-foreground/30 transition-colors"
                  autoFocus
                />
              </div>
              
              <div>
                <label className="text-xs font-bold tracking-widest uppercase text-foreground/50 mb-3 block">Description</label>
                <textarea 
                  placeholder="What makes this collection special?" 
                  className="w-full h-32 bg-foreground/5 border border-foreground/10 rounded-2xl p-6 text-foreground font-medium outline-none focus:border-foreground/30 transition-colors resize-none"
                />
              </div>
              
              <div>
                <label className="text-xs font-bold tracking-widest uppercase text-foreground/50 mb-3 block">Cover Image</label>
                <div className="w-full h-32 border-2 border-dashed border-foreground/20 rounded-2xl flex flex-col items-center justify-center text-foreground/40 hover:text-foreground/60 hover:border-foreground/40 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Plus className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Upload custom cover</span>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex justify-end">
              <button 
                onClick={onClose}
                className="h-14 px-8 rounded-full bg-foreground text-background font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Create Collection
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
