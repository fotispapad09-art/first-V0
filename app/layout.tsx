
  import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'ClearTrade AI | Compliance, at the speed of markets',
  description: 'AI-powered compliance infrastructure for modern financial institutions.',
  keywords: ['financial compliance', 'AI compliance', 'brokerage compliance', 'ClearTrade AI'],
  authors: [{ name: 'ClearTrade AI' }],
  openGraph: { title: 'ClearTrade AI', description: 'Compliance, at the speed of markets.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'ClearTrade AI', description: 'AI-powered compliance infrastructure.' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0b101d', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}<SpeedInsights /></body></html>
}
