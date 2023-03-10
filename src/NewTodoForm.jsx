import React, { Component } from "react";
import { v1 } from "uuid";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.create({ ...this.state, id: v1(), completed: false });
    this.setState({ task: "" });
  }
  render() {
    return (
    
        <form onSubmit={this.handleSubmit} className="NewTodoForm">
          <label htmlFor="task">New Todo</label>
          <input
            type="text"
            placeholder="task"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add todo</button>
        </form>
    
    );
  }
}

export default NewTodoForm;
