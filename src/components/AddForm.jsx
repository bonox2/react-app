import { useState } from "react";
import { addTodo } from "../api/crud";
import useTodos from "./../hooks/useTodos";
export default function AddForm() {
  const [, dispatchTodos] = useTodos();
  const [todoTitle, setTodoTitle] = useState("");
  const [todoBody, setTodoBody] = useState("");

  async function createTodo(event) {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      body: todoBody,
      done: false,
      createdAt: Date.now(),
      updatedAt: null,
    };
    const [createdTodo, createdTodoError] = await addTodo(newTodo);
    if (!createdTodoError) {
      dispatchTodos({ type: "ADD", payload: createdTodo });
      setTodoTitle("");
      setTodoBody("");
    } else {
      alert("Create todo error! Try again later.");
    }
  }
  return (
    <form onSubmit={createTodo} className="add-form">
      <h2>Add new todo</h2>
      <input
        name="title"
        type="text"
        required
        placeholder="Todo title"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <textarea
        name="body"
        required
        placeholder="Todo body"
        value={todoBody}
        onChange={(e) => setTodoBody(e.target.value)}
      ></textarea>
      <button type="submit">Add todo</button>
    </form>
  );
}
