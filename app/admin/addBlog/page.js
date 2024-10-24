'use client'
import dynamic from "next/dynamic";
import { useEffect } from "react";
const AddBlogComponent = dynamic(() => import("@/components/AddBlog"), {
  ssr: true,
});

const page = () => {

  return (
    <>
   <AddBlogComponent/>
    </>
  );
};

export default page;
