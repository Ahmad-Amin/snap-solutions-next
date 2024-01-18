import React from "react";
import CurrencyFormatter from "../../utils/CurrencyFormatter";
import moment from "moment";

const TransactionDetails = ({ amount, senderDetails, date }) => {
  return (
    <div className=" tw-bg-neutral-50 tw-border tw-border-neutral-200 tw-flex tw-justify-between tw-py-3 tw-px-4 tw-mt-4 tw-rounded-md">
      <div>
        <p className="tw-font-normal lg:tw-text-base tw-text-sm tw-mb-1 tw-text-black">
          Incomming wire from{" "}
          <span className="tw-font-bold tw-uppercase">
            {senderDetails?.name}
          </span>{" "}
          xx{senderDetails?._id?.slice(-9)}
        </p>
        <p className="tw-text-neutral-400 tw-text-xs tw-font-normal">
          {moment(date).fromNow(date)} ago
        </p>
      </div>
      <p className="tw-flex tw-items-center tw-font-medium lg:tw-text-lg tw-text-base tw-text-black">
        <CurrencyFormatter amount={amount} />
      </p>
    </div>
  );
};

export default TransactionDetails;
