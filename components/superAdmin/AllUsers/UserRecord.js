import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CurrencyFormatter from "../../../utils/CurrencyFormatter";

const UserRecord = ({
  name,
  firstName,
  lastName,
  email,
  id,
  investType,
  status,
  amount,
  displayImage,
  onDelete,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDeleteClick = (userId) => {
    // onDelete(userId);
    setShowDropdown(false);
  };

  const displayName = name || ((firstName || "") + (lastName ? ` ${lastName}` : ""));

  return (
    <tr className=" tw-cursor-pointer tw-font-normal tw-text-base">
      <td className=" tw-font-medium tw-text-gray-900 tw-whitespace-nowrap tw-py-4 tw-min-w-60">
        <div className="tw-flex tw-gap-4 tw-items-center">
          {displayImage ? (
            <img
              src={displayImage}
              className=" tw-w-11 tw-h-11 tw-rounded-full tw-object-cover"
              alt="User Avatar"
            />
          ) : (
            <div className=" tw-w-11 tw-h-11 tw-rounded-full tw-bg-pink-300 tw-uppercase tw-flex tw-justify-center tw-items-center">
              {displayName && displayName.substring(0, 2)}
            </div>
          )}
          <div>
            <p className="tw-p tw-font-medium tw-text-sm tw-leading-5 tw-text-gray-900">
              {displayName}
            </p>
            <p className="tw-p tw-font-normal tw-text-sm tw-leading-5 tw-text-neutral-500">
              {email}
            </p>
          </div>
        </div>
      </td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36 tw-text-center ">
        <p className="tw-p tw-font-medium tw-text-xs tw-text-neutral-700 tw-bg-neutral-200 tw-rounded-2xl tw-px-2 tw-py-1 tw-inline ">
          {id}
        </p>
      </td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36">
        <p className="tw-p tw-font-normal tw-text-sm tw-leading-5 tw-text-neutral-700">
          {investType?.name}
        </p>
        <p className="tw-p tw-font-normal tw-text-xs tw-leading-5 tw-text-neutral-500">
          {investType?.role}
        </p>
      </td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36 tw-text-center">
        {status && (
          <button className=" tw-bg-green-100 tw-text-green-600 tw-rounded-2xl tw-px-3 tw-py-1 tw-text-xs">
            {status}
          </button>
        )}
      </td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36 tw-text-center">
        <p className="tw-p tw-font-medium tw-text-xs tw-text-neutral-700 tw-rounded-2xl tw-px-2 tw-py-1 tw-inline ">
          {amount && <CurrencyFormatter amount={amount} />}
        </p>
      </td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36 tw-relative ">
        <button
          onClick={handleDropdownClick}
          className=" tw-button tw-flex tw-justify-end tw-text-2xl "
        >
          <BsThreeDotsVertical />
        </button>
        {showDropdown && (
          <div className="tw-bg-white tw-p-3 tw-absolute -tw-top-4 tw-right-0 tw-w-32">
            <p
              className="tw-p tw-text-red-600 tw-bg-white tw-text-right hover:tw-bg-gray-100"
              onClick={() => handleDeleteClick(id)}
            >
              Delete
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default UserRecord;
