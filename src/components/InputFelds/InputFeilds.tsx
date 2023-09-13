import React, { ChangeEvent,useRef } from 'react'
import "./InputFeilds.css"

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent) => void;
}



const InputFeilds:React.FC<Props>= ({todo,setTodo,handleAdd}) => {
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

    const inputRef =useRef<HTMLInputElement>(null);

  return (
    <form className='form' onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
        }}>
        <input type="input" placeholder='Enter a task' className='inputBox' value={todo} onChange={handleChange} ref={inputRef}/>
        <button className='inputSubmit' type='submit'>
            Add
        </button>
    </form>
  )
}

export default InputFeilds