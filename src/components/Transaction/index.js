const Transaction = ({ label, value, date }) => (
  <div>
    <h4>Label: {label}</h4>
    <p>Value: {value}</p>
    <p>Date: {date}</p>
  </div>
);

export default Transaction;
