import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){

    return (
        <header className='flex bg-black md:justify-between text-white'>
            
            <div className='flex font-montserrat font-bold px-4 lg:text-base'>
                <Link href="/" className='flex items-center gap-1'> <Image src="/Hinafri.png" alt='hinafri' width={200} height={200} className='w-7 h-10 ' /> Hinafri Tech  </Link>
            </div>
            
            <div className='hidden lg:flex items-center gap-4 font-heebo font-bold text-sm leading-6'>
                <Link href="/" className='flex items-center gap-1' >Home <Image src="/arrowdown.png" alt='arrow down' width={300} height={300} className='w-[9px] h-[10px] ' />  </Link>
                <Link href="/"  className='flex items-center gap-1'>Solutions <Image src="/arrowdown.png" alt='arrow down' width={300} height={300} className='w-[9px] h-[10px] ' />  </Link>
                <Link href="/"  className='flex items-center gap-1'>Softwares <Image src="/arrowdown.png" alt='arrow down' width={300} height={300} className='w-[9px] h-[10px] ' />  </Link>
                <Link href="/"  className='flex items-center gap-1'>Marketing <Image src="/arrowdown.png" alt='arrow down' width={300} height={300} className='w-[9px] h-[10px] ' />  </Link>
                <Link href="/"  className='flex items-center gap-1'>Industry <Image src="/arrowdown.png" alt='arrow down' width={300} height={300} className='w-[9px] h-[10px] '/>  </Link>
                <Link href="/" >Contact us   </Link>  
                <Image src="/search.png" alt='search' width={300} height={300} className='w-[10px] h-[10px]'/> 
            </div>
            <div className='hidden md:px-8 md:flex'>
                <Link href="/" className='h-[52px] w-[125px] border text-[#30B666] font-heebo text-sm font-bold leading-[22px] flex items-center justify-center border-[#30B666] rounded-tl-[24px] rounded-br-[24px] '>Get started </Link>
            </div>
        </header>
    )
}