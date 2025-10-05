import ThemeToggle from "./ui/ThemeToggle"

export default function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex justify-center items-center  gap-6 bg-[url(/bg.jpeg)] bg-no-repeat bg-cover bg-right box-border px-5 relative max-md:px-4 dark:bg-[url(/bgBlack.jpeg)] transition-colors duration-800 "
    >
      <div className=" w-4xl flex flex-col items-center gap-5 ">
        <h1 className="text-8xl font-caveat-brush max-lg:text-[80px] max-md:text-[65px] text-center max-sm:text-[64px]">
          hey, I 'm Akash Pathak !
        </h1>
        <h2 className="text-center px-20 text-[16px] font-poppins max-md:px-18 max-md:text-[15px] max-lg:px-30 max-sm:px-2 max-sm:text-[14px]">
          I Build scalable, responsive, and user-focused web applications with
          React, TypeScript, and Tailwind to deliver performance, design, and
          functionality.
        </h2>
        <div className="flex justify-center gap-4 mt-3.5">
          <a
            href="#projects"
            className="w-40 h-12 flex justify-center items-center rounded-2xl bg-black text-white font-medium hover:scale-110 duration-300 transition-transform  max-sm:text-[13px] dark:bg-blue-400"
          >
            View My Work
          </a>
          <a
            href="/resume5.pdf"
            target="_black"
            rel="noopener noreferrer"
            className="w-40 h-12 flex justify-center items-center rounded-2xl bg-white text-black font-medium hover:scale-110 transition-transform duration-300 max-sm:text-[13px]"
          >
            My resume
          </a>
        </div>

        <div className="absolute bottom-40 max-sm:bottom-20 max-md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
}
