import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../store/user-context'

import Sidebar from '../../components/admin/Siderbar'
import NavigationBar from '../../components/admin/NavigationBar'

const AccessFunds = () => {
  const userCtx = useContext(UserContext)
  const [showSideBar, setShowSideBar] = useState(false);

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
          <div className=" tw-flex tw-items-center tw-mt-60">
            <div className=" tw-flex tw-flex-col tw-gap-3">
              <p className=" tw-p tw-text-red-600 tw-text-4xl">
                Restricted Access
              </p>
              <p className=" tw-p tw-text-lg tw-text-neutral-900">
                Hello{" "}
                {[userCtx.user?.firstName, userCtx.user?.lastName].join(" ")}
              </p>
              <p className=" tw-p tw-text-lg tw-text-neutral-900">
                Access to your line of credit has been restricted pending the
                fulfillment of the contractual terms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessFunds