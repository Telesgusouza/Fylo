import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import icon from '../../public/icons/icon1.png';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fylo',
  description: 'Todos os seus arquivos em um local seguro',
  icons: {
    icon: '../../public/icons/icon1.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
