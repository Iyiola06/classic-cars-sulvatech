import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles
import { ThemeProvider } from '@/components/theme-provider';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Classic Cars | The Global Automotive Archive',
  description: 'The world\'s premium automotive archive and enthusiast platform.',
  openGraph: {
    title: 'Classic Cars',
    description: 'The world\'s premium automotive archive and enthusiast platform.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classic Cars',
    description: 'The world\'s premium automotive archive and enthusiast platform.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.className} antialiased transition-colors duration-700`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
