'use client'
import AddBlog from "@/components/AddBlog";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const AddBlogComponent = dynamic(() => import("@/components/AddBlog"), {
  ssr: true,
});

const page = () => {

  return (
    <>
      <AddBlog />
    </>
  );
};

export default page;
