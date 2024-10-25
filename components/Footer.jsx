'use client'
import React from "react";
import Link from 'next/link'

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {/* background: rgb(1 31 94 / 89%); , bg-[#0033a0] */}
      <div className="footer_container bg-[#011F5E] text-[white] ">
        <div className="footer_main  pt-10 ">
          <div className="footer_disclainer  px-5">
            <p>
              {" "}
              <b>Disclaimer: </b>
              AirportAirlinesTerminal offers detailed information on airport
              terminals worldwide. We also offer affordable flight bookings to
              our customers. However, we are not directly affiliated with any
              specific airline. We are just a third-party service provider.
              Contact us for flight bookings and details on airport terminals.
            </p>
          </div>
          <div className="latest_pages_container mt-5  gap-5 flex justify-between max-lg:flex-wrap pb-8 px-5">
            {/*  */}

            <div className="left_pages flex gap-5 justify-between">
              <div className="left_pages_child w-[50%] flex flex-col ">
                <p className="text-2xl mb-5  font-bold	text-[#ffcd16]	">
                  Latest Pages
                </p>
                <Link
                  className="list-none hover:underline cursor-pointer"
                  href="/american-airlines/a-guide-on-american-airlines-boston-logan-international-airport"
                >
                  {" "}
                  American Airlines BOS Terminal
                </Link>
                <Link
                  className="list-none hover:underline cursor-pointer"
                  href="/american-airlines/get-details-on-sfo-american-airlines-terminal"
                >
                  {" "}
                  American Airlines   SFO Terminal
                </Link>

                {/* Goldstar Air ACC Terminal – Kotoka International Airport */}
              </div>
              {/*  */}
              <div className="left_pages_child w-[50%] flex flex-col">
                <p className="text-2xl mb-5	 font-bold text-[#ffcd16] w-[250px] max-sm:w-full">
                  Popular Terminals
                </p>
                <Link
                  className="list-none hover:underline cursor-pointer"
                  href="/american-airlines/a-guide-on-american-airlines-boston-logan-international-airport"
                >
                  {" "}
                  American Airlines BOS Terminal
                </Link>
                <Link className="list-none hover:underline cursor-pointer" href="/american-airlines/get-details-on-sfo-american-airlines-terminal">
                  {" "}
                  American Airlines   SFO Terminal
                </Link>

                {/* Goldstar Air ACC Terminal – Kotoka International Airport */}
              </div>
            </div>
            {/*  */}
            <div className="right_pages flex gap-5 justify-between">
              <div className="left_pages_child w-[50%]">
                <p className="text-2xl mb-5	 text-[#ffcd16] font-bold">
                  Latest Pages
                </p>
                <li className="list-none  hover:underline cursor-pointer">
                  Cape Air ACK Terminal – Nantucket Memorial Airport
                </li>
                {/* Goldstar Air ACC Terminal – Kotoka International Airport */}
                <li className="list-none  hover:underline cursor-pointer">
                  Goldstar Air ACC Terminal – Kotoka International Airport
                </li>
              </div>
              {/*  */}
              <div className="left_pages_child w-[50%]">
                <p className="text-2xl mb-5	text-[#ffcd16]  font-bold ">
                  Popular Terminals
                </p>
                <li className="list-none  hover:underline cursor-pointer">
                  Cape Air
                </li>
                {/* Goldstar Air ACC Terminal – Kotoka International Airport */}
                <li className="list-none  hover:underline cursor-pointer">
                  Goldstar Air
                </li>
              </div>
            </div>
          </div>
          <div className="footer_item flex justify-between py-5 border-y-[1px] border-white flex-wrap">
            <div className="left_footer_item px-5">
              <span>
                © 2024{" "}
                <a href="/" className="hover:underline cursor-pointer">
                  {" "}
                  www.airlinesairportsterminal.com
                </a>{" "}
                | All Rights Reserved.
              </span>
            </div>
            <div className="right_footer_item px-5">
              <div className="left_pages_child flex  gap-5 flex-wrap max-md:mt-3">
                <li className="list-none  hover:underline cursor-pointer">
                  <Link href="/about" onClick={handleClick}>
                    {" "}
                    About Us
                  </Link>
                </li>
                {/* Goldstar Air ACC Terminal – Kotoka International Airport */}
                <li className="list-none  hover:underline cursor-pointer">
                  <Link href="/disclaimer" onClick={handleClick}>
                    Disclaimer
                  </Link>
                </li>

                <li className="list-none  hover:underline cursor-pointer">
                  <Link href="/privacy-policy" onClick={handleClick}>
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-none  hover:underline cursor-pointer">
                  <Link href="/terms-and-conditions" onClick={handleClick}>
                    Terms and Conditions
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
