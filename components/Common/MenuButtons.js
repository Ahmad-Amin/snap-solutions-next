import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";

const MenuButtons = ({ icon, menuText, isEnabled, link }) => {
  return (
    <>
      {isEnabled ? (
        <Link className=" tw-cursor-pointer " href={link}>
          <button className="tw-bg-transparent tw-p-0 tw-flex tw-justify-center tw-items-center tw-gap-6 tw-py-4 tw-text-neutral-500 hover:tw-text-red-500 tw-transition tw-ease-in-out ">
            <div className="tw-text-2xl">{icon}</div>
            <p className="tw-bg-transparent tw-p-0 tw-text-inherit tw-text-base tw-capitalize">
              {menuText}
            </p>
          </button>
        </Link>
      ) : (
        <button className="tw-bg-transparent tw-p-0 tw-flex tw-justify-center tw-items-center tw-gap-6 tw-py-4 tw-text-neutral-500 hover:tw-text-red-500 tw-transition tw-ease-in-out tw-cursor-pointer">
          <div className="tw-text-2xl">{icon}</div>
          <p className="tw-text-inherit tw-text-base tw-capitalize">
            {menuText}
          </p>
        </button>
      )}
    </>
  );
};

export default MenuButtons;
