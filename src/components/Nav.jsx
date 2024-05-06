import React from 'react'
import {headerLogo} from '../assets/images/index.js'
import { navLinks } from '../constant/index.js'
import { TfiAlignRight, TfiClose } from "react-icons/tfi";

const Nav = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }


  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-slate-200">
      <nav className="flex items-center justify-between max-container">
        {/* Logo */}
        <a href="#">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex  justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <button onClick={handleOpen} className="text-3xl">
            {open ? <TfiClose /> : <TfiAlignRight />}
          </button>
          <div
            className={`${
              open ? "flex" : "hidden"
            } flex-col gap-4 absolute top-20 right-0 w-2/3 h-[500px] bg- p-8 mobile-nav rounded-lg bg-primary text-center z-10`}
          >
            {navLinks.map((link) => (
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red "
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat hover:text-coral-red">
              <a href="/">Sign in</a>
              <span>/</span>
              <a href="/">Explore now</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav