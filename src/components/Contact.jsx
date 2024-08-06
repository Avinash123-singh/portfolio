import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  // const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    {
      try {
        await axios.post("https://getform.io/f/awngrnmb", userInfo);
        toast.success("Thank you! Your message has been sent.");
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };
  return (
    <>
      <div
        name="contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <h1 className="text-3xl font-bold mb-4 ml-4 md:ml-20 ">Contact Me</h1>
        <span className="text-blue-950 font-bold ml-4 md:ml-20 mb-4">
          Let’s talk for Something special
        </span>
        <br />
        <div className="ml-4 md:ml-20 mb-2">
          <h2 className="text-md md:text-md">avisingh70001@gmail.com</h2>
        </div>
        <div className="ml-4 md:ml-20 mb-2">
          <h2 className="text-md md:text-md">+917985047536</h2>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="https://getform.io/f/awngrnmb"
            method="POST"
            className="bg-slate-200 w-full sm:w-96 px-4 sm:px-9 py-6 rounded-xl "
          >
            <div className="flex flex-col mb-4">
              <input
                {...register("name", { required: true })}
                className="shadow appearance-none border rounded py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter Full Name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <input
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter Email Address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <input
                {...register("message", { required: true })}
                className="shadow appearance-none border rounded py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter Your Message Here "
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-red-950  duration-300 "
            >
              Send
            </button>
          </form>
          
        </div>
        <br />
        <br />
        <hr />
      </div>
    </>
  );
}

export default Contact;
