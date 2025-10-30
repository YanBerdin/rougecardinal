import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ 
  subsets: ['latin'],
  preload: false
});

export const metadata: Metadata = {
  title: 'Rouge-Cardinal - Compagnie de Théâtre',
  description: 'Compagnie de théâtre Rouge-Cardinal - Découvrez nos spectacles, notre équipe et notre passion pour les arts de la scène.',
  keywords: 'théâtre, compagnie, spectacle, rouge-cardinal, arts, scène, culture',
  authors: [{ name: 'Rouge-Cardinal' }],
  creator: 'Rouge-Cardinal',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://rouge-cardinal.fr',
    title: 'Rouge-Cardinal - Compagnie de Théâtre',
    description: 'Compagnie de théâtre Rouge-Cardinal - Découvrez nos spectacles, notre équipe et notre passion pour les arts de la scène.',
    siteName: 'Rouge-Cardinal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rouge-Cardinal - Compagnie de Théâtre',
    description: 'Compagnie de théâtre Rouge-Cardinal - Découvrez nos spectacles, notre équipe et notre passion pour les arts de la scène.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://rouge-cardinal.fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}