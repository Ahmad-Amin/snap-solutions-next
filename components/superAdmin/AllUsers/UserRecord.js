import React, { useContext, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CurrencyFormatter from "../../../utils/CurrencyFormatter";
import { useToasts } from "react-toast-notifications";

import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import UserContext from "../../../store/user-context";

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
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const userCtx = useContext(UserContext)
  const { addToast } = useToasts();
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDeleteClick = async (userId) => {
    try {
      const url = `${baseUrl}/api/superadmin/delete-user/${userId}`;
      const response = await axios.get(url);

      if (response.status == 200) {
        addToast(`User deleted successfully`, {
          appearance: "success",
          autoDismiss: true,
        });

        const userList = userCtx.allUsers.filter((user) => user._id !== userId);
        userCtx.saveUsersToGlobalStore(userList);

      } else {
        addToast(`Error Deleting the User`, {
          appearance: "success",
          autoDismiss: true,
        });
      }
    } catch (error) {
      console.error("Error Deleting the User:", error);
    } 
  };

  const displayName =
    name || (firstName || "") + (lastName ? ` ${lastName}` : "");

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
      <td className="tw-py-4 tw-px-2 tw-min-w-22 tw-text-center ">
        <button
          onClick={() => handleDeleteClick(id)}
          className=" hover:tw-bg-red-500 tw-border tw-bg-white tw-text-red tw-border-red-500 tw-transform tw-duration-300 tw-rounded-2xl tw-px-3 tw-py-1 tw-text-xs hover:tw-text-white"
        >
          Delete
        </button>
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
