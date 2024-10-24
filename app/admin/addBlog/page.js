'use client'
import AddBlog from "@/components/AddBlog";
import dynamic from "next/dynamic";
// const AddBlogComponent = dynamic(() => import("@/components/AddBlog"), {
//   ssr: true,
// });

const Page = () => {

  return (
    <>
      <AddBlog />
    </>
  );
};

export default Page;
