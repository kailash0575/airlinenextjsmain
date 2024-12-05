"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Card = ({ blogPost }) => {
  //
  const combinedData1 = Object.entries(blogPost).flatMap(([category, items]) =>
    (items || []).map((item) => ({ ...item, category }))
  );
  // console.log("blogBlog", combinedData1);
  //
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // //
  // async function fetchData() {
  //     axios
  //         .get(
  //             `https://submitform.acedigitalsolution.com/airlines_api/all_post_fetch.php`
  //         )
  //         .then((response) => {
  //             const combinedData = Object.entries(response?.data?.data).flatMap(
  //                 ([category, items]) =>
  //                     (items || []).map((item) => ({ ...item, category }))
  //             );
  //             setData(combinedData);
  //             setLoading(false);
  //             //

  //             //
  //         })
  //         .catch((error) => {
  //             setError(error.message);
  //             setLoading(false);
  //         });
  // }
  // useEffect(() => {
  //     fetchData();
  // }, []);
  // //
  // if (loading) return <div className=" px-3">Loading...</div>
  // if (error) return <div>{error}</div>
  // console.log("Second Card", data)
  return (
    <div className="px-10 mb-10 max-md:px-5">
      {combinedData1.map((blog, id) => (
        <div className="card_1_container" key={id}>
          <div className="card_1_heading">
            <h1 className="text-2xl	text-[#390879] font-semibold	mb-5 capitalize mt-5">
              {blog.category.replace("-", " ")}
            </h1>
          </div>
          <div className="card_1 flex flex-wrap gap-5">
            <Link
              className="card_1_item w-[390px] max-md:w-[310px] shadow-lg bg-white rounded-b-lg"
              href={`${blog.category}/${blog.blog_url}`}
            >
              <div className="card_image h-[219px]">
                <Image
                  src={blog?.blog_image}
                  alt={blog?.image_alt_tag}
                  height={500}
                  width={500}
                  className="rounded-t-lg h-full object-cover"
                />
              </div>
              <div className="card_heading">
                <p className="text-[#00205b] font-semibold	text-lg	mt-3 px-2 pb-10 ">
                  {blog?.title_tag}
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
      {/*  */}
    </div>
  );
};

export default Card;
