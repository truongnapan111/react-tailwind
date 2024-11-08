import React from "react";
import TimeLine from "./TimeLine";
import Testimonial from "./Testimonial";
function ResumePage() {
  return (
    <div id="resume" className="resume rounded-lg bg-[#fff] mt-[36px] py-[15px]">
      <section className="px-[30px]">
        <div className="education">
          <div className="section-title relative inline-block py-0 px-[3px] mt-[27px]">
            <span className="bg-[#ffb100] absolute h-[7px] w-full opacity-[0.4] left-0 bottom-[3px] text-[#333]"></span>
            <h2 className="text-[18px] font-[600] text-[#333] relative z-10">Resume</h2>
          </div>
          <div
            className="education-content sm:flex items-center
         justify-between gap-[40px] mx-[27px] "
          >
            <div className="working-history mt-[33px]">
              <ul className="time-line">
                <li className="flex items-center gap-[50px] pb-[40px]">
                  <i className="fa fa-suitcase icon bg-[#ffc500] p-[18px] text-[16px] rounded-full my-[-13px] mx-[-45px]"></i>
                  <h2 className="timeline-title font-[500] text-[18px] text-[#333] relative z-10">
                    Working History
                  </h2>
                </li>
                <TimeLine
                  title={"Art Director - Facebook Inc"}
                  time={"2010 - Present"}
                  text={
                    "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
                  }
                ></TimeLine>
                <TimeLine
                  title={"Senior Designer - Google"}
                  time={"2008 - 2010"}
                  text={
                    "So insisted received is occasion advanced honoured. Among   ready to which up. Attacks smiling and may out assured   moments man nothing outward."
                  }
                ></TimeLine>
                <TimeLine
                  title={"Junior Designer - Creative Shake"}
                  time={"22005 - 2008"}
                  text={
                    "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to    detract."
                  }
                ></TimeLine>
              </ul>
            </div>
            <div className="education-history mt-[30px]">
              <ul className="timeline">
                <li className="flex items-center justify-self-start gap-[50px] pb-[40px]">
                  <i className="fa fa-graduation-cap icon bg-[#ffc500] p-[18px] text-[16px] rounded-full my-[-13px] mx-[-45px]"></i>
                  <h2 className="timeline-title font-[500] text-[18px] text-[#333] relative z-10">
                    Education History
                  </h2>
                </li>
                <TimeLine
                  title={"Abc University of Los Angeles"}
                  time={"2004 - 2009"}
                  text={
                    "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
                  }
                ></TimeLine>
                <TimeLine
                  title={"Drawing Course"}
                  time={"2003 - 2004"}
                  text={
                    "So insisted received is occasion advanced honoured. Among    ready to which up. Attacks smiling and may out assured        moments man nothing outward."
                  }
                ></TimeLine>
                <TimeLine
                  title={"Abc High School"}
                  time={"2000 - 2003"}
                  text={
                    "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract."
                  }
                ></TimeLine>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="clients bg-[#fafafa] py-[45px] px-[30px] mb-[30px]">
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
            <Testimonial
              src={
                "https://html.tavonline.co/mat/default/images/testimonial-2.jpg"
              }
              name={"April M. Griffin"}
              job={"Founder"}
              text={
                "Our logo and business card design look great. Thanks Henry"
              }
            ></Testimonial>
            <Testimonial
              src={
                "https://html.tavonline.co/mat/default/images/testimonial-3.jpg"
              }
              name={"Larry M. Johnson"}
              job={"Freelancer"}
              text={
                "Henry is a very creative and talented designer. I do not hesitate to work again."
              }
            ></Testimonial>
            <Testimonial
              src={
                "https://html.tavonline.co/mat/default/images/testimonial-1.jpg"
              }
              name={"Jack Garratt"}
              job={"Freelancer"}
              text={
                "Great designer! he finished our work wonderfully and just in time. thanks for everything."
              }
            ></Testimonial>
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
