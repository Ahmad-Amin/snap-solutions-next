import React, { useEffect, useContext } from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import UserContext from "../../store/user-context";
import CurrencyFormatter from "../../utils/CurrencyFormatter";
// import { Chart } from "react-google-charts";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

const OverviewCards = ({ transactionDetails }) => {
  // const overviewCardData = [
  //   {
  //     name: "User",
  //     userCount: "4,209",
  //     metrics: [
  //       {
  //         percentage: "62%",
  //         des: "New",
  //       },
  //       {
  //         percentage: "13%",
  //         des: "Returning",
  //       },
  //       {
  //         percentage: "23%",
  //         des: "Inactive",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Transactions",
  //     userCount: "1,302",
  //     metrics: [
  //       {
  //         percentage: "40%",
  //         des: "Paid",
  //       },
  //       {
  //         percentage: "60%",
  //         des: "Pending",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Total Amount",
  //     userCount: "$55,00,000",
  //     metrics: [
  //       {
  //         percentage: "40%",
  //         des: "Paid",
  //       },
  //       {
  //         percentage: "60%",
  //         des: "Received",
  //       },
  //     ],
  //   },
  // ];

  // const data = {
  //   labels: ["62% New", "13% Returning", "23% inactive"],
  //   datasets: [
  //     {
  //       label: "# of Users",
  //       data: [62, 13, 23],
  //       backgroundColor: [
  //         "rgba(27, 89, 248, 1)",
  //         "rgba(27, 89, 248, 0.46)",
  //         "rgba(0, 0, 0, 0.2)",
  //       ],
  //       borderWidth: 1,
  //       borderRadius: 5,
  //     },
  //   ],
  // };

  // const options = {
  //   plugins: {
  //     legend: {
  //       position: "left",
  //       rtl: false,
  //       labels: {
  //         usePointStyle: true,
  //         pointStyle: "circle",
  //         padding: 10,
  //         font: {
  //           size: 10,
  //         },
  //       },
  //     },
  //   },
  // };

  const userCtx = useContext(UserContext);

  useEffect(() => {
    // first
    if (userCtx.allUsers.length !== 0) return;
    const getAllUsers = async () => {
      try {
        // setSpinnerShow(true);
        const response = await axios.get(
          `${baseUrl}/api/superadmin/get-all-users`
        );
        if (response.status === 200 && response.data !== null) {
          userCtx.saveUsersToGlobalStore(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        // setSpinnerShow(false);
      }
    };

    getAllUsers();
  }, []);

  return (
    <div className="tw-grid tw-grid-cols-4 tw-gap-7">
      <div className=" tw-bg-white tw-px-5 tw-py-4 tw-rounded-2xl">
        <div>
          <p className="tw-p  tw-font-medium tw-text-sm tw-text-neutral-500">
            Users
          </p>
          <p className="tw-p  tw-font-bold tw-text-2xl">
            {userCtx.allUsers.length}
          </p>
        </div>
      </div>
      <div className=" tw-bg-white tw-px-5 tw-py-4 tw-rounded-2xl">
        <div>
          <p className="tw-p tw-font-medium tw-text-sm tw-text-neutral-500">
            Transactions
          </p>
          <p className="tw-p tw-font-bold tw-text-2xl">
            {transactionDetails.count}
          </p>
        </div>
      </div>
      <div className=" tw-bg-white tw-px-5 tw-py-4 tw-rounded-2xl">
        <div>
          <p className="tw-p tw-font-medium tw-text-sm tw-text-neutral-500">
            Total Amount
          </p>
          <p className="tw-p tw-font-bold tw-text-2xl">
            <CurrencyFormatter amount={transactionDetails.amount} />
          </p>
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
