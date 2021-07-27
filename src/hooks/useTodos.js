import{ useContext } from 'react'
import { TodosContext } from '../contexts/todosContext';


export default function useTodos() {
    return useContext(TodosContext)
}