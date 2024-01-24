import React, { useContext } from "react";
import UserContext from "../../store/user-context";
import CurrencyFormatter from "../../utils/CurrencyFormatter";

const RightSideBar = () => {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;

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
              {user.accountDetails?.accountNumber || "xxxxxxxx"}
            </p>
          </div>
          <div className="tw-text-sm tw-flex tw-justify-between">
            <p className="tw-p tw-font-normal tw-text-white">Expiry Date:</p>
            <p className="tw-p tw-font-bold tw-text-base tw-text-white">
              {user.accountDetails?.expiryDate || "XX/XX"}
            </p>
          </div>
        </div>
      </div>
      <div className=" tw-grid lg:tw-grid-cols-2 tw-grid-cols-1 tw-gap-6">
        <div className=" tw-shadow-md tw-p-5 tw-rounded-md tw-flex tw-flex-col tw-justify-between">
          <p className=" tw-text-black tw-uppercase tw-text-xl ">
            revolving line of credit
          </p>
          <p className=" tw-text-black tw-font-bold tw-text-2xl ">
            <CurrencyFormatter amount={user.revolvingLineOfCredit || "0"} />
          </p>
        </div>
        <div className=" tw-shadow-md tw-p-5 tw-rounded-md tw-flex tw-flex-col tw-justify-between">
          <p className=" tw-text-black tw-uppercase tw-text-xl ">
            estimated pay off
          </p>
          <p className=" tw-text-black tw-font-bold tw-text-2xl ">
            <CurrencyFormatter amount={user.estimatedPayOff || "0"} />
          </p>
        </div>
      </div>
      <div className=" tw-grid lg:tw-grid-cols-2 tw-grid-cols-1 tw-gap-6">
        <div className=" tw-shadow-md tw-p-5 tw-rounded-md tw-flex tw-flex-col tw-justify-between">
          <p className=" tw-text-black tw-uppercase tw-text-xl ">
            Amount due date
          </p>
          <p className=" tw-text-black tw-font-bold tw-text-2xl ">
            <CurrencyFormatter amount={user.amountDueDate || "0"} />
          </p>
        </div>
        <div className=" tw-shadow-md tw-p-5 tw-rounded-md tw-flex tw-flex-col tw-justify-between">
          <p className=" tw-text-black tw-uppercase tw-text-xl ">
            Past due date
          </p>
          <p className=" tw-text-black tw-font-bold tw-text-2xl ">
            {user.pastDueDate}
          </p>
        </div>
      </div>
      <div className=" tw-bg-orange-100 tw-p-5 tw-rounded-md tw-flex tw-flex-col tw-gap-3">
        <div className=" tw-flex tw-justify-between tw-flex-row">
          <p className=" tw-p tw-uppercase tw-font-medium tw-text-lg tw-text-black">
            Term
          </p>
          <p className=" tw-p tw-font-bold tw-text-2xl tw-text-black">
            {user.term || "---"}
          </p>
        </div>
        <div className=" tw-flex tw-justify-between tw-flex-row">
          <p className=" tw-p tw-uppercase tw-font-medium tw-text-lg tw-text-black">
            ORIGINATION DATE
          </p>
          <p className=" tw-p tw-font-bold tw-text-2xl tw-text-black">
            {user.originationDate || "---"}
          </p>
        </div>
        <div className=" tw-flex tw-justify-between tw-flex-row">
          <p className=" tw-p tw-uppercase tw-font-medium tw-text-lg tw-text-black">
            APR% FIRST 15 MONTHS
          </p>
          <p className=" tw-p tw-font-bold tw-text-2xl tw-text-black">0%</p>
        </div>
        <div className=" tw-flex tw-justify-between tw-flex-row">
          <p className=" tw-p tw-uppercase tw-font-medium tw-text-lg tw-text-black">
            PAYMENT FREQUENCY
          </p>
          <p className=" tw-p tw-font-bold tw-text-2xl tw-text-black">
            {user.paymentFrequency || "---"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
