'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Clock, Calendar, Eye, TrendingUp } from 'lucide-react';
import Navigation from '@/components/navigation';

export default function StoriesPage() {
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
      <StoryCategories />
      <EditorialContentGrid />
      <AutomotiveTimeline />
      <PopularStories />
      <NewsletterExperience />
      <Footer />
    </main>
  );
}

function EditorialHero() {
  return (
    <section className="relative h-[75vh] min-h-[600px] w-full flex items-end pb-16 overflow-hidden pt-32">
      {/* Cinematic Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2400&auto=format&fit=crop"
          alt="Cinematic Automotive Scene"
          fill
          className="object-cover object-[center_60%]"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Dark Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent dark:from-[#050505] dark:via-black/60" />
      </motion.div>

      {/* Featured Story Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="font-bold tracking-[0.2em] uppercase mb-6 block drop-shadow-md text-xs md:text-sm text-white/80">
            Featured Story
          </span>
          <h1 className="text-white font-semibold leading-[0.95] tracking-[-0.03em]  drop-shadow-xl mb-6 text-4xl md:text-6xl lg:text-[80px]">
            The Machines That Defined Generations
          </h1>
          <p className="text-white/80 font-medium leading-relaxed mb-8 max-w-2xl drop-shadow-md text-lg md:text-xl lg:text-2xl">
            Explore the engineering, history, and stories behind the world's most iconic vehicles.
          </p>
          <button className="glass-panel h-14 px-8 rounded-full inline-flex items-center justify-center font-medium transition-all duration-500 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-white/10 group bg-background/50 dark:bg-black/30 backdrop-blur-md">
            <span className="relative z-10 flex items-center gap-2">
              Read Feature
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function StoryCategories() {
  const categories = [
    { name: "Legends", desc: "Stories about iconic vehicles." },
    { name: "Engineering", desc: "Technology and innovation." },
    { name: "Heritage", desc: "Automotive history." },
    { name: "Collectors", desc: "Ownership and rare collections." },
    { name: "Motorsport", desc: "Racing history." },
  ];

  const [active, setActive] = useState("Legends");

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-20 border-b border-foreground/5">
      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
        {categories.map((cat, i) => (
          <motion.button
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + (i * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActive(cat.name)}
            className={`glass-panel shrink-0 px-6 py-4 rounded-full flex flex-col items-start transition-all duration-500 border overflow-hidden ${
              active === cat.name 
                ? 'border-foreground/30 bg-foreground/5 scale-100' 
                : 'border-transparent hover:border-foreground/10 hover:bg-foreground/5 scale-95 opacity-70 hover:opacity-100'
            }`}
          >
            <span className="font-semibold tracking-widest uppercase mb-1 text-sm">{cat.name}</span>
            <span className="font-medium transition-all duration-500 overflow-hidden text-xs text-foreground/60" style={{ maxHeight: active === cat.name ? '40px' : '0px', opacity: active === cat.name ? 1 : 0 }}>
              {cat.desc}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function EditorialContentGrid() {
  const smallArticles = [
    { cat: "LEGENDS", title: "Ferrari F40: The Birth Of A Modern Icon", desc: "How the ultimate 40th anniversary gift redefined the supercar landscape forever.", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", time: "8 MIN READ", date: "OCT 12" },
    { cat: "ENGINEERING", title: "How Porsche Changed Performance Forever", desc: "The technological leap of the 959 and its lasting impact on modern engineering.", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", time: "6 MIN READ", date: "OCT 10" },
    { cat: "COLLECTORS", title: "The World's Most Valuable Classic Cars", desc: "Inside the secretive world of elite automotive auctions and record-breaking sales.", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop", time: "12 MIN READ", date: "OCT 05" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Large Featured Article */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 group cursor-pointer"
        >
          <div className="glass-panel rounded-[32px] overflow-hidden relative h-[600px] w-full border border-foreground/5 shadow-md hover:shadow-xl transition-shadow duration-700">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop"
                alt="Main Article Image"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 glass-panel !bg-background/80 dark:!bg-[#0f0f13]/80 !rounded-none !border-x-0 !border-b-0 !border-t-white/10 backdrop-blur-2xl transition-colors duration-700 group-hover:!bg-background/90 dark:group-hover:!bg-[#0f0f13]/95">
              <div className="transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4 font-bold tracking-[0.15em] uppercase text-xs">
                  <span className="text-foreground">Design</span>
                  <span className="flex items-center gap-1.5 text-foreground/40"><Clock className="w-3.5 h-3.5" /> 10 MIN READ</span>
                  <span className="flex items-center gap-1.5 text-foreground/40"><Calendar className="w-3.5 h-3.5" /> OCT 15</span>
                </div>
                <h3 className="font-semibold leading-tight tracking-tight mb-3 pr-12 text-xl md:text-2xl lg:text-4xl">
                  The Art of the Analog Driving Experience
                </h3>
                <p className="font-medium max-w-2xl text-foreground/70 text-lg">
                  Why modern collectors are abandoning digital perfection for the visceral, unfiltered connection of classic manual gearboxes and naturally aspirated engines.
                </p>
                <div className="absolute right-8 top-12 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center shadow-lg text-background">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Articles */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {smallArticles.map((article, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-[24px] overflow-hidden group cursor-pointer flex-1 flex flex-col border border-foreground/5 hover:border-foreground/20 transition-colors duration-700"
            >
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden">
                <Image 
                  src={article.img} 
                  alt={article.title} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-1 relative bg-background/50 dark:bg-black/20 backdrop-blur-md group-hover:bg-background/80 dark:group-hover:bg-black/40 transition-colors duration-700">
                <div className="transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-1">
                  <span className="font-bold tracking-[0.15em] uppercase mb-3 block text-[10px] text-foreground/60">
                    {article.cat}
                  </span>
                  <h4 className="font-semibold leading-tight mb-2 pr-6 text-xl">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-4 font-bold tracking-wider mt-auto pt-4 text-[10px] text-foreground/40">
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {article.time}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {article.date}</span>
                  </div>
                </div>
                <div className="absolute right-6 top-6 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500">
                  <ArrowRight className="w-5 h-5 text-foreground/80" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutomotiveTimeline() {
  const decades = [
    { year: "1960s", title: "The Era Of Elegance" },
    { year: "1970s", title: "The Birth Of Supercars" },
    { year: "1980s", title: "The Golden Performance Era" },
    { year: "1990s", title: "The Modern Classic Era" },
  ];

  return (
    <section className="w-full py-24 bg-foreground/[0.02] border-y border-foreground/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-semibold tracking-tight mb-16 text-xl md:text-2xl lg:text-4xl"
        >
          Decades Of Automotive Evolution
        </motion.h2>

        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 relative snap-x snap-mandatory">
          {/* Horizontal connection line */}
          <div className="absolute top-1/2 left-0 w-[200%] h-px bg-foreground/10 -translate-y-1/2 hidden md:block z-0" />
          
          {decades.map((decade, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 w-[280px] md:w-[320px] snap-start relative z-10"
            >
              <div className="glass-panel p-8 rounded-[32px] group hover:bg-foreground/5 transition-colors duration-700 cursor-pointer border border-foreground/5 hover:border-foreground/20">
                <h3 className="font-semibold mb-4 group-hover:text-foreground transition-colors text-xl md:text-2xl lg:text-4xl">{decade.year}</h3>
                <p className="font-medium text-xl text-foreground">{decade.title}</p>
                <div className="mt-8 flex items-center gap-2 font-semibold opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500 text-sm text-foreground/60">
                  Explore Decade <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularStories() {
  const trending = [
    { title: "Ferrari F40 Legacy", views: "250K" },
    { title: "Porsche 959 Story", views: "180K" },
    { title: "Lamborghini Miura History", views: "150K" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 rounded-full glass-panel !bg-foreground/5 flex items-center justify-center text-foreground">
          <TrendingUp className="w-5 h-5" />
        </div>
        <h2 className="font-semibold tracking-tight text-xl md:text-2xl lg:text-3xl">Trending Among Enthusiasts</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trending.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-8 rounded-[32px] border border-foreground/5 hover:border-foreground/15 transition-all duration-700 cursor-pointer group hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="font-bold tracking-[0.2em] uppercase text-[10px] text-foreground/40">0{i + 1}</span>
              <div className="flex items-center gap-1.5 font-semibold bg-foreground/5 px-3 py-1.5 rounded-full text-xs text-foreground/60">
                <Eye className="w-3.5 h-3.5" /> {item.views} views
              </div>
            </div>
            <h3 className="font-semibold leading-tight group-hover:text-foreground/70 transition-colors pr-4 text-lg md:text-xl lg:text-2xl">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function NewsletterExperience() {
  return (
    <section className="w-full px-6 py-12 mb-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto glass-panel rounded-[40px] p-12 md:p-24 relative overflow-hidden border border-foreground/10 text-center"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-foreground/5 blur-[120px] rounded-full pointer-events-none transform -rotate-12" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-semibold tracking-tight mb-6 text-3xl md:text-4xl lg:text-6xl">
            Receive The World's Greatest Automotive Stories.
          </h2>
          <p className="font-medium mb-12 text-xl text-foreground/60">
            Weekly stories, rare vehicles, and automotive history delivered directly to your inbox.
          </p>
          
          <div className="glass-panel !bg-background/50 dark:!bg-black/50 p-2 rounded-full flex flex-col sm:flex-row gap-2 max-w-xl mx-auto shadow-xl">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-transparent border-none outline-none px-6 h-14 placeholder:text-foreground/40 font-medium text-foreground placeholder:text-foreground/40"
            />
            <button className="h-14 px-8 rounded-full bg-foreground font-semibold hover:opacity-90 transition-opacity text-background">
              Join The Archive
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 pt-20 pb-10 px-6 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full relative overflow-hidden">
               <Image src="/assets/images/logo.jpeg" alt="Logo" fill className="object-cover" unoptimized />
            </div>
            <span className="font-semibold tracking-tight text-xl">Classic Cars</span>
          </div>
          
          <div className="flex flex-wrap gap-8 font-semibold text-sm text-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors hover:text-foreground">Explore</a>
            <a href="#" className="hover:text-foreground transition-colors hover:text-foreground">Archive</a>
            <a href="#" className="hover:text-foreground transition-colors hover:text-foreground">Stories</a>
            <a href="#" className="hover:text-foreground transition-colors hover:text-foreground">Partners</a>
            <a href="#" className="hover:text-foreground transition-colors hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors hover:text-foreground">Twitter</a>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-foreground/10 font-semibold tracking-wider uppercase text-xs text-foreground/40">
          <p>© {new Date().getFullYear()} Classic Cars Archive.</p>
          <p>The Global Automotive Publication.</p>
        </div>
      </div>
    </footer>
  );
}
