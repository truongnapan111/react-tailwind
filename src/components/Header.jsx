import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Button";


export default function Header () {
  return (
    <header className="flex justify-between w-full bg-white h-[70px] mb-[30px] rounded-[6px] shadow-[0_2px_92px_#00000012]">
      <div className="top-1 flex w-full items-center">
        <Link to="/" className="flex items-center rounded-l-[6px] h-[70px] bg-[#ffc500] mr-[10px] px-[24px] text-[17.5px]"><i class="fa fa-home item" aria-hidden="true"></i></Link>
        <Link to="/resume" className="hidden sm:flex text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500]">RESUME</Link>
        <Link to="/portfolio" className="hidden sm:flex text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500]">PORTFOLIO</Link>
        <Link to="/blog" className="hidden sm:flex text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500]">BLOG</Link>
        <Link to="/contact" className="hidden sm:flex text-[#000] px-[10px] text-[14px] h-[67px] font-bold leading-[70px] hover:text-[#ffc500]">CONTACT</Link>
      </div>
      <div className="top-2 hidden md:flex items-center justify-end w-full h-[37px] mt-[18px] mr-[18px] ml-[5px] py-[1px] pl-[19px]">
        <Link href="#" class="text-[#000] ml-[4px] h-[29px] "><i class="fa-brands fa-facebook-f text-[11px] w-6 transition-all hover:text-xs hover:transform cl-fb"></i></Link>
        <Link href="#" class="text-[#000] ml-[4px] h-[29px]"><i class="fa-brands fa-twitter text-[11px] w-6 transition-all hover:text-xs hover:transform cl-tw"></i></Link>
        <Link href="#" class="text-[#000] ml-[4px] h-[29px]"><i class="fa-brands fa-instagram text-[11px] w-6 transition-all hover:text-xs hover:transform cl-ins"></i></Link>
        <Link href="#" class="text-[#000] ml-[4px] mr-[6px] h-[29px]"><i class="fa-brands fa-dribbble text-[11px] w-6 transition-all hover:text-xs hover:transform cl-dr"></i></Link>
        {/* <Link href="#" class="btn-top2 flex sm:hidden"><i class="fa-solid fa-bars "></i></Link> */}
        <Btn title='Hire Me' icon='fa-solid fa-paper-plane'/>
      </div>
      <div className="top-2 flex sm:hidden items-center justify-end w-full h-[37px] mt-[18px] mr-[18px] ml-[5px] py-[1px] pl-[19px]">
        <Link href="#" class="text-[#000] ml-[4px] h-[29px] "><i class="fa-brands fa-facebook-f text-[11px] w-6 transition-all hover:text-xs hover:transform cl-fb"></i></Link>
        <Link href="#" class="text-[#000] ml-[4px] h-[29px]"><i class="fa-brands fa-twitter text-[11px] w-6 transition-all hover:text-xs hover:transform cl-tw"></i></Link>
        <Link href="#" class="text-[#000] ml-[4px] h-[29px]"><i class="fa-brands fa-instagram text-[11px] w-6 transition-all hover:text-xs hover:transform cl-ins"></i></Link>
        <Link href="#" class="text-[#000] ml-[4px] mr-[6px] h-[29px]"><i class="fa-brands fa-dribbble text-[11px] w-6 transition-all hover:text-xs hover:transform cl-dr"></i></Link>
        <Link className="bars-icon text-[12px] mr-[10px] leading-[71px] pl-[21px] hidden">
          <i className="fa fa-bars"></i>
        </Link>
        {/* <Link href="#" class="btn-top2 flex sm:hidden"><i class="fa-solid fa-bars "></i></Link> */}
        
      </div>
    </header>
  );
};
