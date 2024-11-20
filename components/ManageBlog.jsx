"use client";
import AdminSideBar from "@/components/AdminSideBar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { redirect } from "next/navigation";
const ManageBlog = () => {
    //

    const savedToken = localStorage.getItem("token");
    if (!savedToken) redirect("/");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [blogId, setBlogId] = useState();
    const [prevData, setPrevData] = useState(0);
    const [nextData, setNextData] = useState(5);
    async function fetchData() {
        axios
            .get(
                "https://submitform.acedigitalsolution.com/airlines_api/all_post_fetch.php"
            )
            .then((response) => {
                const combinedData = Object.entries(response?.data?.data).flatMap(
                    ([category, items]) =>
                        (items || []).map((item) => ({ ...item, category }))
                );
                setData(combinedData);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log(blogId);
    console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    //

    const handleDeleteBlog = (id) => {
        axios
            .delete(
                `https://submitform.acedigitalsolution.com/airlines_api/delete_blog.php?id=${id}`
            )
            .then((response) => {
                console.log(response);
                fetchData();
                alert("Blog Deleted Successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    //
    const handlePrevBlog = () => {
        setPrevData(-5);
    };
    const handleNextBlog = () => {
        setNextData(nextData + 5);
    };
    //

    //
    return (
        <div className="flex gap-10 w-full ">
            {" "}
            <div>
                <AdminSideBar />
            </div>
            <div className="py-5 px-5 w-full">
                <div className="flex  items-center justify-between">

                    <h1 className="text-3xl">Manage Blog</h1>
                    <Link href="/admin/addBlog" className="bg-[#0033a0]  text-white  rounded-sm font-semibold px-10 py-2  font-base">Add Blog</Link>
                </div>
                {/*  */}

                {/*  */}
                <div className="bg-white">
                    {/*  */}
                    <div className=" mt-10 w-full">
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="bg-[grey]  rounded-xl	  p-2">
                                    <th className="p-2">S No.</th>
                                    <th className="p-2">Date</th>
                                    <th className="p-2">Title</th>
                                    <th className="p-2">Blog Url</th>
                                    <th className="p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((blog, id) => (
                                    <tr key={id}>
                                        <td className="p-2">{blog.id}</td>
                                        <td className="p-2">{blog.created_at}</td>
                                        <td className="p-2">{blog.meta_title.slice(0, 10)}</td>
                                        <td className="p-2">{blog.blog_url.slice(0, 40)}</td>

                                        <td className="p-2 flex gap-10">
                                            <Link
                                                href={`/admin/manageBlog/${blog.id}`}
                                                className="btn bg-[#394eea] p-2 px-4 text-white font-extrabold border rounded-xl	shadow-lg"
                                            >
                                                Edit{" "}
                                            </Link>
                                            <button
                                                className="  bg-[red] p-2 px-4 text-white font-extrabold rounded-xl	shadow-lg cursor-pointer	"
                                                onClick={() => handleDeleteBlog(blog.id)}
                                            >
                                                {" "}
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/*  */}
                        <div className="gap-10 p-5 justify-centr flex">
                            <button
                                onClick={handlePrevBlog}
                                className="bg-[black] text-white p-2 px-5 font-semibold rounded-xl	"
                                disabled={nextData === 5}
                            >
                                Prev
                            </button>
                            <button
                                onClick={handleNextBlog}
                                className="bg-[black] text-white p-2 px-5 font-semibold rounded-xl	"
                            >
                                Next
                            </button>
                        </div>
                        {/*  */}
                    </div>
                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default ManageBlog;
