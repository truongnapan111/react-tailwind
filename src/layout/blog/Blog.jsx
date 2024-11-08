import React from "react";
import BlogItem from "./BlogItem";
import { dataBlog } from "../../data";

export default function Blog () {
  return (
    <div id="blog" className="resume rounded-lg bg-[#fff] mt-[36px] pb-[15px]">
      <section className="pt-0 px-[15px]  pb-[30px]">
        <div className="content-header py-0 px-[15px] mb-[12px]">
          <div className="section-title relative inline-block py-0 px-[3px] mt-[42px] ">
            <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
            <h2 className="text-[18px] font-[600] text-[#333] relative z-10">Blog Posts</h2>
          </div>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-0">
          {dataBlog.map((item) => (
            <div key={item.date} className="w-full">
              <BlogItem
                key={item.date}
                src={item.src}
                category={item.category}
                title={item.title}
                text={item.text}
                date={item.date}
              />
            </div>
          ))}
        </div>
        <div className="btn mt-[35px] text-center ">
          <button className="site-btn bg-[#ffc500] font-[500] text-[14px] rounded-full leading-[35px] transitionhover py-[1px] p-[29px] inline-block hover:bg-[#f0ac02]">
            Load more (3)
          </button>
        </div>
      </section>
    </div>
  );
};

