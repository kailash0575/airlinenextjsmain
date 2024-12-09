"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { logo } from "@/assets/logo";
import logo from "../../../public/assets/images/airlines/Logo.png";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
//
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  //
  const {
    register: registerForm1,
    handleSubmit: handleSubmitForm1,
    formState: { errors: errorsForm1 },
    reset: resetForm1,
  } = useForm();
  //
  const router = useRouter();
  //
  const [token, setToken] = useState(null);
  //
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);
  //
  const contactFrom1 = async (data) => {
    try {
      const response = await axios.post(
        "https://submitform.acedigitalsolution.com/airlines_api/auth/login.php",
        data
      );
      // console.log(response);
      toast("You are successfully logged in");
      localStorage.setItem("token", response?.data?.token);
      router.push("/admin");
      //
      resetForm1();
    } catch (error) {
      toast.error("Username and Password is incorrect");
      throw error;
    }
  };
  //

  const handleShowIcons = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex">
      <ToastContainer />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex items-center flex-col">
          

          <Link href="/">
            <Image
              src={logo}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmitForm1(contactFrom1)}
            className="space-y-3"
            autoComplete="off"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="text"
                  name="text"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  autoComplete="off"
                  {...registerForm1("username", { required: true })}
                />
                {errorsForm1.fullname && (
                  <span className="error_message text-dangerColor">
                    Email is required
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "password" : "text"}
                  {...registerForm1("password", {
                    required: true,
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
                {showPassword ? (
                  <Icon
                    icon="clarity:eye-hide-line"
                    width="20"
                    height="20"
                    className="absolute top-2 right-2"
                    onClick={handleShowIcons}
                  />
                ) : (
                  <Icon
                    icon="ph:eye-duotone"
                    width="20"
                    height="20"
                    className="absolute top-2 right-2"
                    onClick={handleShowIcons}
                  />
                )}
              </div>
              {errorsForm1.phone_number && (
                <span className="error_message text-dangerColor">
                  Password is required
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-mainColor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-500`}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
