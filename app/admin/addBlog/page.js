'use client'
import dynamic from "next/dynamic";
import { useEffect } from "react";
const AddBlogComponent = dynamic(() => import("@/components/AddBlog"), {
  ssr: true,
});

const page = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Client-side only code here
    }
  }, []);
  return (
    <>
   <AddBlogComponent/>
    </>
  );
};

export default page;
