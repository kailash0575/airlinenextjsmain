import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SingleBlogPage = ({ params }) => {
  console.log(params);
  return (
    <div>
      {" "}
      <div>
        <div className="americanAirlines_containerpost2 ">
          <Navbar />
          <div className="hero_section  mt-20  max-md:mt-10 ">
            <div className="hero_section_heading text-white max-md:px-5">
              <h1 className="text-5xl ml-5	   font-semibold 	 leading-[75px]  max-md:text-[26px]  max-sm:pb-5    max-sm:leading-10 ">
                A Guide on American Airlines Boston Logan International Airport
                Terminal!
              </h1>
            </div>

            {/*  */}
          </div>
        </div>
        {/*  */}
        <div className="american_airlines_container px-10 max-xl:px-5">
          <div className="heading_container mt-4 mb-4">
            <p className="AirportAirlinesTerminal text-[#0033a0]">
              <Link href="/"> AirportAirlinesTerminal</Link>
              &gt;&gt;{" "}
              <span className="text-[#0033a0]">
                <Link href="/american-airlines"> American Airlines</Link>
              </span>{" "}
              &gt;&gt;{" "}
              <span className="text-[#303234]">
                <Link href="/american-airlines/a-guide-on-american-airlines-boston-logan-international-airport">
                  {" "}
                  A Guide on American Airlines Boston Logan International
                  Airport!
                </Link>
              </span>
            </p>
          </div>
       
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SingleBlogPage;
