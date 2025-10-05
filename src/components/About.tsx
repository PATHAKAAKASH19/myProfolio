import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function About() {
  return (
    <section
      id="about"
      className=" w-full  bg-[url(/bg2.jpeg)] bg-no-repeat bg-cover bg-right flex 
      justify-center px-5 dark:bg-[url(/bg2Black.jpeg)] dark:bg-right pb-30"
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
          <div className="w-[0.5px] bg-gray-600   self-stretch max-md:hidden dark:bg-white "></div>
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

            <div className="pb-6">
              <h1 className="py-4 text-[26px] font-medium">Tech Stack</h1>
              <div className="flex gap-2 flex-wrap max-md:w-[320px] ">
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100 max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  Next.js
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  React
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  JavaScript
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  TypeScript
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px]dark:bg-gray-800 dark:bg-gray-800">
                  Tailwind
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  ShadCN
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  MongoDB
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  Postgres
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  Node
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  Express
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  git
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  github
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  zustand
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  Redux
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100  max-md:w-25 max-md:rounded-[2em] max-md:text-[12px] dark:bg-gray-800">
                  Figma
                </div>
              </div>
            </div>

            <div className="pb-6">
              <h1 className="py-4 text-[26px] font-medium ">Education</h1>

              <div className="flex flex-col gap-[12px] max-md:text-[13px] max-md:gap-[15px] ">
                <h2>
                  - Bachelor in computer science, Arsd College, DU,  (Year Of Passing: 2025)
                </h2>
                <h2>
                - Senior Secondary School, CBSE, Delhi (Year of Passing: 2021)
                </h2>

                <h2>
                  - Secondary School, CBSE, Delhi (Year of Passing: 2019)</h2>
              </div>
            </div>
            <div className="pb-6">
              <h1 className="py-4 text-[26px] font-medium">Socials</h1>
              <div className="flex gap-5 max-md:justify-center">
                <a
                  href="https://github.com/PATHAKAAKASH19"
                  target="_blank"
                  title="Github"
                >
                  <IconBrandGithub className="hover:scale-130 hover:bg transition-transform duration-300 cursor-pointer hover:text-blue-400"></IconBrandGithub>
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-pathak-48026a221/"
                  target="_blank"
                  title="Linkedin"
                >
                  <IconBrandLinkedin className="hover:scale-130 hover:bg transition-transform duration-300 cursor-pointer hover:text-blue-400"></IconBrandLinkedin>
                </a>

                <a
                  href="https://x.com/PathakAkash_10"
                  target="_blank"
                  title="Twitter/X"
                >
                  <IconBrandTwitter className="hover:scale-130 hover:bg transition-transform duration-300 cursor-pointer hover:text-blue-400"></IconBrandTwitter>
                </a>
                <a
                  href="mailto:pathakAakash8900@gmail.com"
                  target="_blank"
                  title="Gmail"
                >
                  <IconMail className="hover:scale-130 hover:bg transition-transform duration-300 cursor-pointer hover:text-blue-400"></IconMail>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
