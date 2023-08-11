import Link from 'next/link'

export default function Solution(){

    return(
        <main className='flex flex-col w-full relative text-[#06030B]  '>
            <div className=' text-[24px] text-center font-bold font-montserrat leading-9 p-4 md:border-b  '>
                <p>Explore our healthcare solutions.</p>
            </div>
            <div className='flex flex-col md:flex-row  md:flex-wrap md:justify-around gap-4 md:py-8 lg:gap-12 p-4  '>
                <div className='flex  gap-4 md:w-[300px] lg:w-[410px] lg:h-[94px]  '>
                    <div className='w-20 border rounded-tl-[24px] rounded-br-[24px] h-[94px] shadow-2xl '></div>
                    <div>
                        <p className='text-lg font-bold leading-7 '>Hospital management</p>
                        <p className='text-base  leading-7 font-heebo '>Software technology to support and power your business.</p>
                    </div>
                </div>

                <div className='flex  gap-4 md:w-[300px] lg:w-[410px] lg:h-[94px]'>
                    <div className='w-20 border rounded-tl-[24px] rounded-br-[24px] h-[94px] shadow-2xl '></div>
                    <div>
                        <p className='text-lg font-bold leading-7 '>EHR System</p>
                        <p className='text-base  leading-7 font-heebo '>Build secure and high-grade health records management system.</p>
                    </div>
                </div>

                <div className='flex  gap-4 md:w-[300px] lg:w-[410px] lg:h-[94px]'>
                    <div className='w-20 border rounded-tl-[24px] rounded-br-[24px] h-[94px] shadow-2xl '></div>
                    <div>
                        <p className='text-lg font-bold leading-7 '>Patient self-scheduling system</p>
                        <p className='text-base  leading-7 font-heebo '>Streamline your patient appointment booking with a scheduling application.</p>
                    </div>
                </div>

                <div className='flex  gap-4 md:w-[300px] lg:w-[410px] lg:h-[94px]'>
                    <div className='w-20 border rounded-tl-[24px] rounded-br-[24px] h-[94px] shadow-2xl '></div>
                    <div>
                        <p className='text-lg font-bold leading-7 '>Medication Management</p>
                        <p className='text-base  leading-7 font-heebo '>Reduce patient medication complexity with an automate monitory and reminder system.</p>
                    </div>
                </div>

                <div className='flex  gap-4 md:w-[300px] lg:w-[410px] lg:h-[94px]'>
                    <div className='w-20 border rounded-tl-[24px] rounded-br-[24px] h-[94px] shadow-2xl '></div>
                    <div>
                        <p className='text-lg font-bold leading-7 '>Remote patient monitoring</p>
                        <p className='text-base  leading-7 font-heebo '>We create research based Apps for your business.</p>
                    </div>
                </div>

                <div className='flex  gap-4 md:w-[300px]  lg:w-[410px] lg:h-[94px]'>
                    <div className='w-20 border rounded-tl-[24px] rounded-br-[24px] h-[94px] shadow-2xl '></div>
                    <div>
                        <p className='text-lg font-bold leading-7 '>Health and Wellness tracking</p>
                        <p className='text-base  leading-7 font-heebo '>We help you hire the right team that is passionate and result oriented.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start text-white bg-[#30B666] py-8 font-bold w-full md:flex-row md:items-center md:justify-around  '>
                <div className='font-montserrat text-3xl p-8 leading-10 md:w-[500px] lg:w-auto '>
                    <p>Ready to build your healthcare solution?</p>
                </div>
                <div>
                    <Link href="/" className='bg-[#06030B] border border-[#06030B] outline-none font-bold font-heebo rounded-tl-[24px] rounded-br-[24px] p-3 ml-8 '>Get started</Link>
                </div>
            </div>
        </main>
    )
}