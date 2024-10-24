import React from 'react'
import Image from 'next/image'

import whywechoose from '../public/assets/images/banner/whychooseus.jpg'
const Advantages = () => {
    return (
        <div>
            {/*  */}
            <div className="advatages_container px-5 mb-10 flex  gap-5  justify-between max-lg:flex-wrap max-lg:justify-between max-md:mb-10 max-md:px-5">
                <div className="left_container w-[50%] max-lg:w-full" >
                    <div className="we_choose_container">
                        <p className='text-xs	text-[#0033a0]'>Welcome to AirportAirlinesTerminals</p>
                        <p className='text-[30px]	font-semibold	 '>
                            Double the Joy of Your Trip with Us
                        </p>
                        <p className='text-base	  mt-3'>We are committed to ensuring a smooth and hassle-free travel experience for you.  We offer detailed information on different airport terminals across the world so  that you can have a pleasant experience even before your flight. Additionally, our  agents are experts in creating tailored itineraries for different needs.</p>
                    </div>
                    <div className="our_specification mt-3 flex-col  max-sm:flex-wrap" >
                        <div className="our_specification_left">
                            <ul className="our_specification px-5">


                                <li className='text-base list-disc'>Book flight tickets with us  at minimal fares to your dream destination, and enjoy extra savings   on your booking. </li>

                            </ul>
                            <ul className="our_specification mt-5 px-5">

                                <li className='text-base list-disc'>We offer flights to different destinations  worldwide. Choose the destination  from   your bucket list, and we will take you there. </li>
                            </ul>
                        </div>
                        <div className="our_specification_right">
                            <ul className="our_specification px-5">

                                <li className='text-base mt-5 list-disc'>Along with booking your flight,  gain access to detailed information  on airport terminals worldwide.  </li>
                            </ul>
                            <ul className="our_specification mt-4 px-5">


                                <li className='text-base list-disc'>We also offer personalized recommendations  based on your preferences. Connect with our experts to  customize your trip.     </li>
                            </ul>
                        </div>

                    </div>
                    <div>

                        <p className='text-base mt-5' >Don’t waste your time! Just get in touch with us, and we promise to make your    journey the perfect blend of comfort and peace of mind.
                        </p>
                    </div>
                </div>
                <div className="right_container w-[50%] max-lg:w-full  max-lg:flex  max-lg:justify-center">
                    <Image src={whywechoose} alt="whywechoose"  className='w-full h-full'/>
                </div>
            </div>
            {/*  */}
        </div>
    )
}

export default Advantages