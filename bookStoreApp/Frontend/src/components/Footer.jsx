import React from "react";
import { FaGithub, FaPhone } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <hr />
      <footer className="bg-white p-8" style={{ cursor: "default" }}>
        <div className="flex justify-between flex-wrap gap-4">
          <p className="text-black text-center w-full sm:w-auto font-light">
            © {year} Nikhitha All rights reserved.
          </p>
          <div className="text-black flex justify-around sm:w-[250px] w-full">
            <a
              href="mailto:nikhithareddy204@gmail.com"
              className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            >
              <FiMail className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhitha-reddy-b-08b912211"
              target="_blank"
              className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
              rel="noreferrer"
            >
              <AiFillLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/nikhithareddy1824"
              target="_blank"
              className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
              rel="noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="tel:7624852735"
              className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            >
              <FaPhone className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
