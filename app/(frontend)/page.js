"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "./components/Navbar";
import PrimaryButton from "./components/PrimaryButton";
import FlipCard from "./components/FlipCard";
import StackedImages from "./components/StackedImages";

export default function Home() {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);

  const handleOpenAboutMe = () => {
    setIsLeaving(true);
    setTimeout(() => router.push("/aboutme"), 300);
  };

  const handleOpenEvidence = () => {
    router.push("/projects");
  };

  const handleOpenReport = () => {
    router.push("/experiences");
  };

  return (
    <>
      <Navbar />
      <main
        className={`pt-14 transition-transform duration-300 ease-in-out ${
          isLeaving ? "opacity-0 -translate-y-6" : "opacity-100 translate-y-0"
        } flex flex-col flex-1 text-[#2b1d0e] items-center justify-center w-full min-h-screen`}
      >
        <section id="aboutme" className="flex flex-row items-center justify-center gap-10 text-[#2b1d0e] pt-20">
          <FlipCard frontSrc="/casecover.svg" backSrc="/my case.svg" />

          <div className="flex flex-col">
            <h1 className="text-[15px] md:text-[60px] ">
              THE <br /> INVESTIGATION <br /> OF LARAS
            </h1>
            <PrimaryButton onClick={handleOpenAboutMe} disabled={isLeaving} className="mt-2">
              Open the case
            </PrimaryButton>
          </div>
        </section>

        <section id="projects" className="w-full py-20 flex flex-col md:flex-row-reverse justify-center md:justify-between items-center md:items-start px-5 md:px-10 text-center md:text-left md:mr-40">
          <div className="flex flex-col gap-20 md:items-end w-full md:w-[500px]">
            <div className="relative flex justify-center">
              <Image
                width={200}
                height={130}
                src="/projek2.svg"
                alt="AI Summarizer"
                className="relative w-[200px] md:w-[449px] rotate-[-10deg] shadow-xl"
              />
            </div>

            <div className="relative -mt-40 md:-mt-50 flex justify-center">
              <Image
                width={200}
                height={130}
                src="/projek1.svg"
                alt="Flower Classifier AI"
                className="w-[200px] md:w-[449px] rotate-[8deg] shadow-xl translate-x-[-25px] translate-y-[50px] md:translate-x-[-100px]"
              />
            </div>
         </div>

          <PrimaryButton onClick={handleOpenEvidence} className="relative z-10 mt-[80px] ml-[100px] md:mt-[200px] md:ml-[200px] top-5">
            Open the evidence file
          </PrimaryButton>
        </section>

        <section id="experiences" className="w-full py-10 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start px-5 md:px-10 text-center md:text-left">
          <StackedImages
            images={[
              { src: "/report1.webp", alt: "Courses", className: "absolute md:top-0 md:left-[100px] w-[150px] md:w-[300px] rotate-[-10deg] shadow-xl z-10" },
              { src: "/report2.webp", alt: "Events",  className: "absolute top-[100px] md:top-[200px] left-[30px] md:left-[300px] w-[150px] md:w-[300px] rotate-[8deg] shadow-xl z-20" },
              { src: "/report3.webp", alt: "Organization", className: "absolute top-[200px] md:top-[400px] left-[130px] md:left-[40px] w-[150px] md:w-[300px] rotate-[3deg] z-30" },
            ]}
          />

          <PrimaryButton onClick={handleOpenReport} className="relative z-50 -mt-20 md:mt-[200px] md:mr-[100px]">
            Open the report file
          </PrimaryButton>
        </section>
      </main>
    </>
  );
}
