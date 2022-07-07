import React,{useState} from 'react'
import useStore from '../../store/index';
import './form.css'

const Form =() =>{
    const [todos,setTodos] = useState({name:'',email:""})
    const addTodo = useStore(state => state.addTodo)

    const addHandle = (event) => {
        const {name,value} = event.target
        setTodos({...todos,[name]:value})
    }
    const onSubmitHandle =(e) =>{
        e.preventDefault()
        addTodo(todos)

    }
    console.log(todos)
    return(
        <div className="formTodo">
            <div className="formInput">
                <form onSubmit={(e)=>onSubmitHandle(e)}>
                    <input
                        type="text"
                        name="name"
                        value={todos.name}
                        onChange={addHandle}
                    />
                    <input
                        type="email"
                        name="email"
                        value={todos.email}
                        onChange={addHandle}
                    />
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Form
