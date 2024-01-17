import React, { useEffect, useState } from "react";
// import recentPaymentOne from "../../assets/rp-1.png";
import Transaction from "./Transaction";
import axios from "axios";
import Spinner from "../../utils/Spinner/Spinner";

const TransactionsHistory = () => {
  const [transactionsData, setTransactionsData] = useState([]);

  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        // setSpinnerShow(true);
        const response = await axios.get(
          `${process.env.BG_SERVERURL}/get-all-transactions`
        );
        console.log(response)
        if (response.status === 200 && response.data !== null) {
          // setuserList(response.data);
          setTransactionsData(response.data);
          // setSpinnerShow(false);
        }
      } catch (error) {
        console.log(error);
        // setSpinnerShow(false);
      }
    };

    getAllTransactions();
  }, []);

  return (
    <div className="tw-bg-white tw-p-9 tw-rounded-tl-2xl tw-rounded-tr-2xl ">
      <h1 className=" tw-font-bold tw-text-2xl">Transactions</h1>
      <hr className="tw-mt-4" />
      <div className="tw-relative tw-overflow-x-auto tw-mt-4">
        <table className="tw-w-full tw-text-sm tw-text-left rtl:tw-text-right tw-text-gray-500">
          <thead className="tw-text-xs tw-text-gray-700 tw-font-medium">
            <tr>
              <th scope="col" className="tw-px-6 tw-py-3 tw-text-center">
                Reciever
              </th>
              <th scope="col" className="tw-px-6 tw-py-3 tw-text-center">
                Type
              </th>
              <th scope="col" className="tw-px-6 tw-py-3 tw-text-center">
                Status
              </th>
              <th scope="col" className="tw-px-6 tw-py-3 tw-text-center">
                Date
              </th>
              <th scope="col" className="tw-px-6 tw-py-3 tw-text-center">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((rec, index) => (
              <Transaction
                key={index}
                name={rec.receiverName}
                image="/images/rp-1.png"
                transactionType={rec.transactionType}
                status={rec.status}
                amount={rec.amount}
                date={rec.transactionDate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsHistory;
