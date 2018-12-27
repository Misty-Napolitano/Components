import React from "react";

class AllTodos extends React.Component {
  render() {
    return (
      <div>
        {this.props.allTodos.map(todo => (
          <div>
            <input type="checkbox" />
            {todo.text}
            <button type="button"> Delete</button>
          </div>
        ))}
      </div>
    );
  }
}
export default AllTodos;
