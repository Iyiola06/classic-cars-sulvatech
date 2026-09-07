'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Search, Mic, SlidersHorizontal, ArrowRight, X } from 'lucide-react';
import Navigation from '@/components/navigation';

export default function ArchivePage() {
  return (
    <main className="min-h-screen selection:bg-foreground/10 pb-20">
      <Navigation />
      <ArchiveHero />
      <FilterSystem />
      <FeaturedCollections />
      <VehicleGrid />
      <ArchiveIntelligence />
      <BottomCTA />
    </main>
  );
}

function ArchiveHero() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const popularSearches = ['Ferrari F40', 'Porsche 959', 'Mercedes 300SL', 'Lamborghini Miura'];
  const trendingSearches = ['Rare Japanese classics', '1960s European legends', 'Most searched this week'];

  return (
    <section className="relative h-[55vh] min-h-[500px] w-full flex items-center justify-center overflow-visible">
      {/* Background with cinematic lighting */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2400&auto=format&fit=crop"
          alt="Archive Cinematic Background"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-100" />
        {searchActive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-background/40 dark:bg-black/40 backdrop-blur-md z-10" 
            onClick={() => setSearchActive(false)}
          />
        )}
      </motion.div>

      <div className={`relative z-20 w-full max-w-5xl mx-auto px-6 text-center transition-transform duration-700 ${searchActive ? '-translate-y-8' : 'translate-y-0'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-semibold tracking-widest uppercase mb-6 block text-sm text-white/60">
            The Automotive Encyclopedia
          </span>
          <h1 className="text-white font-semibold leading-[1.05] tracking-[-0.02em] mb-4 text-4xl md:text-6xl lg:text-[80px]">
            Explore Every Legend.
          </h1>
          <p className="max-w-2xl mx-auto leading-relaxed mb-12 text-xl text-white/80">
            Discover the history, engineering, and stories behind the world's most iconic vehicles.
          </p>
        </motion.div>

        {/* Smart Search System */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[900px] mx-auto z-30"
        >
          <div 
            className={`glass-panel mx-auto transition-all duration-500 ease-[0.16,1,0.3,1] rounded-[40px] flex items-center px-6 overflow-hidden ${
              searchActive 
                ? 'w-full h-[96px] bg-background/90 dark:bg-[#0f0f13]/90 shadow-2xl scale-[1.02]' 
                : 'w-full max-w-[800px] h-[80px]'
            }`}
          >
            <Search className={`transition-colors duration-500 ${searchActive ? 'text-foreground' : 'text-foreground/50'} w-6 h-6 shrink-0`} />
            <input
              type="text"
              placeholder="Search Ferrari, Porsche, classic racers, rare vehicles..."
              className="flex-1 h-full bg-transparent border-none outline-none px-6 font-medium placeholder:text-foreground/40 text-lg md:text-xl placeholder:text-foreground/40 text-foreground"
              onFocus={() => setSearchActive(true)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchActive && searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-2 mr-2 hover:bg-foreground/10 rounded-full transition-colors">
                <X className="w-5 h-5 text-foreground/50" />
              </button>
            )}
            <div className="flex items-center gap-2 pl-4 border-l border-foreground/10 shrink-0">
              <button className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-colors text-white/60">
                <Mic className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-colors text-white/60">
                <SlidersHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {searchActive && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[112px] left-0 w-full glass-panel !bg-background/95 dark:!bg-[#0f0f13]/95 rounded-[32px] p-8 shadow-2xl border border-foreground/10 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="font-semibold tracking-wider uppercase mb-4 text-sm text-foreground/50">Popular Searches</h4>
                    <div className="flex flex-wrap gap-3">
                      {popularSearches.map((item) => (
                        <button key={item} className="px-4 py-2 rounded-full glass-panel !bg-foreground/5 hover:!bg-foreground/10 font-medium transition-colors text-sm">
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold tracking-wider uppercase mb-4 text-sm text-foreground/50">Trending</h4>
                    <div className="flex flex-col gap-2">
                      {trendingSearches.map((item) => (
                        <button key={item} className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-foreground/5 transition-colors group text-left">
                          <Search className="w-4 h-4 group-hover:text-white/80 transition-colors text-foreground/40 group-hover:text-white/80" />
                          <span className="font-medium group-hover:text-foreground transition-colors text-foreground/80 group-hover:text-foreground">{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FilterSystem() {
  const filters = [
    { label: 'Manufacturer', active: true },
    { label: 'Era', active: false },
    { label: 'Category', active: false },
    { label: 'Country', active: false },
  ];

  const subFilters = ['Ferrari', 'Porsche', 'Mercedes-Benz', 'Lamborghini', 'Aston Martin'];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-8 border-b border-foreground/5 relative z-10">
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        {/* Main Categories (Segmented Control style) */}
        <div className="glass-panel p-1 rounded-full inline-flex">
          {filters.map((filter) => (
            <button 
              key={filter.label} 
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${filter.active ? 'bg-foreground text-background shadow-md' : 'text-white/60 hover:text-foreground'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="hidden md:block w-px h-8 bg-foreground/10 mx-2" />

        {/* Sub Categories (Floating Capsules) */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2 md:pb-0 items-center">
          {subFilters.map((sub) => (
            <button 
              key={sub}
              className="px-5 py-2.5 rounded-full glass-panel !bg-foreground/5 border border-foreground/10 hover:!bg-foreground/10 font-medium whitespace-nowrap transition-colors text-sm"
            >
              {sub}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCollections() {
  const collections = [
    { title: "The Ferrari Legends", count: 42, years: "1947 - Present", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop" },
    { title: "The Porsche Icons", count: 28, years: "1963 - Present", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop" },
    { title: "The Golden Era Of Supercars", count: 15, years: "1980 - 1999", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop" },
    { title: "Racing Heritage", count: 34, years: "1950 - 1990", img: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=800&auto=format&fit=crop" },
    { title: "Future Classics", count: 19, years: "2010 - Present", img: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="font-semibold tracking-tight text-xl md:text-2xl lg:text-3xl">Curated Collections</h2>
      </div>
      
      <div className="flex gap-6 overflow-x-auto px-6 pb-12 hide-scrollbar snap-x snap-mandatory" style={{ scrollPaddingLeft: '24px' }}>
        <div className="w-[calc((100vw-1280px)/2)] shrink-0 hidden xl:block" />
        {collections.map((col, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 w-[320px] md:w-[360px] h-[420px] rounded-[32px] overflow-hidden relative group snap-start cursor-pointer border border-foreground/5 shadow-sm"
          >
            <Image 
              src={col.img} 
              alt={col.title} 
              fill 
              className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-panel !bg-white/10 dark:!bg-black/20 !border-white/20 p-6 rounded-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:!bg-white/20 dark:group-hover:!bg-black/40">
                <h3 className="font-semibold mb-3 leading-tight text-white text-xl">{col.title}</h3>
                <div className="flex items-center gap-4 font-medium mb-4 overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-white/70 text-xs">
                  <span className="bg-white/10 px-3 py-1.5 rounded-full">{col.count} Vehicles</span>
                  <span>{col.years}</span>
                </div>
                <div className="flex items-center gap-2 font-medium group-hover:text-white/90 text-white text-sm group-hover:text-white/90">
                  Explore Collection <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function VehicleGrid() {
  const vehicles = [
    { name: "Ferrari F40", year: "1987-1992", cat: "Supercar", spec1: "Twin Turbo V8", spec2: "471 HP", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop" },
    { name: "Porsche 959", year: "1986-1993", cat: "Supercar", spec1: "Twin Turbo Flat-6", spec2: "444 HP", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop" },
    { name: "Mercedes 300SL", year: "1954-1963", cat: "Classic", spec1: "3.0L Inline-6", spec2: "240 HP", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop" },
    { name: "Lamborghini Miura", year: "1966-1973", cat: "Supercar", spec1: "4.0L V12", spec2: "345 HP", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop" },
    { name: "Aston Martin DB5", year: "1963-1965", cat: "Grand Tourer", spec1: "4.0L Inline-6", spec2: "282 HP", img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop" },
    { name: "Jaguar E-Type", year: "1961-1974", cat: "Sports Car", spec1: "3.8L Inline-6", spec2: "265 HP", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop" },
    { name: "Ford GT40", year: "1964-1969", cat: "Race Car", spec1: "7.0L V8", spec2: "485 HP", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop" },
    { name: "McLaren F1", year: "1992-1998", cat: "Hypercar", spec1: "6.1L V12", spec2: "618 HP", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-10">
        <h2 className="font-semibold tracking-tight text-xl md:text-2xl lg:text-3xl">Archive Results <span className="font-medium ml-2 text-foreground/40 text-xl">2,419 vehicles</span></h2>
        <div className="hidden md:flex gap-4">
           {/* Future sorting dropdown area, kept minimal for design */}
           <span className="font-medium text-sm text-foreground/50">Sort by: Relevancy</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vehicles.map((car, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group glass-panel rounded-3xl h-[340px] flex flex-col overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-white/5 relative border border-foreground/5"
          >
            <div className="relative h-[200px] w-full overflow-hidden shrink-0">
              <Image 
                src={car.img} 
                alt={car.name} 
                fill 
                className="object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="p-5 flex flex-col flex-1 bg-background/50 dark:bg-[#0f0f13]/50 backdrop-blur-md relative z-10 transition-colors duration-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold leading-tight text-lg text-foreground">{car.name}</h3>
                <span className="font-bold px-2 py-1 rounded-full bg-foreground/5 text-xs text-white/60">{car.year}</span>
              </div>
              
              <span className="font-medium mb-auto text-sm text-foreground/50">{car.cat}</span>
              
              <div className="flex items-center gap-2 mt-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute bottom-5 left-5 right-5">
                <span className="font-medium px-2.5 py-1.5 rounded-lg bg-foreground/10 text-xs text-foreground">{car.spec1}</span>
                <span className="font-medium px-2.5 py-1.5 rounded-lg bg-foreground/10 text-xs text-foreground">{car.spec2}</span>
                <div className="ml-auto w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background">
                   <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-16">
         <button className="px-8 py-4 rounded-full border border-foreground/20 font-medium hover:bg-foreground/5 transition-colors">
           Load More Vehicles
         </button>
      </div>
    </section>
  );
}

function ArchiveIntelligence() {
  const stats = [
    { number: "10,000+", label: "Vehicle stories" },
    { number: "100+", label: "Manufacturers" },
    { number: "Decades", label: "of automotive history" }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 mt-12 border-t border-foreground/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-semibold tracking-tight mb-6 text-2xl md:text-4xl lg:text-5xl">
            The World's Automotive Knowledge, Organized.
          </h2>
          <p className="leading-relaxed max-w-lg text-xl text-white/60">
            Every technical specification, production history, and editorial story seamlessly connected within our proprietary archive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-panel p-8 rounded-[32px] ${i === 2 ? 'sm:col-span-2' : ''}`}
            >
              <h3 className="font-semibold mb-2 text-xl md:text-2xl lg:text-4xl">{stat.number}</h3>
              <p className="font-medium text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden relative h-[500px] flex items-center justify-center">
        <Image 
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2400&auto=format&fit=crop"
          alt="Create Your Garage"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 glass-panel !bg-black/40 !border-white/10 p-12 md:p-16 rounded-[40px] max-w-3xl w-[90%] md:w-full backdrop-blur-xl text-center"
        >
          <h2 className="font-semibold tracking-tight mb-6 text-2xl md:text-4xl lg:text-5xl">
            Find Your Next Automotive Obsession.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button className="h-14 px-8 rounded-full bg-white font-semibold hover:bg-white/90 transition-colors text-black">
              Explore Vehicles
            </button>
            <button className="h-14 px-8 rounded-full border border-white/30 font-semibold hover:bg-white/10 transition-colors text-white">
              Create Your Garage
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
