import useTodos from "./../hooks/useTodos";
import Todo from "./Todo";

export default function TodoList() {
  const [todos] = useTodos();
  return (
    <div className="todos">
      {[...todos]
        .sort((a, b) => a.done - b.done || b.updatedAt - a.updatedAt || b.createdAt - a.createdAt)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  );
}
