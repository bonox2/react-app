import { updateTodo } from "../api/crud";
import { dateTimeFormat } from "./../utils/common";
import useTodos from './../hooks/useTodos';

export default function Todo({ todo }) {
   const [, dispatchTodos] = useTodos()
  const done = todo.done ? "done" : "";
  
  async function updateTodoStatus() {
    const [updatedTodo, updatedTodoError] = await updateTodo(todo.id, { done: true, updatedAt: Date.now() });
    if (!updatedTodoError) {
        dispatchTodos({type: 'UPDATE', payload: updatedTodo})
    } else{
        alert('Update todo error!')
    }
  }
  return (
    <div className={`todo ${done}`}>
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
      <ul className="todo__dates">
        <li>Created: {dateTimeFormat.format(todo.createdAt)}</li>
        {todo.updatedAt && <li>Updated: {dateTimeFormat.format(todo.updatedAt)}</li>}
      </ul>
      {!todo.done && (
        <button className="todo__btn" onClick={updateTodoStatus}>
          Done!
        </button>
      )}
    </div>
  );
}
