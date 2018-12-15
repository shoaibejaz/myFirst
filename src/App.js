import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import TodoList from "./components/todolist";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  state = {
    todolist: []
  };
  render() {
    return (
      <Provider>
        <div className="App">
          <Header onAdd={this.addTodo} />
          <TodoList todolist={this.state.todolist} />
        </div>
      </Provider>
    );
  }
}

export default App;
