import React from 'react';
import { Todoitem } from "../MyComponents/Todoitem";

export const Todos = (props) => {
  let mystyle ={
    minHeight: "70vh",
    margin: "10px auto"
  }
  return (
    <div className="container" style={mystyle}>
      <h3 className=" my-3">To-Do List</h3>
      {props.todos.length === 0 ? "No todos to display" :
          props.todos.map((todo) => {
            return (
              <Todoitem
                todo={todo}
                key={todo.sno}
                onDelete={props.onDelete}
              />
            );
          })
        }
    </div>
  );
};
