import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

let initTodo = [];
if (localStorage.getItem("todos") !== null) {
  initTodo = JSON.parse(localStorage.getItem("todos"));
}

function App() {
  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("I'm deleting", todo);
    const newTodos = todos.filter((e) => e !== todo);
    setTodos(newTodos);
  };

  const addTodo = (title, desc) => {
    const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
    console.log("Added", myTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-light min-vh-100">
      <Router>
        <Header title="My-Todos-List" searchbar={false} />
        <Routes>
          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
  
}

export default App;
