import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onChange(this.state.value);
    this.setState({
      value: "",
    });
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState((state) => ({
      value,
    }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="change"
          type="number"
          value={this.state.value}
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
