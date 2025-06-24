import React from "react";
import gitLogo from "../assets/logo-github.svg";
import linkedInLogo from "../assets/logo-linkedin.svg";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import photo from "../assets/photo.jpg";
import Resume from "../assets/AvinashResume.pdf";

function Home() {
  return (
    <>
      <div
        name="home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 order-2 md:order-1">
            <span className="text-xl block md:inline">
              Hello Myself Avinash Singh
            </span>
            <div className="flex space-x-1 text-2xl md:text-4xl my-2 ">
              <h1>I am a</h1>
              {/* <span className="text-blue-950 font-bold">Developer </span> */}
              <ReactTyped
                className="text-blue-950 font-bold"
                strings={["Developer", "Programmer", "Coder "]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-base md:text-md text-justify">
              Hi there! I’m Avinash Singh, a dedicated full-stack developer with
              a passion for creating both visually stunning and highly
              functional user interfaces and robust back-end systems. With
              experience in transforming design concepts into interactive,
              user-friendly websites and applications, I specialize in bringing
              designs to life with precision and creativity while also ensuring
              seamless server-side functionality and database management.
            </p>
            <br />
            {/* social media icons */}
            <div>
              <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center ">
                <div className="space-y-2">
                  <h1 className="text-blue-950 font-bold text-center ">
                    Available On
                  </h1>
                  <ul className="flex space-x-5 md:space-x-5">
                    <li>
                      <a
                        href="https://github.com/Avinash123-singh"
                        target="_blank"
                      >
                        <img
                          src={gitLogo}
                          alt=""
                          className="w-8 md:w-10 hover:bg-slate-400 duration-300"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/avinash-singh-b67b5116b/"
                        target="_blank"
                      >
                        <img
                          src={linkedInLogo}
                          alt=""
                          className="w-8 md:w-10 hover:bg-slate-400 duration-300"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h1 className="font-bold text-blue-950 text-center ">
                    Current Working On
                  </h1>
                  <div className="flex flex-wrap space-x-2 sm:space-x-3 md:space-x-4 justify-center md:justify-start">
                    <IoLogoJavascript className="text-3xl sm:text-4xl md:text-4xl" />
                    <FaReact className="text-3xl sm:text-4xl md:text-4xl" />
                    <FaNode className="text-3xl sm:text-4xl md:text-4xl" />
                    <SiExpress className="text-3xl sm:text-4xl md:text-4xl" />
                    <FaGitAlt className="text-3xl sm:text-4xl md:text-4xl" />
                    <SiMongodb className="text-3xl sm:text-4xl md:text-4xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt- 8 order-1">
            <img
              src={photo}
              alt=""
              className="md:h-[450px] md:w=[450px]w-full rounded-full"
            />
          </div>
        </div>
        <div className="w-full mt-8">
          <a
            href={Resume}
            target="_blank" // Optional: This will prompt a download
          >
            <button className=" text-xl shadow appearance-none border rounded py-3 px-7 text-white bg-black focus:outline-none focus:shadow-outline hover:bg-slate-400 duration-300 ">
              Resume
            </button>
          </a>
        </div>
      </div>
      <br />

      <hr />
    </>
  );
}

export default Home;
