import React, { useContext, useState } from "react";
import axios from "axios";

import "react-phone-input-2/lib/style.css";

import baseUrl from "../../../utils/baseUrl";
import { useToasts } from "react-toast-notifications";
import UserContext from "../../../store/user-context";
import Spinner from "../../../utils/Spinner/Spinner";

import AccountDetails from "../../admin/AccountDetails";

const AddNewUser = ({ onhideDetails }) => {
  const userCtx = useContext(UserContext);
  const { addToast } = useToasts();
  const [spinnerShow, setSpinnerShow] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const [newUserDetails, setNewUserDetails] = useState({
    name: "",
    phoneNumber: "",
    amount: "",
    estimatedPayOff: "",
    pastDueDate: "",
    originationDate: "",
    email: "",
    revolvingLineOfCredit: "",
    companyName: "",
    amountDueDate: "",
    term: "",
    paymentFrequency: "",
    aprFirst15Month: ""
  });

  const handleUserInputChange = (field, value) => {

    let clampedValue = value;
    if (field === 'aprFirst15Month') {
      const numericValue = parseFloat(value);
      clampedValue = isNaN(numericValue)
        ? ""
        : Math.min(100, numericValue);
        
    }

    setNewUserDetails((prevState) => ({
      ...prevState,
      [field]: clampedValue,
    }));
  };

  const isFormValid = () => {
    const isEmptyField = Object.values(newUserDetails).some(
      (value) => value === ""
    );
    return !isEmptyField;
  };

  const continueToAddAccountDetails = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      addToast("Please Fill out all the fields to proceed", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    setShowBankDetails(true);
  };

  const addNewUser = async (details) => {
    const newUserData = {
      ...newUserDetails,
      accountDetails: {
        ...details,
      },
    };

    try {
      setSpinnerShow(true);
      const url = `${baseUrl}/api/superadmin/new-user`;
      const response = await axios.post(url, newUserData);
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
    <>
      {showBankDetails ? (
        <AccountDetails addAccountDetails={addNewUser} />
      ) : (
        <form className=" tw-p-6 lg:tw-px-12 lg:tw-py-12">
          <div className=" tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6">
            <div className="tw-flex tw-flex-col tw-gap-6">
              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="name"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Name
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4 tw-w-auto xl:tw-w-72 "
                  id="name"
                  placeholder="Name"
                  type="text"
                  value={newUserDetails.name}
                  onChange={(e) =>
                    handleUserInputChange("name", e.target.value)
                  }
                  required
                />
              </div>
              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="email"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Phone Number
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
                  placeholder="Phone Number"
                  type="text"
                  value={newUserDetails.phoneNumber}
                  onChange={(e) =>
                    handleUserInputChange("phoneNumber", e.target.value)
                  }
                  required
                />
              </div>
              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="email"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Allocated Credit
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
                  placeholder="Allocated Credit"
                  type="number"
                  inputMode="numeric"
                  pattern="\d*"
                  value={newUserDetails.amount}
                  onChange={(e) =>
                    handleUserInputChange("amount", e.target.value)
                  }
                  required
                />
              </div>
              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="amount"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Estimated Pay Off
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
                  type="number"
                  inputMode="numeric"
                  pattern="\d*"
                  value={newUserDetails.estimatedPayOff}
                  onChange={(e) =>
                    handleUserInputChange("estimatedPayOff", e.target.value)
                  }
                  required
                />
              </div>
              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="cp_name"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Past due date
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
                  id="cp_name"
                  placeholder="Past Due Date"
                  type="date"
                  value={newUserDetails.pastDueDate}
                  onChange={(e) =>
                    handleUserInputChange("pastDueDate", e.target.value)
                  }
                  required
                />
              </div>
              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="invite_link"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Origination Date
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
                  id="invite_link"
                  placeholder="Origination Date"
                  type="date"
                  value={newUserDetails.originationDate}
                  onChange={(e) =>
                    handleUserInputChange("originationDate", e.target.value)
                  }
                  required
                />
              </div>

              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="aprFirst15Month"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  APR% FIRST 24 MONTHS
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
                  id="aprFirst15Month"
                  placeholder="0-100"
                  type="number"
                  min="0"
                  max="100"
                  value={newUserDetails.aprFirst15Month}
                  onChange={(e) =>
                    handleUserInputChange("aprFirst15Month", e.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-6">
              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="name"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Email
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4 tw-w-auto xl:tw-w-72 "
                  placeholder="Email"
                  type="email"
                  value={newUserDetails.email}
                  onChange={(e) =>
                    handleUserInputChange("email", e.target.value)
                  }
                  required
                />
              </div>
              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="email"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Company Name
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
                  placeholder="Company Name"
                  type="text"
                  value={newUserDetails.companyName}
                  onChange={(e) =>
                    handleUserInputChange("companyName", e.target.value)
                  }
                  required
                />
              </div>
              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="email"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Revolving Line Of Credit
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
                  type="text"
                  value={newUserDetails.revolvingLineOfCredit}
                  onChange={(e) =>
                    handleUserInputChange(
                      "revolvingLineOfCredit",
                      e.target.value
                    )
                  }
                  required
                />
              </div>

              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="amount"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Amount Due Today
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
                  type="text"
                  value={newUserDetails.amountDueDate}
                  onChange={(e) =>
                    handleUserInputChange("amountDueDate", e.target.value)
                  }
                  required
                />
              </div>
              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="cp_name"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Term
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
                  id="cp_name"
                  placeholder="Term"
                  type="text"
                  value={newUserDetails.term}
                  onChange={(e) =>
                    handleUserInputChange("term", e.target.value)
                  }
                  required
                />
              </div>
              <div className="tw-flex tw-flex-col ">
                <label
                  htmlFor="invite_link"
                  className=" tw-text-neutral-600 tw-font-semibold tw-text-base tw-mb-2"
                >
                  Payment Frequency
                </label>
                <input
                  className="tw-input tw-border tw-border-neutral-400 tw-text-neutral-400 tw-rounded-lg tw-py-1.5 tw-px-4"
                  id="invite_link"
                  placeholder="Payment Frequency"
                  type="text"
                  value={newUserDetails.paymentFrequency}
                  onChange={(e) =>
                    handleUserInputChange("paymentFrequency", e.target.value)
                  }
                  required
                />
              </div>
            </div>
          </div>
          <div className=" tw-flex tw-justify-center tw-items-center tw-mt-8">
            <button
              onClick={continueToAddAccountDetails}
              className=" tw-button tw-bg-custom-blue tw-rounded  tw-font-bold tw-text-base tw-text-white tw-px-6 tw-py-3 "
            >
              Add User
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default AddNewUser;
