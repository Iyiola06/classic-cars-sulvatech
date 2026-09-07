'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Star, ChevronRight, X, ArrowRight, History, Wrench, Trophy } from 'lucide-react';
import Navigation from '@/components/navigation';

export default function CarOfTheWeekPage() {
  const [mounted, setMounted] = useState(false);

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
      
      <EditorialHero />
      <StoryIntroduction />
      <WhyItMatters />
      <TimelineExperience />
      <SpecificationExperience />
      <PhotoExperience />
      <CollectorInsight />
      <RelatedLegends />
      <ReturnCTA />
    </main>
  );
}

function EditorialHero() {
  return (
    <section className="relative h-[95vh] min-h-[700px] w-full flex flex-col justify-between overflow-hidden pt-32 pb-12 px-6 lg:px-12">
      {/* Cinematic Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <video 
          src="/assets/videos/amg-cla45.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        />
        {/* Dark Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-black/10 to-transparent dark:from-[#050505]/90 dark:via-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent dark:from-[#050505]/80" />
      </motion.div>

      {/* Feature Label (Top Left) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1.5 }}
        className="relative z-10"
      >
        <div className="font-bold tracking-[0.3em] uppercase drop-shadow-md text-xs md:text-sm text-white/90">
          <span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">Car Of The Week</span>
          <div className="mt-2 text-white/60">Edition: <span className="text-white">#002</span></div>
        </div>
      </motion.div>

      {/* Center-Left Title Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="font-semibold leading-[0.9] tracking-[-0.04em] drop-shadow-xl mb-6 text-4xl md:text-6xl lg:text-[80px]">
            AMG CLA 45
          </h1>
          <p className="font-medium tracking-tight drop-shadow-md max-w-2xl text-xl md:text-2xl lg:text-4xl">
            "The world's most powerful production four-cylinder engine."
          </p>
        </motion.div>
      </div>

      {/* Bottom Left Info Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 glass-panel !bg-black/30 dark:!bg-[#111]/40 !border-white/20 rounded-[32px] p-8 w-full max-w-[420px] h-[220px] flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 backdrop-blur-2xl"
      >
        <div className="flex justify-between items-start">
          <h3 className="font-semibold group-hover:text-white transition-colors text-lg md:text-xl lg:text-2xl">Mercedes-AMG CLA 45</h3>
          <span className="font-medium px-3 py-1 rounded-full bg-white/10 text-white/60 text-sm">Present</span>
        </div>
        
        <div className="grid grid-cols-2 gap-y-4 gap-x-2">
          <div>
            <span className="uppercase tracking-[0.2em] font-bold block mb-1 text-[10px] text-white/50">Engine</span>
            <span className="font-medium text-white">2.0L Turbo I4</span>
          </div>
          <div>
            <span className="uppercase tracking-[0.2em] font-bold block mb-1 text-[10px] text-white/50">Power</span>
            <span className="font-medium text-white">416 HP</span>
          </div>
          <div className="col-span-2">
            <span className="uppercase tracking-[0.2em] font-bold block mb-1 text-[10px] text-white/50">0-60 MPH</span>
            <span className="font-medium text-white">4.0 Seconds</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StoryIntroduction() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-32 z-10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-medium leading-[1.2] tracking-tight relative text-2xl md:text-4xl lg:text-5xl">
            <span className="absolute -left-6 md:-left-10 top-0 font-serif text-3xl md:text-5xl lg:text-7xl">"</span>
            Redefining what's possible from a four-cylinder powerplant, the AMG CLA 45 is a testament to modern engineering.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 leading-relaxed font-medium text-lg md:text-xl text-foreground/70"
        >
          <p>
            It challenges the notion that massive displacement is required for supercar-level performance. The hand-built M139 engine proves that meticulous craftsmanship and advanced turbocharging can yield astonishing results.
          </p>
          <p>
            The CLA 45 isn't just a compact sedan; it's a precision instrument. With its sophisticated 4MATIC+ all-wheel-drive system and aggressive aerodynamics, it delivers a visceral, high-revving driving experience that pushes the boundaries of its class.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhyItMatters() {
  const cards = [
    { icon: History, title: "The History", desc: "The story behind its creation as the ultimate 40th-anniversary gift to the brand itself." },
    { icon: Wrench, title: "The Engineering", desc: "The technology and motorsport DNA that made it a legendary analog masterpiece." },
    { icon: Trophy, title: "The Legacy", desc: "Why elite collectors and purists still value its unfiltered driving purity today." }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-10 md:p-12 rounded-[40px] group hover:-translate-y-2 transition-transform duration-700"
          >
            <div className="w-16 h-16 rounded-full glass-panel !bg-foreground/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 text-foreground">
              <card.icon className="w-8 h-8 opacity-80" strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold tracking-tight mb-4 text-lg md:text-xl lg:text-2xl">{card.title}</h3>
            <p className="font-medium leading-relaxed text-foreground/60">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TimelineExperience() {
  const years = [
    { year: "1987", title: "Vehicle Introduced", desc: "Unveiled at the Frankfurt Motor Show." },
    { year: "1988", title: "Global Phenomenon", desc: "Global recognition and demand explodes." },
    { year: "1989", title: "Track Evolution", desc: "The LM (Le Mans) competition version is born." },
    { year: "1992", title: "Production Ends", desc: "Final unit leaves Maranello." }
  ];

  return (
    <section className="w-full py-32 bg-foreground/[0.02] border-y border-foreground/5 overflow-hidden my-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-semibold tracking-tight mb-20 text-2xl md:text-4xl lg:text-5xl"
        >
          The Journey
        </motion.h2>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-foreground/10 -translate-y-1/2 hidden md:block" />
          
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {years.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start md:items-center group relative w-full md:w-1/4 text-left md:text-center"
              >
                {/* Desktop connection node */}
                <div className="hidden md:flex w-6 h-6 rounded-full bg-background border-4 border-foreground/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center group-hover:border-foreground/50 transition-colors duration-500 z-10">
                  <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-foreground group-hover:shadow-[0_0_12px_var(--foreground)] transition-all duration-500" />
                </div>

                <h3 className="font-semibold mb-4 md:mb-12 group-hover:text-foreground/80 transition-colors text-2xl md:text-4xl lg:text-5xl">{item.year}</h3>
                
                <div className="md:mt-12 glass-panel p-6 rounded-3xl w-full">
                  <h4 className="font-semibold mb-2 text-lg">{item.title}</h4>
                  <p className="font-medium text-foreground/60 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecificationExperience() {
  const specs = [
    { label: "Engine", value: "Twin Turbo V8", col: "col-span-1 md:col-span-2" },
    { label: "Power", value: "471 HP", col: "col-span-1" },
    { label: "Transmission", value: "5-Speed Manual", col: "col-span-1" },
    { label: "Weight", value: "1,100 kg", col: "col-span-1" },
    { label: "Top Speed", value: "201 MPH", col: "col-span-1 md:col-span-2" }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specs.map((spec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`glass-panel p-10 md:p-12 rounded-[40px] flex flex-col justify-center items-start group hover:bg-foreground/5 transition-colors duration-700 ${spec.col}`}
          >
            <span className="font-bold tracking-[0.2em] uppercase mb-4 block text-xs md:text-sm text-foreground/40">
              {spec.label}
            </span>
            <span className="font-semibold tracking-tight leading-none group-hover:scale-105 transition-transform duration-700 origin-left text-3xl md:text-4xl lg:text-6xl">
              {spec.value}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PhotoExperience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1592853625511-84e12e1329a4?q=80&w=1600&auto=format&fit=crop", span: "col-span-2 row-span-2" },
    { src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`relative rounded-[32px] overflow-hidden cursor-pointer group glass-panel p-2 ${img.span}`}
            onClick={() => setSelectedImage(img.src)}
          >
            <div className="relative w-full h-full rounded-[24px] overflow-hidden">
              <Image 
                src={img.src} 
                alt="Vehicle Detail" 
                fill 
                className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
            </div>
          </motion.div>
        ))}
      </div>

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
                  alt="Expanded Detail" 
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

function CollectorInsight() {
  const ratings = [
    { label: "Historical importance", score: 5 },
    { label: "Driving experience", score: 5 },
    { label: "Rarity", score: 5 },
    { label: "Investment appeal", score: 5 },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="glass-panel p-10 md:p-16 rounded-[40px] border border-foreground/5 shadow-2xl">
        <h2 className="font-semibold tracking-tight mb-16 text-2xl md:text-4xl lg:text-5xl">Why Collectors Still Chase It</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
          {ratings.map((rating, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-foreground/10 pb-6"
            >
              <span className="font-medium text-lg md:text-xl text-foreground/80">{rating.label}</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-6 h-6 ${j < rating.score ? 'fill-foreground text-foreground' : 'fill-foreground/10 text-foreground/10'}`} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedLegends() {
  const related = [
    { name: "Porsche 959", desc: "The technological marvel of the 80s.", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop" },
    { name: "Lamborghini Countach", desc: "The definitive poster car.", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop" },
    { name: "McLaren F1", desc: "The ultimate hypercar benchmark.", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      <h2 className="font-semibold tracking-tight mb-12 text-xl md:text-2xl lg:text-4xl">Continue Exploring</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((car, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group glass-panel rounded-[32px] overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-700"
          >
            <div className="relative h-[300px] w-full overflow-hidden">
              <Image 
                src={car.img} 
                alt={car.name} 
                fill 
                className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-semibold leading-tight mb-2 group-hover:text-white/90 transition-colors text-lg md:text-xl lg:text-2xl">{car.name}</h3>
                <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="font-medium mb-4 text-white/70 text-sm">{car.desc}</p>
                  <div className="flex items-center gap-2 font-medium text-sm text-white">
                    Explore Legend <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ReturnCTA() {
  return (
    <section className="w-full px-6 py-24 mb-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto rounded-[40px] overflow-hidden relative h-[500px] flex items-center justify-center"
      >
        <Image 
          src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2400&auto=format&fit=crop"
          alt="Subscribe Background"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 glass-panel !bg-black/30 !border-white/10 p-12 md:p-20 rounded-[40px] max-w-4xl w-[90%] md:w-full backdrop-blur-2xl text-center">
          <h2 className="font-semibold tracking-tight mb-8 text-3xl md:text-4xl lg:text-6xl">
            Discover A New Automotive Legend Every Week.
          </h2>
          <button className="h-16 px-12 rounded-full bg-white font-semibold hover:bg-white/90 transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-3 mx-auto shadow-2xl text-black text-lg">
            Follow Car Of The Week <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
