import axios from "axios";

export const crud = axios.create({
    baseURL: 'http://localhost:3005'
})

crud.interceptors.response.use(function(response){
    return [response.data, null];
}, function (error) {
    return [null, error]
}
)

export async function getTodos(){
    return await crud.get('/todos')
}