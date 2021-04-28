import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "react",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.state.searchTerm}</h1>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
