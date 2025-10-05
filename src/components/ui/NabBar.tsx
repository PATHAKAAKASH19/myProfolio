import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMenu2,
} from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NabBar() {
  return (
    <nav className="w-full flex h-30 justify-evenly items-center fixed top-0 px-5 backdrop-blur bg-white/10 z-20 max-md:h-20">
      <div className="w-4xl flex  justify-between items-center ">
        <div className="flex  items-center gap-3 ">
          <div className="w-20 h-20  rounded-[50%] max-md:w-10 max-md:h-10 ">
            <img
              src="/me.jpg"
              alt="user-photo"
              title="Akash-Pathak"
              className="w-full h-full rounded-[50%] object-cover"
            ></img>
          </div>
          <h2 className="font-caveat-brush text-[20px] max-md:text-[18px]">
            Akash Pathak
          </h2>
        </div>

        <div className="font-poppins flex gap-10 max-md:hidden ">
          <a
            href="#home"
            className="transition-transform duration-300 hover:scale-115  hover:text-blue-400 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#projects"
            className="transition-transform duration-300 hover:scale-115  hover:text-blue-400 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#about"
            className="transition-transform duration-300 hover:scale-115 hover:text-blue-400 cursor-pointer"
          >
            About
          </a>
        </div>

        <div className="flex gap-5 max-md:hidden">
          <a
            href="https://github.com/PATHAKAAKASH19"
            target="_blank"
            title="Github"
          >
            <IconBrandGithub className="transition-transform duration-300 hover:scale-120 hover:text-blue-400 cursor-pointer"></IconBrandGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/akash-pathak-48026a221/"
            target="_blank"
            title="Linkedin"
          >
            <IconBrandLinkedin className="transition-transform duration-300 hover:scale-120 hover:text-blue-400 cursor-pointer"></IconBrandLinkedin>
          </a>
          <a
            href="https://x.com/PathakAkash_10"
            target="_blank"
            title="Twitter/X"
          >
            <IconBrandTwitter className="transition-transform duration-300 hover:scale-120 hover:text-blue-400 cursor-pointer"></IconBrandTwitter>
          </a>
        </div>

        <div className="flex gap-5">
          <div className="md:hidden size-4">
            <ThemeToggle />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="mr-5">
              <IconMenu2 className="hidden max-md:block size-[20px] cursor-pointer"></IconMenu2>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen" align="center">
              <a href="#home">
                <DropdownMenuItem>Home</DropdownMenuItem>
              </a>

              <a href="#projects">
                <DropdownMenuItem>Projects</DropdownMenuItem>
              </a>

              <a href="#about">
                <DropdownMenuItem>About me</DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
