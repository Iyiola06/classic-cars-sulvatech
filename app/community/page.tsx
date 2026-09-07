import Navigation from '@/components/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navigation />
      
      <div className="relative min-h-[60vh] w-full flex items-center pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-6">
              Community
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed font-light mb-12">
              Join enthusiasts and collectors from around the globe. Share your passion, discuss restorations, and explore classic car culture together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2">
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
               <h4 className="text-xl font-serif font-medium">Restoration update: 1969 Mustang Mach 1</h4>
               <p className="text-foreground/70 text-sm line-clamp-3">
                 Just got the engine block back from the machine shop. It's looking beautiful and ready for reassembly this weekend. Can't wait to hear it roar!
               </p>
               <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-foreground/50 group-hover:text-foreground transition-colors">
                 Read Discussion &rarr;
               </div>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
}
