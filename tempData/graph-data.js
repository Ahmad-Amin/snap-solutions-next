export const userdata = {
  labels: ["62% New", "13% Returning", "23% Inactive"],
  datasets: [
    {
      label: "# of Users",
      data: [62, 13, 23],
      backgroundColor: [
        "rgba(73, 122, 249, 1)",
        "rgba(120, 157, 251, 1)",
        "rgba(229, 229, 229, 1)",
      ],
      borderRadius: 5
    },
  ],
};


export const transactionsGraphData = {
  labels: ["40% Paid", "60% Pending"],
  datasets: [
    {
      label: "# of Transactions",
      data: [40, 60],
      backgroundColor: [
        "rgba(43, 101, 248, 1)",
        "rgba(235, 235, 235, 1)",
      ],
      borderRadius: 5,
    },
  ],
};

export const totalAmountData = {
  labels: ["40% Paid", "60% Recieved"],
  datasets: [
    {
      label: "# of Recieved",
      data: [40, 60],
      backgroundColor: ["rgba(43, 101, 248, 1)", "rgba(235, 235, 235, 1)"],
      borderRadius: 5,
    },
  ],
};