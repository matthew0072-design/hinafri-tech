
import './globals.css'

import type { Metadata } from 'next'
import { Heebo, Montserrat } from 'next/font/google'



const heebo = Heebo({
  
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-heebo'

  })

  const montserrat = Montserrat({
  
    subsets: ['latin'], 
    display: 'swap',
    variable: '--font-montserrat'
  
    })
  
    


export const metadata: Metadata = {
  title: 'Hinafri',
  description: 'Landing Page for Hinafricare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={`${heebo.variable} ${montserrat.variable} `}>{children}</body>
    </html>
  )
}
