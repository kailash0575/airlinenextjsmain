import React from "react";
import icon1 from "../public/assets/images/icon1.png";
import icon2 from "../public/assets/images/icon2.png";
import Image from "next/image";

import icon3 from "../public/assets/images/icon3.png";

const Hero = () => {
    return (
        <div>
            <div className="hero_section  mt-20  max-md:mt-10">
                <div className="hero_section_heading text-white max-md:px-5">
                    <h1 className="text-5xl	font-semibold text-center	 leading-[75px]  max-md:text-4xl">
                        Explore the Details on Airport Terminals Worldwide!
                    </h1>

                    <p className="text-base font-normal leading-[30px] max-md:text-sm	 text-center">
                        Navigate your journey with ease by accessing comprehensive
                        information on airport terminals around the globe. Discover
                        everything from amenities to airline{" "}
                        <br className="max-md:hidden" /> lounges, and make your time as
                        effortless as possible at the airport.
                    </p>
                </div>
                <div className="flex justify-center">
                    <button className="text-[#0033a0] py-[12px] px-[20px] font-semibold	 rounded-2xl mt-2	max-md:text-sm max-md:py-[10px] max-md:px-[30px] text-center	 bg-[#ffcd16] hover:bg-[#0033a0] hover:text-[#ffcd16]">
                        {" "}
                        Explore Airlines
                    </button>
                </div>
                {/*  */}
                <div className="our_supports_container flex justify-around py-8 text-[#0033a0] font-semibold bg-[#d4eaf6]	text-lg	  max-md:flex-wrap max-md:items-center max-md:justify-center max-md:gap-5 max-md:px-5 max-md:py-4 mt-20 max-md:mt-5 max-md:text-base  max-xl:px-2	">
                    <div className="our_supports_item flex items-center gap-3">
                        <div className="w-20 h-20 max-sm:w-10 max-sm:h-10 ">
                            <Image src={icon1} alt="icon1" className="w-full h-full" />
                        </div>
                        <p className="max-sm:text-[15px]">
                            Detailed Guides on Airport Terminals
                        </p>
                    </div>
                    <div className="our_supports_item flex items-center gap-3">
                        <div className="w-20 h-20 max-sm:w-10 max-sm:h-10">
                            <Image src={icon2} alt="icon2" className="w-full h-full" />
                        </div>
                        <p className="max-sm:text-[15px]">Unlimited Flight Options</p>
                    </div>
                    <div className="our_supports_item flex items-center gap-3">
                        <div className="w-20 h-20 max-sm:w-10 max-sm:h-10">
                            <Image src={icon3} alt="icon2" className="w-full h-full" />
                        </div>
                        <p className="max-sm:text-[15px]"> Nonstop Live Assistance</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
