import React, { useContext, useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import UserRecord from "./AllUsers/UserRecord";
import Modal from "../../utils/Modal/Modal";
import axios from "axios";
import Spinner from "../../utils/Spinner/Spinner";
import UserContext from "../../store/user-context";
import AddNewUser from "./AllUsers/AddNewUser";
import baseUrl from "../../utils/baseUrl";

const AllUsersView = () => {
  const [modalShow, setModalShow] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(false);
  const userCtx = useContext(UserContext);

  const handleNewUser = () => {
    setModalShow(true);
  };

  useEffect(() => {
    if (userCtx.allUsers.length !== 0) return;
    const getAllUsers = async () => {
      try {
        setSpinnerShow(true);
        const response = await axios.get(
          `${baseUrl}/api/superadmin/get-all-users`
        );
        if (response.status === 200 && response.data !== null) {
          userCtx.saveUsersToGlobalStore(response.data);
          setAllUsers(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSpinnerShow(false);
      }
    };

    getAllUsers();
  }, []);

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center tw-cursor-pointer">
        <h1 className="tw-m-0 tw-font-medium tw-text-3xl tw-leading-5">
          All Users
        </h1>
        <div className=" tw-text-sm tw-leading-5 tw-font-normal tw-text-white tw-bg-custom-blue tw-rounded-lg tw-px-4 tw-py-3 ">
          <div
            className="tw-flex tw-flex-row tw-gap-2 tw-items-center "
            onClick={handleNewUser}
          >
            <CiCirclePlus className="tw-text-xl" />
            <p className="tw-text-white tw-p">New Users</p>
          </div>
        </div>
      </div>
      <div className="tw-relative tw-overflow-x-auto tw-mt-4">
        {spinnerShow ? (
          <Spinner />
        ) : (
          <table className="tw-w-full tw-text-sm tw-text-left rtl:tw-text-right tw-text-neutral-500">
            <thead className="tw-text-xs tw-text-gray-700 tw-font-medium">
              <tr>
                <th
                  scope="col"
                  className="tw-px-6 tw-py-3 tw-text-center tw-font-medium tw-text-xs"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="tw-px-6 tw-py-3 tw-text-center tw-font-medium tw-text-xs"
                >
                  UserID
                </th>
                <th
                  scope="col"
                  className="tw-px-6 tw-py-3 tw-text-center tw-font-medium tw-text-xs"
                >
                  Investment Type
                </th>
                <th
                  scope="col"
                  className="tw-px-6 tw-py-3 tw-text-center tw-font-medium tw-text-xs"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="tw-px-6 tw-py-3 tw-text-center tw-font-medium tw-text-xs"
                >
                  Amount Distributed
                </th>
                <th
                  scope="col"
                  className="tw-px-6 tw-py-3 tw-text-center tw-font-medium tw-text-xs"
                >
                  Actions
                </th>
                <th
                  scope="col"
                  className="tw-px-6 tw-py-3 tw-text-center tw-font-medium tw-text-xs"
                ></th>
              </tr>
            </thead>
            <tbody>
              {userCtx.allUsers.map((rec) => (
                <UserRecord
                  key={rec.id || rec._id}
                  name={rec?.name}
                  firstName={rec?.firstName}
                  lastName={rec?.lastName}
                  email={rec.email}
                  id={rec.id || rec._id}
                  investType={rec.investType}
                  status={rec.status}
                  amount={rec.amount}
                  displayImage={rec.displayImage}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
      {modalShow && (
        <Modal onhideDetails={() => setModalShow(false)}>
          <AddNewUser onhideDetails={() => setModalShow(false)} />
        </Modal>  
      )}
    </div>
  );
};

export default AllUsersView;
