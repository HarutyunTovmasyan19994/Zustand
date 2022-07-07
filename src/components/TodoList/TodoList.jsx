import React from "react"
import useStore from "../../store/index";
import './TodoList.css'

const TodoList = () => {
    const todos = useStore(state => state.todos)
    console.log(todos)
    return (
        <div className="todoList">
            {
                todos.map(item=>
                <div className="todo">
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                </div>
                )
            }

        </div>
    )
}

export default TodoList
