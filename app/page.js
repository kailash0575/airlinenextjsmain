import Image from "next/image";
import "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardOne from "@/components/CardOne";
import Advantages from "@/components/Advantages";
import HelpJourney from "@/components/HelpJourney";
import Card from "@/components/Card";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PBE85G6V0E"
      ></Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-PBE85G6V0E"></Script>
      <div className="relative">
        <div className="main_section_container    text-white  ">
          <Navbar />
          <Hero />
        </div>
        {/*  */}

        {/*  */}
        <div className="top_airlines_container px-10 mt-5 mb-5 max-md:px-5">
          <h2 className="text-3xl	font-semibold	">Major Airlines</h2>
          <div className="airlines mt-5">
            <div className="airLines_item flex gap-3">
              <Link
                className="rounded-2xl  hover:bg-[#0033a0] hover:text-white  border border-[#0033a0] px-3 py-1 text-[#0033a0]	"
                href="/american-airlines"
              >
                American Airlines
              </Link>
              <Link
                className="rounded-2xl  hover:bg-[#0033a0] hover:text-white  border border-[#0033a0] px-3 py-1 text-[#0033a0]	"
                href="/frontier-airlines"
              >
                Frontier  Airlines
              </Link>
            </div>
          </div>
        </div>
        <CardOne />
        <Advantages />
        <HelpJourney />
        <Card />
        <Booking />
        <Footer />
      </div>
    </div>
  );
}
