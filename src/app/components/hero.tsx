import Link from 'next/link'
import Image from 'next/image'
export default function Hero(){

    return(
        <main className='bg-black w-full text-white flex flex-col gap-8 md:flex-row md:justify-around md:items-center md:gap-8 pt-8  px-4 py-8'>
            <div data-aos="fade-right" className='flex flex-col gap-8 md:w-[480px] lg:w-[668px]  '>
                <div className='flex flex-col gap-4   '>
                    <p className='font-montserrat text-2xl tracking-[0.5px] md:text-[35px] lg:text-[50px] lg:leading-[58.5px]  md:leading-[52px] font-bold leading-9 lg:h-[234px] '>Close the gap with automation. From patient onboarding to clinical work.</p>
                    <p className='font-heebo text-lg leading-7 text-[#FFCFC] '>Enhance your healthcare delivery with automation, and maximize revenue from online appointment scheduling, patient registration and intake,  data authorization and security. </p>
                </div>
                <div className='flex flex-col gap-2 md:px-8 lg:flex-row lg:gap-8 '>
                    <Link href="/" className='h-[49px] w-[177px] border bg-[#30B666] font-heebo text-xl font-bold leading-[22px] flex items-center justify-center border-[#30B666] rounded-tl-[24px] rounded-br-[24px] '>Get started </Link>
                    <button className='flex items-center text-xl font-heebo gap-4 lg:gap-2'><Image src="/playIcon.png" alt='play back' width={300} height={300} className='w-6 h-6 ' />  watch demo</button>
               </div>
            </div>
            
            <div data-aos="fade-left" >
                <Image src="/heroVideo.png" alt='hero' width={300} height={300} className='lg:w-[409px] md:h-[409px] ' priority />
                
            </div>
        </main>
    )
}