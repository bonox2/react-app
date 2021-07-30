import "./App.css";
import TodoList from './components/TodoList';
import AddForm from './components/AddForm';


function App() {
  return (
    <>
      <h1>My todo list</h1>
      <div className="container">
        <AddForm></AddForm>
        <TodoList></TodoList>
      </div>
    </> 
  );
}


export default App;
