import React, { useEffect, useContext } from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import UserContext from "../../store/user-context";
import CurrencyFormatter from "../../utils/CurrencyFormatter";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  userdata,
  transactionsGraphData,
  totalAmountData,
} from "../../tempData/graph-data";
import CountUp from "react-countup";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 15,
        boxHeight: 10,
      },
    },
  },
  responsive: true,
};

const OverviewCards = ({ transactionDetails }) => {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    if (userCtx.allUsers.length !== 0) return;
    const getAllUsers = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/superadmin/get-all-users`
        );
        if (response.status === 200 && response.data !== null) {
          userCtx.saveUsersToGlobalStore(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getAllUsers();
  }, []);

  return (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-7">
      <div className=" tw-bg-white tw-px-5 tw-py-4 tw-rounded-2xl">
        <div className=" ">
          <p className="tw-p  tw-font-medium tw-text-sm tw-text-neutral-500">
            Users
          </p>
          <p className="tw-p  tw-font-bold tw-text-2xl  tw-mb-5">
            <CountUp end={userCtx.allUsers.length} />
          </p>
          <Doughnut data={userdata} options={options} />
        </div>
      </div>
      <div className=" tw-bg-white tw-px-5 tw-py-4 tw-rounded-2xl tw-overflow-hidden">
        <div>
          <p className="tw-p tw-font-medium tw-text-sm tw-text-neutral-500">
            Transactions
          </p>
          <p className="tw-p tw-font-bold tw-text-2xl  tw-mb-5">
            <CountUp end={transactionDetails.count} />
          </p>
          <Doughnut data={transactionsGraphData} options={options} />
        </div>
      </div>
      <div className=" tw-bg-white tw-px-5 tw-py-4 tw-rounded-2xl tw-overflow-hidden">
        <div>
          <p className="tw-p tw-font-medium tw-text-sm tw-text-neutral-500">
            Total Amount
          </p>
          <p className="tw-p tw-font-bold tw-text-2xl tw-mb-5">
            <CurrencyFormatter amount={transactionDetails.amount} />
          </p>
          <Doughnut className="" data={totalAmountData} options={options} />
        </div>
      </div>
      <div className="tw-flex tw-gap-5 tw-flex-col">
        <div className="tw-bg-white tw-px-5 tw-py-4 tw-rounded-2xl">
          <p className="tw-p tw-font-medium tw-text-sm tw-text-neutral-500">
            Revenue
          </p>
          <p className="tw-p tw-font-bold tw-text-2xl">$2.5B</p>
        </div>
        <div className="tw-bg-white tw-px-5 tw-py-4 tw-rounded-2xl">
          <p className="tw-p tw-font-medium tw-text-sm tw-text-neutral-500">
            ARPU
          </p>
          <p className="tw-p tw-font-bold tw-text-2xl">$50m</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;
