import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/admin/Siderbar";
import MainFrontView from "../../components/admin/MainFrontView";
import RightSideBar from "../../components/admin/RightSideBar";
import NavigationBar from "../../components/admin/NavigationBar";
import UserContext from "../../store/user-context";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";

const AdminDasboard = () => {
  const hideSideBar = false;
  const userCtx = useContext(UserContext);

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = `${baseUrl}/api/admin/getUser/${userCtx.user._id}`;
        const response = await axios.get(url);
        if (response.status === 200 && response.data !== null) {
          userCtx.saveUserData(response.data);
        } else {
          userCtx.logoutUser();
        }
      } catch (error) {
        console.log(error);
        // setSpinnerShow(false);
      }
    };

    getUser();
  }, []);

  return (
    <div className="tw-mx-auto tw-container">
      <div className="xl:tw-grid xl:tw-grid-cols-6">
        <div className="tw-bg-neutral-100 tw-py-11 tw-px-5 tw-h-screen ">
          <Sidebar />
        </div>
        <div className="md:tw-py-6 md:tw-px-12 tw-py-3 tw-px-6 xl:tw-col-span-5">
          <NavigationBar showLogo={false} />
          <div className="tw-grid md:tw-grid-cols-5 lg:tw-gap-8 tw-gap-4">
            <div className="md:tw-col-span-3">
              <MainFrontView />
            </div>
            <div className="md:tw-col-span-2">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDasboard;
