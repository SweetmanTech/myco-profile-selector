import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { Analytics } from '@vercel/analytics/react'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Providers from '@/providers/Providers'

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="font-nounish overflow-hidden">
      <body className="overflow-hidden bg-background flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <Header />
        <Providers>{children}</Providers>
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  )
}
