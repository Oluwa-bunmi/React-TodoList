import React, { Component } from "react";

class Todo extends Component {
 
  render() {
    return (
      <div >
        <button>EDIT</button>
        <button>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;