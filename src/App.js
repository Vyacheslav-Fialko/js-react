import { Component } from "react";
import Balance from "./components/Balance";
import Form from "./components/Form";
import Transactions from "./components/Transactions";

class App extends Component {
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
      <div>
        <Balance balance={balance} />
        <Form onChange={this.onChange} />
        <hr />
        <Transactions transactions={transactions} />
      </div>
    );
  }
}

export default App;
