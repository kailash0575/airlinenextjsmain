'use client'
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

import { useState, useEffect } from 'react'
export default function Home() {
  // console.log("Main file of airlineTerminal Project")

  const [blogPost, setBlogPosts] = useState(null)
  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch('https://submitform.acedigitalsolution.com/airlines_api/all_post_fetch.php')
      let data = await res.json()
      setBlogPosts(data.data)
    }
    fetchPosts()
  }, [])

  if (!blogPost) return <div>Loading...</div>
  // 
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

        <CardOne blogPost={blogPost} />
        <Advantages />
        <HelpJourney />
        <Card blogPost={blogPost} />
        <Booking />
        <Footer blogPost={blogPost} />
      </div>
    </div>
  );
}
