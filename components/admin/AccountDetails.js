import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useToasts } from "react-toast-notifications";

const AccountDetails = ({ addAccountDetails }) => {
  const { addToast } = useToasts();
  const [accountDetails, setAccountDetails] = useState({
    beneficiaryName: "",
    accountNumber: "",
    expiryDate: "",
  });

  const handleUserInputChange = (field, value) => {
    setAccountDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !accountDetails.beneficiaryName ||
      !accountDetails.accountNumber ||
      !accountDetails.expiryDate
    ) {
      addToast(`Error: All fields are required`, {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    addAccountDetails(accountDetails);
  };

  return (
    <>
      <div className=" tw-w-full">
        <form className=" tw-flex tw-flex-col tw-gap-4 tw-p-7 tw-w-96 tw-mx-auto">
          <h1 className=" tw-h1 tw-text-3xl tw-text-center tw-mb-5">
            Submit Bank Details
          </h1>
          <div className="tw-flex tw-flex-col tw-gap-2">
            <label className=" tw-font-normal tw-text-xs tw-text-neutral-600 tw-block">
              Account Number
            </label>
            <input
              className=" tw-font-medium tw-text-base tw-text-neutral-900 tw-border-b tw-border-neutral-300 focus:tw-outline-none"
              type="text"
              value={accountDetails.accountNumber}
              onChange={(e) =>
                handleUserInputChange("accountNumber", e.target.value)
              }
              required
            />
          </div>
          <div className="tw-flex tw-flex-col tw-gap-2">
            <label className=" tw-font-normal tw-text-xs tw-text-neutral-600 tw-block">
              Beneficiary Name
            </label>
            <input
              className=" tw-font-medium tw-text-base tw-text-neutral-900 tw-border-b tw-border-neutral-300 focus:tw-outline-none"
              type="text"
              value={accountDetails.beneficiaryName}
              onChange={(e) =>
                handleUserInputChange("beneficiaryName", e.target.value)
              }
              required
            />
          </div>
          <div className="tw-flex tw-flex-col tw-gap-2">
            <label className=" tw-font-normal tw-text-xs tw-text-neutral-600 tw-block">
              Expiry Date
            </label>
            <InputMask
              mask="99/99"
              maskChar={null}
              alwaysShowMask={false}
              placeholder="MM/YY"
              className=" tw-font-medium tw-text-base tw-text-neutral-900 tw-border-b tw-border-neutral-300 focus:tw-outline-none"
              value={accountDetails.expiryDate}
              onChange={(e) =>
                handleUserInputChange("expiryDate", e.target.value)
              }
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            className="tw-text-white tw-rounded-xl tw-bg-indigo-500 tw-py-4 tw-text-base tw-mt-2"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default AccountDetails;
