import React from "react";
import { dataTestimonials } from "../../data";
import Testimonial from "./Testimonial";
function ResumePage() {
  return (
    <div id="resume" className="resume rounded-md bg-[#fff] mt-[36px] py-[15px] shadow-[0_2px_92px_#00000012]">
      <section className="px-[30px]">
        <div className="education">
          <div className="section-title relative inline-block py-0 px-[3px] mt-[27px]">
            <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3.5px] text-[#333]"></span>
            <h2 className="text-[18px] font-[600] text-[#333] relative z-10">Resume</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] text-[#333]">
            <div className="pt-[35px] mx-[15px] w-full">
              <ul className="time-line mx-[15px] w-[317.15px]">
                <li>
                  <i className="fa fa-suitcase"></i>
                  <h2 className="timeline-title">Working History</h2>
                </li>
                <li>
                  <h3 className="line-title">
                    Art Director - Facebook Inc
                  </h3>
                  <span>2010 - Present</span>
                  <p class="little-text text-[13px] text-[#989898] font-normal w-[317.15px]">
                    Expenses as material breeding insisted
                    building to in. Continual so distrusts
                    pronounce by unwilling listening. Thing do
                    taste on we manor.
                  </p>
                </li>
                <li>
                  <h3 class="line-title">
                    Senior Designer - Google
                  </h3>
                  <span>2008 - 2010</span>
                  <p class="little-text text-[13px] text-[#989898] font-normal w-[317.15px]">
                    So insisted received is occasion advanced
                    honoured. Among ready to which up. Attacks
                    smiling and may out assured moments man
                    nothing outward.
                  </p>
                </li>
                <li>
                  <h3 class="line-title">
                    Junior Designer - Creative Shake
                  </h3>
                  <span>2005 - 2008</span>
                  <p class="little-text text-[13px] text-[#989898] font-normal w-[317.15px]">
                    Excited him now natural saw passage offices
                    you minuter. At by asked being court hopes.
                    Farther so friends am to detract.
                  </p>
                </li>
              </ul>
            </div>
            <div class="pt-[35px] w-full">
              <ul class="time-line mx-[15px] w-[317.15px]">
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  <h2 class="timeline-title">
                    Education History
                  </h2>
                </li>
                <li>
                  <h3 class="line-title">
                    Abc University of Los Angeles
                  </h3>
                  <span>2004 - 2009</span>
                  <p class="little-text text-[13px] text-[#989898] font-normal w-[317.15px]">
                    Expenses as material breeding insisted
                    building to in. Continual so distrusts
                    pronounce by unwilling listening. Thing do
                    taste on we manor.
                  </p>
                </li>
                <li>
                  <h3 class="line-title">Drawing Course</h3>
                  <span>2003 - 2004</span>
                  <p class="little-text text-[13px] text-[#989898] font-normal w-[317.15px]">
                    So insisted received is occasion advanced
                    honoured. Among ready to which up. Attacks
                    smiling and may out assured moments man
                    nothing outward.
                  </p>
                </li>
                <li>
                  <h3 class="line-title">Abc High School</h3>
                  <span>2000 - 2003</span>
                  <p class="little-text text-[13px] text-[#989898] font-normal w-[317.15px]">
                    Excited him now natural saw passage offices
                    you minuter. At by asked being court hopes.
                    Farther so friends am to detract.
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="clients py-[45px] px-[30px] mb-[30px]">
          <div className="section-title relative inline-block py-0 px-[3px] mb-[30px] ">
            <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
            <h2 className="text-[18px] font-[600] text-[#333] relative z-10">Clients</h2>
          </div>

          <div className="client-list sm:flex items-center justify-between gap-[30px]">
            <div className="client py-[26px] px-[16px] bg-[#fff] rounded-[6px] boxshadow">
              <img
                className="object-cover w-full"
                src="https://html.tavonline.co/mat/default/images/client-01.jpg"
                alt=""
              />
            </div>
            <div className="client py-[26px] px-[16px] bg-[#fff] rounded-[6px] boxshadow">
              <img
                className="object-cover w-full"
                src="https://html.tavonline.co/mat/default/images/client-02.jpg"
                alt=""
              />
            </div>
            <div className="client py-[26px] px-[16px] bg-[#fff] rounded-[6px] boxshadow">
              <img
                className="object-cover w-full"
                src="	https://html.tavonline.co/mat/default/images/client-03.jpg"
                alt=""
              />
            </div>
            <div className="client py-[26px] px-[16px] bg-[#fff] rounded-[6px] boxshadow">
              <img
                className="object-cover w-full"
                src="	https://html.tavonline.co/mat/default/images/client-04.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="testimonials px-[30px] pb-[30px] pt-[15px]">
          <div className="section-title relative inline-block py-0 px-[3px] mb-[30px]">
            <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px]"></span>
            <h2 className="text-[18px] font-[600] text-[#333] relative z-10">Testimonials</h2>
          </div>

          <div className="testimonial-list sm:flex items-center justify-between gap-[30px]">
            {dataTestimonials.map((i) =>
              <Testimonial
                src={i.src}
                name={i.name}
                job={i.job}
                text={i.text}
              />
            )}


          </div>

          <div className="flex justify-center mt-[15px] gap-[10px]">
            <span className="transfer block w-[10px] h-[10px] rounded-full bg-[#ffc500] "></span>
            <span className="transfer block w-[10px] h-[10px] rounded-full bg-[#ffc500] "></span>
            <span className="transfer block w-[10px] h-[10px] rounded-full bg-[#ffc500] "></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
