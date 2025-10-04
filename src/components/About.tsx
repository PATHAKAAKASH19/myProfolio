import {IconBrandTwitter, IconBrandGithub, IconBrandLinkedin, IconMail, Icon} from "@tabler/icons-react"



export default function About() {
  return (
    <section
      id="about"
      className=" w-full  bg-[url(/bg1.jpeg)] bg-no-repeat bg-cover bg-top-left flex justify-center px-5"
    >
      <div className="relative h-full w-4xl">
        <h1 className="font-caveat-brush text-5xl py-10 max-md:text-center">
          About me
        </h1>

        <div className="flex justify-between gap-4 items-start max-md:flex-col max-md:items-center ">
          <div className="w-40 h-40 rounded-[50%]">
            <img
              src="/me.jpg"
              alt="Akash Pathak Pic"
              className="w-full h-full object-cover rounded-[50%]"
              title="Akash Pathak"
            ></img>
          </div>
          <div className="w-1.5 bg-gray-600 border-2  self-stretch max-md:hidden "></div>
          <div className="w-3/4 max-md:w-[320px] max-md:text-[13px] max-md:text-center font-poppins">
            <p className="pb-5 ">
              Full stack Developer based in India focused on designing engaging
              UI, building interactive experiences & bringing products to life
              through design and technology.
            </p>
            <p className="pb-5">
              I love the idea of a minimalistic and user-focused approach to
              design and development, which I imbibe when designing and building
              fully responsive web applications.
            </p>
            <p className="pb-5">
              I love doing strenght traning and in my spare time i like
              exploring new places, watching anime and science fiction movies
            </p>

            <div className="pb-5">
              <h1 className="py-5 text-[26px] font-medium">Tech Stack</h1>
              <div className="flex gap-2 flex-wrap max-md:w-[320px] ">
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100 max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  Next.js
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  React
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  JavaScript
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  TypeScript
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  Tailwind
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  ShadCN
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  MongoDB
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  Postgres
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  Node
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  Express
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  git
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  github
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  zustand
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  Redux
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]">
                  Figma
                </div>
              </div>
            </div>

            <div>
              <h1 className="py-5 text-[26px] font-medium">Education</h1>
            </div>
            <div className="py-5">
              <h1 className="pb-3 text-[26px] font-medium">Socials</h1>
              <div className="flex gap-5">
                <IconBrandGithub></IconBrandGithub>
                <IconBrandLinkedin></IconBrandLinkedin>
                <IconBrandTwitter></IconBrandTwitter>
                <IconMail></IconMail>
                <IconPackage></IconPackage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
