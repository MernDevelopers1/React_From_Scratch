import React, { useState } from 'react';
import {  connect } from 'react-redux';
import "./NewTodoForm.css";
import { createTodo } from './action';

const NewTodoForm = ({todos,onCreatePressed}) => {
    const [value,setvalue] = useState('');
  return (
    <div className='new-todo-form'>
        <input className='new-todo-input' value={value} onChange={(e)=>setvalue(e.target.value)} type='text' />
        <button 
        className='new-todo-button' 
        onClick={()=>{
         const isDuplicate = todos.some(todo => todo.text === value);
         if(!isDuplicate){
          onCreatePressed(value);
          setvalue("");
         }
        }}>Create Todo</button>
    </div>
  )
}

const mapStateToProps = state => ({
  todos:state.todos,
});
const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm); 