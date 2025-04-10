import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AI Agent Toolkit',
  description: 'A curated collection of AI tools, frameworks, and resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-background-light to-card-light text-slate-900 min-h-screen`}>
        {children}
        <footer className="text-center py-6 text-sm text-slate-500">
          Crafted with ❤️ by Candy
        </footer>
      </body>
    </html>
  )
}
