"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import postImg from "../public/assets/images/banner/postBanner.jpg";
import postImg2 from "../public/assets/images/banner/postBanner3.jpg";

import Link from "next/link";

const CardOne = ({ blogPost }) => {
  //
  // 
  const combinedData1 = Object.entries(blogPost).flatMap(
    ([category, items]) =>
      (items || []).map((item) => ({ ...item, category }))
  );
  console.log("blogBlog", combinedData1);
  // 
  const category1 = combinedData1.reduce((acc, current) => {
    if (!acc.find((item) => item.category === current.category)) {
      acc.push(current);
    }
    return acc;
  }, []);
  // 
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  //
  // async function fetchData() {
  //   axios
  //     .get(
  //       `https://submitform.acedigitalsolution.com/airlines_api/all_post_fetch.php`
  //     )
  //     .then((response) => {
  //       const combinedData = Object.entries(response?.data?.data).flatMap(
  //         ([category, items]) =>
  //           (items || []).map((item) => ({ ...item, category }))
  //       );
  //       setData(combinedData);
  //       setLoading(false);
  //       //

  //       //
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  //

  //
  // console.log("category", category);
  //

  // console.log("first Data", data);
  //
  // if (loading) return <div className=" px-3">Loading...</div>;
  // if (error) return <div>{error}</div>;
  //
  return (
    <div className="px-10 mb-10 max-md:px-5">
      {/*  */}
      <div className="top_airlines_container  mt-5 mb-5 max-md:px-5">
        <h2 className="text-3xl	font-semibold	">Major Airlines</h2>
        <div className="flex gap-5 flex-wrap">
          {category1?.map((blog, id) => (
            <div className="airlines mt-5 flex " key={id}>
              <div className="airLines_item flex gap-3">
                <Link
                  className="rounded-2xl  hover:bg-[#0033a0] hover:text-white  border border-[#0033a0] px-3 py-1 text-[#0033a0]	capitalize"
                  href={`${blog.category}`}
                >
                  {blog.category.replace("-", " ")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="card_1_container">
        <div className="card_1_heading">
          <h1 className="text-2xl	text-[#390879] font-semibold	mb-5">
            Latest Blogs
          </h1>
        </div>
        <div className="card_1 flex gap-5 flex-wrap">
          {combinedData1?.map((blog, id) => (
            <Link
              className="card_1_item w-[285px] shadow-lg bg-white rounded-b-lg"
              href={`${blog.category}/${blog.blog_url}`}
              key={id}
            >
              <div className="card_image h-[160px] w-[285px]">
                <Image
                  src={blog.blog_image}
                  alt={blog?.image_alt_tag}
                  width={400}
                  height={400}
                  className="rounded-t-lg h-full w-full object-cover"
                />
              </div>
              <div className="card_heading">
                <p className="text-[#00205b] font-semibold	text-lg	mt-3 px-2 pb-10">
                  {blog?.title_tag}
                </p>
              </div>
            </Link>
          ))}

          {/*  */}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default CardOne;
