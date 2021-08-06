import { Wrapper } from "./styles";

const Transaction = ({ label, value, date }) => (
  <Wrapper value={value}>
    <h4>Label: {label}</h4>
    <p>Value: {value}</p>
    <p>Date: {date}</p>
  </Wrapper>
);

export default Transaction;
