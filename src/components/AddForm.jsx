import {useState} from "react"




export default function AddForm(){
    const [todoTitle, setTodoTitle] = useState('')
    const [todoTitle, setTodoTitle] = useState('')
        event.preventDefault()
        const newTodo = {
            title: todoTitle,
            body: todoBody,
            done: false,
            createdAt: Date.now(),
            ubdatedAt: null
        }
        console.log(newTodo)
    return (
        <form onSubmit={createTodo} className="add-form">
            <h2> Add new todo</h2>
            <input name="body" type="text" placeholder="todo title" value={todoTitle} onChange={(e) => setTodoTitle()}/>
            <textarea name="body" placeholder="Body" value={todoBody} onChange={(e) => setTodoBody()} > </textarea>
            <button type="submit"> Add todo</button>
        </form>
    )
}