import React from "react";
import SuperAdminSideBar from "../../components/superAdmin/SuperAdminSideBar";
import NavigationBar from "../../components/admin/NavigationBar";
import MainFrontView from "../../components/superAdmin/MainFrontView";

const SuperAdminDashboard = () => {
  const hideSideBar = false;
  return (
    <>
      <div className="tw-mx-auto tw-container">
        <div className="xl:tw-grid xl:tw-grid-cols-6 tw-h-screen">
          <div className=" tw-py-11 tw-px-5 ">
            <SuperAdminSideBar />
          </div>
          <div className="md:tw-py-6 md:tw-px-12 tw-py-3 tw-px-6 xl:tw-col-span-5 tw-bg-neutral-100">
            <NavigationBar showLogo={false} />
            <div>
              <MainFrontView />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminDashboard;
