import "./App.css";
import useTodos from './hooks/useTodos';
import TodoList from './components/TodoList';


function App() {
  return (
    <>
      <h1>My todo list</h1>
      <div className="container">
        <TodoList></TodoList>
      </div>
    </> 
  );
}


export default App;
