import { IconBrandGithub } from "@tabler/icons-react";
import { IconLink } from "@tabler/icons-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className=" bg-[url(/bg3.jpeg)] bg-no-repeat bg-cover bg-top-left flex justify-center px-5  font-poppins overflow-x-hidden dark:bg-[url(/bg3Black.jpeg)]"
    >
      <div className="relative  h-full w-4xl mb-15">
        <h1 className="font-caveat-brush text-5xl self-start py-9 max-md:pl-2 max-md:text-center">
          Projects
        </h1>
        <div className="flex justify-start items-center gap-8  pb-8  max-md:flex-wrap max-lg:gap-5  max-lg:justify-center ">
          <div className="w-110 h-1/4 rounded-2xl  bg-white/20 backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300 flex flex-col justify-evenly items-center gap-2 p-2 max-lg:w-[350px] max-sm:w-[330px] ">
            <h1 className="font-poppins text-[24px] pt-2 font-medium pb-2">
              Looks
            </h1>
            <div className="w-95 h-55 max-lg:w-[310px] flex justify-center items-center">
              <img
                src="/project1.png"
                alt="projet image"
                title="LOOKS- an e-commerce site"
                className="rounded-2xl object-cover w-full h-full"
                loading="lazy"
              ></img>
            </div>
            <p className="w-sm px-2  py-4 max-lg:w-[310px] max-lg:text-[13px] text-white/85">
              Looks is a modern e-commerce app Having features like secure Jwt
              authentication, payment gateway , seller dashboard , modern ui,
              user dashboard with an seamless user experience
            </p>
            <div className="flex gap-5 pb-3 pr-5 w-sm justify-end  max-lg:pr-10">
              <a
                href="https://github.com/PATHAKAAKASH19/LOOKS"
                className="cursor-pointer hover:scale-110  w-24 flex  
                justify-evenly items-center p-2 rounded-[0.5em]  bg-white font-medium dark:bg-gray-800"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconBrandGithub className="size-4"></IconBrandGithub>
                <h2 className="text-[14px] ">code</h2>
              </a>
              <a
                href="https://looks.akash-pathak.xyz/"
                className="cursor-pointer hover:scale-110  w-24 flex  
                justify-evenly items-center p-2 rounded-[0.5em]  bg-white font-medium dark:bg-gray-800"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconLink className="size-4"></IconLink>
                <h2 className="text-[14px]">Link</h2>
              </a>
            </div>
          </div>
          <div className="w-110 h-1/4 rounded-2xl  bg-white/20 backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300 flex flex-col justify-evenly items-center gap-2 p-2 max-lg:w-[350px] max-sm:w-[330px] ">
            <h1 className="font-poppins text-[24px] pt-2 font-medium pb-2">
              Drawmify
            </h1>
            <div className="w-95 h-55 max-lg:w-[310px] flex justify-center items-center">
              <img
                src="/project2.png"
                alt="projet image"
                title="Drawmify - a collaborative white boared"
                className="rounded-2xl object-cover w-full h-full"
                loading="lazy"
              ></img>
            </div>
            <p className="w-sm px-2  py-4 max-lg:w-[310px] max-lg:text-[13px] text-white/85">
              Drawmify is a whiteboard app inspired by Excalidraw built using
              React, Rough.js, Zustand, and TailwindCSS. It allows users to draw
              freely with smooth, hand-drawn-style shapes.
            </p>
            <div className="flex gap-5 pb-3 pr-5 w-sm justify-end  max-lg:pr-10">
              <a
                href="https://github.com/PATHAKAAKASH19/Drawmify"
                className="cursor-pointer hover:scale-110  w-24 flex  
                justify-evenly items-center p-2 rounded-[0.5em]  bg-white font-medium dark:bg-gray-800"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconBrandGithub className="size-4"></IconBrandGithub>
                <h2 className="text-[14px] ">code</h2>
              </a>
              <a
                href="https://drawmify.akash-pathak.xyz/"
                className="cursor-pointer hover:scale-110  w-24 flex  
                justify-evenly items-center p-2 rounded-[0.5em]  bg-white font-medium dark:bg-gray-800"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconLink className="size-4"></IconLink>
                <h2 className="text-[14px]">Link</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="w-110 flex justify-start items-center gap-8  pb-8  max-md:flex-wrap max-lg:gap-5  max-lg:justify-center">
          <div className="w-md h-1/4 rounded-2xl  bg-white/20 backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300 flex flex-col justify-evenly items-center gap-2 p-2 max-lg:w-[350px] max-sm:w-[330px]">
            <h1 className="font-poppins text-[24px] pt-2 font-medium pb-2">
              Popcorn
            </h1>
            <div className="w-95 h-55 max-lg:w-[310px] flex justify-center items-center">
              <img
                src="/project3.png"
                alt="projet image"
                title="LOOKS- an e-commerce site"
                className="rounded-2xl object-cover w-full h-full"
                loading="lazy"
              ></img>
            </div>
            <p className="w-sm px-2  py-4 max-lg:w-[310px] max-lg:text-[13px] text-white/85">
              Popcorn is a movie discovery web app inspired by TMDB.
              The app features a clean and responsive UI. It allows users to explore movies, view
              details, and discover trending content seamlessly.
            </p>
            <div className="flex gap-5 pb-3 pr-5 w-sm justify-end  max-lg:pr-10">
              <a
                href="https://github.com/PATHAKAAKASH19/popcorn"
                className="cursor-pointer hover:scale-110  w-24 flex  
                justify-evenly items-center p-2 rounded-[0.5em]  bg-white font-medium dark:bg-gray-800"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconBrandGithub className="size-4"></IconBrandGithub>
                <h2 className="text-[14px] ">code</h2>
              </a>
              <a
                href="https://popcorn.akash-pathak.xyz/explore"
                className="cursor-pointer hover:scale-110  w-24 flex  
                justify-evenly items-center p-2 rounded-[0.5em]  bg-white font-medium dark:bg-gray-800"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconLink className="size-4"></IconLink>
                <h2 className="text-[14px]">Link</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
