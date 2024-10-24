'use client'
import AddBlog from "@/components/AddBlog";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const AddBlogComponent = dynamic(() => import("@/components/AddBlog"), {
  ssr: true,
});

const page = () => {
  const context = typeof self !== 'undefined' ? self : globalThis;
  return (
    <>
      <AddBlog />
    </>
  );
};

export default page;
