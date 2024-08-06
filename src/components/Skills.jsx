import React from "react";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.svg";
import express from "../assets/express.webp";
import mongodb from "../assets/mongo.webp";
import git from "../assets/Git.png";
import typescript from "../assets/typescript.png";

function Skills() {
  const cardItem = [
    { id: 1, logo: javascript, name: "Javascript" },
    { id: 2, logo: react, name: "React Js" },
    { id: 3, logo: node, name: "Node JS" },
    {
      id: 4,
      logo: express,
      name: "Express Js",
    },
    {
      id: 5,
      logo: mongodb,
      name: "Mongo DB",
    },
    {
      id: 6,
      logo: git,
      name: "Git",
    },
    {
      id: 7,
      logo: typescript,
      name: "Typescript",
    },
  ];
  return (
    <div
      name="skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10  "
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 ">Skills </h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              //   className="md:w-[200px] md:h-[2 00px] p-1  border-[2px] relative rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-300 hover:bg-black  "
              className="relative rounded-lg shadow-lg cursor-pointer overflow-hidden group"
            >
              <img
                src={logo}
                alt=""
                height={120}
                width={240}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 text-white p-4">
                <div className="font-bold">{name} </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />

      <br />
      <hr />
    </div>
  );
}

export default Skills;
