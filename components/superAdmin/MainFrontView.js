import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import OverviewCards from "./OverviewCards";
import RecentPayment from "./RecentPayment";
import TransactionsHistory from "./TransactionsHistory";
import NewTransaction from "./NewTransaction";
// import RecentPayment from "../../components/SuperAdmin/RecentPayment";
// import TransactionsHistory from "../../components/SuperAdmin/TransactionsHistory";
// import NewTransaction from "../../components/SuperAdmin/NewTransaction";
// import Modal from "../../UI/Modal";
import Modal from '../../utils/Modal/Modal'

const SuperDashboard = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleAddTransaction = () => {
    setModalShow(true);
  };

  return (
    <div className="">
      <h1 className="tw-font-medium tw-text-2xl tw-mb-4">Report Overview</h1>
      <div className="tw-flex tw-justify-between">
        <div className="tw-flex tw-gap-2">
          <div className=" tw-flex tw-justify-center tw-items-center tw-border tw-border-neutral-300 tw-px-4 tw-rounded-3xl tw-font-medium tw-text-base tw-text-neutral-600 tw-bg-white">
            Timeframe
            <select className="tw-bg-transparent tw-pr-12 tw-py-2 tw-text-black">
              <option className="">All-time</option>
            </select>
          </div>
          <div className=" tw-flex tw-justify-center tw-items-center tw-border tw-border-neutral-300 tw-px-4 tw-rounded-3xl tw-font-medium tw-text-base tw-text-neutral-600 tw-bg-white">
            Client
            <select className="tw-bg-transparent tw-pr-12 tw-py-2 tw-text-black">
              <option className="">All</option>
            </select>
          </div>
        </div>
        <div
          className="tw-flex tw-flex-row tw-gap-4 tw-border tw-border-neutral-400 tw-rounded-md tw-justify-center tw-items-center tw-py-3 tw-px-5 tw-cursor-pointer"
          onClick={handleAddTransaction}
        >
          <FaPlus className="tw-text-2xl" />
          <p className="tw-font-normal tw-text-xs">Add Transaction</p>
        </div>
      </div>
      <div className="tw-mt-8"><OverviewCards /></div>
      <div className="tw-mt-6"><RecentPayment /></div>
      <div className="tw-mt-8"><TransactionsHistory /></div>
      {modalShow && (
        <Modal onhideDetails={() => setModalShow(false)}>
          <NewTransaction setModalShow={setModalShow} />
        </Modal>
      )}
    </div>
  );
};

export default SuperDashboard;
