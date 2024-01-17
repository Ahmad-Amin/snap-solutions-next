import React, { useContext } from "react";
import siteLogo from "../../public/images/siteLogo.png";

import { LuLayoutDashboard } from "react-icons/lu";
import { RiDriveLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

import UserContext from "../../store/user-context";
import MenuButtons from "../Common/MenuButtons";

import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";

const Sidebar = () => {
  const userCtx = useContext(UserContext);
  const router = useRouter();
  const { addToast } = useToasts();

  const handleLogOut = () => {
    userCtx.logoutUser();
    router.push("/");
  };

  return (
    <div>
      <img
        className="tw-h-auto tw-max-w-full"
        alt="Website logo"
        src="/images/siteLogo.png"
      />
      <div className="tw-px-7 tw-py-9">
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
            icon={<RiDriveLine />}
            menuText="drive"
            color="#B2B2B2"
            isEnabled={true}
            link="/admin/storage"
          />
          <MenuButtons
            icon={<CgNotes />}
            menuText="overview"
            color="#B2B2B2"
            isEnabled={false}
            link="#"
          />
          <div onClick={handleLogOut}>
            <MenuButtons
              icon={<IoMdLogOut />}
              menuText="logOut"
              isEnabled={false}
              link="#"
            />
          </div>
        </div>

        <div id="otherSection" className="tw-mt-10">
          <p className="tw-p tw-uppercase tw-text-xs tw-font-medium tw-py-2 tw-text-neutral-600">
            Other
          </p>
          <MenuButtons
            icon={<BiSupport />}
            menuText="support"
            isEnabled={false}
            link="#"
          />
          <MenuButtons
            icon={<IoMdSettings />}
            menuText="settings"
            isEnabled={true}
            link="/admin/settings"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
