import React from 'react'

export const Todo = ({todo, onDelete}) => {
  return (
    <>
    <div>
          <h3>{todo.title}</h3>    
          <p>{todo.desc}</p>
          <button className="btn  btn-sm btn-danger my-2" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    <hr/>
    </>
  )
}
