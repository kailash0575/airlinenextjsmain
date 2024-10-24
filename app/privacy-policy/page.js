import Footer from '@/components/Footer'
import Navbar1 from '@/components/Navbar1'
import React from 'react'
import policy from "../../public/assets/images/banner/policy.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div>
           
      <div className="navbar_container_main">
        <div className="nav_container  top-0  ">
          <Navbar1 />
        </div>
        <div className="about_banner_img ">
          <Image src={policy} alt="policy" className="w-full h-full" />
        </div>
      </div>
      {/*  */}
      <div className="about_container px-5 mb-10 mt-10">
        <div className="heading_container_main">
          <h1 className="text-3xl	font-semibold	 text-[#0033a0] max-sm:text-xl	">
            Privacy Policy - AirportAirlinesTerminal
          </h1>
        </div>
        <div className="about_paragraphz">
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            At AirportAirlinesTerminal, we value your privacy and are committed
            to safeguarding your personal data. By using our website, you agree
            to the terms outlined in this policy.
          </p>
        </div>
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Data Collection
          </h2>

          <li className="text-lg	mt-2 mb-1 font-medium	max-sm:text-base list-disc">
            We collect personal information like your name, contact details, and
            email when you fill out forms on our website.
          </li>
          <li className="text-lg	mt-1 mb-1 font-medium	max-sm:text-base list-disc">
            Your IP address and browser information may also be collected to
            prevent spam and enhance security.
          </li>
          {/*  */}

          <li className="text-lg	mt-1 mb-5 font-medium	max-sm:text-base list-disc">
            Additional information may be gathered through offline interactions
            or from third-party sources, in line with legal requirements.
          </li>
        </div>
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Booking for Others
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            If you are booking for someone else on our website, you must enter
            their details. However, they must provide consent for the same. We
            will use your account to view or modify their current details.
          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Data Protection
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            We use various security measures to protect your personal
            information, including restricted access and encryption during data
            transfer. At AirportAirlinesTerminal, we make sure that your
            personal details are safe with us. We don’t allow any unauthorized
            parties to access your information.
          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Use of Personal Data
          </h2>
          <p className="text-lg	mt-2 mb-2 font-medium	max-sm:text-base">
            We use your personal data for various purposes, including:
          </p>
          <ul className="px-5">


            <li className="text-lg	mt-1 mb-1 font-medium	max-sm:text-base list-disc">
              To complete your booking process
            </li>
            <li className="text-lg	mt-1 mb-1 font-medium	max-sm:text-base list-disc">
              To send you relevant administrative information
            </li>
            <li className="text-lg	mt-1 mb-1 font-medium	max-sm:text-base list-disc">
              To respond to your inquiries

            </li>
            <li className="text-lg	mt-1 mb-1 font-medium	max-sm:text-base list-disc">
              To send you marketing communications


            </li>
            <li className="text-lg	mt-1 mb-1 font-medium	max-sm:text-base list-disc">
              To invite you to participate in contests and promotional activities



            </li>
            <li className="text-lg	mt-1 mb-1 font-medium	max-sm:text-base list-disc">
              To fulfill our business purposes, such as data analysis, audits, monitoring, and prevention, as well as website enhancements and development




            </li>
          </ul>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl mt-5">
            Cookies

          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            Cookies may be used to save your details for future visits, manage your login session, and store display preferences. This is for your convenience, so you don't have to enter your details again when making additional comments.

          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            When you log in to our site, we will set a temporary cookie to check out if your browser accepts cookies. However, we make sure that this cookie doesn’t have any personal data and is discarded when you close your browser.


          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Third-Party Content

          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            If you encounter external links or embedded content on our site, their privacy practices may differ, and you should review their policies separately.

          </p>
        </div>
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Fraud Protection


          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            Please note that AirportAirlinesTerminal will only contact you in response to your email inquiries or service requests. We will never ask you to submit personal information such as login credentials or credit card details via unsolicited emails or phone calls.


          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
          Contact Us



          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
          For any questions or further information, please contact us directly.



          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page