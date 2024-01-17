import React, { useContext } from "react";

import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

// import { Link } from "react-router-dom";

import UserContext from "../../store/user-context";
import Link from "next/link";

const NavigationBar = ({ showLogo }) => {
  const userCtx = useContext(UserContext);

  const { name, displayImage } = userCtx.user;

  const displayName = name || "No Name";

  return (
    <>
      <div className="tw-flex ">
        <Link className="" href="/dashboard">
          <div className="tw-bg-transparent tw-cursor-pointer">
            {showLogo && <img src="/images/siteLogo.png" alt="Site Logo" />}
          </div>
        </Link>
        <div className="tw-flex lg:tw-flex-row tw-flex-col tw-gap-3 tw-justify-between tw-flex-1">
          <div className="tw-flex tw-items-center">
            <div className="tw-flex tw-flex-row tw-gap-2 tw-border tw-border-neutral-300 tw-px-4 tw-py-1.5 tw-rounded-lg tw-bg-neutral-100">
              <input
                type="text"
                placeholder="search"
                className="tw-input tw-border-none tw-bg-transparent tw-w-52 md:tw-w-auto"
              />
              <div className="tw-flex tw-justify-start tw-items-center tw-mb-1">
                <CiSearch className="tw-text-2xl tw-cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="tw-flex tw-flex-row lg:tw-gap-7 lg:tw-justify-center tw-gap-3 tw-justify-end tw-items-center">
            <IoIosNotifications className="tw-text-2xl tw-text-neutral-400 tw-cursor-pointer" />
            <RiMessage2Fill className="tw-text-2xl tw-text-neutral-400 tw-cursor-pointer" />
            <div className="tw-flex tw-justify-start tw-items-center tw-gap-3 tw-cursor-pointer">
              {displayImage ? (
                <img
                  src={displayImage}
                  alt="User Profile"
                  className=" tw-w-11 tw-h-11 tw-rounded-full tw-object-cover"
                />
              ) : (
                <div className=" tw-w-11 tw-h-11 tw-rounded-full tw-bg-pink-300 tw-uppercase tw-flex tw-justify-center tw-items-center">
                  {name?.substring(0, 2)}
                </div>
              )}

              <Link className=" tw-bg-transparent" href="/admin/settings">
                {displayName}
              </Link>
              <MdKeyboardArrowDown className="tw-text-2xl tw-text-neutral-400" />
            </div>
          </div>
        </div>
      </div>
      <hr className=" tw-hr tw-mt-2 tw-mb-4" />
    </>
  );
};

export default NavigationBar;
