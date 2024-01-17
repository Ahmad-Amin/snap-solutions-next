import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../store/user-context";
import axios from "axios";
import Select from "react-select";
import CurrencyFormatter from "../../utils/CurrencyFormatter";
import Spinner from "../../utils/Spinner/Spinner";
import baseUrl from "../../utils/baseUrl";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useToasts } from "react-toast-notifications";

const customStylesForSelect = {
  control: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid rgb(212 212 212)",
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    width: "100%",
  }),
};

const NewTransaction = ({ setModalShow }) => {
  const userCtx = useContext(UserContext);
  const [spinnerShow, setSpinnerShow] = useState(false);
  const [userOptions, setUserOptions] = useState([]);

  const { addToast } = useToasts();

  const [formData, setFormData] = useState({
    phoneNumber: "",
    amount: "",
    message: "",
    recipient: null,
    name: "",
    transactionType: "",
    senderId: userCtx.user._id,
  });

  useEffect(() => {
    if (userCtx.allUsers.length !== 0) return;
    const getAllUsers = async () => {
      try {
        setSpinnerShow(true);
        const response = await axios.get(
          `${process.env.BG_SERVERURL}/get-all-users`
        );
        if (response.status === 200 && response.data !== null) {
          setSpinnerShow(false);
          userCtx.saveUsersToGlobalStore(response.data);
        }
      } catch (error) {
        console.log(error);
        setSpinnerShow(false);
      }
    };
    getAllUsers();
  }, []);

  useEffect(() => {
    const options = userCtx.allUsers.map((rec) => ({
      value: rec._id,
      label: rec.name,
    }));

    setUserOptions(options);
  }, [userCtx.allUsers]);

  const handleChange = (selectedOption) => {
    setFormData({
      ...formData,
      recipient: selectedOption.value,
      name: selectedOption.label,
    });
  };

  const handleUserInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (formData.recipient === null) {
      addToast("Please Select the Recipient name", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    if (formData.amount.length === 0) {
      addToast("Please add the amount", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    const url = `${baseUrl}/api/superadmin/newTransaction`;
    const response = await axios.post(url, formData);
    console.log(response)

    if (response.status === 201 && response.data !== null) {
      addToast(`Successfully, Transfered the Funds to ${formData.name}`, {
        appearance: "success",
        autoDismiss: true,
      });
      setModalShow(false);
    } else {
      console.log(response);
    }
  };

  return spinnerShow ? (
    <div className=" tw-w-28 tw-h-60 tw-flex tw-justify-center tw-items-center">
      <Spinner />
    </div>
  ) : (
    <div className=" tw-flex tw-flex-col tw-gap-4 tw-p-7">
      <img src="/images/Card.png" alt="Credit Card" />
      <div className="tw-flex tw-flex-col tw-gap-2">
        <label className=" tw-font-normal tw-text-xs tw-text-neutral-600 tw-block">
          Phone Number
        </label>
        <PhoneInput
          inputStyle={{
            borderBottom: "1px solid rgb(212 212 212)",
            borderLeft: "none",
            borderRight: "none",
            borderTop: "none",
            width: "100%",
          }}
          type="text"
          country={"us"}
          value={formData.phoneNumber}
          onChange={(phoneNum) =>
            handleUserInputChange("phoneNumber", phoneNum)
          }
        />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        <label className=" tw-font-normal tw-text-xs tw-text-neutral-600 tw-block">
          Amount
        </label>
        <input
          className=" tw-font-medium tw-text-base tw-text-neutral-900 tw-border-b tw-border-neutral-300 focus:tw-outline-none"
          type="number"
          inputMode="none"
          value={formData.amount}
          onChange={(e) => handleUserInputChange("amount", e.target.value)}
        />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        <label className=" tw-font-normal tw-text-xs tw-text-neutral-600 tw-block">
          Type
        </label>
        <input
          className=" tw-font-medium tw-text-base tw-text-neutral-900 tw-border-b tw-border-neutral-300 focus:tw-outline-none"
          type="text"
          value={formData.transactionType}
          onChange={(e) =>
            handleUserInputChange("transactionType", e.target.value)
          }
        />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        <label className=" tw-font-normal tw-text-xs tw-text-neutral-600 tw-block">
          Recipient Name
        </label>
        <Select
          className="tw-font-medium tw-text-base tw-text-neutral-900  "
          value={formData.recipient?.label}
          onChange={handleChange}
          options={userOptions}
          styles={customStylesForSelect}
        />
      </div>
      <textarea
        className=" tw-font-normal tw-text-xs tw-bg-gray-100 tw-rounded-xl tw-p-3 tw-h-28 "
        placeholder="Message to the recipient"
        value={formData.message}
        onChange={(e) => handleUserInputChange("message", e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="tw-text-white tw-rounded-xl tw-bg-indigo-500 tw-py-4 tw-text-base tw-mt-2"
      >
        Transfer &nbsp;
        <CurrencyFormatter amount={formData.amount || 0} />
      </button>
    </div>
  );
};

export default NewTransaction;
