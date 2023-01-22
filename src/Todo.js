import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize line-through`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
}

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.complete ? style.liComplete : style.li}>
        <div className={style.row}>
            <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.complete ? 'cheched' : ''}/>
            <p onClick={() => toggleComplete(todo)} className={todo.complete ?  style.textComplete : style.text}>{todo.text}</p>
        </div>
        <button onClick={() => deleteTodo(todo.id)}><FaRegTrashAlt/></button>
    </li>
  )
}

export default Todo