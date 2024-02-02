import React, { useState, useEffect} from "react";
import SuperAdminSideBar from "../../components/superAdmin/SuperAdminSideBar";
import NavigationBar from "../../components/admin/NavigationBar";
import MainFrontView from "../../components/superAdmin/MainFrontView";

const SuperAdminDashboard = () => {
  const hideSideBar = false;
  const [showSideBar, setShowSideBar] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      setShowSideBar(window.innerWidth <= 1028);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <>
      <div
        className={`tw-mx-auto tw-container ${
          showSideBar ? "" : "tw-h-screen tw-overflow-hidden lg:tw-overflow-auto"
        }`}
      >
        <div className="lg:tw-grid lg:tw-grid-cols-5 xl:tw-grid-cols-6 tw-h-screen">
          <div
            className={`tw-py-11 tw-px-5 tw-h-screen ${
              showSideBar ? "tw-absolute -tw-left-full tw-block " : " tw-left-0"
            }`}
          >
            <SuperAdminSideBar
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar}
            />
          </div>
          <div className="md:tw-py-6 md:tw-px-12 tw-py-3 tw-px-6 tw-col-span-4 xl:tw-col-span-5 tw-bg-neutral-100">
            <NavigationBar
              showLogo={false}
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar}
            />
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
