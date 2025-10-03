import { BackgroundLines } from "./ui/background-lines";

export default function Text() {
  return (
    <BackgroundLines className="w-full h-screen gap-6 pl-30 flex items-center justify-center flex-col px-4 bg-[url(/wmremove-transformed.jpeg)] bg-no-repeat bg-cover bg-right">
      <h1 className="text-7xl font-caveat-brush">hey, I 'm Akash Pathak !</h1>
      <h3 className="text-[16px] font-poppins">
        I am a full stack developer and loves building stuff
      </h3>
    </BackgroundLines>
  );
}
