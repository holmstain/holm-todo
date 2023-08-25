import React, {useState, useEffect} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo'
import {db} from './firebase'
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'



const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border o-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: ` text-center p-2`,
}

const App = () => {

const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');


// Create To Do
const createTodo = async (e) => {
  e.preventDefault(e);
  if(input === ''){
    alert ('Please add a todo')
    return
  }
  await addDoc(collection(db, 'todos'), {
    text: input,
    complete: false,
  })
  setInput('')
}
// Read To Do from Firebase
useEffect(() => {
const q = query(collection(db, "todos"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  let todosArr = []
  querySnapshot.forEach((doc) => {
    todosArr.push({...doc.data(), id: doc.id})
  });
  setTodos(todosArr)
})
return () => unsubscribe();
},[])
// Update To Do in Firebase
const toggleComplete = async (todo) => {
  await updateDoc(doc(db, 'todos', todo.id), {
    complete: !todo.complete
  })
}

// Delete To Do
const deleteTodo = async (id) => {
  await deleteDoc(doc(db, 'todos', id))
}


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}> Holm To Do</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className={style.input} placeholder='Add Todo'/>
          <button className={style.button}><AiOutlinePlus/></button>
        </form>
        <ul>
          {todos.map((todo, index) =>(
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
          ))}
        </ul>

        {todos.length < 1 ? null :
        <p className={style.count}>{`You have ${todos.length} todo(s)`}</p>}
        
      </div>
    </div>
  )
}

export default App