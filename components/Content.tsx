import React from "react";
import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import SlideInAnimation from "./SlideInAnimation";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import LottieAnimation from "./LottieAnimation";

const Content = () => {
  const handleButtonClick = (link: string) => {
    window.open(link, "_blank");
  };
const lottieUrl = "https://lottie.host/0c3beacf-a20d-441e-8a44-61c69928748c/eIg3tYkkqi.json"
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center overflow-auto"
      >
        <div className="flex flex-col text-center items-center justify-center mt-12 md:pb-16 sm:py-16 md:text-left md:w-5/5">
          {/* Profile Photo Section */}
          <SlideInAnimation direction="left">
            {/**<div className="w-full h-auto flex justify-center items-center mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-cyan-900 rounded-full blur opacity-75"></div>
                <Image
                  className="relative rounded-full shadow-2xl transition-all duration-300 grayscale hover:grayscale-0"
                  src="/Headshot Cropped.jpg"
                  alt="Jawwad Headshot Image"
                  width={400}
                  height={400}
                  priority
  />
              </div>
            </div>**/}
            <div className="w-full h-auto flex justify-center items-center">
            <LottieAnimation
              animationUrl={lottieUrl}
              width="600px"
              height="600px"
              speed={1}
              loop={true}
              className="transition-all duration-300 hover:scale-110"
            />
            </div>
          </SlideInAnimation>

          <TypingAnimation />

          <SlideInAnimation direction="left">
            <p className="text-lg mt-6 mb-4 md:text-2xl text-center font-semibold bg-gradient-to-r from-cyan-900 to-cyan-600 dark:from-cyan-400 dark:to-cyan-600 text-transparent bg-clip-text">
              Full-Stack Developer - Data Enthusiast
            </p>

            <p className="text-lg mb-6 md:text-xl text-center text-gray-700 dark:text-gray-300"></p>
          </SlideInAnimation>

          {/* Social Buttons Section */}
          <SlideInAnimation direction="right">
            <div className="flex space-x-6 justify-center items-center mt-4">
              <button
                className="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                onClick={() => handleButtonClick("https://github.com/JawwadK")}
              >
                <FaGithub
                  className="text-cyan-950 hover:text-cyan-600 dark:text-white"
                  size={30}
                />
              </button>
              <button
                className="flex items-center justify-center text-xl sm:text-2xl font-semibold px-6 py-3 bg-cyan-950 text-neutral-100 rounded-lg shadow hover:bg-cyan-800 dark:bg-white dark:text-neutral-950 transition-all duration-300 hover:-translate-y-1"
                onClick={() => handleButtonClick("/Jawwad_Resume.pdf")}
              >
                <FaFilePdf size={25} className="mr-2" />
                <span>Resume</span>
              </button>
              <button
                className="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                onClick={() =>
                  handleButtonClick("https://www.linkedin.com/in/jawwad77/")
                }
              >
                <FaLinkedin
                  className="text-cyan-950 hover:text-cyan-600 dark:text-white"
                  size={30}
                />
              </button>
            </div>
          </SlideInAnimation>
        </div>
      </section>
    </>
  );
};

export default Content;
