import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { DarkModeContext } from "../../../App";
import contact from "../../../Assest/Contact.gif";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const homePage = useLocation().pathname === '/';
  const [darkMode] = useContext(DarkModeContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const form = useRef();

  const sendEmail = (data) => {
    
    // console.log(data)
    // let emailData = {
    //     email: data.email,
    //     message: data.message,
    //     name: data.name
    // }
    // console.log(emailData);
    emailjs
      .sendForm(
        "endgame_project",
        "endgame_project",
        form.current,
        "izhjd_XATNZhThYrx"
      )
      .then(
        (res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success("Message sent successfully", { id: "success" });
            reset();
          }
        },
        (err) => {
          toast.error("Message not sent", { id: "error" });
        }
      );
  };

  return (
    <section className={`flex  ${homePage ? '' : 'lg:mt-[170px]'} mt-20 justify-center items-center`} id="contactUs">
      <div className="w-[60%] px-3 hidden md:block">
        <img className="w-full" src={contact} alt="" />
      </div>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <section className="text-white body-font relative md:px-5">
          <div className="">
            <div className="w-full mx-auto border px-5 py-12 md:px-16 shadow-md  rounded">
              {/* <h2 className='text-center text-4xl font-bold underline underline-offset-8 decoration-black text-black mb-5'>Contact Us</h2> */}
              <h2
                className={`${
                  darkMode ? "text-white" : "text-black"
                }  uppercase text-3xl font-bold text-center`}
              >
                Contact<span className="text-[#f61a1a]"> Us</span>
              </h2>
              <div className="flex justify-center mb-10">
                <div className=" rounded-md w-32 h-1 bg-[#f61a1a]"></div>
                <div className=" rounded-md w-4 h-1 mx-2 bg-[#ffd103]"></div>
                <div className=" rounded-md w-2 h-1 bg-[#030303]"></div>
              </div>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`${
                        darkMode ? "text-white" : "text-black"
                      }  leading-7 text-sm  font-medium`}
                    >
                      Name
                    </label>
                    <input
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is required",
                        },
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters",
                        },
                      })}
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <label>
                    {errors.name?.type === "required" && (
                      <p className="text-red-600 text-sm font-semibold">
                        {errors.name.message}
                      </p>
                    )}
                    {errors.name?.type === "minLength" && (
                      <p className="text-red-600 text-sm font-semibold">
                        {errors.name.message}
                      </p>
                    )}
                  </label>
                </div>
                <div className="p-2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`${
                        darkMode ? "text-white" : "text-black"
                      }  leading-7 text-sm  font-medium`}
                    >
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <label>
                    {errors.email?.type === "required" && (
                      <p className="text-red-600 text-sm font-semibold">
                        {errors.email.message}
                      </p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p className="text-red-600 text-sm font-semibold">
                        {errors.email.message}
                      </p>
                    )}
                  </label>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`${
                        darkMode ? "text-white" : "text-black"
                      }  leading-7 text-sm  font-medium`}
                    >
                      Message
                    </label>
                    <div 
                    contentEditable
                      {...register("message", {
                        required: {
                          value: true,
                          message: "Message is required",
                        },
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                      })}
                      id="message"
                      name="message"
                      className="lg:max-w-[700px] lg:min-w-[600px] max-w-[330px] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 min-h-[16px] overflow-x-hidden overflow-y-auto max-h-[100px] text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></div>
                  </div>
                  <label>
                    {errors.message?.type === "required" && (
                      <p className="text-red-600 text-sm font-semibold">
                        {errors.message.message}
                      </p>
                    )}
                    {errors.message?.type === "minLength" && (
                      <p className="text-red-600 text-sm font-semibold">
                        {errors.message.message}
                      </p>
                    )}
                  </label>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto   hover:selection:border-0 py-2 px-8 focus:outline-none  rounded text-lg  border-2 border-red-600 hover:bg-warning bg-white hover:text-teal-900  duration-200 text-black   mt-4 sm:mt-8 font-semibold"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </section>
  );
};

export default Contact;
