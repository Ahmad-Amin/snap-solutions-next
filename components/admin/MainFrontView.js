import React from "react";
// import Graph from "../assets/graph.png";

const MainFrontView = () => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-5 tw-text-black">
      <div className="tw-bg-orange-100 tw-py-3 tw-px-5 tw-rounded-xl">
        <h1 className="tw-h1 tw-font-medium 2xl:tw-text-2xl lg:tw-text-xl tw-text-lg tw-text-custom-blue">
          AV Seals labour group LLC,{" "}
          <span className="tw-font-normal tw-text-lg">Dashboard</span>
        </h1>
        <h3 className="tw-h3 tw-font-medium 2xl:tw-text-lg lg:tw-text-base">
          Available Funds
        </h3>
        <div className="tw-flex md:tw-flex-row tw-flex-col tw-gap-5 md:tw-gap-0 tw-justify-between 2xl:tw-my-4 md:tw-my-2">
          <p className="tw-p tw-font-medium 2xl:tw-text-4xl lg:tw-text-3xl tw-text-2xl tw-text-black">
            $2,40,000
          </p>
          <div className="tw-flex tw-gap-3 tw-flex-row md:tw-flex-col lg:tw-flex-row">
            <button className="tw-button tw-bg-custom-blue tw-text-white tw-font-normal tw-text-base md:tw-text-sm 2xl:tw-px-7 2xl:tw-py-4 tw-px-4 tw-py-2 tw-rounded-lg">
              Access Funds
            </button>
            <button className=" tw-button tw-text-base md:tw-text-sm 2xl:tw-px-7 2xl:tw-py-4 tw-px-4 tw-py-2 tw-rounded-lg tw-font-normal tw-text-custom-blue tw-bg-transparent tw-border tw-border-custom-blue">
              Send Message
            </button>
          </div>
        </div>
        <p className="tw-p tw-font-normal tw-text-base tw-text-red-500 tw-my-3">
          100%
        </p>
      </div>
      <div className="tw-border tw-border-neutral-200 tw-rounded-xl tw-p-5">
        <div className="tw-grid tw-grid-cols-3">
          <div className="tw-col-span-2">
            <p className="tw-font-medium 2xl:tw-text-lg tw-text-2xl lg:tw-text-base tw-mb-5 tw-text-black">
              Available Credits
            </p>
            <p className="tw-font-medium 2xl:tw-text-5xl lg:tw-text-4xl tw-text-3xl 2xl:tw-mb-8 xl:tw-mb-6 tw-mb-4 tw-text-black ">
              $44,00,000
            </p>
            <p className="tw-font-normal tw-text-xs tw-text-stone-400">
              Details about the credit etcc....
            </p>
          </div>
          <div className="tw-col-span-1 tw-text-right">
            <div className="tw-mb-5 tw-flex tw-justify-end">
              {/* <img src={Graph} alt="Graph" /> */}
            </div>
            <p className=" tw-bg-orange-200 tw-p-2 tw-font-normal tw-text-xs tw-inline-block tw-rounded-lg">
              +2% Past month
            </p>
          </div>
        </div>
      </div>
      <div className="tw-border tw-border-neutral-200 tw-rounded-xl lg:tw-p-5 tw-p-3">
        <div className="tw-flex tw-justify-between tw-items-end">
          <p className="tw-font-medium 2xl:tw-text-lg lg:tw-text-base tw-text-black">
            Transaction Details
          </p>
          <input className="tw-text-sm lg:tw-text-base" type="date" />
        </div>
        <div>
          <div className=" tw-bg-neutral-50 tw-border tw-border-neutral-200 tw-flex tw-justify-between tw-py-3 tw-px-4 tw-mt-4 tw-rounded-md">
            <div>
              <p className="tw-font-normal lg:tw-text-base tw-text-sm tw-mb-1 tw-text-black">
                Incomming wire from{" "}
                <span className="tw-font-bold tw-uppercase">MIRZA</span>{" "}
                xx978678678
              </p>
              <p className="tw-text-neutral-400 tw-text-xs tw-font-normal">
                5 Minutes ago
              </p>
            </div>
            <p className="tw-flex tw-items-center tw-font-medium lg:tw-text-lg tw-text-base tw-text-black">
              $5,000
            </p>
          </div>
          <div className=" tw-bg-neutral-50 tw-border tw-border-neutral-200 tw-flex tw-justify-between tw-py-3 tw-px-4 tw-mt-4 tw-rounded-md">
            <div>
              <p className="tw-font-normal lg:tw-text-base tw-text-sm tw-mb-1 tw-text-black">
                Incomming wire from{" "}
                <span className="tw-font-bold tw-uppercase">MIRZA</span>{" "}
                xx978678678
              </p>
              <p className="tw-text-neutral-400 tw-text-xs tw-font-normal">
                5 Minutes ago
              </p>
            </div>
            <p className="tw-flex tw-items-center tw-font-medium lg:tw-text-lg tw-text-base tw-text-black">
              $5,000
            </p>
          </div>
          <div className=" tw-bg-neutral-50 tw-border tw-border-neutral-200 tw-flex tw-justify-between tw-py-3 tw-px-4 tw-mt-4 tw-rounded-md">
            <div>
              <p className="tw-font-normal lg:tw-text-base tw-text-sm tw-mb-1 tw-text-black">
                Outgoing wire to{" "}
                <span className="tw-font-bold tw-uppercase">MaulaJutt</span>{" "}
                xx978678
              </p>
              <p className="tw-text-neutral-400 tw-text-xs tw-font-normal">
                5 Minutes ago
              </p>
            </div>
            <p className="tw-flex tw-items-center tw-font-medium lg:tw-text-lg tw-text-base tw-text-black">
              $5,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFrontView;
