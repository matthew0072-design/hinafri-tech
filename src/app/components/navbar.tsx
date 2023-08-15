"use client"

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header className='flex w-full items-center gap-24 md:p-4 bg-black md:justify-between text-white'>
            
            <div className='flex font-montserrat font-bold px-4 lg:text-base'>
                <Link href="/" className='flex items-center gap-1'> <Image src="/Hinafri.png" alt='hinafri' width={200} height={200} className='w-[43.947px] h-[44.761px] ' /> Hinafri Tech  </Link>
            </div>
            
           <div className='hidden lg:flex items-center gap-8 font-heebo font-bold text-sm leading-6'>
                
                <Link href="/" className='flex items-center gap-1' >Home   </Link>
                <Link href="/"  className='flex items-center gap-1'>Services <Image src="/arrowdown.png" alt='arrow down' width={300} height={300} className='w-[9px] h-[10px] ' />  </Link>
                <Link href="/"  className='flex items-center gap-1'>About Us   </Link>
                <Link href="/"  className='flex items-center gap-1'>Customer Stories   </Link>
                <Link href="/" >Contact us   </Link>  
                 
            </div>
            <div className='hidden md:px-8 lg:flex'>
                <Link href="/" className='h-[52px] w-[125px] border text-[#30B666] font-heebo text-sm font-bold leading-[22px] flex items-center justify-center border-[#30B666] rounded-tl-[24px] rounded-br-[24px] '>Get started </Link>
            </div>
            <div className="lg:hidden ">
            {isNavOpen ? (<div  className={`fixed flex flex-col top-0 left-0 h-full translate-x-0 w-full bg-gray-900 text-white transition duration-700 ease-in-out transform z-50 slide-in ${isNavOpen ? 'translate-x-0' : 'translate-full' } `} >
                
                <div onClick={() => setIsNavOpen(!isNavOpen)} className=" m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className=" hover:cursor-pointer"
                    width="20" 
                    height="21">
                    <g fill="#30B666" fillRule="evenodd">
                    <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
                    <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
                    </g>
                    </svg>
                </div>
                <nav className='flex flex-col p-4'>
                     
                     <Link href="/"   onClick={() => setIsNavOpen(false)} >Home</Link>
                     <Link href="/service"    onClick={() => setIsNavOpen(false)}>Services</Link>
                     <Link href="/about"   onClick={() => setIsNavOpen(false)}>About Us</Link>
                     <Link href="/customer"  onClick={() => setIsNavOpen(false)}>Customer Stories</Link>    
                     <Link href="/contact"  onClick={() => setIsNavOpen(false)}>Contact us</Link>  
                       
             </nav>
                </div>): (
                   <div  onClick={() => setIsNavOpen(!isNavOpen)} >
                   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                       <path d="M4.68359 18.7554H20.4336M4.68359 12.7554H20.4336M4.68359 6.75537H20.4336" stroke="#30B666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
               </div>
              
               
                )}
            </div>
            
            
            
            
        </header>
    )
}