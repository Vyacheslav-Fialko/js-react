import { Component } from "react";
import Balance from "../Balance";
import Form from "../Form";
import Transactions from "../Transactions";
import { Wrapper } from "./styles";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
    };
  }

  onChange = (value) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [
        {
          label: "decrease",
          value: value,
          id: Date.now(),
          date: new Date().toLocaleString(),
        },
        ...state.transactions,
      ],
    }));
  };

  render() {
    const { balance, transactions } = this.state;
    return (
      <Wrapper>
        <Balance balance={balance} />
        <Form onChange={this.onChange} />
        <hr />
        <Transactions transactions={transactions} />
      </Wrapper>
    );
  }
}

export default Home;
