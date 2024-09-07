import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col  items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store.Find
            your perfect size in store. Get rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-12 w-12 bg-white rounded-full cursor-pointer hover:bg-cyan-300"
              >
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap flex-1 gap-20 justify-between lg:gap-10">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat leading-normal text-2xl font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, index) => (
                  <li
                    key={index}
                    className="text-white-400 leading-normal text-base mt-3 font-montserrat hover:text-slate-gray"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            height={20}
            width={20}
            className="rounded m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
