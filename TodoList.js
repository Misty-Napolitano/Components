import React from "react";
import AddTodo from "./AddTodo";
import AllTodos from "./AllTodos";

class ToDoList extends React.Component {
  state = {
    allTodos: []
  };
  nextId = 1;

  addTodo = text => {
    const todoItem = { id: this.nextId, text, done: false };
    this.nextId++;

    const allTodos = [...this.state.allTodos, todoItem];
    this.setState({ allTodos });
  };
  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <AllTodos allTodos={this.state.allTodos} />
      </div>
    );
  }
}
export default ToDoList;
