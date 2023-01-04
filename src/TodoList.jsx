import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }
  render() {
    return (
      <div className="TodoList">
        <h1>TODOLIST</h1>
        <NewTodoForm create={this.create} />
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                task={todo.task}
                remove={this.remove}
                id={todo.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
