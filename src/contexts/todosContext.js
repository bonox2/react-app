
import { createContext, useReducer, useEffect } from "react";
import { getTodos } from "../api/crud";

const initialState = []
export const TodosContext = createContext([])
function reducer(state, action) {
    switch (action.type) {
        case "INIT": {
            return action.payload
        }
        default:
            throw new Error(`Wrong action.type! Current action.type is ->> "${action.type}"`)
    }
}
export default function TodosProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        (async function (){
          const [todos, todosError] = await getTodos()
          if (!todosError) {
            dispatch({type: 'INIT', payload: todos})
          }
        })()
      }, [])
    return <TodosContext.Provider value={[state, dispatch]}>{props.children}</TodosContext.Provider>
}



