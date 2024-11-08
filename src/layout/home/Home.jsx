import React from "react";
import { dataServices } from "../../data";
import Service from "./Service";
// import Title from "../../components/Title";

function Home () {
  return (
    <div className="content bg-[#ffffff] rounded-md mt-[36px] text-[#333] shadow-[0_2px_92px_#00000012]">
      <div id="home" className="home active boxshadow pb-[10px]">
        <div className="row">
          <section className="about-me pb-[45px] pt-[43.5px] px-[30px]">
            <div className="section-title relative inline-block py-0 px-[3px] text-[#333]">
              <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
              <h2 className="text-[18px] font-[600] text-[#333] relative z-10">About Me</h2>
            </div>

            <p className="mt-[29px] text-[13px] text-[#4c4c4c] leading-[24px]">
              Started earnest brother believe an exposed so. Me he believing
              daughters if forfeited at furniture. Age again and stuff downs
              spoke. Late hour new nay able fat each sell. Nor themselves age
              introduced frequently use unsatiable devonshire get. They why quit
              gay cold rose deal park. One same they four did ask busy. Reserved
              opinions fat him nay position. Breakfast as zealously incommode do
              agreeable furniture. One too nay led fanny allow plate.
              <br />
              <br />
              Quick six blind smart out burst. Perfectly on furniture dejection
              determine my depending an to. Add short water court fat. Her
              bachelor honoured perceive securing but desirous ham required.
              Questions deficient acuteness to engrossed as. Entirely led ten
              humoured greatest and yourself. Besides ye country on observe. She
              continue appetite endeavor she judgment interest the met. For she
              surrounded motionless fat resolution may.
            </p>
          </section>
          <div className="row">
            <section className="services bg-[#fafafa] py-[48.5px] px-[30px]">
              <div className="section-title relative inline-block py-0 px-[3px] mb-[42.5px] text-[#333]">
                <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
                <h2 className="text-[18px] font-[600] text-[#333] relative z-10">My Services</h2>
              </div>
              <div className="row services-list flex items-stretch justify-between gap-[30px]">
                {dataServices.map((i)=>
                  <Service iconClass={i.iconClass} title={i.title} description={i.description}/>
                )}
              </div>
            </section>
          </div>

          <div className="row skill sm:flex items-center justify-between skills">
            <section className=" w-full design-skills px-[30px] pt-[60px] pb-[50px]">
              <div className="section-title relative inline-block py-0 px-[3px] mb-[45px]">
                <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
                <h2 className="text-[18px] font-[600] text-[#333] relative z-10">Design Skills</h2>
              </div>
              <ul className="skill-list">
                <li>
                  <h3 className=" text-[12px] h-[13.2px] font-[500]">Photoshop</h3>
                  <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                    <div className="detail h-[5px] rounded-[3px] bg-[#ffb500] w-[80%]"></div>
                  </div>
                </li>
                <li>
                  <h3 className="text-[12px] h-[13.2px] font-[500]">Sketch</h3>
                  <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                    <div className="detail h-[5px] rounded-[3px] bg-[#ffb500] w-[60%]"></div>
                  </div>
                </li>
                <li>
                  <h3 className="text-[12px] h-[13.2px] font-[500]">Adobe Xd</h3>
                  <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                    <div className="detail h-[5px] rounded-[3px] bg-[#ffb500] w-[30%]"></div>
                  </div>
                </li>
              </ul>
            </section>
            <section className=" w-full code-skills px-[30px] pt-[60px] pb-[50px]">
              <div className="section-title relative inline-block py-0 px-[3px] mb-[45px]">
                <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
                <h2 className="text-[18px] font-[600] text-[#333] relative z-10">Code Skills</h2>
              </div>
              <ul className="skill-list">
                <li>
                  <h3 className=" text-[12px] h-[13.2px] font-[500]">Javascript</h3>
                  <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                    <div className="detail h-[5px] rounded-[3px] bg-[#ffb500] w-[80%]"></div>
                  </div>
                </li>
                <li>
                  <h3 className=" text-[12px] h-[13.2px] font-[500]">HTML5</h3>
                  <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                    <div className="detail h-[5px] rounded-[3px] bg-[#ffb500] w-[60%]"></div>
                  </div>
                </li>
                <li>
                  <h3 className=" text-[12px] h-[13.2px] font-[500]">CSS3</h3>
                  <div className="percentage h-[5px] rounded-[3px] bg-[#ccc] mt-[10px] mb-[20px]">
                    <div className="detail h-[5px] rounded-[3px] bg-[#ffb500] w-[30%]"></div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
