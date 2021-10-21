import "./styles.css";
import React from "react";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {}

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  searchBook(event) {
    console.log(event);
    this.setState({ input: event });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleChange} />
        <p>Value: {this.state.value}</p>
      </div>
    );
  }
}
