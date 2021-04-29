import React, { Component } from "react";

// easy
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "daniel hemmati",
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleClick() {
    this.setState({ text: this.state.searchTerm });
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleClick}>
          now show it
        </button>
      </div>
    );
  }
}

export default App;
