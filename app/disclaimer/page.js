import Navbar1 from "@/components/Navbar1";
import React from "react";
import disclaimer from "../../public/assets/images/banner/disclaimer.jpg";
import Footer from "@/components/Footer";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="navbar_container_main">
        <div className="nav_container  top-0  ">
          <Navbar1 />
        </div>
        <div className="about_banner_img ">
          <Image src={disclaimer} alt="disclaimer" className="w-full h-full" />
        </div>
      </div>
      {/*  */}
      <div className="about_container px-5 mb-10 mt-10">
        <div className="heading_container_main">
          <h1 className="text-3xl	font-semibold	 text-[#0033a0] max-sm:text-xl	">
            Disclaimer - AirportAirlinesTerminal
          </h1>
        </div>
        <div className="about_paragraphz">
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            The Disclaimer provided by AirportAirlinesTerminal outlines specific
            terms intended to clarify the limitations and responsibilities
            related to the use of this website. This disclaimer serves to manage
            user expectations by disclaiming liabilities that are beyond the
            control of the website or that do not pertain to it in any capacity.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            The textual and visual content available on the
            AirportAirlinesTerminal website is designed to offer comprehensive
            information about the amenities provided by various airlines at the
            terminals of global airports.
          </p>
        </div>
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            1. Independent Operation
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            AirportAirlinesTerminal operates as an independent entity and is not
            affiliated with any airline or aviation-related organizations. The
            website does not represent, nor does it intend to promote, the
            facilities available at any specific airport terminal. Furthermore,
            no aviation authorities or government agencies have provided
            support, sponsorship, or other advantages for the operation of this
            website.
          </p>
        </div>
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            2. Accuracy and Liability
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            While every effort is made to provide accurate and up-to-date
            information on this website, we do not accept any liability for
            errors, inaccuracies, or inconsistencies that may be present. The
            accuracy and completeness of the information cannot be guaranteed.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            Users should not rely solely on the information provided on this
            website when making decisions related to their travel plans. Any
            decisions made based on the information from this site are done at
            your own risk. Therefore, it is strongly recommended that you seek
            additional information about the relevant airport terminal well in
            advance.
          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            3. Travel Decisions
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            AirportAirlinesTerminal disclaims all responsibility for any adverse
            events or issues that may arise from reliance on the information
            provided. We do not guarantee the availability of services at a
            specific terminal, the quality of those services, or the resolution
            of any booking-related problems you may encounter.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            For the most current and accurate information regarding airline
            services or policies, please refer to the official website of the
            airline in question. It is also advisable to visit the official
            airport website to obtain crucial details about the specific
            terminal.
          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            4. Third-Party Links
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            From time to time, this website may include links to third-party
            websites or services. However, we have no control over the content,
            practices, services, or privacy policies of these third-party sites.
            By using our website, you agree that AirportAirlinesTerminal shall
            not be held liable or responsible, either directly or indirectly,
            for any loss or damage incurred as a result of using these
            third-party services. It is your responsibility to verify all
            information thoroughly with these third parties before making any
            travel-related decisions.
          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            5. Content Changes
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            Please note that the content on this website, including text,
            graphics, and other materials, is subject to change at any time
            without notice. The website owner reserves the right to modify any
            part of the content as circumstances change. The website may also
            undergo a complete overhaul in the future.
          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            6. Contact Information
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            If you have any questions, require assistance, or wish to offer
            feedback, please do not hesitate to contact us.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
