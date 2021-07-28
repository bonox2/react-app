import axios from "axios";

export const crud = axios.create({
    baseURL: 'http://localhost:3004',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

crud.interceptors.response.use(function (response) {
    return [response.data, null];
}, function (error) {
    return [null, error]
});

export async function getTodos() {
    return await crud.get('/todos')
}
export async function getTodo(id) {
    return await crud.get(`/todos/${id}`)
}
export async function updateTodo(id, todoData) {
    return await crud.patch(`/todos/${id}`, todoData)
}
export async function addTodo(todoData) {
    return await crud.post(`/todos`, todoData)
}
export async function deleteTodo(id) {
    return await crud.delete(`/todos/${id}`)
}