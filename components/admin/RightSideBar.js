import React from "react";

const RightSideBar = () => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-3 lg:tw-gap-5">
      <div className="tw-text-white tw-bg-indigo-700 tw-rounded-lg tw-overflow-hidden">
        <p className="tw-p tw-font-medium tw-text-lg tw-px-6 tw-py-3 tw-text-white">
          Account Details
        </p>
        <div className="tw-bg-custom-blue tw-px-6 tw-pt-3 tw-pb-5 tw-flex tw-flex-col tw-gap-y-3">
          <div className="tw-text-sm tw-flex tw-justify-between">
            <p className="tw-p tw-font-normal tw-text-white">Account no</p>
            <p className="tw-p tw-font-bold tw-text-base tw-text-white">
              76543276525
            </p>
          </div>
          <div className="tw-text-sm tw-flex tw-justify-between">
            <p className="tw-p tw-font-normal tw-text-white">Expiry Date:</p>
            <p className="tw-p tw-font-bold tw-text-base tw-text-white">
              26-11-2024
            </p>
          </div>
        </div>
      </div>
      <div className="tw-border tw-border-neutral-200 tw-rounded-xl lg:tw-p-5 tw-p-3">
        <div className="tw-flex tw-justify-between tw-items-end">
          <p className="tw-p tw-font-medium tw-text-lg tw-text-black">
            Account Activity
          </p>
          <input className="tw-text-sm lg:tw-text-base" type="date" />
        </div>
        <div className="tw-mt-4">
          <p className="tw-p tw-font-normal tw-text-xs tw-text-neutral-500 tw-mb-2">
            Last Statement Balance
          </p>
          <div className=" tw-bg-neutral-50 tw-border tw-border-neutral-200 tw-py-3 tw-px-4 tw-rounded-md">
            <p className="tw-p  tw-font-normal tw-text-base tw-mb-2">N/A</p>
            <p className="tw-p tw-flex tw-items-center tw-font-normal tw-text-xs tw-text-neutral-500">
              Today - 11.30 AM
            </p>
          </div>
        </div>
        <div className="tw-mt-4">
          <p className="tw-p tw-font-normal tw-text-xs tw-text-neutral-500 tw-mb-2">
            Last Payment Date
          </p>
          <div className=" tw-bg-neutral-50 tw-border tw-border-neutral-200 tw-py-3 tw-px-4 tw-rounded-md">
            <p className="tw-p  tw-font-normal tw-text-base tw-mb-2">N/A</p>
            <p className="tw-p tw-flex tw-items-center tw-font-normal tw-text-xs tw-text-neutral-500">
              Today - 10.30 AM
            </p>
          </div>
        </div>
        <div className="tw-mt-4">
          <p className="tw-p tw-font-normal tw-text-xs tw-text-neutral-500 tw-mb-2">
            Next Payment Date
          </p>
          <div className=" tw-bg-neutral-50 tw-border tw-border-neutral-200 tw-py-3 tw-px-4 tw-rounded-md">
            <p className="tw-p  tw-font-normal tw-text-base tw-mb-2">N/A</p>
            <p className="tw-p  tw-flex tw-items-center tw-font-normal tw-text-xs tw-text-neutral-500">
              Today - 10.30 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
