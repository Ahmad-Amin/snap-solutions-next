import React, { useContext, useState } from "react";
import axios from "axios";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import baseUrl from "../../../utils/baseUrl";
import { useToasts } from "react-toast-notifications";
import UserContext from "../../../store/user-context";
import Spinner from "../../../utils/Spinner/Spinner";

const AddNewUser = ({ onhideDetails }) => {
  const userCtx = useContext(UserContext);
  const { addToast } = useToasts();
  const [spinnerShow, setSpinnerShow] = useState(false);

  const [newUserDetails, setNewUserDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    inviteLink: "",
    amount: "",
  });

  const handleUserInputChange = (field, value) => {
    setNewUserDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleAddUser = async () => {
    try {
      setSpinnerShow(true);
      const url = `${baseUrl}/api/superadmin/newUser`;
      const response = await axios.post(url, newUserDetails);
      if (response.status === 201 && response.status !== null) {
        addToast("User added successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        userCtx.appendToUsersList(response.data);
      } else {
        addToast("There is some issue while creating the User", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } catch (error) {
      addToast(`Error ${error.response.data.error}`, {
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      onhideDetails(false);
      setSpinnerShow(false);
    }
  };

  return spinnerShow ? (
    <Spinner />
  ) : (
    <div className=" tw-flex tw-flex-col tw-gap-6 tw-px-12 tw-py-12">
      <div className="tw-flex tw-flex-col ">
        <label
          htmlFor="name"
          className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
        >
          Name
        </label>
        <input
          className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4 tw-w-72 "
          id="name"
          placeholder="Name"
          type="text"
          value={newUserDetails.name}
          onChange={(e) => handleUserInputChange("name", e.target.value)}
        />
      </div>
      <div className="tw-flex tw-flex-col ">
        <label
          htmlFor="email"
          className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
        >
          Email
        </label>
        <input
          className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
          id="email"
          placeholder="Email"
          type="text"
          value={newUserDetails.email}
          onChange={(e) => handleUserInputChange("email", e.target.value)}
        />
      </div>
      <div className="tw-flex tw-flex-col ">
        <label
          htmlFor="ph_number"
          className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
        >
          Phone Number
        </label>
        <PhoneInput
          inputStyle={{
            width: "100%",
          }}
          type="text"
          country={"us"}
          value={newUserDetails.phoneNumber}
          onChange={(phoneNum) =>
            handleUserInputChange("phoneNumber", phoneNum)
          }
        />
      </div>
      <div className="tw-flex tw-flex-col ">
        <label
          htmlFor="amount"
          className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
        >
          Allocated Amount
        </label>
        <input
          className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
          type="number"
          inputMode="numeric"
          pattern="\d*"
          value={newUserDetails.amount}
          onChange={(e) => handleUserInputChange("amount", e.target.value)}
        />
      </div>
      <div className="tw-flex tw-flex-col ">
        <label
          htmlFor="cp_name"
          className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
        >
          Company Name
        </label>
        <input
          className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
          id="cp_name"
          placeholder="Company Name"
          type="text"
          value={newUserDetails.companyName}
          onChange={(e) => handleUserInputChange("companyName", e.target.value)}
        />
      </div>
      <div className="tw-flex tw-flex-col ">
        <label
          htmlFor="invite_link"
          className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
        >
          Invite Link
        </label>
        <input
          className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
          id="invite_link"
          placeholder="Invite Link"
          type="text"
          value={newUserDetails.inviteLink}
          onChange={(e) => handleUserInputChange("inviteLink", e.target.value)}
        />
      </div>
      <div className=" tw-flex tw-justify-center tw-items-center tw-mt-8">
        <button
          onClick={handleAddUser}
          className=" tw-button tw-bg-custom-blue tw-rounded  tw-font-bold tw-text-base tw-text-white tw-px-6 tw-py-3 "
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddNewUser;
