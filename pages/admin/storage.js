import React, { useState } from "react";
import Sidebar from "../../components/admin/Siderbar";
import NavigationBar from "../../components/admin/NavigationBar";
import MainStorageView from "../../components/admin/Storage/MainStorageView";

const Storage = () => {

  return (
    <div className="tw-mx-auto tw-container">
      <div className="xl:tw-grid xl:tw-grid-cols-6">
        <div className="tw-bg-neutral-100 tw-py-11 tw-px-5 tw-h-screen ">
          <Sidebar />
        </div>
        <div className="md:tw-py-6 md:tw-px-12 tw-py-3 tw-px-6 xl:tw-col-span-5">
          <NavigationBar showLogo={false} />
          <div className="">
            <MainStorageView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
