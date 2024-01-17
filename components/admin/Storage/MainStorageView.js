import React, { useState } from "react";
import RecentFilesFolder from "./RecentFilesFolder";
import RecentFile from "./RecentFile";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../../store/user-context";
import baseUrl from "../../../utils/baseUrl";

const recentFilesData = [
  {
    imageName: "image230127.jpeg",
    accessibleTo: "Only you",
    day: "Today",
    folderName: "Folder 01",
    docSize: "6 mb",
  },
  {
    imageName: "apresentation.video",
    accessibleTo: "Only you",
    day: "Today",
    folderName: "Folder 03",
    docSize: "6 mb",
  },
  {
    imageName: "instalation-sistem.exe",
    accessibleTo: "Only you",
    day: "Fri, 27 January 2023",
    folderName: "Folder 01",
    docSize: "6 mb",
  },
  {
    imageName: "design-sistem.pdf",
    accessibleTo: "Only you",
    day: "Fri, 27 January 2023",
    folderName: "Folder 04",
    docSize: "6 mb",
  },
  {
    imageName: "image230127.jpeg",
    accessibleTo: "Only you",
    day: "Fri, 27 January 2023",
    folderName: "Folder 02",
    docSize: "6 mb",
  },
];

const recentFilesFolder = [
  {
    name: "Folder 01",
  },
  {
    name: "Folder 02",
  },
  {
    name: "Folder 03",
  },
  {
    name: "Folder 04",
  },
];

const MainStorageView = () => {
  const [file, setFile] = useState(null);

  const userCtx = useContext(UserContext);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", userCtx.user.id);
      const response = await axios.post(`${baseUrl}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        const data = await response.json();
        console.log("File uploaded successfully", data.file);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h1 className="tw-font-medium tw-text-2xl">My Storage</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload File</button>
      </div>
      <div className="tw-grid xl:tw-grid-cols-5 lg:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-gap-4 tw-my-4">
        <div className="tw-py-5 tw-px-4 tw-rounded-2xl hover:tw-shadow-xl tw-transition tw-ease-in-out tw-duration-300 tw-cursor-pointer">
          <div className=" tw-bg-blue-100 tw-bg-opacity-50 tw-inline-block tw-rounded-sm tw-p-2">
            <img src="/images/icloud-1.svg" alt="Cloud" />
          </div>
          <p className=" tw-font-semibold tw-text-base tw-text-neutral-700 tw-my-2">
            Icloud
          </p>
          <div>
            <div className=" tw-h-3 tw-w-full tw-bg-neutral-20 tw-rounded-2xl tw-overflow-hidden">
              <div
                className="tw-h-3 tw-bg-blue-100"
                style={{ width: "85%" }}
              ></div>
            </div>
            <div className="tw-font-medium tw-text-sm tw-text-neutral-400 tw-flex tw-justify-between tw-mt-2">
              <p>200GB</p>
              <p>174GB</p>
            </div>
          </div>
        </div>
        <div className="tw-py-5 tw-px-4 tw-rounded-2xl hover:tw-shadow-xl tw-transition tw-ease-in-out tw-duration-300 tw-cursor-pointer">
          <div className=" tw-bg-yellow-200 tw-bg-opacity-50 tw-inline-block tw-rounded-sm tw-p-2">
            <img src="/images/google-drive-1.svg" alt="Google Drive" />
          </div>
          <p className=" tw-font-semibold tw-text-base tw-text-neutral-700 tw-my-2">
            Google Drive
          </p>
          <div>
            <div className=" tw-h-3 tw-w-full tw-bg-neutral-20 tw-rounded-2xl tw-overflow-hidden">
              <div
                className="tw-h-3 tw-bg-yellow-200"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="tw-font-medium tw-text-sm tw-text-neutral-400 tw-flex tw-justify-between tw-mt-2">
              <p>1TB</p>
              <p>778GB</p>
            </div>
          </div>
        </div>
        <div className="tw-py-5 tw-px-4 tw-rounded-2xl hover:tw-shadow-xl tw-transition tw-ease-in-out tw-duration-300 tw-cursor-pointer">
          <div className=" tw-bg-red-400 tw-bg-opacity-50 tw-inline-block tw-rounded-sm tw-p-2">
            <img src="/images/mega-1.svg" alt="Mega" />
          </div>
          <p className=" tw-font-semibold tw-text-base tw-text-neutral-700 tw-my-2">
            Mega
          </p>
          <div>
            <div className=" tw-h-3 tw-w-full tw-bg-neutral-20 tw-rounded-2xl tw-overflow-hidden">
              <div
                className="tw-h-3 tw-bg-red-400"
                style={{ width: "70%" }}
              ></div>
            </div>
            <div className="tw-font-medium tw-text-sm tw-text-neutral-400 tw-flex tw-justify-between tw-mt-2">
              <p>500GB</p>
              <p>234GB</p>
            </div>
          </div>
        </div>
        <div className="tw-py-5 tw-px-4 tw-rounded-2xl hover:tw-shadow-xl tw-transition tw-ease-in-out tw-duration-300 tw-cursor-pointer">
          <div className=" tw-bg-cyan-400 tw-bg-opacity-50 tw-inline-block tw-rounded-sm tw-p-2">
            <img src="/images/media-fire 1.svg" alt="Media Fire" />
          </div>
          <p className=" tw-font-semibold tw-text-base tw-text-neutral-700 tw-my-2">
            MediaFire
          </p>
          <div>
            <div className=" tw-h-3 tw-w-full tw-bg-neutral-20 tw-rounded-2xl tw-overflow-hidden">
              <div
                className="tw-h-3 tw-bg-cyan-400"
                style={{ width: "90%" }}
              ></div>
            </div>
            <div className="tw-font-medium tw-text-sm tw-text-neutral-400 tw-flex tw-justify-between tw-mt-2">
              <p>256GB</p>
              <p>81GB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="tw-font-medium tw-text-2xl tw-my-9">Recent Files</h1>

        <div className="tw-grid xl:tw-grid-cols-4 sm:tw-grid-cols-2 tw-gap-6">
          {recentFilesFolder.map((rec, index) => (
            <RecentFilesFolder key={index} name={rec.name} />
          ))}
        </div>

        <div className="tw-relative tw-overflow-x-auto tw-mt-4">
          <table className="tw-w-full tw-text-sm tw-text-left rtl:tw-text-right tw-text-gray-500">
            <tbody>
              {recentFilesData.map((rec, index) => (
                <RecentFile
                  key={index}
                  imageName={rec.imageName}
                  accessibleTo={rec.accessibleTo}
                  day={rec.day}
                  folderName={rec.folderName}
                  docSize={rec.docSize}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainStorageView;
