import Link from 'next/link'
import Image from 'next/image'



export default function Solution(){

    
    return(
        <main className='flex flex-col w-full relative text-[#06030B]  '>

            <svg className=" w-full text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fillOpacity="1" d="M0,224L48,186.7C96,149,192,75,288,80C384,85,480,171,576,208C672,245,768,235,864,192C960,149,1056,75,1152,53.3C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>

            <div className='flex flex-col md:items-center lg:mx-12  gap-8 px-4 md:flex-row md:justify-between md:h-[424px] '>
                <div className='flex flex-col lg:gap-8 items-center lg:text-left lg:items-start font-heebo gap-4 md:w-[60%]   '>
                    <p className='text-[#30B666] text-2xl font-bold leading-[22px] '>Patient empowerment</p>
                    <p className='lg:h-[174px] lg:w-[626px] text-[#000] text-center lg:text-left text-[1.5rem] lg:text-[50px] lg:leading-[58px] opacity-80 leading-[40px]  '>Unnecessary Hospital visits with self service and digital experiences for patients</p>
                    <p className='lg:h-[56px] lg:w-[626px] text-xl leading-7 text-center lg:text-left text-[#000] opacity-70 lg:text-2xl '>Deliver a highly-personalized, digital self-service experience to every patient without staff intervention.</p>
                    <Link href="/" className='bg-[#30B666] border rounded-ss-[22px] rounded-br-[22px] text-white font-bold text-[16px] w-full flex justify-center items-center h-[52px] gap-3 lg:w-[411px]  '>Explore the patient experience <span className="w-4 h-4 bg-white rounded-full "> <Image src="/arrowRight.png" alt="arrow right" width={300} height={300} />  </span> </Link>
                </div>
                <div>
                    <Image src="/calendar.png" alt="calendar" width={300} height={300} className="md:h-[421px] md:w-[460px] lg:w-[560px]  " />
                </div>
           
            </div>
            <div className="flex flex-col px-4 items-center p-8 gap-12" >
                <div className="flex flex-col items-center font-heebo gap-4 ">
                    <p className="text-[#30B666] text-2xl font-bold leading-[22px] ">Our Partners</p>
                    <p className="text-[2rem] text-[#000] leading-[58px] text-center opacity-80 lg:h-[116px] lg:w-[1005px]  lg:text-[50px] ">Explore how other hospitals, health systems, and medical groups enjoy HinafriTech </p>
                </div>
                
                <div className=' lg:w-[1017px] flex flex-col border border-[#30B666] border-opacity-25 rounded-[30px] bg-white shadow-2xl '>
                    
                    
                    <div className='flex justify-between '>
                        
                        <div className='flex flex-col gap-6 p-8'>
                            <div className='flex'>
                                <Image src="/AH.png" alt="partner logo" width={300} height={300} className=' lg:w-[65.153px] lg:h-[61.5px] ' />
                                <p className='lg:text-3xl lg:leading-[35px] font-heebo opacity-80 font-bold lg:h-[70px] lg:w-[203px] '> Abridge Health India</p>
                            </div>
                            <div className='font-heebo opacity-70 text-[#000] lg:text-2xl leading-9 lg:w-[508px] lg:h-[252px] '>
                                <p>“You can automate all your manual hospital operations! Streamline Your Operations and Improve Patient Care with Our Custom-built Software. Whether you&apos;re a hospital, clinic, or a private practice, our software solution can help you improve care, reduce cost and enhance efficiency.”</p>
                            </div>
                            <div className='flex gap-6 items-center '>
                                <Image src="/partnerImage.png" alt="partner" width={300} height={300} className='lg:w-[116px] lg:h-[116px] ' />
                                <div>
                                    <p className='font-heebo font-bold lg:text-3xl lg:leading-[39.5px] opacity-80 '>Smith Hearthrow</p>
                                    <p className='font-heebo lg:text-xl opacity-70 lg:leading-[39.5px]  '>MD, Abridge Health int. India</p>
                                </div>
                            </div>
                            <div>
                            <Link href="/" className='bg-[#30B666] border rounded-ss-[22px] rounded-br-[22px] text-white font-bold text-[16px] w-full flex justify-center items-center h-[52px] gap-3 lg:w-[253px]  '>Read full story <span className="w-4 h-4 bg-white rounded-full "> <Image src="/arrowRight.png" alt="arrow right" width={300} height={300} />  </span> </Link>
                                
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 text-white p-8 rounded-e-[22px] bg-[#30B666] lg:w-[347px] '>
                            <div className='flex flex-col gap-1 px-8 '>
                                <p className='  lg:text-[40px] font-bold flex items-center gap-3 font-heebo leading-9 '>87%  
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M2.00006 12.6667H14.0001C14.1216 12.6664 14.2406 12.6328 14.3445 12.5698C14.4484 12.5068 14.5331 12.4166 14.5895 12.309C14.646 12.2014 14.672 12.0805 14.6648 11.9592C14.6576 11.8379 14.6175 11.7209 14.5487 11.6207L8.54872 2.95407C8.30006 2.59474 7.70139 2.59474 7.45206 2.95407L1.45206 11.6207C1.38261 11.7207 1.34188 11.8378 1.3343 11.9593C1.32672 12.0808 1.35258 12.202 1.40907 12.3098C1.46555 12.4176 1.55051 12.5079 1.6547 12.5708C1.75889 12.6338 1.87834 12.6669 2.00006 12.6667Z" fill="#1A2B66"/>
                                    </svg>
                                </p>
                                <p className='lg:text-lg font-bold leading-9   '>patient satisfaction rate</p>
                                <svg className='self-center' xmlns="http://www.w3.org/2000/svg" width="46" height="6" viewBox="0 0 46 6" fill="none">
                                    <path d="M3 3H43" stroke="url(#paint0_linear_2153_726)" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
                                    <path d="M3 3H43" stroke="black" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_2153_726" x1="37.7541" y1="3.49997" x2="8.2459" y2="3.49998" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#ED1818"/>
                                        <stop offset="0.575466" stop-color="#F1C21A"/>
                                        <stop offset="0.989583" stop-color="#1A2B66"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1 px-8'>
                                <p className=' lg:text-[40px] font-bold font-heebo leading-9  flex items-center gap-3 '>64%  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M13.9999 3.33326L1.99994 3.33326C1.87845 3.33364 1.75936 3.36715 1.65549 3.43018C1.55163 3.49321 1.46692 3.58337 1.41048 3.69097C1.35404 3.79856 1.32802 3.9195 1.33521 4.04079C1.3424 4.16207 1.38253 4.27909 1.45128 4.37926L7.45128 13.0459C7.69994 13.4053 8.29861 13.4053 8.54794 13.0459L14.5479 4.37926C14.6174 4.2793 14.6581 4.16222 14.6657 4.04073C14.6733 3.91925 14.6474 3.79801 14.5909 3.69019C14.5344 3.58237 14.4495 3.49209 14.3453 3.42917C14.2411 3.36624 14.1217 3.33307 13.9999 3.33326Z" fill="#FB1B1B"/>
                                    </svg>
                                </p>
                                <p className='lg:text-lg font-bold leading-9  '>decrease in check-in time</p>
                                <svg className='self-center' xmlns="http://www.w3.org/2000/svg" width="46" height="6" viewBox="0 0 46 6" fill="none">
                                    <path d="M3 3H43" stroke="url(#paint0_linear_2153_726)" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
                                    <path d="M3 3H43" stroke="black" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_2153_726" x1="37.7541" y1="3.49997" x2="8.2459" y2="3.49998" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#ED1818"/>
                                        <stop offset="0.575466" stop-color="#F1C21A"/>
                                        <stop offset="0.989583" stop-color="#1A2B66"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1 px-8'>
                                <p className=' lg:text-[40px] font-bold font-heebo leading-9  flex items-center gap-3'>21%  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M2.00006 12.6667H14.0001C14.1216 12.6664 14.2406 12.6328 14.3445 12.5698C14.4484 12.5068 14.5331 12.4166 14.5895 12.309C14.646 12.2014 14.672 12.0805 14.6648 11.9592C14.6576 11.8379 14.6175 11.7209 14.5487 11.6207L8.54872 2.95407C8.30006 2.59474 7.70139 2.59474 7.45206 2.95407L1.45206 11.6207C1.38261 11.7207 1.34188 11.8378 1.3343 11.9593C1.32672 12.0808 1.35258 12.202 1.40907 12.3098C1.46555 12.4176 1.55051 12.5079 1.6547 12.5708C1.75889 12.6338 1.87834 12.6669 2.00006 12.6667Z" fill="#1A2B66"/>
                                    </svg>
                                </p>
                                <p className='lg:text-lg font-bold leading-9  '>increase in security of records</p>
                                <svg className='self-center' xmlns="http://www.w3.org/2000/svg" width="46" height="6" viewBox="0 0 46 6" fill="none">
                                    <path d="M3 3H43" stroke="url(#paint0_linear_2153_726)" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
                                    <path d="M3 3H43" stroke="black" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_2153_726" x1="37.7541" y1="3.49997" x2="8.2459" y2="3.49998" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#ED1818"/>
                                        <stop offset="0.575466" stop-color="#F1C21A"/>
                                        <stop offset="0.989583" stop-color="#1A2B66"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1 px-8'>
                                <p className='lg:text-[40px] font-bold font-heebo leading-9  flex items-center gap-3'>40%  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M2.00006 12.6667H14.0001C14.1216 12.6664 14.2406 12.6328 14.3445 12.5698C14.4484 12.5068 14.5331 12.4166 14.5895 12.309C14.646 12.2014 14.672 12.0805 14.6648 11.9592C14.6576 11.8379 14.6175 11.7209 14.5487 11.6207L8.54872 2.95407C8.30006 2.59474 7.70139 2.59474 7.45206 2.95407L1.45206 11.6207C1.38261 11.7207 1.34188 11.8378 1.3343 11.9593C1.32672 12.0808 1.35258 12.202 1.40907 12.3098C1.46555 12.4176 1.55051 12.5079 1.6547 12.5708C1.75889 12.6338 1.87834 12.6669 2.00006 12.6667Z" fill="#1A2B66"/>
                                    </svg>
                                </p>
                                <p className='lg:text-lg font-bold leading-9  '>increase pre-visit registration </p>
                                <svg className='self-center' xmlns="http://www.w3.org/2000/svg" width="46" height="6" viewBox="0 0 46 6" fill="none">
                                    <path d="M3 3H43" stroke="url(#paint0_linear_2153_726)" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
                                    <path d="M3 3H43" stroke="black" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_2153_726" x1="37.7541" y1="3.49997" x2="8.2459" y2="3.49998" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#ED1818"/>
                                        <stop offset="0.575466" stop-color="#F1C21A"/>
                                        <stop offset="0.989583" stop-color="#1A2B66"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1  px-8  '>
                                <p className=' lg:text-[40px] font-bold font-heebo leading-9  flex items-center gap-3'>60%  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M2.00006 12.6667H14.0001C14.1216 12.6664 14.2406 12.6328 14.3445 12.5698C14.4484 12.5068 14.5331 12.4166 14.5895 12.309C14.646 12.2014 14.672 12.0805 14.6648 11.9592C14.6576 11.8379 14.6175 11.7209 14.5487 11.6207L8.54872 2.95407C8.30006 2.59474 7.70139 2.59474 7.45206 2.95407L1.45206 11.6207C1.38261 11.7207 1.34188 11.8378 1.3343 11.9593C1.32672 12.0808 1.35258 12.202 1.40907 12.3098C1.46555 12.4176 1.55051 12.5079 1.6547 12.5708C1.75889 12.6338 1.87834 12.6669 2.00006 12.6667Z" fill="#1A2B66"/>
                                    </svg>
                                </p>
                                <p className=' lg:text-lg font-bold leading-9  '>Increased patient&apos;s health and wellness monitoring </p>
                                <svg className='self-center' xmlns="http://www.w3.org/2000/svg" width="46" height="6" viewBox="0 0 46 6" fill="none">
                                    <path d="M3 3H43" stroke="url(#paint0_linear_2153_726)" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
                                    <path d="M3 3H43" stroke="black" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_2153_726" x1="37.7541" y1="3.49997" x2="8.2459" y2="3.49998" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#ED1818"/>
                                        <stop offset="0.575466" stop-color="#F1C21A"/>
                                        <stop offset="0.989583" stop-color="#1A2B66"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </div>
           
           
            
           
        </main>
    )
}   