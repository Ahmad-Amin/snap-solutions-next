import React from "react";
import Button from "../Common/Button";
import CurrencyFormatter from '../../utils/CurrencyFormatter'

const Transaction = ({
  profileImage,
  name,
  transactionType,
  status,
  date,
  amount,
}) => {
  const formatDate = (date) => {
    const originalDate = new Date(date);
    const formattedDate = originalDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <tr className=" dark:tw-bg-gray-80 hover:tw-bg-gray-50 tw-cursor-pointer tw-font-normal tw-text-base ">
      <td className=" tw-font-medium tw-text-gray-900 tw-whitespace-nowrap tw-py-4 tw-min-w-60">
        <div className="tw-flex tw-gap-4 tw-items-center">
          {profileImage ? (
            <img
              src={profileImage}
              alt="User Profile"
              className=" tw-w-11 tw-h-11 tw-rounded-full tw-object-cover"
            />
          ) : (
            <div className=" tw-w-11 tw-h-11 tw-rounded-full tw-bg-pink-300 tw-uppercase tw-flex tw-justify-center tw-items-center">
              {name?.substring(0, 2)}
            </div>
          )}
          <p>{name}</p>
        </div>
      </td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36 tw-text-center tw-uppercase">
        {transactionType}
      </td>
      <td className="tw-py-4 tw-px-2 tw-min-w-60 tw-text-center">
        <Button name={status} />
      </td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36 tw-text-center">
        <p className=" font-normal text-base leading-5 text-black">
          {formatDate(date)}
        </p>
      </td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36 tw-text-center">
        <p className=" tw-font-bold tw-text-base tw-leading-5 tw-text-black">
          <CurrencyFormatter amount={amount} />
        </p>
      </td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36 tw-text-center">
        <button className="tw-button tw-text-neutral-600 tw-border tw-border-neutral-600 tw-text-sm tw-font-bold tw-px-3 tw-py-1 tw-rounded-lg ">
          Details
        </button>
      </td>
    </tr>
  );
};

export default Transaction;
