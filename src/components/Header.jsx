import React, { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "./Button";


export default function Header() {
  const [color, setColor] = useState("");
  const [selectedPath, setSelectedPath] = useState("");

  const handleColorChange = (path) => {
    setSelectedPath(path)
    setColor("#ffb100");
    console.log(color)
  };
  return (
    <header className="header">
      <div className="top-1 flex w-full items-center">
        <Link to="/" onClick={() => handleColorChange('/')} style={{ color: selectedPath === "/" ? "" : "" }} className="flex items-center rounded-l-[6px] h-[70px] bg-[#ffc500] mr-[10px] px-[24px] text-[17.5px]"><i className="fa fa-home item" aria-hidden="true"></i></Link>
        <Link to="/resume" onClick={() => handleColorChange('/resume')} style={{ color: selectedPath === "/resume" ? "#ffb100" : "#000" }} className="hidden sm:flex text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500]">RESUME</Link>
        <Link to="/portfolio" onClick={() => handleColorChange('/portfolio')} style={{ color: selectedPath === '/portfolio' ? "#ffb100" : "#000" }} className="hidden sm:flex text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500]">PORTFOLIO</Link>
        <Link to="/blog" onClick={() => handleColorChange("/blog")} style={{ color: selectedPath === "/blog" ? "#ffb100" : "#000" }} className="hidden sm:flex text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500]">BLOG</Link>
        <Link to="/contact" onClick={() => handleColorChange("/contact")} style={{ color: selectedPath === "/contact" ? "#ffb100" : "#000" }} className="hidden sm:flex text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500]">CONTACT</Link>
      </div>
      <div className="top-2 helo hidden sm:flex">
        <Link href="#" className=" "><i className="fa-brands fa-facebook-f menu-icon cl-fb"></i></Link>
        <Link href="#" className="menu-text"><i className="fa-brands fa-twitter menu-icon cl-tw"></i></Link>
        <Link href="#" className="menu-text"><i className="fa-brands fa-instagram menu-icon cl-ins"></i></Link>
        <Link href="#" className="menu-text mr-[6px]"><i className="fa-brands fa-dribbble menu-icon cl-dr"></i></Link>
        {/* <Link href="#" class="btn-top2 flex sm:hidden"><i class="fa-solid fa-bars "></i></Link> */}
        <Btn title='Hire Me' icon='fa-solid fa-paper-plane' />
      </div>
      <div className="top-2 helo flex sm:hidden ">
        <Link href="#" className="menu-text "><i className="fa-brands fa-facebook-f menu-icon cl-fb"></i></Link>
        <Link href="#" className="menu-text"><i className="fa-brands fa-twitter menu-icon cl-tw"></i></Link>
        <Link href="#" className="menu-text"><i className="fa-brands fa-instagram menu-icon cl-ins"></i></Link>
        <Link href="#" className="menu-text mr-[6px]"><i className="fa-brands fa-dribbble menu-icon cl-dr"></i></Link>
        <Link className="bars-icon text-[12px] mr-[10px] leading-[71px] pl-[21px] hidden">
          <i className="fa fa-bars"></i>
        </Link>
        {/* <Link href="#" class="btn-top2 flex sm:hidden"><i class="fa-solid fa-bars "></i></Link> */}

      </div>
    </header>
  );
};
