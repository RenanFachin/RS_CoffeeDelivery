import type { Metadata } from 'next'
import { Roboto, Baloo_2 } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { CartContextProvider } from '@/contexts/CartProvider'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})
const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-baloo',
})

export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description:
    'Aplicação de uma cafeteria desenvolvida durante o Ignite da @Rocketseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${roboto.variable} ${baloo.variable}`} lang="pt">
      <body className="bg-background max-w-[1120px] mx-auto min-h-screen antialiased">
        <CartContextProvider>
          <Header />
          {children}
        </CartContextProvider>
      </body>
    </html>
  )
}
