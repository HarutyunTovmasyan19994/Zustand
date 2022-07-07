import create from "zustand";
import todoStore from './store'

const useStore =create((set)=>({
    todos:[{email:"jgjhghj",name:"jhjgj"}],
    addTodo: (todo) => set((state)=>({todos:[todo,...state.todos]}))
}))

export default useStore


