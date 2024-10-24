import React from "react";
// import Navbar from '../component/Navbar'
// import postImg from '../assets/images/banner/postBanner.jpg'
import postImg from "../../public/assets/images/banner/postBanner.jpg";
import postImg2 from "../../public/assets/images/banner/postBanner3.jpg";
import Image from "next/image";
// import { Link } from "react-router-dom";
import Link from "next/link";
// import Footer from '../component/Footer'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div>
      {" "}
      <div className="main_contianer_american_airlines">
        <div className="americanAirlines_container">
          <Navbar />
          <div className="hero_section  mt-20  max-md:mt-10 mb-20">
            <div className="hero_section_heading text-white max-md:px-5">
              <h1 className="text-5xl ml-5	   font-semibold 	 leading-[75px]  max-md:text-4xl ">
                American Airlines
              </h1>
            </div>

            {/*  */}
          </div>
        </div>
        <div className="american_airlines_container px-10">
          <div className="heading_container mt-4">
            <p className="AirportAirlinesTerminal text-[#0033a0;]">
              <Link href="/"> AirportAirlinesTerminal </Link>
              &gt;&gt;{" "}
              <span className="text-[#303234]">
                <Link href="/american-airlines">American Airlines</Link>
              </span>
            </p>
          </div>
          <div className="american_container my-10 flex gap-5 flex-wrap">
            <Link
              className="americanItem shadow-lg pb-10 rounded-xl	 w-[30%] max-sm:w-full max-md:w-[50%] max-lg:w-[50%] max-xl:w-[45%]"
              href="/american-airlines/a-guide-on-american-airlines-boston-logan-international-airport"
            >
              <div className="h-[220px]  w-full">
                <Image
                  src={postImg2}
                  alt="postImg"
                  className="w-full h-full rounded-t-lg "
                />
              </div>
              <div className="bg-[postBanner]"></div>
              <div className="heading_container ">
                <h1 className="text-[#00205b] text-base mt-3 font-bold px-5">
                  A Guide on American Airlines Boston Logan International
                  Airport Terminal!
                </h1>
              </div>
            </Link>
            <Link
              className="americanItem shadow-lg pb-10 rounded-xl	 w-[30%] max-sm:w-full max-md:w-[50%] max-lg:w-[50%] max-xl:w-[45%]"
              href="/american-airlines/get-details-on-sfo-american-airlines-terminal"
            >
              <div className="h-[220px]">
                <Image
                  src={postImg}
                  alt="postImg"
                  className="w-full h-full rounded-t-lg"
                />
              </div>
              <div className="bg-[postBanner]"></div>
              <div className="heading_container ">
                <h1 className="text-[#00205b] text-base mt-3 font-bold px-5">
                  Get Details on SFO American <br /> Airlines Terminal!
                </h1>
              </div>
            </Link>
            {/*  */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
