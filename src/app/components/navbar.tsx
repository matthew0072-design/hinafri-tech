import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){

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
            <div className='lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M4.68359 18.7554H20.4336M4.68359 12.7554H20.4336M4.68359 6.75537H20.4336" stroke="#30B666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            
        </header>
    )
}