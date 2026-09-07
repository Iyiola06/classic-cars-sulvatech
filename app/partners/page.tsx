'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Users, Diamond, Car, Shield, Activity, BarChart3, Target, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/navigation';

export default function PartnersPage() {
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
      
      <PartnershipHero />
      <AudienceIntelligence />
      <AudienceProfile />
      <PartnershipOpportunities />
      <CaseStudyShowcase />
      <PartnerLogos />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function PartnershipHero() {
  return (
    <section className="relative h-[80vh] min-h-[700px] w-full flex items-center overflow-hidden pt-20 px-6 lg:px-12">
      {/* Cinematic Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2400&auto=format&fit=crop"
          alt="Premium Automotive Event"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Dark Corporate Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent dark:from-[#050505] dark:via-[#050505]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent dark:from-[#050505]/80" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-foreground/70 dark:text-white/70 mb-8 block drop-shadow-md">
            Partnership Platform
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold leading-[1.05] tracking-tight text-foreground dark:text-white drop-shadow-xl mb-8">
            Connect With The World's Most Passionate Automotive Community.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-foreground/70 dark:text-white/70 leading-relaxed mb-12 max-w-2xl">
            Classic Cars transforms a 650K+ enthusiast audience into a premium automotive media ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="h-14 px-8 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-transform duration-500 hover:-translate-y-1 shadow-xl">
              Request Media Kit
            </button>
            <button className="h-14 px-8 rounded-full glass-panel text-sm font-semibold hover:bg-foreground/5 transition-transform duration-500 hover:-translate-y-1">
              Explore Partnership Opportunities
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ value, suffix = "", duration = 2.5 }: { value: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      animate(0, value, {
        duration,
        ease: [0.16, 1, 0.3, 1], // premium spring-like ease out
        onUpdate: (v) => {
          if (ref.current) ref.current.textContent = Math.round(v) + suffix;
        },
      });
    }
  }, [inView, value, duration, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function AudienceIntelligence() {
  const stats = [
    { value: <Counter value={650} suffix="K+" />, label: "Automotive enthusiasts" },
    { value: "Global", label: "Audience reach" },
    { value: "Thousands", label: "Of automotive stories" },
    { value: "Premium", label: "Collector-focused audience" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-20">
      <div className="glass-panel p-10 md:p-16 rounded-[40px] border border-foreground/5 shadow-sm">
        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-foreground/40 mb-12">Our Community</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-4 font-serif">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-foreground/60 max-w-[150px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceProfile() {
  const profiles = [
    { icon: Users, title: "Car Enthusiasts", desc: "Passionate collectors and automotive fans deeply engaged in car culture." },
    { icon: Diamond, title: "Luxury Audience", desc: "Interested in premium brands, bespoke experiences, and high-end lifestyle." },
    { icon: Car, title: "Automotive Buyers", desc: "High-intent vehicle enthusiasts actively researching their next acquisition." },
    { icon: Shield, title: "Collectors", desc: "People interested in rare, historical vehicles and automotive investments." },
  ];

  return (
    <section className="w-full bg-foreground/[0.02] border-y border-foreground/5 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight mb-16"
        >
          Who We Reach
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 rounded-[32px] group hover:-translate-y-2 hover:bg-foreground/5 transition-all duration-700"
            >
              <div className="w-12 h-12 rounded-full glass-panel !bg-foreground/5 flex items-center justify-center text-foreground mb-8 group-hover:scale-110 transition-transform duration-500">
                <profile.icon className="w-5 h-5 opacity-80" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">{profile.title}</h3>
              <p className="text-foreground/60 text-sm font-medium leading-relaxed">{profile.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnershipOpportunities() {
  const opportunities = [
    { title: "Sponsored Features", desc: "Premium editorial stories highlighting automotive products with magazine-quality production.", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop" },
    { title: "Vehicle Launches", desc: "High-impact digital campaigns introducing new vehicles to an eager global audience.", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop" },
    { title: "Brand Partnerships", desc: "Long-term collaborations establishing authority alongside legendary automotive companies.", img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop" },
    { title: "Affiliate Experiences", desc: "Curated, high-conversion recommendations for premium automotive accessories and lifestyle.", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-semibold tracking-tight mb-16"
      >
        How Brands Can Work With Us
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opportunities.map((opp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-[400px] md:h-[450px] rounded-[32px] overflow-hidden glass-panel border-none cursor-pointer"
          >
            <Image 
              src={opp.img}
              alt={opp.title}
              fill
              className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white relative z-10">
              <h3 className="text-3xl font-semibold mb-3 tracking-tight">{opp.title}</h3>
              <p className="text-white/70 text-base font-medium max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {opp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CaseStudyShowcase() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24">
      <div className="glass-panel rounded-[40px] border border-foreground/10 overflow-hidden shadow-2xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content Side */}
          <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center relative z-10">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/50 mb-6 block">Featured Partnership Experience</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
              Luxury Performance Brand Launch
            </h2>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-sm font-bold tracking-widest uppercase text-foreground/40 mb-4">Deliverables</h4>
                <ul className="space-y-3">
                  {["Editorial Feature", "Social Promotion", "Community Engagement", "Audience Insights"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-foreground/40" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8 border-t border-foreground/10">
                <h4 className="text-sm font-bold tracking-widest uppercase text-foreground/40 mb-6">Campaign Metrics</h4>
                <div className="flex justify-between items-end gap-4">
                  <div>
                    <div className="text-3xl font-semibold tracking-tight">4.2M</div>
                    <div className="text-xs font-medium text-foreground/50 uppercase tracking-widest mt-1">Total Reach</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold tracking-tight">315K</div>
                    <div className="text-xs font-medium text-foreground/50 uppercase tracking-widest mt-1">Engagement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold tracking-tight">+14%</div>
                    <div className="text-xs font-medium text-foreground/50 uppercase tracking-widest mt-1">Brand Lift</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview Side */}
          <div className="bg-foreground/[0.03] p-10 lg:p-20 flex items-center justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-foreground/5">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-sm glass-panel p-8 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-foreground/10 bg-background/60 dark:bg-[#111]/80 backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <Activity className="w-5 h-5 text-foreground/60" />
                <span className="font-semibold tracking-tight">Campaign Performance</span>
              </div>
              
              <div className="space-y-6">
                <div className="glass-panel !bg-foreground/5 p-4 rounded-2xl flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground/60">Views</span>
                  <span className="font-semibold text-lg">250,000</span>
                </div>
                <div className="glass-panel !bg-foreground/5 p-4 rounded-2xl flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground/60">Engagement</span>
                  <span className="font-semibold text-lg text-emerald-500">8.5%</span>
                </div>
                <div className="glass-panel !bg-foreground/5 p-4 rounded-2xl flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground/60">Audience Interest</span>
                  <span className="font-semibold text-lg">High</span>
                </div>
                <div className="glass-panel !bg-foreground/5 p-4 rounded-2xl flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground/60">Partner Satisfaction</span>
                  <span className="font-semibold text-lg">Excellent</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-foreground/10 flex justify-center">
                <BarChart3 className="w-32 h-16 text-foreground/10" strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerLogos() {
  const partners = [
    "LUXURY AUTOMOTIVE",
    "HAUTE HORLOGERIE",
    "PREMIUM LIFESTYLE",
    "ADVANCED TECHNOLOGY"
  ];

  return (
    <section className="w-full py-24 border-y border-foreground/5 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-foreground/40 mb-16">Designed For Global Brands</h3>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: i * 0.2 }}
              className="text-lg md:text-xl font-serif font-semibold tracking-widest text-foreground/80"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="w-full relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2400&auto=format&fit=crop"
          alt="Final CTA Background"
          fill
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 glass-panel !bg-background/20 dark:!bg-[#111]/40 !border-white/10 p-12 md:p-20 rounded-[40px] text-center max-w-4xl w-[90%] md:w-full backdrop-blur-3xl shadow-2xl"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-10 leading-tight">
          Build The Future Of Automotive Culture With Classic Cars.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="h-14 px-8 w-full sm:w-auto rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-transform duration-300 hover:scale-105 shadow-xl">
            Request Partnership Deck
          </button>
          <button className="h-14 px-8 w-full sm:w-auto rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors duration-300">
            Contact Team
          </button>
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
            <span className="font-semibold text-xl tracking-tight">Classic Cars</span>
          </div>
          
          <div className="flex flex-wrap gap-8 text-sm font-semibold text-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Archive</a>
            <a href="#" className="hover:text-foreground transition-colors">Stories</a>
            <a href="#" className="hover:text-foreground transition-colors">Partnerships</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-foreground/10 text-xs font-semibold text-foreground/40 tracking-wider uppercase">
          <p>© {new Date().getFullYear()} Classic Cars Archive.</p>
          <p>Global Media Platform.</p>
        </div>
      </div>
    </footer>
  );
}
