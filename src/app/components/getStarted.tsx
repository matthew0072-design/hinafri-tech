import Link from 'next/link'

export default function GetStarted(){

    return (
        <div className='flex flex-col items-start text-white bg-[#30B666]    '>
            <svg className=" w-full  text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fillOpacity="1" className='fill-white' d="M0,224L48,186.7C96,149,192,75,288,80C384,85,480,171,576,208C672,245,768,235,864,192C960,149,1056,75,1152,53.3C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <div className='flex flex-col gap-8 md:gap-12 p-8 md:items-center  md:justify-center lg:justify-around   lg:gap-36 w-full lg:flex-row'>
                <div data-aos="fade-right" >
                    <p className='font-montserrat text-xl leading-9 font-bold lg:w-[673px] lg:h-[92px] lg:text-[45px] lg:leading-[46px]  '>Ready to build your healthcare solution?</p>
                    <p className='hidden md:block md:text-xl md:font-heebo md:font-medium leading-7 lg:w-[644px] lg:h-[56px] lg:text-2xl lg:mt-8 '>Automate the work and personalize the patient experience with Notable</p>
                </div>
                <div data-aos="fade-left" >
                    <Link href="/" className='bg-[#06030B] p-2  border md:px-8 md:py-3 md:h-[89px] md:bg-white md:text-[#30B666] md:border-white text-sm border-[#06030B] md:text-2xl outline-none font-bold font-heebo rounded-tl-[24px] rounded-br-[24px] '>Get started</Link>
                </div>
            </div>         
        
    </div>
    )
}