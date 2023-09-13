import React from 'react'
import "./TodoList.css"
import { Todo } from '../../data'
import SingleTodo from '../SingleTodo/SingleTodo';

interface Props{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <ul className='todos'>
      {todos.map((todo) =>(
                <SingleTodo todos={todos} setTodos={setTodos} todo={todo}/>
      ))}
    </ul>
  )
}

export default TodoList