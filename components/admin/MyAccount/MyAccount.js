import react, { useEffect, useContext } from "react";
import Link from "next/link";
import UserContext from "../../../store/user-context";
import { useRouter } from "next/router";

const MyAccount = () => {
  const userCtx = useContext(UserContext);
  const router = useRouter();
  const { user } = userCtx;

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      router.push("/dashboard");
    }
  }, [userCtx.user, router]);

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
    displayImage,
    name,
  } = userCtx.user;

  return (
    <div className="tw-px-20">
      <p className=" tw-text-black tw-font-semibold tw-text-3xl tw-my-4">
        My Account
      </p>
      <div className="tw-p tw-flex tw-flex-col tw-gap-4 tw-justify-center tw-items-center">
        <img
          src={displayImage}
          alt="Display Avatar"
          className="tw-w-40 tw-h-40 tw-rounded-full tw-object-cover"
        />
        <p className=" tw-font-bold tw-text-xl">{name}</p>
      </div>
      <div className="tw-flex tw-gap-2 tw-flex-col">
        <p className="tw-text-black tw-p tw-font-medium tw-text-xl">
          Description
        </p>
        <textarea
          className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
          rows={6}
          readOnly
          disabled
          value={description}
        />
      </div>
      <div className="tw-flex tw-gap-2 tw-flex-col">
        <p className="tw-text-black tw-p tw-font-medium tw-text-xl tw-mt-9">
          Role Description
        </p>
        <textarea
          className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
          rows={5}
          readOnly
          disabled
          value={roleDescription}
        />
      </div>
      <div className="tw-grid tw-grid-cols-2 tw-gap-x-16 tw-gap-y-8">
        <div className="tw-flex tw-gap-2 tw-flex-col">
          <p className="tw-text-black tw-p tw-font-medium tw-text-xl tw-mt-9">
            Company Name
          </p>
          <input
            className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
            type="text"
            value={companyName}
            readOnly
            disabled
          />
        </div>
        <div className="tw-flex tw-gap-2 tw-flex-col">
          <p className="tw-text-black tw-p tw-font-medium tw-text-xl tw-mt-9">
            Email Address
          </p>
          <input
            className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
            type="text"
            value={email}
            readOnly
            disabled
          />
        </div>
        <div className="tw-flex tw-gap-2 tw-flex-col">
          <p className="tw-text-black tw-p tw-font-medium tw-text-xl tw-mt-9">
            Company Address
          </p>
          <input
            className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
            type="text"
            value={companyAddress}
            readOnly
            disabled
          />
        </div>
        <div className="tw-flex tw-gap-2 tw-flex-col">
          <p className="tw-text-black tw-p tw-font-medium tw-text-xl tw-mt-9">
            Phone Number
          </p>
          <input
            className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
            type="text"
            value={phoneNumber}
            readOnly
            disabled
          />
        </div>
        <div className="tw-flex tw-gap-2 tw-flex-col">
          <p className="tw-text-black tw-p tw-font-medium tw-text-xl tw-mt-9">
            Achivements
          </p>
          <input
            className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
            type="text"
            value={achievements}
            readOnly
            disabled
          />
        </div>
        <div className="tw-flex tw-gap-2 tw-flex-col">
          <p className="tw-text-black tw-p tw-font-medium tw-text-xl tw-mt-9">
            References
          </p>
          <input
            className="tw-border tw-border-neutral-300 tw-px-3 tw-py-5 tw-rounded-lg"
            type="text"
            value={references}
            readOnly
            disabled
          />
        </div>
      </div>
      <div className="tw-mt-10">
        <Link href="/admin/editAccount/">
          <p className="tw-bg-custom-blue tw-py-3 tw-px-12 tw-text-white tw-float-right tw-rounded-lg tw-cursor-pointer">
            Edit Profile
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MyAccount;
