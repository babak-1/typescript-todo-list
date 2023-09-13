import React, { useState } from 'react'
 import './App.css'
import InputFeilds from './components/InputFelds/InputFeilds'
import { Todo } from './data'
import TodoList from './components/TodoList/TodoList'
const App:React.FunctionComponent = () => {

  const [todo,setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("");
    }
  }

  console.log("Todos",todos);
  

  return (
    <div className='app'>
      <h1 className="heading">Todo with Typescript</h1>
      <InputFeilds todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
