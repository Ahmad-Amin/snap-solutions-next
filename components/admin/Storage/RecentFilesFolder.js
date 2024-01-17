import React from "react";
import { FaFolder } from "react-icons/fa6";

const RecentFilesFolder = ({ name }) => {
  return (
    <div className="tw-border tw-border-neutral-200 tw-rounded-xl tw-px-4 tw-py-5 tw-flex tw-gap-4 tw-cursor-pointer hover:tw-shadow-md tw-transition tw-ease-in-out tw-duration-150">
      <div className="tw-text-xl tw-text-neutral-400">
        <FaFolder />
      </div>
      <p className="tw-font-medium tw-text-sm tw-text-neutral-500">{name}</p>
    </div>
  );
};

export default RecentFilesFolder;
