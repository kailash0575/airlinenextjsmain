"use client";
import AdminSideBar from "@/components/AdminSideBar";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import JoditEditor from "jodit-react";

// import { useForm, Controller } from "react-hook-form";
import { redirect } from "next/navigation";
const ManageSingleBlog = ({ params }) => {
  const savedToken = localStorage.getItem("token");
  if (!savedToken) redirect("/");

  const id = params.slug;
  const [singleUserId, setsingleUserId] = useState();
  //
  // const [imageFile, setImageFile] = useState(null);
  // const editor = useRef(null);
  //
  // update api end
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
      meta_title: singleData.meta_title || "Default Meta Title", // Use a default if necessary
      meta_description:
        singleData.meta_description || "Default Meta Description",
      focus_keywords: singleData.focus_keywords || "Default focus keywords",
      title_tag: singleData.title_tag || "Default title tag",
      blog_description:
        singleData.blog_description || "Default blog_description ",
      // blog_image : singleData.blog_image || "Default Blog Image"
      image_alt_tag: singleData.image_alt_tag || "Default Image Tag",
      category: singleData.category || "Default category ",
      blog_image: singleData?.blog_image,
    };
    //
    try {
      const response = await fetch(
        `https://submitform.acedigitalsolution.com/airlines_api/update_blog.php?id=${id}`,

        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      // console.log(data);
      // resetForm1();
    } catch (error) {
      throw error;
    }
  };
  //
  console.log("Id = ", singleUserId);
  console.log("singleData = ", singleData);
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

  // for editor  update handleChange
  const handleEditorChange = (blog_description) => {
    setSingleData({
      ...singleData,
      blog_description: blog_description,
    });
  };
  //
  // const handleImageChange = (e) => {
  //   setImageFile(e.target.files[0]);
  // };
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
                  {singleData?.category.split("-").join(" ")}
                </option>
                <option
                  value="
                  airport"
                >
                  airport
                </option>
                {/*  */}
                <option
                  value="
                  airlines_kailash"
                >
                  airlines kailash
                </option>
                {/*  */}
                <option
                  value="
                 american-airlines"
                >
                  American Airlines
                </option>
                {/*  */}
                <option
                  value="
                flight-airlines"
                >
                  flight kailash
                </option>
                {/*  */}
                <option
                  value="
                karam-airlines"
                >
                  karam airline
                </option>
                <option
                  value="
                my-airlines"
                >
                  my airline
                </option>
                <option
                  value="
                ujjwal-airlines"
                >
                  ujjwal airline
                </option>
                {/*  */}
                <option
                  value="
                veer-airlines"
                >
                  veer airline
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
                  <JoditEditor
                    id="blog_description"
                    name="blog_description"
                    // ref={editor}
                    // tabIndex={1}
                    value={singleData?.blog_description}
                    // onChange={handleChange}
                    onBlur={handleEditorChange}
                  // onChange={(newContent) => setBlog_Description(newContent)}
                  />
                </div>
              </div>
              {/*  */}
              <div className="w-full flex gap-10  mt-5 ">
                <label className="w-[30%]">Blog Image</label>
                <input
                  type="file"
                  className="w-[70%] border border-spacing-3 p-3  rounded-xl text-black	"
                  // value={singleData?.blog_image}
                  id="blog_image"
                  accept="image/*"
                  name="blog_image"
                  onChange={handleChange}

                // {...registerForm1("blog_image", {
                //   required: false,
                // })}
                />
              </div>
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
