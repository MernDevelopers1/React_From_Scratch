import React, { useState } from 'react';
import "./NewTodoForm.css";

const NewTodoForm = () => {
    const [value,setvalue] = useState('');
  return (
    <div className='new-todo-form'>
        <input className='new-todo-input' value={value} onChange={(e)=>setvalue(e.target.value)} type='text' />
        <button className='new-todo-button'>Create Todo</button>
    </div>
  )
}

export default NewTodoForm