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
    <section className="relative min-h-[90vh] md:min-h-[700px] w-full flex items-center overflow-hidden pt-40 pb-24 px-6 lg:px-12">
      {/* Cinematic Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/assets/images/lexus-is500.jpeg"
          alt="Premium Automotive Event"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
          unoptimized
        />
        {/* Dark Corporate Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-transparent dark:from-[#050505] dark:via-[#050505]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent dark:from-[#050505]/80" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="font-bold tracking-[0.25em] uppercase mb-8 block drop-shadow-md text-[10px] md:text-xs text-white/70">
            Partnership Platform
          </span>
          <h1 className="text-white font-semibold leading-[1.05] tracking-tight  drop-shadow-xl mb-8 text-4xl md:text-6xl lg:text-[80px]">
            Connect With The World's Most Passionate Automotive Community.
          </h1>
          <p className="text-white/70 font-medium leading-relaxed mb-12 max-w-2xl text-lg md:text-xl lg:text-2xl">
            Classic Cars transforms a 650K+ enthusiast audience into a premium automotive media ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="h-14 px-8 rounded-full bg-foreground font-semibold hover:opacity-90 transition-transform duration-500 hover:-translate-y-1 shadow-xl text-background text-sm">
              Request Media Kit
            </button>
            <button className="h-14 px-8 rounded-full glass-panel font-semibold hover:bg-foreground/5 transition-transform duration-500 hover:-translate-y-1 text-sm">
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
        <h2 className="font-bold tracking-[0.2em] uppercase mb-12 text-sm text-foreground/40">Our Community</h2>
        
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
              <div className="font-semibold tracking-tight mb-4 font-serif text-3xl md:text-4xl lg:text-6xl">
                {stat.value}
              </div>
              <div className="font-medium max-w-[150px] text-sm md:text-base text-foreground/60">
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
          className="font-semibold tracking-tight mb-16 text-2xl md:text-4xl lg:text-5xl"
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
              <div className="w-12 h-12 rounded-full glass-panel !bg-foreground/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 text-foreground">
                <profile.icon className="w-5 h-5 opacity-80" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold mb-3 tracking-tight text-xl">{profile.title}</h3>
              <p className="text-foreground/70 font-medium leading-relaxed text-foreground/60 text-sm">{profile.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnershipOpportunities() {
  const opportunities = [
    { title: "Sponsored Features", desc: "Premium editorial stories highlighting automotive products with magazine-quality production.", img: "/assets/images/mercedes-e63.jpeg" },
    { title: "Vehicle Launches", desc: "High-impact digital campaigns introducing new vehicles to an eager global audience.", img: "/assets/images/lamborghini-miura.jpeg" },
    { title: "Brand Partnerships", desc: "Long-term collaborations establishing authority alongside legendary automotive companies.", img: "/assets/images/ferrari-f40-lm.jpeg" },
    { title: "Affiliate Experiences", desc: "Curated, high-conversion recommendations for premium automotive accessories and lifestyle.", img: "/assets/images/koenigsegg-ccr.jpeg" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-semibold tracking-tight mb-16 text-2xl md:text-4xl lg:text-5xl"
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
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end relative z-10 text-white">
              <h3 className="font-semibold mb-3 tracking-tight text-xl md:text-2xl lg:text-3xl">{opp.title}</h3>
              <p className="font-medium max-w-md transform translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 text-foreground/70 text-base">
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
            <span className="font-bold tracking-[0.2em] uppercase mb-6 block text-[10px] text-foreground/50">Featured Partnership Experience</span>
            <h2 className="font-semibold tracking-tight leading-tight mb-8 text-2xl md:text-4xl lg:text-5xl">
              Luxury Performance Brand Launch
            </h2>
            
            <div className="space-y-12">
              <div>
                <h4 className="font-bold tracking-widest uppercase mb-4 text-sm text-foreground/40">Deliverables</h4>
                <ul className="space-y-3">
                  {["Editorial Feature", "Social Promotion", "Community Engagement", "Audience Insights"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-foreground/40" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8 border-t border-foreground/10">
                <h4 className="font-bold tracking-widest uppercase mb-6 text-sm text-foreground/40">Campaign Metrics</h4>
                <div className="flex justify-between items-end gap-4">
                  <div>
                    <div className="font-semibold tracking-tight text-xl md:text-2xl lg:text-3xl">4.2M</div>
                    <div className="font-medium uppercase tracking-widest mt-1 text-xs text-foreground/50">Total Reach</div>
                  </div>
                  <div>
                    <div className="font-semibold tracking-tight text-xl md:text-2xl lg:text-3xl">315K</div>
                    <div className="font-medium uppercase tracking-widest mt-1 text-xs text-foreground/50">Engagement</div>
                  </div>
                  <div>
                    <div className="font-semibold tracking-tight text-xl md:text-2xl lg:text-3xl">+14%</div>
                    <div className="font-medium uppercase tracking-widest mt-1 text-xs text-foreground/50">Brand Lift</div>
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
                  <span className="font-medium text-sm text-foreground/60">Views</span>
                  <span className="font-semibold text-lg">250,000</span>
                </div>
                <div className="glass-panel !bg-foreground/5 p-4 rounded-2xl flex justify-between items-center">
                  <span className="font-medium text-sm text-foreground/60">Engagement</span>
                  <span className="font-semibold text-lg text-emerald-500">8.5%</span>
                </div>
                <div className="glass-panel !bg-foreground/5 p-4 rounded-2xl flex justify-between items-center">
                  <span className="font-medium text-sm text-foreground/60">Audience Interest</span>
                  <span className="font-semibold text-lg">High</span>
                </div>
                <div className="glass-panel !bg-foreground/5 p-4 rounded-2xl flex justify-between items-center">
                  <span className="font-medium text-sm text-foreground/60">Partner Satisfaction</span>
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
        <h3 className="font-bold tracking-[0.2em] uppercase mb-16 text-sm text-foreground/40">Designed For Global Brands</h3>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: i * 0.2 }}
              className="font-serif font-semibold tracking-widest text-lg md:text-xl text-foreground/80"
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
          src="/assets/images/lamborghini-miura.jpeg"
          alt="Final CTA Background"
          fill
          className="object-cover object-center"
          referrerPolicy="no-referrer"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 glass-panel !bg-background/20 dark:!bg-[#111]/40 !border-white/10 p-12 md:p-20 rounded-[40px] max-w-4xl w-[90%] md:w-full backdrop-blur-3xl shadow-2xl text-center"
      >
        <h2 className="font-semibold tracking-tight mb-10 leading-tight text-3xl md:text-4xl lg:text-6xl">
          Build The Future Of Automotive Culture With Classic Cars.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="h-14 px-8 w-full sm:w-auto rounded-full bg-white font-semibold hover:bg-white/90 transition-transform duration-300 hover:scale-105 shadow-xl text-black">
            Request Partnership Deck
          </button>
          <button className="h-14 px-8 w-full sm:w-auto rounded-full border border-white/20 font-semibold hover:bg-white/10 transition-colors duration-300 text-white">
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
            <span className="font-semibold tracking-tight text-xl">Classic Cars</span>
          </div>
          
          <div className="flex flex-wrap gap-8 font-semibold text-sm text-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors hover:text-foreground">About</a>
            <a href="#" className="hover:text-foreground transition-colors hover:text-foreground">Archive</a>
            <a href="#" className="hover:text-foreground transition-colors hover:text-foreground">Stories</a>
            <a href="#" className="hover:text-foreground transition-colors hover:text-foreground">Partnerships</a>
            <a href="#" className="hover:text-foreground transition-colors hover:text-foreground">Contact</a>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-foreground/10 font-semibold tracking-wider uppercase text-xs text-foreground/40">
          <p>© {new Date().getFullYear()} Classic Cars Archive.</p>
          <p>Global Media Platform.</p>
        </div>
      </div>
    </footer>
  );
}
