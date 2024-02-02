import React, { useState, useEffect } from "react";
import Sidebar from "../../components/admin/Siderbar";
import NavigationBar from "../../components/admin/NavigationBar";
import MainStorageView from "../../components/admin/Storage/MainStorageView";

const Storage = () => {
  
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
    <div
      className={`tw-mx-auto tw-container ${
        showSideBar ? "" : "tw-h-screen tw-overflow-hidden lg:tw-overflow-auto"
      }`}
    >
      <div className="lg:tw-grid lg:tw-grid-cols-5 xl:tw-grid-cols-6">
        <div
          className={`tw-bg-neutral-100 tw-py-11 tw-px-5 tw-h-screen tw-ease-in-out tw-transition-all tw-duration-500  ${
            showSideBar ? "tw-absolute -tw-left-full tw-block " : " tw-left-0"
          } `}
        >
          <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        </div>
        <div
          className={`lg:tw-py-6 lg:tw-px-12 tw-py-3 tw-px-6 tw-col-span-4 xl:tw-col-span-5 `}
        >
          <NavigationBar
            showLogo={false}
            setShowSideBar={setShowSideBar}
            showSideBar={showSideBar}
          />
          <div className="">
            <MainStorageView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
