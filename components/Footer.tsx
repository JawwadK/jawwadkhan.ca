import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
const Footer = () => {
    return (
      <footer className="mx-auto mx-w-3xl px-4 sm:px-4 md:max-w-5xl">
        <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
        <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
          <div className="text-neutral-500 dark:text-neutral-100">
            <p>
              © Jawwad Khan 2025 | Built with{" "}
              <a
                className="text-neutral-600 hover:text-neutral-300"
                href="https://nextjs.org/"
              >
                Next.js
              </a>
              ,{" "}
              <a
                className="text-neutral-600 hover:text-neutral-300"
                href="https://reactjs.org/"
              >
                React
              </a>{" "}
              and{" "}
              <a
                className="text-neutral-600 hover:text-neutral-300"
                href="https://tailwindcss.com/"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
          <div className="flex flex-row item-center justify-center space-x-2 mb-1">
            <a
              href="https://github.com/JawwadK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="text-neutral-600  dark:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jawwadkhan77/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-neutral-600  dark:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer"
                size={30}
              />
            </a>
            <a
              href="mailto:jawwad1809@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail
                className="text-neutral-600  dark:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer"
                size={30}
              />
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer