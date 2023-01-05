import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    return (
      <div className="TodoList">
        <h1>
          TODOLIST! <span>A React Todo List App</span>
        </h1>

        <ul>
          {this.state.todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                task={todo.task}
                remove={this.remove}
                id={todo.id}
                updateTodo={this.update}
                completed={todo.completed}
                toggleTodo={this.toggleCompletion}
              />
            );
          })}
        </ul>
        <NewTodoForm create={this.create} />
      </div>
    );
  }
}

export default TodoList;
