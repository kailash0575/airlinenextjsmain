"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SingleBlogPage = ({ params }) => {
  console.log(params.singleSlug);
  const blogUrl = params.singleSlug;
  // https://submitform.acedigitalsolution.com/airlines_api/all_post_fetch.php?blog_url=get-retails-on-sfo-american-airlines-terminal
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //
  async function fetchData() {
    axios
      .get(
        `https://submitform.acedigitalsolution.com/airlines_api/all_post_fetch.php?blog_url=${blogUrl}`
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
  console.log("single blog", data);
  //
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="flex flex-col">
      {" "}
      {data?.map((blog, id) => (
        <div key={id}>
          <div className="americanAirlines_containerpost2 ">
            <Navbar />
            <div className="hero_section  mt-20  max-md:mt-10 ">
              <div className="hero_section_heading text-white max-md:px-5">
                <h1 className="text-5xl ml-5	   font-semibold 	 leading-[75px]  max-md:text-[26px]  max-sm:pb-5    max-sm:leading-10 ">
                  {blog.title_tag}
                </h1>
              </div>

              {/*  */}
            </div>
          </div>
          {/*  */}
          <div className="american_airlines_container px-5 max-xl:px-5">
            <div className="heading_container mt-4 mb-4">
              <p className="AirportAirlinesTerminal text-[#0033a0]">
                <Link href="/"> AirportAirlinesTerminal</Link>
                &gt;&gt;{" "}
                <span className="text-[#0033a0]">
                  <Link href={`/${blog.category}`} className="capitalize">
                    {blog.category.replace("-", " ")}
                  </Link>
                </span>{" "}
                &gt;&gt;{" "}
                <span className="text-[#303234]">
                  <Link
                    href={`/${blog.category}/${blog.blog_url}`}
                    className="capitalize"
                  >
                    {" "}
                    {blog.blog_url.replace("-", " ")}
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
      {/*  */}
      <div className="px-5" >
        <div className="border-[1px] border-[#8dc8e8] mb-10 p-2 ">
          {
            data?.map((blog, id) => (

              <div

                dangerouslySetInnerHTML={{ __html: blog?.blog_description }}
                key={id} />
            ))
          }

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleBlogPage;
