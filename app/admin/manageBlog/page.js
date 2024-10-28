
import dynamic from "next/dynamic";
const ManageBlogComponent = dynamic(() => import("@/components/ManageBlog"), {
  ssr: false,
});

const Page = () => {

  return (
    <>
      <ManageBlogComponent />
    </>
  );
};

export default Page;
