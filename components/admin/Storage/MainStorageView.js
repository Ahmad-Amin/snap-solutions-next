import React, { useState } from "react";
import RecentFilesFolder from "./RecentFilesFolder";
import RecentFile from "./RecentFile";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../../store/user-context";
import baseUrl from "../../../utils/baseUrl";

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
    </div>
  );
};

export default MainStorageView;
