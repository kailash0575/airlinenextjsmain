
import dynamic from "next/dynamic";
const ManageSingleBlogComponent = dynamic(() => import("@/components/ManageSingleBlog"), {
  ssr: false,
});

const Page = ({params}) => {

  return (
    <>
      <ManageSingleBlogComponent  params={params} />
    </>
  );
};

export default Page;
