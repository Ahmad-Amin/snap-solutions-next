import React from 'react'
import NavigationBar from "../../components/admin/NavigationBar";
import MyAccount from '../../components/admin/MyAccount/MyAccount';

const Setting = () => {
  return (
    <div className="tw-mx-auto tw-container">
      <div className="xl:tw-grid xl:tw-grid-cols-6 tw-h-screen">
        <div className="md:tw-py-6 md:tw-px-12 tw-py-3 tw-px-6 xl:tw-col-span-6">
          <NavigationBar showLogo={true} />
          <div>
            <MyAccount />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting