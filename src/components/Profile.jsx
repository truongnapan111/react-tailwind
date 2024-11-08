import React from "react";
import Btn from "./Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Profile() {
  return (
    <div className="content-left py-0 col-span-1 px-[15px]">
      <div className="profile w-full bg-[#fff] rounded-md boxshadow">
        <div className="profile-name leading-[18px] p-5 ">
          <span class="name uppercase text-[17px] font-bold text-[#333]">
            Henry Rooney
          </span>
          <br />
          <span className="job text-[13px] text-[#777777]">
            Creative Designer
          </span>
        </div>
        <figure className="profile-image">
          <img
            src="/image/profile.ba9daec7.jpg"
            alt="Profile"
            className="w-full"
          />
        </figure>
        <ul className="profile-information ml-[35px] my-[8px]">
          <li className="pb-[12px] pl-[30px] relative "></li>
          <li>
            <p className="text-[13.5px] text-[#7f7f7f] leading-[12px]">
              <span className="text-[#000] pr-[3.4px]">Name:</span>
              Chris Johnson
            </p>
          </li>
          <li>
            <p className="text-[13.5px] text-[#7f7f7f] leading-[12px]">
              <span className="text-[#000] pr-[3.4px]">Birthday:</span>
              06 December 1987
            </p>
          </li>
          <li>
            <p className="text-[13.5px] text-[#7f7f7f] leading-[12px]">
              <span className="text-[#000] pr-[3.4px]">Job:</span>
              Freelancer
            </p>
          </li>
          <li>
            <p className="text-[13.5px] text-[#7f7f7f] leading-[12px]">
              <span className="text-[#000] pr-[3.4px]">Email:</span>
              henry@domain.com
            </p>
          </li>
          <li>
            <p className="text-[13.5px] text-[#7f7f7f] leading-[12px]">
              <span className="text-[#000] pr-[3.4px]">Skype:</span>
              henryrooney85
            </p>
          </li>
        </ul>
        <div className="col-md-12  min-h-[1px] px-[15px] pb-[30px]">
          <div className="mt-[26px] flex justify-center">
            <Btn title="Download Cv" icon="fa fa-download" />
          </div>
        </div>
      </div>
    </div>
  );
};
