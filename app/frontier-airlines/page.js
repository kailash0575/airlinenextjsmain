import React from "react";
// import Navbar from '../component/Navbar'
// import postImg from '../assets/images/banner/postBanner.jpg'
// import postImg from "../../public/assets/images/banner/postBanner.jpg";
// import postImg2 from "../../public/assets/images/banner/postBanner3.jpg";
// import Image from "next/image";
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
                Frontier Airlines
                
              </h1>
            </div>

            {/*  */}
          </div>
        </div>
        <div className="american_airlines_container px-10">
          <div className="heading_container mt-4 mb-5">
            <p className="AirportAirlinesTerminal text-[#0033a0;]">
              <Link href="/"> AirportAirlinesTerminal </Link>
              &gt;&gt;{" "}
              <span className="text-[#303234]">
                <Link href="/american-airlines">Frontier Airlines</Link>
              </span>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
