"use client"

import './globals.css'
import { useEffect } from 'react'
import type { Metadata } from 'next'
import { Heebo, Montserrat } from 'next/font/google'
import AOS from 'aos'
import 'aos/dist/aos.css'




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
  
    


// export const metadata: Metadata = {
//   title: 'Hinafri',
//   description: 'Landing Page for Hinafricare',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AOS.init({
         duration: 1000,
         once: false,
       })
 }, [])

  return (
    <html lang="en">
      <body className={`${heebo.variable} ${montserrat.variable} `}>{children}</body>
    </html>
  )
}
