import React from 'react'
// import dummyImage1 from '../assets/images/dummyImage1.png'
import Link from 'next/link'
import Image from 'next/image'
import postImg from '../public/assets/images/banner/postBanner.jpg'
import postImg2 from '../public/assets/images/banner/postBanner3.jpg'

const Card = () => {
    return (
        <div className='px-10 mb-10 max-md:px-5'>
            <div className="card_1_container">
                <div className="card_1_heading">
                    <h1 className='text-2xl	text-[#390879] font-semibold	mb-5'>American Airlines
                    </h1>
                </div>
                <div className="card_1 flex flex-wrap gap-5">
                <Link className="card_1_item w-[390px] max-md:w-[310px] shadow-lg bg-white rounded-b-lg" href="/american-airlines/a-guide-on-american-airlines-boston-logan-international-airport">
                        <div className="card_image h-[219px]">
                            <Image src={postImg2} alt="card2" className='rounded-t-lg h-full' />
                        </div>
                        <div className="card_heading">
                            <p className='text-[#00205b] font-semibold	text-lg	mt-3 px-2 pb-10' >

                            A Guide on American Airlines Boston Logan International Airport Terminal!
                            </p>
                        </div>
                    </Link>
                    <Link className="card_1_item w-[390px] max-md:w-[310px] shadow-lg bg-white rounded-b-lg" href="/american-airlines/get-details-on-sfo-american-airlines-terminal">
                        <div className="card_image h-[219px]">
                            <Image src={postImg} alt="card1" className='rounded-t-lg h-full' />
                        </div>
                        <div className="card_heading">
                            <p className='text-[#00205b] font-semibold	text-lg	mt-3 px-2 pb-10' >

                                Get Details on SFO American <br />  Airlines Terminal!
                            </p>
                        </div>
                    </Link>
                  
                </div>
            </div>
            {/*  */}

        </div>
    )
}

export default Card