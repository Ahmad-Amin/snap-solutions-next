"use client";
import React, { useState, useEffect } from "react";
// import Link from "next/link";
import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "../../../store/user-context";
import Link from "next/link";
import { useToasts } from "react-toast-notifications";
import Spinner from "../../../utils/Spinner/Spinner";

const EditAccountView = () => {
  const userCtx = useContext(UserContext);
  const [spinnerShow, setSpinnerShow] = useState(false);
  const router = useRouter();
  const { user } = userCtx;
  const { addToast } = useToasts();

  useEffect(() => {
    // const { id } = router.query;
    if (Object.keys(userCtx.user).length === 0) {
      router.push("/dashboard");
    }
  }, [router, userCtx.user]);

  const {
    additionalUserDetails: {
      description,
      roleDescription,
      companyName,
      companyAddress,
      phoneNumber,
      achievements,
      references,
    } = {},
    email,
    name,
    displayImage,
  } = userCtx.user;

  const [userDetails, setUserDetails] = useState({
    description: description,
    roleDescription: roleDescription,
    companyName: companyName,
    companyAddress: companyAddress,
    phoneNumber: phoneNumber,
    achievements: achievements,
    references: references,
    name: name,
    email: email,
    displayImage: displayImage,
  });

  const handleEditFormSubmission = async (e) => {    
    e.preventDefault();
    const transformedUser = {
      id: user._id,
      name: userDetails.name,
      email: userDetails.email,
      displayImage: userDetails.displayImage,
      additionalUserDetails: {
        description: userDetails.description,
        roleDescription: userDetails.roleDescription,
        companyName: userDetails.companyName,
        companyAddress: userDetails.companyAddress,
        phoneNumber: userDetails.phoneNumber,
        achievements: userDetails.achievements,
        references: userDetails.references,
      },
    };

    try {
      setSpinnerShow(true);
      const response = await axios.put(
        `https://snap-solutions-backend.onrender.com/update-user`,
        transformedUser
      );

      if (response.status === 200 && response.status !== null) {
        userCtx.saveUserData(response.data);
        addToast("Successfully, Updated the Record", {
          appearance: "success",
          autoDismiss: true,
        });
        router.push("/admin/settings");
      }
    } catch (error) {
      addToast(`Error: ${error.response.data.error}`, {
        appearance: "success",
        autoDismiss: true,
      });
      // toast.error(`Error: ${error.response.data.error}`);
    } finally {
      setSpinnerShow(false)
    }
  };

  const handleUserInputChange = (field, value) => {
    setUserDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return spinnerShow ? (
    <Spinner />
  ) : (
    <div className="tw-py-6 tw-px-7 tw-border tw-border-neutral-300 tw-rounded-2xl">
      <p className="tw-p tw-font-semibold tw-text-3xl tw-my-4">Edit Account</p>
      <div className="tw-grid tw-grid-cols-2 tw-gap-6">
        <div className="tw-flex tw-flex-col tw-gap-8">
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleUserInputChange("displayImage", e.target.files[0])
              }
            />
            {displayImage && <img src={displayImage} alt="Preview" />}
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium tw-text-xl">Description</p>
            <textarea
              className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
              rows={6}
              placeholder="Description"
              value={userDetails.description}
              onChange={(e) =>
                handleUserInputChange("description", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium tw-text-xl tw-mt-9">
              Role Description
            </p>
            <textarea
              className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
              rows={5}
              placeholder="Role Description"
              value={userDetails.roleDescription}
              onChange={(e) =>
                handleUserInputChange("roleDescription", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium tw-text-xl">Last Companies</p>
            <input
              className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
              type="text"
              placeholder="References"
            />
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-8">
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium tw-text-xl">Name</p>
            <input
              className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
              type="text"
              placeholder="Full Name"
              value={userDetails.name}
              onChange={(e) => handleUserInputChange("name", e.target.value)}
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium tw-text-xl">Company Name</p>
            <input
              className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
              type="text"
              placeholder="Company Name"
              value={userDetails.companyName}
              onChange={(e) =>
                handleUserInputChange("companyName", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium tw-text-xl">Company Address</p>
            <input
              className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
              type="text"
              placeholder="Company Address"
              value={userDetails.companyAddress}
              onChange={(e) =>
                handleUserInputChange("companyAddress", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium tw-text-xl">Achivements</p>
            <input
              className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
              type="text"
              placeholder="Achivements"
              value={userDetails.achievements}
              onChange={(e) =>
                handleUserInputChange("achievements", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium tw-text-xl">Email Address</p>
            <input
              className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
              type="text"
              placeholder="Email Address"
              value={userDetails.email}
              onChange={(e) => handleUserInputChange("email", e.target.value)}
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium tw-text-xl">Phone Number</p>
            <input
              className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
              type="text"
              placeholder="Phone Number"
              value={userDetails.phoneNumber}
              onChange={(e) =>
                handleUserInputChange("phoneNumber", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium tw-text-xl">References</p>
            <input
              className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
              type="text"
              value={userDetails.references}
              onChange={(e) =>
                handleUserInputChange("references", e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="tw-mt-48">
        <div className="tw-gap-6 tw-text-right tw-flex tw-justify-end">
          <Link href="/admin/settings" className="">
            <p className="tw-button tw-text-custom-blue tw-border tw-border-custom-blue tw-py-3 tw-px-12 tw-rounded-lg">
              Cancel
            </p>
          </Link>
          <button
            onClick={handleEditFormSubmission}
            className="tw-button tw-bg-custom-blue tw-py-3 tw-px-12 tw-text-white tw-rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAccountView;
