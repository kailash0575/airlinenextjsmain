import React from 'react'

const HelpJourney = () => {
    return (
        <div>
            <div className="help_your_journey mb-10">
                <h5 className='text-2xl	text-white font-semibold	'>Choose Us for an Amazing Experience
                </h5>
                <div className="help_container flex justify-center gap-5 flex-wrap items-center mt-10 px-10 max-lg:flex-wrap  ">
                    <div className="help_item  bg-white p-5 px-2 rounded-3xl w-[400px]	">
                        <p className='text-xl			font-bold	'> Smooth Airport Experience
                        </p>
                        <p className='mt-2'>Our goal is to help you navigate the  <br />airport with confidence so you can focus <br /> on enjoying your journey.
                        </p>
                    </div>
                    {/*  */}
                    <div className="help_item  bg-white p-5 px-2   rounded-3xl  w-[400px]	">
                        <p className='text-xl		font-bold	'> Tempting Travel Deals
                        </p>
                        <p className='mt-2'>Get your hands on the latest travel <br /> deals and save maximum on your  <br /> next flight booking with us. </p>
                    </div>
                    {/*  */}
                    <div className="help_item  bg-white py-5 px-2 rounded-3xl  w-[400px]	">
                        <p className='text-xl		font-bold	'>Unparalleled Customer Assistance
                        </p>
                        <p className='mt-2'>Our dedicated customer service <br /> team is available around the clock <br />  to assist with any questions or concerns.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpJourney