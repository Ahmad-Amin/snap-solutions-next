import React, { useEffect, useState } from "react";
import baseUrl from "../../utils/baseUrl";
// import recentPaymentOne from "../../assets/rp-1.png";
import Transaction from "./Transaction";
import axios from "axios";
import Spinner from "../../utils/Spinner/Spinner";

const TransactionsHistory = ({ setTransData }) => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [spinnerShow, setSpinnerShow] = useState(false);

  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        setSpinnerShow(true);
        const response = await axios.get(
          `${baseUrl}/api/superadmin/get-all-transactions`
        );
        if (response.status === 200 && response.data !== null) {
          // setuserList(response.data);
          setTransactionsData(response.data);
          const transactionAmount = response.data.reduce(
            (sum, currentObject) => sum + currentObject.amount,
            0
          );
          setTransData(response.data.length, transactionAmount);
          // setSpinnerShow(false);
        }
      } catch (error) {
        console.log(error);
        // setSpinnerShow(false);
      } finally {
        setSpinnerShow(false);
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
            {spinnerShow ? (
              <Spinner />
            ) : (
              transactionsData.map((rec, index) => (
                <Transaction
                  key={index}
                  name={rec.receiverName}
                  profileImage={rec.user?.profileImage}
                  transactionType={rec.transactionType}
                  status={rec.status}
                  amount={rec.amount}
                  date={rec.transactionDate}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsHistory;
