import Navigation from '@/components/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-foreground selection:text-background pb-0 relative overflow-hidden text-foreground selection:text-background">
      <Navigation />
      
      <div className="relative min-h-[60vh] md:min-h-[70vh] w-full flex items-center pt-32 pb-12 px-6 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/images/mercedes-e63.jpeg"
            alt="Community Banner"
            fill
            className="object-cover object-center"
            priority
            referrerPolicy="no-referrer"
            unoptimized
          />
          {/* Dark Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-[#050505]/30 dark:from-[#050505]/95 dark:via-[#050505]/70 dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent dark:from-[#050505]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <h1 className="text-white font-serif tracking-tighter mb-6 text-4xl md:text-6xl lg:text-8xl">
              Community
            </h1>
            <p className="text-white/80 leading-relaxed font-light mb-12 text-lg md:text-xl lg:text-2xl">
              Join enthusiasts and collectors from around the globe. Share your passion, discuss restorations, and explore classic car culture together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-foreground font-semibold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 text-background">
                Join the Club <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="glass-panel p-8 rounded-2xl flex flex-col gap-4 group cursor-pointer hover:-translate-y-2 transition-all">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center font-bold text-sm">
                   U{i}
                 </div>
                 <div>
                   <h3 className="font-semibold text-sm">User {i}</h3>
                   <span className="text-xs text-foreground/50">2 hours ago</span>
                 </div>
               </div>
               <h4 className="font-serif font-medium text-xl">Restoration update: 1969 Mustang Mach 1</h4>
               <p className="line-clamp-3 text-foreground/70 text-sm">
                 Just got the engine block back from the machine shop. It's looking beautiful and ready for reassembly this weekend. Can't wait to hear it roar!
               </p>
               <div className="mt-4 font-semibold uppercase tracking-widest group-hover:text-foreground transition-colors text-xs text-foreground/50 group-hover:text-foreground">
                 Read Discussion &rarr;
               </div>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
}
