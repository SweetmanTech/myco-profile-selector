import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ReactNode } from 'react'
import Header from '@/components/Header'

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="font-nounish overflow-hidden">
      <body className="overflow-hidden bg-background flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
