import React, { useState,useRef,useEffect } from "react";
import "./SingleTodo.css";
import { Todo } from "../../data";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todos, setTodos,todo }) => {
  const [edit,setEdit] = useState<boolean>(false);
  const [editTodo,setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) =>todo.id !== id))
  }

  const handleEdit = (e:React.FormEvent,id:number) => {
    e.preventDefault();

    setTodos(todos.map((todo) =>(
      todo.id === id?{...todo,todo:editTodo}:todo
    )));

    setEdit(false);
  }
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    inputRef.current?.focus();
  },[edit])


  return (
    <>
        <form key={todo.id} className="todo" onSubmit={(e)=>handleEdit(e,todo.id)}>

          {edit ? (<input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} ref={inputRef} className="editInput" /> )
          :(  todo.isDone ? (
            <span className="todo-txt done-txt">{todo.todo}</span>
          ) : (
            <span className="todo-txt">{todo.todo}</span>
          ))}
        

          <div className="todo-icons">
            <span className="icon" onClick={() =>{
              if(!edit && !todo.isDone){
               setEdit(!edit); 
              }
            }}>
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
    </>
  );
};

export default SingleTodo;
