import React from 'react'

// Isi folder my "Todo" item(file) hai jo just import kiya
import { Todo } from './Todo';

export const Todos = (props) => {
  let MyStyle ={
    minHeight: "80vh"
  }

  return (
    <div className="container my-3" style={MyStyle}> 
        <h3 className='text-center my-3'>Todos List</h3>
        {props.todos.length===0?"No Todos to display":
        props.todos.map((todo)=>{
            return(<Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            )
        })
           }
         
    </div>
  )
}
