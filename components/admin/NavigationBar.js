import React, { useContext } from "react";;
import Link from "next/link";

import UserContext from "../../store/user-context";
import { CiMenuBurger } from "react-icons/ci";


const NavigationBar = ({ showLogo, setShowSideBar, showSideBar }) => {
  const userCtx = useContext(UserContext);

  const { firstName, lastName, profileImage } = userCtx.user;
  const name = (firstName || "") + (lastName ? ` ${lastName}` : "");

  const displayName = name.trim() || "No Name";

  return (
    <>
      <div className="tw-flex ">
        <p
          className={`${showSideBar ? " tw-text-2xl" : " tw-hidden"}`}
          onClick={() => setShowSideBar((prevState) => !prevState)}
        >
          <CiMenuBurger />
        </p>
        <Link className="" href="/dashboard">
          <div className="tw-bg-transparent tw-cursor-pointer">
            {showLogo && <img src="/images/logo-white.png" alt="Site Logo" />}
          </div>
        </Link>
        <div className="tw-flex lg:tw-flex-row tw-flex-col tw-gap-3 tw-justify-end tw-flex-1">
          <div className="tw-flex tw-flex-row lg:tw-gap-7 lg:tw-justify-center tw-gap-3 tw-justify-end tw-items-center">
            <div className="tw-flex tw-justify-start tw-items-center tw-gap-3 tw-cursor-pointer">
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

              <Link className=" tw-bg-transparent" href="/admin/settings">
                {displayName}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className=" tw-hr tw-mt-2 tw-mb-4" />
    </>
  );
};

export default NavigationBar;
