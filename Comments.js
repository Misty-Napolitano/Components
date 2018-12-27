import React from "react";

class Comments extends React.Component {
  state = {
    inputText: ""
  };

  handleInputChange = e => {
    this.setState({ inputText: e.target.value });
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <div>
        <input
          style={{ border: "2px solid green" }}
          type="text"
          placeholder="Comments Component"
          value={this.state.inputText}
          onChange={this.handleInputChange}
        />{" "}
      </div>
    );
  }
}
export default Comments;
