"use client";
import AdminSideBar from "@/components/AdminSideBar";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import JoditEditor from "jodit-react";

import { useForm, Controller } from "react-hook-form";
import { redirect } from "next/navigation";
const ManageSingleBlog = ({ params }) => {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) redirect('/')

    const id = params.slug;
    const [singleUserId, setsingleUserId] = useState();
    //
    // update api end
    const [singleData, setSigleData] = useState();
    // fetch single blog
    const fetchData = () => {
        axios
            .get(
                `https://submitform.acedigitalsolution.com/airlines_api/all_post_fetch.php?id=${id}`
            )
            .then((response) => {
                setSigleData(response.data.data);
                // setSigleData(singleData);
                //
                setsingleUserId(id);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    //

    const {
        register: registerForm1,
        handleSubmit: handleSubmitForm1,
        formState: { errors: errorsForm1 },
        reset: resetForm1,
        control,
        setValue,
    } = useForm();

    const contactFrom1 = async (data) => {
        try {
            const response = await axios.put(
                `https://submitform.acedigitalsolution.com/airlines_api/update_blog.php?id=${id}`,

                data
            );
            console.log(data);
            resetForm1();
        } catch (error) {
            throw error;
        }
    };

    console.log(singleUserId);
    console.log(singleData);
    useEffect(() => {
        fetchData();
    }, []);

    //
    return (
        <div className="flex gap-5">
            {/*  */}
            <div>
                <AdminSideBar />
            </div>
            {/*  */}

            <div>
                <div>
                    {" "}
                    <p className="text-3xl font-extrabold mb-10 mt-10">
                        Update Blog
                    </p>{" "}
                </div>
                <form className="w-full" onSubmit={handleSubmitForm1(contactFrom1)}>
                    <div>
                        <div className="w-full flex gap-10 items-center ">
                            <label className="w-[30%]">Category*</label>
                            <select
                                className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                                {...registerForm1("category", {
                                    required: false,
                                })}
                            >
                                <option value="blog">Blog</option>
                                <option
                                    value="
                                               airport"
                                >
                                    Airport
                                </option>
                            </select>
                        </div>
                        {/*  */}

                        <div className="w-full flex gap-10 items-center mt-5 ">
                            <label className="w-[30%]">Meta Title*</label>
                            <input
                                type="text"
                                className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                                autoComplete="off"
                                // value={singleData.meta_title}
                                {...registerForm1("meta_title", {
                                    required: false,
                                })}
                            // onChange={handleChangeInput}
                            />
                        </div>
                        <p className="text-[rgb(255,0,0)]">
                            {/* {singleBlog?.meta_description} */}
                        </p>
                        <div className="w-full flex gap-10 items-center mt-5 ">
                            <label className="w-[30%]">Meta Descriptions*</label>
                            <input
                                type="text"
                                className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                                autoComplete="off"
                                // value={item?.meta_description}
                                {...registerForm1("meta_description", {
                                    required: false,
                                })}
                            />
                        </div>
                        {/*  */}
                        <div className="w-full flex gap-10 items-center mt-5 ">
                            <label className="w-[30%]">Meta Keywords*</label>
                            <textarea
                                type="text"
                                className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black"
                                autoComplete="off"
                                // value={item?.focus_keywords}
                                {...registerForm1("focus_keywords", {
                                    required: false,
                                })}
                            />
                        </div>
                        {/*  */}
                        <div className="w-full flex gap-10 items-center mt-5 ">
                            <label className="w-[30%]">Title Tag*</label>
                            <input
                                type="text"
                                className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                                autoComplete="off"
                                // value={item?.title_tag}
                                {...registerForm1("title_tag", {
                                    required: false,
                                })}
                            />
                        </div>
                        <div className="w-full flex gap-10 items-center mt-5 ">
                            <label className="w-[30%]">Blog Url*</label>
                            <input
                                type="text"
                                className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                                autoComplete="off"
                                // value={item.blog_url}
                                {...registerForm1("blog_url", {
                                    required: false,
                                })}
                            />
                        </div>
                        {/*  */}
                        <div className="w-full flex gap-10  mt-5 ">
                            <label className="w-[30%]">Blog Descriptions*</label>
                            <div className="w-[70%] ">
                                {/* <Controller
                                        name="blog_description"
                                        id="blog_description"
                                        value={item.blog_description}
                                        control={control}
                                        render={({ field }) => <ReactQuill {...field} value={item.blog_description} />}
                                    /> */}
                                {/* <Controller
                                        name="blog_description"
                                        id="blog_description"
                                        control={control}
                                        render={({ field }) => (
                                            <JoditEditor {...field} value={item.blog_description} />
                                        )}
                                        required
                                    /> */}
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full flex gap-10  mt-5 ">
                            <label className="w-[30%]">Blog Image</label>
                            <input
                                type="file"
                                className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                                // value={item?.blog_image}
                                {...registerForm1("blog_image", {
                                    required: false,
                                })}
                            />
                        </div>
                        <div className="w-full flex gap-10  mt-5 ">
                            <label className="w-[30%]">Image Alt Tag</label>
                            <input
                                type="text"
                                blog_description
                                // value={item?.image_alt_tag}
                                className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                                {...registerForm1("image_alt_tag", {
                                    required: false,
                                })}
                            />
                        </div>
                        {/*  */}
                    </div>
                    {/* ))} */}

                    <div className=" mt-5 mb-10">
                        <button
                            type="submit"
                            className="bg-[#0033a0] px-10 py-4 font-semibold text-white rounded-lg"
                        >
                            Submit
                        </button>
                    </div>
                    {/*  */}
                </form>
            </div>
            {/*  */}
        </div>
    );
};

export default ManageSingleBlog;
