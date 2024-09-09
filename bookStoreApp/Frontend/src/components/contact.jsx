import React from "react";
import { FaGithub, FaPhone } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="container mx-auto my-10 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      <p className="text-lg leading-relaxed mb-4">
        If you have any questions, feedback, or inquiries, feel free to reach out to us. We're always happy to help!
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 border rounded-lg"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 flex justify-around">
        <a href="mailto:nikhithareddy204@gmail.com" className="text-2xl text-blue-500">
          <FiMail />
        </a>
        <a href="https://www.linkedin.com/in/nikhitha-reddy-b-08b912211" target="_blank" rel="noreferrer" className="text-2xl text-blue-700">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/nikhithareddy1824" target="_blank" rel="noreferrer" className="text-2xl text-gray-800">
          <FaGithub />
        </a>
        <a href="tel:7624852735" className="text-2xl text-green-600">
          <FaPhone />
        </a>
      </div>
    </div>
  );
};

export default Contact;
