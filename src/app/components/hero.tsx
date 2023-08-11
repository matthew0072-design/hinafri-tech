import Image from 'next/image'
export default function Hero(){

    return(
        <main className='bg-black text-white flex flex-col gap-4 md:flex-row md:justify-around md:items-center md:gap-8  px-4 py-8'>
            <div className='flex flex-col gap-4 md:w-[817px]  '>
                <p className='font-montserrat text-2xl md:text-[42px] md:leading-[52px] font-bold leading-9 '>Innovative Software Solutions for the Healthcare Providers.</p>
                <p className='font-heebo text-lg leading-7 text-[#FFcFC] '>Streamline Your Operations and Improve Patient Care with Our Custom-built Software. Whether you&apos;re a hospital, clinic, or a private practice, our software solution can help you improve care, reduce cost and enhance efficiency.</p>
            </div>
            <div>
                <Image src="/impact.jpg.png" alt='hero' width={300} height={300} className='md:w-[409px] md:h-[409px] ' priority />
            </div>
        </main>
    )
}