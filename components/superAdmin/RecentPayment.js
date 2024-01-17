import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
// import Button from "./Button";
import Button from "../Common/Button";

const RecentPayment = () => {
  return (
    <div>
      <h1 className="tw-font-medium tw-text-xl tw-leading-5 tw-mb-4">
        Recent Payments
      </h1>
      <div className="tw-grid tw-grid-cols-2 tw-gap-8">
        <div className=" tw-bg-white tw-rounded-2xl tw-flex tw-justify-between tw-py-4 tw-px-3">
          <div className="tw-flex tw-gap-5">
            <div className="tw-flex tw-justify-center tw-items-center">
              <img src="/images/rp-1.png" alt="User Profile" />
            </div>
            <div>
              <p className="tw-p tw-font-medium tw-text-base">Emma Ryan Jr.</p>
              <p className="tw-p tw-font-normal tw-text-xs tw-text-neutral-500">
                Mar 9, 2023
              </p>
            </div>
          </div>
          <div className="tw-flex tw-justify-center tw-items-center">
            <p className="tw-p tw-font-bold tw-text-xl">$4,823</p>
          </div>
          <Button name="Done" />
          <div className="tw-flex tw-justify-center tw-items-center tw-text-3xl ">
            <BiDotsHorizontalRounded />
          </div>
        </div>
        <div className=" tw-bg-white tw-rounded-2xl tw-flex tw-justify-between tw-py-4 tw-px-3">
          <div className="tw-flex tw-gap-5">
            <div className="tw-flex tw-justify-center tw-items-center">
              <img src="/images/rp-2.png" alt="User Profile" />
            </div>
            <div>
              <p className="tw-p tw-font-medium tw-text-base">Justin Weber</p>
              <p className="tw-p tw-font-normal tw-text-xs tw-text-neutral-500">
                Mar 2, 2023
              </p>
            </div>
          </div>
          <div className="tw-flex tw-justify-center tw-items-center">
            <p className="tw-p tw-font-bold tw-text-xl">$3,937</p>
          </div>
          <Button name="Pending" />
          <div className="tw-flex tw-justify-center tw-items-center tw-text-3xl ">
            <BiDotsHorizontalRounded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPayment;
