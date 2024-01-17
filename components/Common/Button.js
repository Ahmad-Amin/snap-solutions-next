import React from "react";

const Button = ({ name }) => {
  const customClasses =
    name === "Done"
      ? "tw-text-cyan-400 tw-bg-cyan-200"
      : "tw-text-yellow-400 tw-bg-yellow-200";

  return (
    <div className="tw-flex tw-justify-center tw-items-center ">
      <button
        className={`tw-font-medium tw-text-xs tw-rounded-lg tw-py-1 tw-px-3 ${customClasses}`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
