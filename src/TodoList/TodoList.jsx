import React, { useState } from "react";
import "./TodoList.css";
import { Col, Row } from "react-bootstrap";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState();
  const [show, setShow] = useState(true);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddTodo() {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  }
  function handleEdit(idx) {
    setInputValue(todos[idx]);
    setEdit(idx);
    setShow(false);
  }
  function EditButton() {
    todos[edit] = inputValue;
    setShow(true);
    setInputValue("");
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  function handleStlye(index) {
    let input = document.getElementById(`todo${index}`);
    input.style.textDecoration =
      input.style.textDecoration == "line-through" ? "none" : "line-through";
  }

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="input-group">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo} hidden={!show}>
          Add
        </button>
        <button hidden={show} onClick={() => EditButton()}>
          Edit
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <Row>
            <li key={index}>
              <span id={`todo${index}`}>{todo}</span>
              <Col>
                <button onClick={() => handleDelete(index)}>
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </Col>
              <Col>
                <button onClick={() => handleEdit(index)}>
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </Col>
              <Col>
                <button onClick={() => handleStlye(index)}>
                  <i class="fa-solid fa-circle-check"></i>
                </button>
              </Col>
            </li>
          </Row>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
