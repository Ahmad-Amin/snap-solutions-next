import React from "react";
import Button from "../Common/Button";
import CurrencyFormatter from '../../utils/CurrencyFormatter'

const Transaction = ({
  image,
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
          <img src={image} alt="User Avatar" />
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
