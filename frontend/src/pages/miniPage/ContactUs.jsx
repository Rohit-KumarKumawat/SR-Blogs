import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  return (
    <>
      <div id="contact" className="bg-gray-200 py-12 px-4 mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Get in Touch with Me 😊
          </h2>
          <div className="space-y-6 text-center">
            <div className="flex items-center justify-center space-x-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blue-500 text-xl"
              />
              <span className="text-gray-700">
                rohitkumarkumawat22@gmail.com
              </span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blue-500 text-xl"
              />
              <span className="text-gray-700">sonalikumawat700@gmail.com</span>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-green-500 text-xl"
              />
              <span className="text-gray-700">+91 8306462630</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-red-500 text-xl"
              />
              <span className="text-gray-700">Rajasthan, India</span>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/rohit-kumawat-a9a075232/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/Rohit-KumarKumawat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full hover:bg-gray-900"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="mailto:rohitkumarkumawat22@gmail.com"
                className="px-6 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
