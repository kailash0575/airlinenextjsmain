"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const BlogPage = ({ params }) => {
  // const unwrappedParams = use(params);

  const category = params.slug;
  console.log(category);
  // https://submitform.acedigitalsolution.com/airlines_api/all_post_fetch.php?category=my-airlines
  //
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //
  async function fetchData() {
    axios
      .get(
        `https://submitform.acedigitalsolution.com/airlines_api/all_post_fetch.php?category=${category}`
      )
      .then((response) => {
        const combinedData = Object.entries(response?.data?.data).flatMap(
          ([category, items]) =>
            (items || []).map((item) => ({ ...item, category }))
        );
        setData(combinedData);
        setLoading(false);
        //

        //
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log("total category blog", data);
  //
  return (
    <div>
      {" "}
      <div className="main_contianer_american_airlines">
        <div className="americanAirlines_container">
          <Navbar />
          <div className="hero_section  mt-20  max-md:mt-10 mb-20">
            <div className="hero_section_heading text-white max-md:px-5">
              <h1 className="text-5xl ml-5	   font-semibold 	 leading-[75px]  max-md:text-4xl capitalize ">
                {category.replace("-", " ")}
              </h1>
            </div>

            {/*  */}
          </div>
        </div>
        {/*  */}
        {/*  */}

        <div className="american_airlines_container px-10">
          <div className="heading_container mt-4">
            <p className="AirportAirlinesTerminal text-[#0033a0;]">
              <Link href="/"> AirportAirlinesTerminal </Link>
              &gt;&gt;{" "}
              <span className="text-[#303234] capitalize">
                <Link href={`/${category}`}>{category.replace("-", " ")}</Link>
              </span>
            </p>
          </div>
          <h1>js cimpiler</h1>
          <div className="flex gap-3 ">
            {data?.map((item, id) => (
              <div
                className="american_container my-10  flex   w-[30%] max-sm:w-full max-md:w-[50%] max-lg:w-[50%] max-xl:w-[45%]"
                key={id}
              >
                <Link
                  className="americanItem shadow-lg pb-10 rounded-xl	"
                  href={`/${category}/${item.blog_url}`}
                >
                  <div className="h-[220px]  w-full">
                    <Image
                      src={item?.blog_image}
                      alt="postImg"
                      className="w-full h-full rounded-t-lg "
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="bg-[postBanner]"></div>
                  <div className="heading_container ">
                    <h1 className="text-[#00205b] text-base mt-3 font-bold px-5">
                      {item?.title_tag}
                    </h1>
                  </div>
                </Link>

                {/*  */}
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        {/*  */}
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
