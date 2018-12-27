import React, { Component } from "react";

export default class AddToListButton extends React.Component {
  state = {
    inputText: "",
    items: []
  };

  handleInputChange = e => {
    this.setState({ inputText: e.target.value });
  };

  handleClick = () => {
    const items = [...this.state.items, this.state.inputText];
    this.setState({ items: items });
  };
  render() {
    return (
      <div>
        <div>
          Type Something:
          <input
            style={{ border: "2px dotted red" }}
            type="text"
            placeholder="AddToListButton Component"
            value={this.state.inputText}
            onChange={this.handleInputChange}
          />
        </div>

        <div>You typed: {this.state.inputText}</div>

        <button onClick={this.handleClick}>Add</button>

        {this.state.items.map(item => (
          <div>{item}</div>
        ))}
      </div>
    );
  }
}
