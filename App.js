import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./NavigationBar";
import {
  ReactNotification,
  NotificationManager
} from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import AddToListButton from "./AddToListButton";
import MyPropsTest from "./MyPropsTest";
import Comments from "./Comments";
import Login from "./Login";
import TodoList from "./TodoList";

class App extends React.Component {
  state = {
    inputText: "",
    comments: ""
  };

  handleInputChange = e => {
    this.setState({ inputText: e.target.value });
  };

  handleCommentsChange = text => {
    this.setState({ comments: text });
  };

  render() {
    const cars = ["ford", "toyota", "nissan", "chevy"];

    return (
      <div className="App">
        <Login />
        <NavigationBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          1 + 4 = {1 + 4}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div>
          <ol>
            {cars.map(car => (
              <li>{car.toUpperCase()}</li>
            ))}
          </ol>
          <div>
            <AddToListButton />
          </div>
          <h3>
            <input
              style={{ border: "2px solid blue" }}
              type="text"
              placeholder="MyPropsTest Component"
              value={this.state.inputText}
              onChange={this.handleInputChange}
            />
            <MyPropsTest message={this.state.inputText} />
          </h3>
        </div>
        <Comments onChange={this.handleCommentsChange} />
        <h6>You made the following comments: {this.state.comments} </h6>
        <div>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
