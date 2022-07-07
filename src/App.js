import React from 'react'
import Form from './components/Form/Form';
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div>
        <Header/>
            <Form/>
            <TodoList/>
    </div>
  );
}

export default App;
