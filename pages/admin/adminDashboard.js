import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/admin/Siderbar";
import MainFrontView from "../../components/admin/MainFrontView";
import RightSideBar from "../../components/admin/RightSideBar";
import NavigationBar from "../../components/admin/NavigationBar";
import UserContext from "../../store/user-context";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";
import Modal from "../../utils/Modal/Modal";
import AccountDetails from "../../components/admin/AccountDetails";
import Spinner from "../../utils/Spinner/Spinner";
import { useToasts } from "react-toast-notifications";

const AdminDasboard = () => {
  const userCtx = useContext(UserContext);
  const [modalShow, setModalShow] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false)

  const { addToast } = useToasts();

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = `${baseUrl}/api/admin/getUser/${userCtx.user._id}`;
        const response = await axios.get(url);
        if (response.status === 200 && response.data !== null) {
          userCtx.saveUserData(response.data);

          if (response.data.accountDetails === undefined) {
            setModalShow(true);
          }
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

  const addAccountDetails = async (data) => {
    try {
      setSpinnerShow(true);
      // console.log(accountDataDetails);
      const response = await axios.put(`${baseUrl}/api/admin/update-account-details`, {
        _id: userCtx.user._id,
        accountDetails: {
          ...data,
        },
      });

      if (response.status === 200 && response.status !== null) {
        userCtx.saveUserData(response.data);
        addToast("Successfully, Updated the Record", {
          appearance: "success",
          autoDismiss: true,
        });
        setModalShow(false);
      }
    } catch (error) {
      addToast(`Error: ${error.response.data.error}`, {
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      setSpinnerShow(false);
    }
  };

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

      {modalShow && (
        <Modal>
          {spinnerShow ? (
            <Spinner />
          ) : (
            <AccountDetails addAccountDetails={addAccountDetails} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default AdminDasboard;
