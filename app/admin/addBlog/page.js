
import dynamic from "next/dynamic";
const AddBlogComponent = dynamic(() => import("@/components/AddBlog"), {
  ssr: false,
});

const Page = () => {

  return (
    <>
      <AddBlogComponent />
    </>
  );
};

export default Page;
