import Navbar from "@/components/Navbar1";
import Image from "next/image";

import about from '../../public/assets/images/banner/About.jpg'
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div>
     
      <div className="navbar_container_main">
        <div className="nav_container  top-0  ">
            <Navbar/>
        </div>
        <div className="about_banner_img ">
          <Image src={about} alt="about" className="w-full h-full" />
        </div>
      </div>
      {/*  */}
      <div className="about_container px-5 mb-10 mt-10">
        <div className="heading_container_main">
          <h1 className="text-3xl	font-semibold	 text-[#0033a0] max-sm:text-xl	">
            About Us - AirportAirlinesTerminal
          </h1>
        </div>
        <div className="about_paragraph">
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            Welcome to AirportAirlinesTerminal, your comprehensive guide to
            airport terminals worldwide. We understand that navigating through
            airports can be a daunting experience, especially with varying
            layouts, amenities, and services at different terminals. That's why
            we've made it our mission to simplify your journey by providing
            detailed, up-to-date information on airport terminals around the
            globe.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            At AirportAirlinesTerminal, we ensure accuracy and relevance. Our
            team is constantly updating the content so that you get the updated
            information for a delightful experience at the airport. We have all
            the knowledge that will help you navigate through airport terminals
            effortlessly.
          </p>
        </div>
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Our Mission
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            Our goal is to be your go-to resource for everything related to
            airport terminals. Whether you're a frequent flyer, a first-time
            traveler, or someone who simply wants to be well-prepared, we offer
            accurate and reliable information that ensures you have a smooth and
            stress-free experience at the airport.
          </p>
        </div>
        <div className="our_mission">
          <h2 className="text-2xl		font-semibold	 text-[#0033a0] max-sm:text-xl">
            Why Choose Us
          </h2>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            <b>Terminal-Specific Information:</b> Get tailored details for each
            terminal, such as terminal hours, check-in procedures, security
            checkpoints, and customs information, so you can be well-prepared
            for your journey.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            <b>Amenities and Services:</b> Discover what each terminal has to
            offer, from dining options to duty-free shopping, lounges, Wi-Fi
            availability, and more. We provide insights into everything that can
            make your time at the airport more enjoyable.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            <b>Peace of Mind: </b> As you have detailed information on the
            specific airport terminal, you don’t have to worry at all. We
            promise to provide you with peace of mind when choosing us.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            <b>Easy Booking: </b> In addition to providing terminal information,
            we also offer a seamless booking process. Contact us, share your
            details, and we will craft a tailored itinerary for you.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            <b>Great Deals: </b> We bring you exclusive deals and discounts,
            making your travel planning even more affordable. Find the best deal
            that matches your travel preferences, and save big on your
            reservation.
          </p>
          <p className="text-lg	mt-5 mb-5 font-medium	max-sm:text-base">
            {" "}
            Thank you for choosing AirportAirlinesTerminal as your trusted
            travel companion. We are committed to helping you navigate the
            world’s airports with confidence and ease.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
