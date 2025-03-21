import React from "react";
import "./CarbonCrunch.css";

const CarbonCrunch = () => {
  return (
    <>
      <div className=" px-5 pt-5 text-center background">
        <button className="px-8 py-1 my-2 text-green-600 bg-white font-light rounded-4xl">
          FEATURES
        </button>
        <h1 className="text-3xl font-bold ">Why Carbon Crunch?</h1>

        {/* card section */}
        <div className="flex flex-wrap mt-10 pb-20 justify-center gap-5">
          {/* card 1 */}
          <div className="bg-white hover:bg-green-400 hover:text-white rounded-2xl pt-4 pb-16 px-8 shadow-2xl hover:shadow-gray-400 duration-400 transition-all">
            <div className="bg-green-300 p-2 w-fit rounded-4xl">
              <img className="w-10 mix-blend-multiply" src="/img2.png" alt="" />
            </div>
            <h1 className="text-left text-green-600 text-2xl py-3 font-medium">
              Automated Data Collection
            </h1>
            <p className="text-left w-[350px]">
              Our System automates carbon data collection, saving times,
              reducing errors, and ensuring accurate sustainability reporting.
            </p>
          </div>

          {/* card 2 */}
          <div className="bg-white hover:bg-green-400 hover:*:text-white rounded-2xl pt-4 pb-16 px-8 shadow-2xl shadow-gray-300 hover:shadow-gray-400 duration-300 transition-all">
            <div className="bg-green-300 p-2 w-fit rounded-4xl">
              <img className="w-10 mix-blend-multiply" src="/img2.png" alt="" />
            </div>
            <h1 className="text-left text-green-600 text-2xl py-3 font-medium">
              Monitoring & Reporting
            </h1>
            <p className="text-left w-[350px]">
              Effortlessly track and report carbon emissions with automated
              monitoring ensuring accuracy and compliance in sustainability
              reporting.
            </p>
          </div>

          {/* card 3 */}
          <div className="bg-white hover:bg-green-400 hover:*:text-white rounded-2xl pt-4 pb-16 px-8 shadow-2xl shadow-gray-300 hover:shadow-gray-400 duration-300 transition-all">
            <div className="bg-green-300 p-2 w-fit rounded-4xl">
              <img className="w-10 mix-blend-multiply" src="/img2.png" alt="" />
            </div>
            <h1 className="text-left text-green-600 text-2xl py-3 font-medium">
              Monitoring & Reporting
            </h1>
            <p className="text-left w-[350px]">
              Our System automates carbon data collection, saving times,
              reducing errors, and ensuring accurate sustainability reporting.
            </p>
          </div>

          {/* card 4 */}
          <div className="bg-white hover:bg-green-400 hover:*:text-white rounded-2xl pt-4 pb-16 px-8 shadow-2xl shadow-gray-300 hover:shadow-gray-400 duration-300 transition-all">
            <div className="bg-green-300 p-2 w-fit rounded-4xl">
              <img className="w-10 mix-blend-multiply" src="/img2.png" alt="" />
            </div>
            <h1 className="text-left text-green-600 text-2xl py-3 font-medium">
              Simplified Certification Process
            </h1>
            <p className="text-left w-[350px]">
              Streamline your certification process with our simplified
              automated solution reducing complexity and ensuring faster
              compliance.
            </p>
          </div>

          {/* card 5 */}
          <div className="bg-white hover:bg-green-400 hover:*:text-white rounded-2xl pt-4 pb-16 px-8 shadow-2xl shadow-gray-300 hover:shadow-gray-400 duration-300 transition-all">
            <div className="bg-green-300 p-2 w-fit rounded-4xl">
              <img className="w-10 mix-blend-multiply" src="/img2.png" alt="" />
            </div>
            <h1 className="text-left text-green-600 text-2xl py-3 font-medium">
              AI-Driven Insights
            </h1>
            <p className="text-left w-[350px]">
              Leverage AI-driven insights to uncover hidden patterns, optimize
              sustainability strategies and drive impacted decision-making.
            </p>
          </div>

          {/* card 6 */}
          <div className="bg-white hover:bg-green-400 hover:*:text-white rounded-2xl pt-4 pb-16 px-8 shadow-2xl shadow-gray-300 hover:shadow-gray-400 duration-300 transition-all">
            <div className="bg-green-300 p-2 w-fit rounded-4xl">
              <img className="w-10 mix-blend-multiply" src="/img2.png" alt="" />
            </div>
            <h1 className="text-left text-green-600 text-2xl py-3 font-medium">
              AI-Driven Insights
            </h1>
            <p className="text-left w-[350px]">
              Leverage AI-driven insights to uncover hidden patterns, optimize
              sustainability strategies and drive impacted decision-making.
            </p>
          </div>
        </div>
        <hr />
          <div className="py-12 text-center flex justify-center">
            <div className="">
              <img className="mix-blend-multiply" src="/img1.png" alt="" />
            </div>
            <div>
              <div className="ml-40 rounded-md w-fit z-5 relative pr-12 bg-green-500 p-2 text-black">
                <h1 className="text-left text-3xl">3X</h1>
                <p className="w-55 text-left">
                  ESG High Performance Deliver A Higher Total Shareholder Return
                </p>
              </div>
              <div className="rounded-md -ml-2 -mt-5 w-fit pr-12 bg-gray-900 p-2 text-white">
                <h1 className="text-left text-3xl">98%</h1>
                <p className="w-55 text-left ">
                  Of CEOs Agree Sustainability is Their Responsibility
                </p>
              </div>
              <div className="rounded-md w-fit ml-40 relative z-10 -mt-5 pl-8 bg-gray-950 p-2 text-white">
                <h1 className="text-right text-3xl">18%</h1>
                <p className="w-60 text-right ">
                  Of Companies Are Cutting Emission Fast Enough To Reach Net
                  Zero By 2050
                </p>
              </div>
              <div className="rounded-md relative -ml-5 -mt-5 w-fit pr-12 bg-white p-2 text-green-600">
                <h1 className="text-left text-3xl font-medium">98%</h1>
                <p className="w-55 text-left font-medium   ">
                  Of CEOs Agree Sustainability is Their Responsibility
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default CarbonCrunch;
