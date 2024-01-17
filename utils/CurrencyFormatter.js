const CurrencyFormatter = ({ amount }) => {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return <span>{formattedAmount}</span>;
}

export default CurrencyFormatter
