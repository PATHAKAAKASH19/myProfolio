export default function About() {
  return (
    <section
      id="about"
      className=" w-full h-screen bg-[url(/bg1.jpeg)] bg-no-repeat bg-cover bg-top-left flex justify-center"
    >
      <div className="relative h-full w-5xl ">
        <h1 className="font-caveat-brush text-5xl py-10 ">About me</h1>

        <div className="flex justify-between gap-4 items-start">
          <div className="w-40 h-40 rounded-[50%]">
            <img
              src="/me.jpg"
              alt="Akash Pathak Pic"
              className="w-full h-full object-cover rounded-[50%]"
              title="Akash Pathak"
            ></img>
          </div>
          <div className="w-1.5 bg-gray-600 border-2  self-stretch"></div>
          <div className="w-3/4 ">
            <p className="pb-5">
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
              <div className="flex gap-2 flex-wrap">
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  Next.js
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  React
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  JavaScript
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  TypeScript
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  Tailwind
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  ShadCN
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  MongoDB
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  Postgres
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  Node
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  Express
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  git
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  github
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  zustand
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  Redux
                </div>
                <div className="w-30 h-10 shadow-lg flex justify-center items-center rounded-4xl bg-gray-100">
                  Figma
                </div>
              </div>
            </div>

            <div>
              <h1 className="py-5 text-[26px] font-medium">Education</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
