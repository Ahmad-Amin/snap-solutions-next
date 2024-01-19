// "use client"
import React from "react";
import NavigationBar from "../../components/admin/NavigationBar";
import EditAccountView from "../../components/admin/MyAccount/EditAccountView";

const EditAccount = () => {
  return (
    <div className="tw-mx-auto tw-container">
      <div className="xl:tw-grid xl:tw-grid-cols-6 tw-h-screen">
        <div className="xl:tw-py-6 xl:tw-px-12 md:tw-py-3 md:tw-px-6 xl:tw-col-span-6">
          <NavigationBar showLogo={true} />
          <div>
            <EditAccountView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
