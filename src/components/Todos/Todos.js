import {useEffect, useState} from "react";
import todosService from "../../services/todosService";
import Todo from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll()
            .then(value => value.data)
            .then(todos => setTodos([...todos]))
    }, []);
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    )
}
export default Todos;