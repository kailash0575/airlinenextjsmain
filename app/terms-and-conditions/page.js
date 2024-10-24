import React from "react";
import Footer from '@/components/Footer'
import Navbar1 from '@/components/Navbar1'
import policy from "../../public/assets/images/banner/termsCondition.jpg";
import Image from "next/image";
const page = () => {
  return (
    <div>
      {" "}
      <div className="navbar_container_main">
        <div className="nav_container  top-0  ">
          <Navbar1 />
        </div>
        <div className="about_banner_img ">
          <Image
            src={policy}
            alt="termsCondition"
            className="w-full h-full"
          />
        </div>
      </div>
      {/*  */}
      <div className="about_container px-5 mb-10 mt-10">
        <div className="heading_container_main">
          <h1 className="text-3xl	font-semibold	 text-[#0033a0] max-sm:text-xl	">
            Terms and Conditions - AirportAirlinesTerminal
          </h1>
        </div>
        <div className="about_paragraphz">
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            AirportAirlinesTerminal is dedicated to providing information about
            the facilities and services available at airport terminals across
            the globe. Our goal is to present up-to-date and accurate
            information on all important aspects of your travel reservations to
            ensure a smooth air journey.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            Please read the following Terms and Conditions carefully. By using
            or registering on the AirportAirlinesTerminal website, you agree to
            adhere to these terms. We reserve the right to update these terms as
            needed without prior notice, and it is your responsibility to
            regularly check for updates to remain compliant.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            If you are under the legal age of consent in your country, a parent
            or legal guardian must read and agree to these Terms and Conditions
            on your behalf.
          </p>
        </div>
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Information Accuracy and Reliability
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            While we strive to provide accurate information sourced from
            reputable providers, the content on our website may contain
            contradictions, errors, or inaccuracies. As such, we cannot
            guarantee the reliability or accuracy of the information provided.
            We are not liable for any outcomes resulting from booking decisions
            based solely on our website content.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            Although we endeavor to meet your travel information needs, any
            decisions you make based on our website’s content are at your own
            risk. We do not promote or endorse any specific companies, airlines,
            or modes of transportation. Additionally, our website may include
            links to third-party content over which we have no control.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            We cannot guarantee that the airlines you book with will deliver the
            services you expect. You are solely responsible for gathering all
            necessary information and making your travel arrangements. Any
            issues arising from your bookings are matters between you and the
            airline involved.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            We strongly recommend that you also consult directly with the
            airline or relevant authorities before proceeding with any bookings
            to ensure you have complete and accurate details.
          </p>
        </div>
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Disclaimer and Liability
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            The information provided on this website is for general knowledge
            only. We do not represent or warrant that the site will meet your
            expectations or that it is accurate, timely, error-free, or free of
            typographical errors. We make no guarantees, either explicit or
            implied, regarding the merchantability, suitability for a specific
            purpose, or non-infringement of third-party rights. Additionally, we
            do not guarantee that the website will be free from errors, viruses,
            or other harmful components.
          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Technical Issues and Accessibility
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            If you encounter any errors or are unable to access the site due to
            a technical issue, it may be due to a backend fault. We ask for your
            patience and recommend revisiting the site at a later time.
          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Third-Party Services and Offers
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            AirportAirlinesTerminal operates as a sales agent for various
            service providers and is not responsible for any errors,
            discrepancies, or undesirable consequences arising from their
            services. Choosing to avail yourself of any offer displayed on our
            website is at your own discretion and is not endorsed by
            AirportAirlinesTerminal.
          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Modifications to Terms
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            These Terms of Use may change over time as needed. Any amendments
            will be updated on the website. By continuing to use the site after
            such revisions, you agree to the modified Terms of Use. We advise
            you to regularly check these terms to stay informed and make better
            travel-related decisions.
          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Governing Law and Jurisdiction
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            The laws of the United States of America, without regard to any
            conflicts of law principles, shall govern the use of the Site and
            these Terms of Use. If any provision of these terms is found to be
            void, unlawful, or unenforceable, the validity of the remaining
            provisions will not be affected.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            Any disputes arising by using AirportAirlinesTerminal must be
            resolved exclusively in the relevant federal or courts located in
            the particular state. If you access this site from a location
            outside of the destination, you do so at your own risk and are
            responsible for complying with local laws, as applicable.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            Any claim or cause of action related to the use of this Site or
            these Terms of Use must be filed within one year from the date the
            claim first arose, or it will be permanently barred.
          </p>
        </div>
        {/*  */}
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Contact Us
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            If you need any assistance or further information, please feel free
            to contact us.
          </p>
        </div>
        {/*  */}
      </div>
      <Footer/>
    </div>
  );
};

export default page;
