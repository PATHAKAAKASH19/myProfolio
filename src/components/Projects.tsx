import { IconBrandGithub } from "@tabler/icons-react";
import { IconLink } from "@tabler/icons-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className=" w-full h-screen bg-[url(/bg3.jpeg)] bg-no-repeat bg-cover bg-top-left flex justify-center"
    >
      <div className="relative  h-full w-5xl ">
        <h1 className="font-caveat-brush text-5xl self-start py-7">Projects</h1>
        <div className="flex justify-evenly items-center gap-10  pb-8">
          <div className="w-1/2 h-1/4 rounded-2xl  bg-white/20 backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300">
            <img
              src="/project1.png"
              alt="projet image"
              title="LOOKS- an e-commerce site"
              className="rounded-2xl object-cover w-full"
            ></img>
            <p className="pl-6 pr-10 py-4">
              Looks is a modern e-commerce app Having features like secure Jwt
              authentication, payment gateway , seller dashboard , modern ui,
              user dashboard with an seamless user experience
            </p>
            <div className="pr-15 flex gap-5 pb-6 justify-end items-center">
              <a
                href="https://github.com/PATHAKAAKASH19/LOOKS"
                className="cursor-pointer hover:scale-110 hover:text-blue-400"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconBrandGithub></IconBrandGithub>
              </a>
              <a
                href="https://looks.akash-pathak.xyz/"
                className="cursor-pointer hover:scale-110 hover:text-blue-400"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconLink></IconLink>
              </a>
            </div>
          </div>
          <div className="w-1/2 h-1/4 rounded-2xl  bg-white/20 backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300">
            <img
              src="/project1.png"
              alt="projet image"
              title="LOOKS- an e-commerce site"
              className="rounded-2xl object-cover w-full"
            ></img>
            <p className="pl-6 pr-10 py-4 ">
              Looks is a modern e-commerce app Having features like secure Jwt
              authentication, payment gateway , seller dashboard , modern ui,
              user dashboard with an seamless user experience
            </p>
            <div className="pr-15 flex gap-5 pb-6 justify-end items-center ">
              <a
                href="https://github.com/PATHAKAAKASH19/LOOKS"
                className="cursor-pointer hover:scale-110 hover:text-blue-400"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconBrandGithub></IconBrandGithub>
              </a>
              <a
                href="https://looks.akash-pathak.xyz/"
                className="cursor-pointer hover:scale-110 hover:text-blue-400"
                title="Looks-Project-Link"
                target="_blank"
              >
                <IconLink></IconLink>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-10  ">
          <div className="w-1/2 h-1/4 rounded-2xl  bg-white/20 backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300">
            <img
              src="/project1.png"
              alt="projet image"
              title="LOOKS- an e-commerce site"
              className="rounded-2xl object-cover w-full"
            ></img>
            <p className="pl-6 pr-10 py-4">
              Looks is a modern e-commerce app Having features like secure Jwt
              authentication, payment gateway , seller dashboard , modern ui,
              user dashboard with an seamless user experience
            </p>
            <div className="pr-15 flex gap-5 pb-6 justify-end items-center">
              <a
                href="https://github.com/PATHAKAAKASH19/LOOKS"
                className="cursor-pointer hover:scale-110 hover:text-blue-400"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconBrandGithub></IconBrandGithub>
              </a>
              <a
                href="https://looks.akash-pathak.xyz/"
                className="cursor-pointer hover:scale-110 hover:text-blue-400"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconLink></IconLink>
              </a>
            </div>
          </div>
          <div className="w-1/2 h-1/4 rounded-2xl  bg-white/20 backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300">
            <img
              src="/project1.png"
              alt="projet image"
              title="LOOKS- an e-commerce site"
              className="rounded-2xl object-cover w-full"
            ></img>
            <p className="pl-6 pr-10 py-4">
              Looks is a modern e-commerce app Having features like secure Jwt
              authentication, payment gateway , seller dashboard , modern ui,
              user dashboard with an seamless user experience
            </p>
            <div className="pr-15 flex gap-5 pb-6 justify-end items-center">
              <a
                href="https://github.com/PATHAKAAKASH19/LOOKS"
                className="cursor-pointer hover:scale-110 hover:text-blue-400"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconBrandGithub></IconBrandGithub>
              </a>
              <a
                href="https://looks.akash-pathak.xyz/"
                className="cursor-pointer hover:scale-110 hover:text-blue-400"
                title="Looks-Github-Repo"
                target="_blank"
              >
                <IconLink></IconLink>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
