import Navigation from '@/components/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navigation />
      
      <div className="relative min-h-[60vh] w-full flex items-center pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl mx-auto glass-panel p-10 md:p-16 rounded-3xl">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-serif tracking-tighter mb-4">
                Sign In
              </h1>
              <p className="text-foreground/60">
                Access your garage, saved cars, and the community.
              </p>
            </div>
            
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide text-foreground/80">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 outline-none focus:border-foreground/30 transition-colors"
                  placeholder="name@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide text-foreground/80">Password</label>
                <input 
                  type="password" 
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 outline-none focus:border-foreground/30 transition-colors"
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                />
              </div>
              
              <button type="button" className="w-full py-4 mt-4 bg-foreground text-background font-bold rounded-xl hover:scale-[1.02] transition-transform">
                Sign In
              </button>
              
              <div className="text-center mt-4 text-sm text-foreground/60">
                Don't have an account? <a href="#" className="text-foreground font-semibold hover:underline">Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
