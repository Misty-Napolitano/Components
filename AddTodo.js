import React from "react";

class AddTodo extends React.Component {
  state = {
    inputText: ""
  };

  handleInputChange = e => {
    this.setState({ inputText: e.target.value });
  };

  handleAddClicked = () => {
    this.props.addTodo(this.state.inputText);
    this.setState({ inputText: "" });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputText}
          placeholder="AddTodo component"
          onChange={this.handleInputChange}
        />

        <button type="button" onClick={this.handleAddClicked}>
          ADD{" "}
        </button>
      </div>
    );
  }
}
export default AddTodo;
