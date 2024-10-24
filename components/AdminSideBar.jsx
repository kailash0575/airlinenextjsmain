import React from "react";
import Link from "next/link";
import Image from "next/image";
// import logo from "../public/assets/images/airlines/Logo.png";
const AdminSideBar = () => {
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
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
