import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Fraunces } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const title = 'STARDUST — Mariam Adesanya, Graphic & Visual Designer';
const description =
  'STARDUST is the portfolio of Mariam Adesanya, a graphic and visual communication designer.';

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s — STARDUST',
  },
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'STARDUST',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${fraunces.variable}`}>
      <body>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
