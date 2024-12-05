"use client"
import React from 'react'
import AdminSideBar from './AdminSideBar'
import { redirect } from "next/navigation";

const Admin = () => {
  console.log("admin");
  const savedToken = localStorage.getItem("token");
  if (!savedToken) redirect("/");
  return (
    <div className="flex gap-10 ">
    {" "}
    <div className="h-screen">
      <AdminSideBar />
    </div>
    <div className="py-5">
      <h1 className="text-3xl">Welcome To Dashboard</h1>
    </div>
  </div>
  )
}

export default Admin