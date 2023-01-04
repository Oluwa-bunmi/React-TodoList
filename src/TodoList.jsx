import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [{ task: "Walk boo" }, { task: "Eat rice" }] };
    this.create = this.create.bind(this);
  }
  create(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
    return (
      <div className="TodoList">
        <h1>TODOLIST</h1>
        <NewTodoForm create={this.create}/>
        <ul>
          {this.state.todos.map((todo) => {
            return <Todo task={todo.task} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
