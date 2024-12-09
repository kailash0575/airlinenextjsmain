'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// import logo from "../public/assets/images/airlines/Logo.png";
const AdminSideBar = () => {
  const router =  useRouter()
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    // 
    router.push("/");

  }
  return (
    <div className="h-full bg-[#0033a0]  w-[202px]">
      <div className="dashboard_sidebar sticky top-5 ">
        <Link className="flex  gap-5  items-center px-8 py-5" href="/admin">
          {/* <Image src={logo} alt="Logo" className="w-10 h-10" /> */}
          <h1 className="text-white">Dashboard</h1>
        </Link>
        <div className="flex flex-col">
          <Link
            href="/admin/addBlog"
            className="px-8 py-2 text-white cursor-pointer"
          >
            Add Blog
          </Link>
          <Link
            href="/admin/manageBlog"
            className="px-8 py-2 text-white cursor-pointer"
          >
            Manage Blog
          </Link>
          {/*  */}
          <div  className="px-8 py-2 text-white cursor-pointer">
            <button className="flex gap-2" onClick={handleLogout}>Logout <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"/></svg></button>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
