"use client";
import AdminSideBar from "@/components/AdminSideBar";
import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import { redirect, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
const Editor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});
import { useForm, Controller } from "react-hook-form";
// import Editor from "@/components/Editor";
const AddBlog = () => {
  const savedToken = localStorage.getItem("token");
  if (!savedToken) redirect("/");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset: resetForm1,
    setValue,
    control,
  } = useForm();
  //
  const contactFrom1 = async (data) => {
    //
    const formData = new FormData();
    formData.append("blog_image", data.blog_image[0]);
    //category
    formData.append("category", data.category);
    formData.append("meta_title", data.meta_title);
    formData.append("meta_description", data.meta_description);
    formData.append("focus_keywords", data.focus_keywords);
    formData.append("title_tag", data.title_tag);
    formData.append("blog_url", data.blog_url.split(" ").join("-"));
    formData.append("blog_description", data.blog_description);
    formData.append("image_alt_tag", data.image_alt_tag);

    console.log(formData);
    try {
      const response = await axios.post(
        "https://submitform.acedigitalsolution.com/airlines_api/add_blog.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Blog Has Been Created");
      resetForm1();
      router.push("/admin/manage-blog");
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    // This code runs only in the browser
    self.addEventListener('message', (event) => {
      console.log(event);
    });
  }, []);
  //
  return (
    <div className="flex  gap-5">
      <div className="w-[202px]">
        <AdminSideBar />
      </div>
      <div className="w-full">
        <div>
          {" "}
          <div className="py-5">
            <h1 className="text-3xl">Add Blog</h1>
          </div>
        </div>
        {/*  */}
        <div className="bg-white px-10">
          <div className="w-full">
            <form
              className="w-full"
              onSubmit={handleSubmit(contactFrom1)}
              autoComplete="off"
            >
              <div className="w-full flex gap-10 items-center">
                <label className="w-[30%]">Category*</label>
                <select
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                  {...register("category", { required: true })}
                >
                  <option value="blog" defaultValue>
                    blog
                  </option>
                  <option
                    Value="
                  airport"
                  >
                    airport
                  </option>
                  {/*  */}
                  <option
                    Value="
                  airlines_kailash"
                  >
                    airlines kailash
                  </option>
                  <option
                    Value="
                flight-airlines"
                  >
                    flight kailash
                  </option>
                  {/*  */}
                  <option
                    Value="
                karam-airlines"
                  >
                    karam airline
                  </option>
                  <option
                    Value="
                my-airlines"
                  >
                    my airline
                  </option>
                  <option
                    Value="
                ujjwal-airlines"
                  >
                    ujjwal airline
                  </option>
                  {/*  */}
                  <option
                    Value="
                veer-airlines"
                  >
                    veer airline
                  </option>
                  {/*  */}
                </select>
              </div>
              <div className="w-full flex gap-10 items-center mt-5">
                <label className="w-[30%]">Meta Title*</label>
                <input
                  type="text"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                  autoComplete="off"
                  {...register("meta_title", { required: true })}
                />
              </div>
              {/*  */}
              <div className="w-full flex gap-10 items-center mt-5">
                <label className="w-[30%]">Meta Descriptions*</label>
                <textarea
                  type="text"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                  autoComplete="off"
                  {...register("meta_description", { required: true })}
                />
              </div>
              {/*  */}
              <div className="w-full flex gap-10 items-center mt-5">
                <label className="w-[30%]">Meta Keywords*</label>
                <textarea
                  type="text"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black"
                  autoComplete="off"
                  {...register("focus_keywords", { required: true })}
                />
              </div>
              {/*  */}
              <div className="w-full flex gap-10 items-center mt-5">
                <label className="w-[30%]">Title Tag*</label>
                <input
                  type="text"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                  autoComplete="off"
                  {...register("title_tag", { required: true })}
                />
              </div>
              <div className="w-full flex gap-10 items-center mt-5">
                <label htmlFor="blog_url" className="w-[30%]">
                  Blog Url*
                </label>
                <input
                  id="blog_url"
                  name="blog_url"
                  type="text"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	 lowercase"
                  autoComplete="off"
                  {...register("blog_url", { required: true })}
                  placeholder="add Url"
                />
              </div>
              {/*  */}
              <div className="w-full flex gap-10  mt-5">
                <label className="w-[30%]">Blog Descriptions*</label>
                {/* <Editor
                  value={text}
                  onTextChange={(e) => setText(e.htmlValue)}
                  style={{ height: "320px" }}
                /> */}
                <div className="w-[70%] ">
                  {/* <Controller
                    name="blog_description"
                    id="blog_description"
                    control={control}
                    render={({ field }) => <ReactQuill {...field} />}
                    required
                  /> */}
                  <Controller
                    name="blog_description"
                    id="blog_description"
                    control={control}
                    render={({ field }) => <Editor {...field}   />}
                    required
                  />
                  {/* <JoditEditor ref={editor} />
                  <JoditEditor    id="blog_description" /> */}
                </div>
              </div>
              {/*  */}
              <div className="w-full flex gap-10  mt-5">
                <label className="w-[30%]">Blog Image</label>
                <input
                  type="file"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black"
                  {...register("blog_image", { required: true })}
                />
              </div>
              <div className="w-full flex gap-10  mt-5">
                <label className="w-[30%]">Image Alt Tag</label>
                <input
                  type="text"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                  {...register("image_alt_tag", { required: true })}
                />
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
