"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import UserContext from "../../../store/user-context";
import Spinner from "../../../utils/Spinner/Spinner";
import baseUrl from "../../../utils/baseUrl";

const EditAccountView = () => {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;
  const { addToast } = useToasts();
  const [spinnerShow, setSpinnerShow] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userKeys = Object.keys(userCtx.user);
    const initialUserDetails = {};
    userKeys.map((key) => {
      initialUserDetails[key] = userCtx.user[key];
    });
    setUserDetails(initialUserDetails);
  }, []);

  const handleEditFormSubmission = async (e) => {
    e.preventDefault();

    try {
      setSpinnerShow(true);
      const response = await axios.put(
        `${baseUrl}/api/update-user`,
        userDetails,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      setSpinnerShow(false);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!profileImage) return;

    setUploading(true);

    // const formData = new FormData();
    // formData.append("profileImage", profileImage);

    const formData = new FormData();
    formData.append("file", profileImage);
    formData.append("userId", user._id);

    const response = await axios.post(
      `${baseUrl}/api/upload-display-image`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      addToast("Successfully, Uploaded the Image", {
        appearance: "success",
        autoDismiss: true,
      });
      router.push("/admin/settings");
    }
    setUploading(false);

    try {
    } catch (error) {
      console.log(error);
      setUploading(false);
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
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Profile Picture
            </p>
            <div className=" tw-w-full tw-flex tw-justify-center tw-items-center tw-h-52 tw-border-2 tw-border-neutral-300 tw-border-dashed tw-rounded-lg">
              <input
                type="file"
                accept="image/*"
                className="tw-text-sm tw-text-stone-500 file:tw-bg-transparent file:tw-border-none"
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
              {/* {displayImage && <img src={displayImage} alt="Preview" />} */}
            </div>
            <button
              onClick={handleImageUpload}
              disabled={!profileImage || uploading}
              className=" tw-button"
            >
              {uploading ? "Uploading..." : "Upload Image"}
            </button>
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Last Companies
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="Last Companies"
              value={userDetails.lastCompanies}
              onChange={(e) =>
                handleUserInputChange("lastCompanies", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Full Address
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="Full Address"
              value={userDetails.fullAddress}
              onChange={(e) =>
                handleUserInputChange("fullAddress", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Address Line 2
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="Address"
              // value={userDetails.roleDescription}
              // onChange={(e) =>
              //   handleUserInputChange("roleDescription", e.target.value)
              // }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              State Province
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="State"
              value={userDetails.state}
              onChange={(e) => handleUserInputChange("state", e.target.value)}
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Country
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="Country"
              value={userDetails.country}
              onChange={(e) => handleUserInputChange("country", e.target.value)}
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              City
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              value={userDetails.city}
              onChange={(e) => handleUserInputChange("city", e.target.value)}
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Zip / Postal Code
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              value={userDetails.postalCode}
              onChange={(e) =>
                handleUserInputChange("postalCode", e.target.value)
              }
            />
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-8">
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Name Prefix
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="Mr/Mrs."
              value={userDetails.namePrefix}
              onChange={(e) =>
                handleUserInputChange("namePrefix", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              First Name
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="First Name"
              value={userDetails.firstName}
              onChange={(e) =>
                handleUserInputChange("firstName", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Last Name
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="Last Name"
              value={userDetails.lastName}
              onChange={(e) =>
                handleUserInputChange("lastName", e.target.value)
              }
            />
          </div>
          {/* <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Handle
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="Handle"
              value={userDetails.handle}
              onChange={(e) => handleUserInputChange("handle", e.target.value)}
            />
          </div> */}
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Company Name
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="Company Name"
              value={userDetails.companyName}
              onChange={(e) =>
                handleUserInputChange("companyName", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Time Zone
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="GMT / UTC"
              value={userDetails.timeZone}
              onChange={(e) =>
                handleUserInputChange("timeZone", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Phone Number
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              placeholder="Phone Number"
              value={userDetails.phoneNumber}
              onChange={(e) =>
                handleUserInputChange("phoneNumber", e.target.value)
              }
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Email
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="text"
              value={userDetails.email}
              onChange={(e) => handleUserInputChange("email", e.target.value)}
            />
          </div>
          <div className="tw-flex tw-gap-2 tw-flex-col">
            <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
              Address Line 1
            </p>
            <input
              className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
              type="Address Line 1"
              // value={userDetails.references}
              // onChange={(e) =>
              //   handleUserInputChange("references", e.target.value)
              // }
            />
          </div>
        </div>
      </div>
      <p className="tw-p tw-font-semibold tw-text-2xl tw-mt-12 tw-mb-8">
        Change Password
      </p>
      <div className=" tw-grid tw-grid-cols-2 tw-gap-6">
        <div className="tw-flex tw-gap-2 tw-flex-col">
          <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
            Current Password
          </p>
          <input
            className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
            type="password"
            value={userDetails.currentPassword}
            onChange={(e) =>
              handleUserInputChange("currentPassword", e.target.value)
            }
          />
        </div>
        <div className="tw-flex tw-gap-2 tw-flex-col">
          <p className="tw-p tw-font-medium lg:tw-text-xl tw-text-base">
            New Password
          </p>
          <input
            className="tw-border tw-border-neutral-300 lg:tw-px-3 lg:tw-py-5 tw-px-2 tw-py-3 tw-rounded-lg"
            type="password"
            value={userDetails.newPassword}
            onChange={(e) =>
              handleUserInputChange("newPassword", e.target.value)
            }
          />
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
