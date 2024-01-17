import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className=" tw-flex tw-justify-center tw-items-center ">
      <div className={styles.spinner}></div>;
    </div>
  );
};

export default Spinner;
