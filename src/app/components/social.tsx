import Image from 'next/image'
import Link from 'next/link'

export default function  Social(){

    return (
        <main className='bg-black relative flex flex-col gap-4 py-4 text-sm text-white w-full md:flex-row md:justify-between md:px-12 '>
            <div className="flex gap-4 justify-center font-heebo font-semibold">
                 <Link href="mailto:info@hinafri.com" className='flex items-center gap-2'> <Image src='/mail.png' alt="mail" width={300} height={300} className='w-3 h-2 '  /> info@hinafri.com</Link>
                 <Link href="tel:+918798836200" className='flex items-center gap-2'> <Image src='/phone.png' alt="phone" width={300} height={300} className='w-3 h-2 '/> (91)87-988-36200 </Link>
                
            </div>
            <div className='flex self-center gap-3'>
                <Link href="/"> <Image src='/facebook.png' alt="facebook" width={300} height={300} className='w-3 h-3 ' /> </Link>
                <Link href="/"> <Image src='/twitter.png' alt="twitter" width={300} height={300} className='w-3 h-3 '/> </Link>
                <Link href="/"> <Image src='/pinterest.png' alt="pinterest" width={300} height={300} className='w-3 h-3 '/> </Link>
                <Link href="/"> <Image src='/linkedin.png' alt="linkedin" width={300} height={300} className='w-3 h-3 '/> </Link>
            </div>
        </main>
    )
}