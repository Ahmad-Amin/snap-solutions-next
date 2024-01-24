import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../store/user-context";
import CurrencyFormatter from "../../utils/CurrencyFormatter";
import TransactionDetails from "./TransactionDetails";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";
import Spinner from "../../utils/Spinner/Spinner";
import Link from "next/link";
// import Graph from "../assets/graph.png";

const MainFrontView = () => {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;

  const [transactions, setTransactions] = useState([]);
  const [spinnerShow, setSpinnerShow] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setSpinnerShow(true);
        const url = `${baseUrl}/api/admin/getTransactions/${user._id}`;
        const response = await axios.get(url);

        if (response.status === 200) {
          setTransactions(response.data);
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setSpinnerShow(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="tw-flex tw-flex-col tw-gap-5 tw-text-black">
      <div className="tw-bg-orange-100 tw-py-3 tw-px-5 tw-rounded-xl">
        <h1 className="tw-h1 tw-font-medium 2xl:tw-text-2xl lg:tw-text-xl tw-text-lg tw-text-custom-blue">
          {user.companyName || "---"}{" "}
          <span className="tw-font-normal tw-text-lg">Dashboard</span>
        </h1>
        <h3 className="tw-h3 tw-font-medium 2xl:tw-text-lg lg:tw-text-base">
          Available Funds
        </h3>
        <div className="tw-flex md:tw-flex-row tw-flex-col tw-gap-5 md:tw-gap-0 tw-justify-between 2xl:tw-my-4 md:tw-my-2">
          <p className="tw-p tw-font-medium 2xl:tw-text-4xl lg:tw-text-3xl tw-text-2xl tw-text-black">
            <CurrencyFormatter amount={user.amount} />
          </p>
          <div className="tw-flex tw-gap-3 tw-flex-row md:tw-flex-col lg:tw-flex-row">
            <Link href={"/admin/AccessFunds"}>
              <p className="tw-button tw-bg-custom-blue tw-text-white tw-font-normal tw-text-base md:tw-text-sm 2xl:tw-px-7 2xl:tw-py-4 tw-px-4 tw-py-2 tw-rounded-lg">
                Access Funds
              </p>
            </Link>
            <button className=" tw-button tw-text-base md:tw-text-sm 2xl:tw-px-7 2xl:tw-py-4 tw-px-4 tw-py-2 tw-rounded-lg tw-font-normal tw-text-custom-blue tw-bg-transparent tw-border tw-border-custom-blue">
              Send Message
            </button>
          </div>
        </div>
        <p className="tw-p tw-font-normal tw-text-base tw-text-red-500 tw-my-3">
          100%
        </p>
      </div>
      <div className="tw-border tw-border-neutral-200 tw-rounded-xl tw-p-5">
        <div className="tw-grid tw-grid-cols-3">
          <div className="tw-col-span-2">
            <p className="tw-font-medium 2xl:tw-text-lg tw-text-2xl lg:tw-text-base tw-mb-5 tw-text-black">
              Available Credits
            </p>
            <p className="tw-font-medium 2xl:tw-text-5xl lg:tw-text-4xl tw-text-3xl 2xl:tw-mb-8 xl:tw-mb-6 tw-mb-4 tw-text-black ">
              100%
            </p>
            <p className="tw-font-normal tw-text-xs tw-text-stone-400">
              Details about the credit etcc....
            </p>
          </div>
          <div className="tw-col-span-1 tw-text-right">
            <div className="tw-mb-5 tw-flex tw-justify-end">
              {/* <img src={Graph} alt="Graph" /> */}
            </div>
            <p className=" tw-bg-orange-200 tw-p-2 tw-font-normal tw-text-xs tw-inline-block tw-rounded-lg">
              +2% Past month
            </p>
          </div>
        </div>
      </div>
      <div className="tw-border tw-border-neutral-200 tw-rounded-xl lg:tw-p-5 tw-p-3">
        <div className="tw-flex tw-justify-between tw-items-end">
          <p className="tw-font-medium 2xl:tw-text-lg lg:tw-text-base tw-text-black">
            Transaction Details
          </p>
          <input className="tw-text-sm lg:tw-text-base" type="date" />
        </div>
        {spinnerShow ? (
          <Spinner />
        ) : (
          <div>
            {transactions?.length === 0 ? (
              <p>No Transaction for the User</p>
            ) : (
              transactions.map((transaction) => {
                return (
                  <TransactionDetails
                    amount={transaction.amount}
                    senderDetails={transaction.sender}
                    date={transaction.transactionDate}
                  />
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainFrontView;
