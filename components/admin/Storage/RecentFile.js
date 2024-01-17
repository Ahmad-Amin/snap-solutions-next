import React from "react";

import { FaPlus } from "react-icons/fa";

const RecentFile = ({ imageName, accessibleTo, day, folderName, docSize }) => {
  return (
    <tr className="tw-bg-white tw-border-b dark:tw-bg-gray-80 hover:tw-bg-gray-50 tw-cursor-pointer tw-font-normal tw-text-base ">
      <td className=" tw-font-medium tw-text-gray-900 tw-whitespace-nowrap tw-py-4 tw-min-w-60">
        {imageName}
      </td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36">{accessibleTo}</td>
      <td className="tw-py-4 tw-px-2 tw-min-w-60">{day}</td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36">{folderName}</td>
      <td className="tw-py-4 tw-px-2 tw-min-w-36">{docSize}</td>
      <td className="tw-py-4 tw-px-2 tw-min-w-60">
        <div className=" tw-flex tw-justify-center tw-items-center tw-gap-4 ">
          <div className="tw-cursor-pointer">
            <FaPlus />
          </div>
          <div className="tw-cursor-pointer">
            <img src="/images/Textout.svg" alt="Checkout" />
          </div>
          <div className="cursor-pointer">
            <img src="/images/Menukebab.svg" alt="Kebab Menu" />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default RecentFile;
