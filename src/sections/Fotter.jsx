import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constant";

const Fotter = () => {
  return (
    <>
      <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} alt="logo" width={150} height={46} />
            </a>
            <p className="mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm text-base">
              Get shoes raedy for the new term at your nearest nike store.
              Become a member today and enjoy exclusive deals, new releases, and
              more.{" "}
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((social) => (
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-slate-gray">
                  <img src={social.src} alt={social.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((footerLink) => (
              <div key={footerLink}>
              <h4 className="text-white-400 font-montserrat text-3xl">
                {footerLink.title}
              </h4>
              <ul className="mt-6">
                {footerLink.links.map((link) => (
                  <li className="mt-4 text-white-400 font-montserrattext-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>

              </div>


            ))}
          </div>
        </div>
        <div className="mt-10 text-center text-white-400 font-montserrat">
          © 2024. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Fotter;
