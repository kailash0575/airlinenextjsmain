"use client";
import AdminSideBar from "@/components/AdminSideBar";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import JoditEditor from "jodit-react";
//
import {  useRouter } from "next/navigation";

//
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import katex from "katex";
import "katex/dist/katex.min.css";
//
// import { useEffect, useState, useRef } from "react";
//
// import { useForm, Controller } from "react-hook-form";
import { redirect } from "next/navigation";
const ManageSingleBlog = ({ params }) => {
  const savedToken = localStorage.getItem("token");
  if (!savedToken) redirect("/");
  const router = useRouter();

  const id = params.slug;
  const [singleUserId, setsingleUserId] = useState();
  //
  // const [imageFile, setImageFile] = useState(null);
  // const editor = useRef(null);
  //
  // update api end
  // 
  const [image, setImage] = useState(null);
  const [base64, setBase64] = useState("");
  // 
  const [singleData, setSingleData] = useState();
  // const [blog_description, setBlog_Description] = useState("");
  // fetch single blog
  const fetchData = () => {
    axios
      .get(
        `https://submitform.acedigitalsolution.com/airlines_api/all_post_fetch.php?id=${id}`
      )
      .then((response) => {
        const combinedData = Object.entries(response?.data?.data).flatMap(
          ([category, items]) =>
            (items || []).map((item) => ({ ...item, category }))
        );
        // setSingleData(JSON.stringify(combinedData[0]));
        setSingleData(combinedData[0]);

        // setSingleData(singleData);
        // JSON.stringify(singleData)
        //JSON.stringify()
        setsingleUserId(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //

  // const {
  //   register: registerForm1,
  //   handleSubmit: handleSubmitForm1,
  //   formState: { errors: errorsForm1 },
  //   reset: resetForm1,
  //   control,
  //   setValue,
  // } = useForm();

  const contactFrom1 = async (e) => {
    e.preventDefault();
    //
    const data = {
      ...singleData,
      meta_title: singleData.meta_title, // Use a default if necessary
      meta_description: singleData.meta_description,
      focus_keywords: singleData.focus_keywords,
      // focus_keywords: singleData.focus_keywords || "Default focus keywords",
      //
      blog_url: singleData.blog_url,
      title_tag: singleData.title_tag,
      blog_description: singleData.blog_description,
      // blog_image : singleData.blog_image || "Default Blog Image"
      image_alt_tag: singleData.image_alt_tag,
      category: singleData.category,

      // image: blog_image,
    };
    //
    try {
      const response = await fetch(
        `https://submitform.acedigitalsolution.com/airlines_api/update_blog.php?id=${id}`,

        {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: JSON.stringify(data),
        }
        
      );
      alert("Blog Has Been Updated");
      router.push("/admin/manageBlog");

      // console.log(data);
      // resetForm1();
    } catch (error) {
      throw error;
    }
  };
  //
  // console.log("Id = ", singleUserId);
  // console.log("singleData = ", singleData);
  useEffect(() => {
    fetchData();
  }, []);
  // const blogData = singleData[0]
  // const [data, setData] = useState(singleData);

  // for content update handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleData({
      ...singleData,
      [name]: value,
    });
  };
  // 

  // 
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setImage(file)
  // };
  // console.log(image)
  // 
  // for editor  update handleChange
  const handleEditorChange = (blog_description) => {
    setSingleData({
      ...singleData,
      blog_description: blog_description,
    });
  };
  //
  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // };
  //
  const editorOptions = {
    height: 200,
    buttonList: [
      ["undo", "redo"],
      ["removeFormat"],
      ["bold", "underline", "italic", "fontSize"],
      ["fontColor", "hiliteColor"],
      ["align", "horizontalRule", "list"],
      ["table", "link", "image", "imageGallery"],
      ["showBlocks", "codeView"],
      ["math"],
    ],
    katex: katex,
    imageRotation: false,
    fontSize: [12, 14, 16, 18, 20],
    colorList: [
      [
        "#828282",
        "#FF5400",
        "#676464",
        "#F1F2F4",
        "#FF9B00",
        "#F00",
        "#fa6e30",
        "#000",
        "rgba(255, 153, 0, 0.1)",
        "#FF6600",
        "#0099FF",
        "#74CC6D",
        "#FF9900",
        "#CCCCCC",
      ],
    ],
    imageUploadUrl: "http://localhost:8080/chazki-gateway/orders/upload",
    imageGalleryUrl: "http://localhost:8080/chazki-gateway/orders/gallery",
  };
  //
  const editorRef = useRef();
  useEffect(() => {
    // console.log(editorRef.current);
  }, []);
  //
  return (
    <div className="flex gap-5">
      {/*  */}
      <div>
        <AdminSideBar />
      </div>
      {/*  */}
      {/*  */}

      {/*  */}
      <div>
        <div>
          {" "}
          <p className="text-3xl font-extrabold mb-10 mt-10">Edit Blog</p>{" "}
        </div>
        <form className="w-full" onSubmit={contactFrom1}>
          <div>
            <div className="w-full flex gap-10 items-center  ">
              <label className="w-[30%]">Category*</label>

              <select
                className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                // {...registerForm1("category", {
                //   required: false,
                // })}

                id="category"
                name="category"
                onChange={handleChange}
              >
                <option defaultValue value={singleData?.category}>
                  {singleData?.category}
                </option>
                <option
                  value="
                 frontier-airlines"
                >
                  Frontier Airlines
                </option>
                {/*  */}
                <option
                  value="
                 american-airlines"
                >
                  American Airlines
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
                id="meta_title"
                name="meta_title"
                value={singleData?.meta_title}
                // value={singleData.meta_title}
                // {...registerForm1("meta_title", {
                //   required: false,
                // })}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="w-full flex gap-10 items-center mt-5 ">
                <label className="w-[30%]">Meta Descriptions*</label>
                <input
                  type="text"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                  id="meta_description"
                  name="meta_description"
                  value={singleData?.meta_description}
                  autoComplete="off"
                  onChange={handleChange}

                // value={item?.meta_description}
                // {...registerForm1("meta_description", {
                //   required: false,
                // })}
                />
              </div>
              {/*  */}
              <div className="w-full flex gap-10 items-center mt-5 ">
                <label className="w-[30%]">Meta Keywords*</label>
                <textarea
                  type="text"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black"
                  autoComplete="off"
                  value={singleData?.focus_keywords}
                  id="focus_keywords"
                  name="focus_keywords"
                  onChange={handleChange}

                // {...registerForm1("focus_keywords", {
                //   required: false,
                // })}
                />
              </div>
              {/*  */}
              <div className="w-full flex gap-10 items-center mt-5 ">
                <label className="w-[30%]">Title Tag*</label>
                <input
                  type="text"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                  autoComplete="off"
                  value={singleData?.title_tag}
                  id="title_tag"
                  name="title_tag"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-10 items-center mt-5 ">
                <label className="w-[30%]">Blog Url*</label>
                <input
                  type="text"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                  autoComplete="off"
                  value={singleData?.blog_url}
                  onChange={handleChange}
                  id="blog_url"
                  name="blog_url"
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
                      <JoditEditor
                        {...field}
                        value={singleData?.blog_description}
                      />
                    )}
                    required
                  /> */}
                  {/* 1 */}
                  {/* <JoditEditor
                    id="blog_description"
                    name="blog_description"
                    // ref={editor}
                    // tabIndex={1}
                    value={singleData?.blog_description}
                    // onChange={handleChange}
                    onBlur={handleEditorChange}
                  // onChange={(newContent) => setBlog_Description(newContent)}
                  /> */}
                  {/* 2 */}
                  <SunEditor
                    id="blog_description"
                    name="blog_description"
                    // value={singleData?.blog_description}
                    // set used to set default value in the sunEditor
                    // handleEditorChange
                    setContents={singleData?.blog_description}
                    ref={editorRef}
                    onChange={handleEditorChange}
                    setOptions={editorOptions}
                    lang="es"
                  // onImageUploadError={onImageUploadError}
                  // onChange={onChangeHandler}
                  />
                </div>
              </div>
              {/*  */}

              <div className="w-full flex gap-10  mt-5 ">
                <label className="w-[30%]">Image Alt Tag</label>
                <input
                  type="text"
                  // blog_description
                  value={singleData?.image_alt_tag}
                  onChange={handleChange}
                  id="image_alt_tag"
                  name="image_alt_tag"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                // {...registerForm1("image_alt_tag", {
                //   required: false,
                // })}
                />
              </div>
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
