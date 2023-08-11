import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){

    return(
        <footer className='bg-black text-white py-12 px-4 flex flex-col gap-4 md:flex-row md:justify-around lg:justify-start md:items-center md:gap-24 lg:px-12 '>
            <div className='flex flex-col gap-4 relative'>
                <div className='font-montserrat text-xl font-bold leading-7 capitalize '><p>where to find us</p></div>
                <div className='flex gap-4 font-bold font-montserrat text-[13px] leading-7 text-[#30B666] '>
                    <Image src="/location.png" alt="location" width={300} height={300} className='w-[30px] h-[38px] ' />
                    <p>New Delhi, Abuja</p>
                </div>
                <div className='flex font-bold gap-4 font-montserrat text-[13px] leading-7 text-[#30B666]  '>
                    <Image src="/mail2.png" alt='mail' width={300} height={300} className='w-[30px] h-[30px] ' />
                    <p>letstalk@hinafri.com</p>
                </div>
                <div className='flex flex-col gap-4 text-xl font-bold leading-7 font-montserrat capitalize '>
                    <div>
                        <p>Follow us</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Image src="/facebook.png" alt='facebook' width={300} height={300} className='w-[12px] h-[18px] '/>
                        <Image src="/twitter.png" alt='twitter' width={300} height={300} className='w-[18px] h-[18px] '/>
                        <Image src="/pinterest.png" alt='pinterest' width={300} height={300} className='w-[14px] h-[18px] '/>
                        <Image src="/linkedin.png" alt='linkedin' width={300} height={300} className='w-[16px] h-[18px] '/>
                    </div>
                </div>
                <div className='hidden md:flex font-bold font-heebo leading-7 text-lg '>
                    <p>&copy; Copyright 2023 Hinafri All rights Reserved</p>
                </div>

            </div>
            <div className='flex flex-col relative  '>
                <div>
                    <label className='font-montserrat text-3xl font-bold leading-[40px] '>Sign up for our newsletter </label> <br/>
                        <input type="email" placeholder='Enter your email' className='h-12 bg-white rounded-ss-[24px] mt-6 p-4 md:w-72 lg:w-[480px] ' />
                        <button className='h-12 rounded-ee-[24px] bg-[#30B666] rounded-ss-[24px] absolute left-[10.1rem] lg:left-[27rem] md:left-[16.6rem] mt-6 px-6 font-bold font-heebo text-sm  '>subscribe</button>
                    
                </div>
                <div className='flex flex-col gap-4 text-[13px] font-heebo leading-7 mt-5 py-4 md:flex-row md:gap-12 '>
                    <div className='flex flex-col'>
                        <p className='text-lg font-montserrat font-bold leading-7  '>Discover</p>
                        <Link href="/" className='opacity-50 '>About us </Link>
                        <Link href="/" className='opacity-50 '>Contact us </Link>
                        <Link href="/" className='opacity-50 '>Cookies Policy </Link>
                    </div>
                    <div className='flex flex-col text-[13px] font-heebo leading-7'>
                        <p className='text-lg font-montserrat font-bold leading-7 '>Solutions</p>
                        <Link href="/" className='opacity-50 '>UX-UI Design </Link>
                        <Link href="/" className='opacity-50 '>Digital Marketing </Link>
                        <Link href="/" className='opacity-50 '>Custom Software </Link>
                    </div>
                </div>
                <div className='flex flex-col text-[13px] font-heebo leading-7'>
                        <p className='text-lg font-montserrat font-bold leading-7 '>Software</p>
                        <Link href="/" className='opacity-50 '>Artificial Intelligent(AI) </Link>
                        <Link href="/" className='opacity-50 '>Big Data/Cloud </Link>
                        <Link href="/" className='opacity-50 '>Blockchain </Link>
                    </div>
            </div>
            <div className=' font-bold font-heebo leading-7 text-lg md:hidden'>
                    <p>&copy; Copyright 2023 Hinafri All rights Reserved</p>
                </div>
        </footer>
    )
}