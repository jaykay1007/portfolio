import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Jayakkumar K - React & Next.js Developer',
  description: 'Experienced React & Next.js developer with 5+ years of expertise in building high-performance web applications. Specializing in AI integrations and modern frontend development.',
  keywords: [
    'React Developer',
    'Next.js Developer',
    'Front-End Engineer',
    'TypeScript',
    'JavaScript',
    'AI-SDK Integration',
    'Full Stack Developer',
    'FAANG Ready Developer'
  ],
  authors: [{ name: 'Jayakkumar K' }],
  creator: 'Jayakkumar K',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jayakkumar.dev',
    title: 'Jayakkumar K | Senior React & Next.js Developer',
    description: 'Experienced Front-End Engineer with 5+ years building enterprise-scale applications',
    siteName: 'Jayakkumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jayakkumar K | Senior React & Next.js Developer',
    description: 'Experienced Front-End Engineer with 5+ years building enterprise-scale applications',
    creator: '@jayakkumar',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
