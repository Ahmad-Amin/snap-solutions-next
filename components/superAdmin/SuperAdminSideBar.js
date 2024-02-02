import React from "react";

import MenuButtons from "../Common/MenuButtons";

import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";

import { ImUsers } from "react-icons/im";
import { RiWallet3Fill } from "react-icons/ri";
import { IoIosStats } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

import { useContext } from "react";
import UserContext from "../../store/user-context";
import { useRouter } from "next/router";
import { RxCross2 } from "react-icons/rx";

const SuperAdminSideBar = ({ setShowSideBar }) => {
  const userCtx = useContext(UserContext);
  const router = useRouter();

  const handleLogOut = () => {
    userCtx.logoutUser();
    router.push("/");
  };

  return (
    <div className="tw-relative">
      <img
        className="tw-h-auto tw-max-w-full"
        alt="Website logo"
        src="/images/logo-white.png"
      />
      <div className="tw-px-7 tw-py-9">
        <button
          className=" tw-absolute tw-top-4 tw-right-4 tw-text-black tw-bg-white"
          onClick={() => setShowSideBar(true)}
        >
          <RxCross2 />
        </button>
        <div id="mainmenu">
          <p className="tw-p tw-uppercase tw-text-xs tw-font-medium tw-py-2 tw-text-neutral-600">
            main menu
          </p>
          <MenuButtons
            icon={<LuLayoutDashboard />}
            menuText="dashboard"
            color="#B2B2B2"
            isEnabled={true}
            link="/dashboard"
          />
          <MenuButtons
            icon={<ImUsers />}
            menuText="users"
            color="#B2B2B2"
            isEnabled={true}
            link="/superadmin/AllUsers"
          />
          {/* <MenuButtons
            icon={<RiWallet3Fill />}
            menuText="accounts"
            color="#B2B2B2"
            isEnabled={false}
            link="#"
          />
          <MenuButtons
            icon={<IoIosStats />}
            menuText="statistics"
            color="#B2B2B2"
            isEnabled={false}
            link="#"
          /> */}
        </div>

        <div id="otherSection" className="tw-mt-10">
          <p className="tw-p tw-uppercase tw-text-xs tw-font-medium tw-py-2 tw-text-neutral-600">
            Other
          </p>
          {/* <MenuButtons
            icon={<IoMdSettings />}
            menuText="settings"
            isEnabled={false}
            link="#"
          /> */}
          <div onClick={handleLogOut}>
            <MenuButtons
              icon={<IoMdLogOut />}
              menuText="logOut"
              isEnabled={false}
              link="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminSideBar;
