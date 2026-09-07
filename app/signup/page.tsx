'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Shield, Sparkles, User, Mail, Lock, Car } from 'lucide-react';

export default function SignupPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    favoriteCar: '',
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background relative overflow-x-hidden">
      <Navigation />

      {/* Hero Background Banner */}
      <div className="absolute top-0 left-0 w-full h-[400px] z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2400&auto=format&fit=crop"
          alt="Automotive background"
          fill
          className="object-cover object-center opacity-30 dark:opacity-20"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <div className="relative z-10 pt-36 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <span className="font-bold tracking-[0.25em] uppercase text-xs text-foreground/60 block mb-3">
              The Global Automotive Archive
            </span>
            <h1 className="font-serif tracking-tight text-3xl md:text-5xl mb-3">
              Create Your Account
            </h1>
            <p className="text-foreground/70 text-base md:text-lg max-w-md mx-auto">
              Join 650K+ enthusiasts. Build your personal digital garage, save legends, and share stories.
            </p>
          </div>

          {/* Card Container */}
          <div className="glass-panel p-8 md:p-12 rounded-[32px] border border-foreground/10 shadow-2xl relative overflow-hidden backdrop-blur-2xl bg-background/60 dark:bg-[#111]/60">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center flex flex-col items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg">
                  <Check className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Welcome to Classic Cars!</h3>
                  <p className="text-foreground/70 max-w-sm mx-auto text-sm">
                    Your member account has been created successfully. You can now curate your garage and save automotive legends.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
                  <Link
                    href="/garage"
                    className="flex-1 py-4 bg-foreground text-background font-semibold rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform text-sm"
                  >
                    Open My Garage <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/archive"
                    className="flex-1 py-4 border border-foreground/20 font-semibold rounded-full flex items-center justify-center hover:bg-foreground/5 transition-colors text-sm"
                  >
                    Browse Archive
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div>
                {/* Form Toggle Tabs */}
                <div className="flex bg-foreground/5 p-1.5 rounded-full mb-8 border border-foreground/10">
                  <Link
                    href="/profile"
                    className="flex-1 text-center py-2.5 rounded-full font-medium text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    Sign In
                  </Link>
                  <button
                    type="button"
                    className="flex-1 text-center py-2.5 rounded-full font-semibold text-sm bg-foreground text-background shadow-md"
                  >
                    Sign Up
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-xs text-foreground/80 flex items-center gap-1.5 uppercase tracking-wider">
                        <User className="w-3.5 h-3.5 text-foreground/50" /> Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enzo Ferrari"
                        className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-xs text-foreground/80 flex items-center gap-1.5 uppercase tracking-wider">
                        <User className="w-3.5 h-3.5 text-foreground/50" /> Username
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        placeholder="@enzo_scuderia"
                        className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-xs text-foreground/80 flex items-center gap-1.5 uppercase tracking-wider">
                      <Mail className="w-3.5 h-3.5 text-foreground/50" /> Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="enzo@ferrari.com"
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-xs text-foreground/80 flex items-center gap-1.5 uppercase tracking-wider">
                      <Lock className="w-3.5 h-3.5 text-foreground/50" /> Password
                    </label>
                    <input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••••••"
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-xs text-foreground/80 flex items-center gap-1.5 uppercase tracking-wider">
                      <Car className="w-3.5 h-3.5 text-foreground/50" /> Favorite / Dream Vehicle (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.favoriteCar}
                      onChange={(e) => setFormData({ ...formData, favoriteCar: e.target.value })}
                      placeholder="e.g. 1962 Ferrari 250 GTO"
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors"
                    />
                  </div>

                  <label className="flex items-start gap-3 mt-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-1 rounded border-foreground/20 text-foreground focus:ring-foreground"
                    />
                    <span className="text-xs text-foreground/70 leading-relaxed">
                      I agree to the <a href="#" className="underline font-semibold text-foreground">Terms of Service</a> and <a href="#" className="underline font-semibold text-foreground">Privacy Policy</a>.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-4 mt-3 bg-foreground text-background font-semibold rounded-full flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform shadow-lg text-sm"
                  >
                    Complete Sign Up <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="relative my-4 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-foreground/10" />
                    </div>
                    <span className="relative z-10 bg-background/80 px-4 text-xs uppercase tracking-widest text-foreground/50 font-semibold">
                      Or Join With
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(true)}
                      className="py-3 px-4 border border-foreground/15 rounded-2xl font-medium text-xs flex items-center justify-center gap-2 hover:bg-foreground/5 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      Google
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(true)}
                      className="py-3 px-4 border border-foreground/15 rounded-2xl font-medium text-xs flex items-center justify-center gap-2 hover:bg-foreground/5 transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.63-.78 1.06-1.85.94-2.93-.92.04-2.05.62-2.7 1.39-.58.68-1.09 1.77-.95 2.83 1.03.08 2.08-.51 2.71-1.29z" />
                      </svg>
                      Apple
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="mt-8 text-center text-xs text-foreground/50">
            Already have an account?{' '}
            <Link href="/profile" className="font-semibold text-foreground hover:underline">
              Sign in here
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
