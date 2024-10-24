import React from 'react'
import Image from 'next/image'

import booking from '../public/assets/images/banner/booking.jpg'
const Booking = () => {
  return (
    <div className='px-5 mb-10 relative flex justify-center items-center'>
      <div className=' h-[262px] w-full  '>

        <Image src={booking} alt="booking" className='w-full h-full rounded-3xl' />
      </div>
      <div className="looking_affordable_Air bg-white absolute p-7 rounded-3xl max-md:p-0 max-md:px-2  max-md:pt-5 max-md:pb-5 ">

        <h3 className='text-2xl	font-semibold	 max-md:text-xl 
 text-[#00205b]'>Discover Unbeatable Travel Deals!
        </h3>
        <p className='text-sm	'>Our platform offers a treasure trove of discounted <br /> flights to connect you to your next dream destination <br /> at affordable fares. With so many available deals, you are <br /> sure to discover the perfect fare for your journey.
        </p>
        <div>
          <div className="call_item text-[#0033a0] ">
            <a href="tel:xxxxxxxxxx" className=' text-lg  max-md:text-base hover:underline	'>Call Us Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking