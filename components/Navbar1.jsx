'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";
import axios from "axios";
import logo from "../public/assets/images/airlines/Logo.png";
const Navbar1 = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  //
  const [blogPost, setBlogPosts] = useState([])
  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch('https://submitform.acedigitalsolution.com/airlines_api/all_post_fetch.php')
      let data = await res.json()
      setBlogPosts(data.data)
      //  
      // 
    }
    fetchPosts()
  }, [])
  //  
  // console.log("blogPost", blogPost)
  // 
  const keys = Object.keys(blogPost).map(item => item);
  // 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // disable scrolling
    } else {
      document.body.style.overflow = ""; // enable scrolling
    }
    // cleanup
  }, [isOpen]);
  //
  return (
    <div>
      {/*  */}
      <div className="main_navbar_container flex justify-center">
        <nav className="flex justify-between max-md:px-0  items-center relative  gap-20  max-lg:gap-8 ">
          <div
            className={`right_nav_section list-none flex  text-base font-semibold max-md:flex-col  	text-[#0033a0]  max-md:flex-grow  max-md:absolute max-md:bg-white max-md:text-black max-md:gap-5 max-md:top-10 max-md:h-full  max-md:w-[50%]   max-md:hidden  gap-10 max-lg:gap-5`}
          >
            {/*  */}

            {/*  */}
            <Link

              className={router.pathname === "/" ? "text-[#ffcd16] max-md:p-2 " : "max-md:p-2"

              } href="/"
            >
              Home
            </Link>
            {/* <li className=' max-md:p-2  text-[#ffcd16] ' ><Link to="/">Home</Link></li> */}

            <li className=" max-md:p-2 hover:text-[#ffcd16] ">
              <Link href="/">Blog</Link>
            </li>
          </div>
          <div className="left_nav_section list-none  w-[300px] max-md:w-[200px]  py-3">
            <li className="px-0  max-md:p-0 max-md:px-0   rounded-lg max-md:shadow-lg   ">
              {" "}
              <Link href="/">
                <Image src={logo} alt="logo" className="w-full h-full  " />
              </Link>
            </li>
          </div>
          {/*  */}

          {/*  */}
          <div
            className={`right_nav_section list-none flex  text-base font-semibold max-md:flex-col  	text-[#0033a0]  max-md:flex-grow  max-md:absolute max-md:bg-white max-md:text-black max-md:gap-5 max-md:top-10 max-md:h-full  max-md:w-[50%]   max-md:hidden gap-10 max-lg:gap-5`}
          >
            <li className=" max-md:p-2 hover:text-[#ffcd16]">
              <Link href="/"> Airport Terminals</Link>
            </li>
            <ul className=" relative  nav_item_child_main group max-md:p-2 ">
              <Link href="/" className="hover:text-[#ffcd16] flex">
                Airlines{" "}
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0033a0"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
              </Link>
              <ul className="absolute  nav_item_child w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300  bg-[#0033a0] p-2 cursor-pointer  flex flex-col">
                {/*  */}
                {
                  keys.map((item, id) => (
                    <Link className={router.pathname === "/" ? "text-[#ffcd16] max-md:p-2 capitalize" : "max-md:p-2 text-white capitalize"

                    } href={item} key={id}> {item.replace("-", " ")}</Link>
                  ))
                }
                {/*  */}
                {/* <Link
                  className={router.pathname === "/" ? "text-[#ffcd16] max-md:p-2 " : "max-md:p-2 text-white"

                  } href="/american-airlines"
                >
                  American Airlines
                </Link>
                <Link href='/frontier-airlines' className={router.pathname === "/frontier-airlines" ? "text-[#ffcd16] max-md:p-2 " : "max-md:p-2 text-white"

                } >Frontier  Airlines</Link> */}

              </ul>
            </ul>

            {/* <li className='p-4 max-md:p-2'><Link to="/">Blog</Link></li> */}
          </div>
          {/* for-mobile-responsive */}
          {isOpen && (
            <>
              <div
                className={`right_nav_section mobile_responsive list-none flex gap-10 text-base font-semibold max-lg:flex-col  	text-white  max-lg:flex-grow max-lg:w-auto  max-md:fixed max-md:bg-white max-md:text-black max-md:gap-0 max-md:h-full  max-md:w-[50%]  md:hidden  overscroll-none	top-0 max-sm:text-center`}
              >
                <li className="p-4 max-md:p-2 ">
                  <Link href="/">Home</Link>
                </li>
                <li className="p-4 max-md:p-2">
                  <Link href="/">Blog</Link>
                </li>

                <li className="p-4 max-md:p-2 relative">
                  <Link href="/">Airport Terminals</Link>
                  {/* Airport Terminals */}
                </li>
                <ul className="p-4 relative  nav_item_child_main group max-md:p-2 flex  items-center justify-center">
                  Airlines    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0033a0"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                  <ul className="absolute  nav_item_child w-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300  bg-[#0033a0] p-2 top-10 flex flex-col" >

                    {
                      keys.map((item, id) => (
                        <Link className={router.pathname === "/" ? "text-[#ffcd16] max-md:p-2 capitalize " : "max-md:p-2 text-white capitalize"

                        } href={item} key={id}> {item.replace("-", " ")}</Link>
                      ))
                    }

                    {/* <li>Aegean Air</li> */}
                  </ul>
                </ul>
              </div>
            </>
          )}
          {/*  */}
          <div className=" md:hidden max-md:px-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2  rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"
                  }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"
                  }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      {/*  */}
    </div>
  );
};

export default Navbar1;
