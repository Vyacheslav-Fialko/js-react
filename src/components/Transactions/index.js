import Transaction from "../Transaction";

const Transactions = ({ transactions }) => (
  <ul>
    {transactions.map((transaction) => (
      <Transaction
        key={transaction.id}
        label={transaction.label}
        value={transaction.value}
        date={transaction.date}
      />
    ))}
  </ul>
);

export default Transactions;
