import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Preloader from '@/components/layout/Preloader';

export const metadata = {
  metadataBase: new URL('https://southernsuperriders.lk'),
  title: {
    default: 'Southern Super Riders (SSR) | Premier Motorcycle Club Sri Lanka',
    template: '%s | Southern Super Riders (SSR)',
  },
  description:
    'Southern Super Riders (SSR) is a high-capacity motorcycle riding club based in the Southern Province of Sri Lanka. One Brotherhood. One Passion. Endless Roads.',
  keywords: [
    'Southern Super Riders',
    'SSR Sri Lanka',
    'Superbike club Sri Lanka',
    'Motorcycle club Southern Province',
    'Ride Sigiriya',
    'High capacity motorbikes Sri Lanka',
    'Galle superbike',
    'Matara riders',
    'Sri Lanka motorcycle touring',
  ],
  authors: [{ name: 'Southern Super Riders' }],
  creator: 'Southern Super Riders',
  publisher: 'Southern Super Riders',
  icons: {
    icon: '/assets/logo.jpg',
    apple: '/assets/logo.jpg',
  },
  openGraph: {
    title: 'Southern Super Riders (SSR) | One Brotherhood. One Passion. Endless Roads.',
    description:
      'Premier high-capacity motorcycle riding club based in Sri Lanka’s Southern Province. Explore verified cross-country rides, events, and brotherhood.',
    url: 'https://southernsuperriders.lk',
    siteName: 'Southern Super Riders',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Southern Super Riders Superbike Fleet',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Southern Super Riders (SSR) | Superbike Club Sri Lanka',
    description:
      'One Brotherhood. One Passion. Endless Roads. High-capacity motorcycle club in Southern Province, Sri Lanka.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-ssr-bg text-white antialiased flex flex-col min-h-screen">
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
