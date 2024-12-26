import AdminSideBar from "@/components/AdminSideBar";
// import Admin from '../../components/Admin'
import dynamic from "next/dynamic";

const Admin = dynamic(() => import("@/components/Admin"), {
  ssr: false,
});

const page = () => {
 
  return (
   <>
   <Admin/>
   </>
  );
};

export default page;
