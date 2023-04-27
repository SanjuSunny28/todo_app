import React, { useState } from 'react'
import './ToDo.css'


import { AiFillDelete} from "react-icons/ai";

const Todo = () => {
    const [todo, setToDo] = useState ('')
    const[todos, setToDos] = useState([])
    const [editId,setEditId] = useState (0)

    const handlerSubmit = (e) => {
        e.preventDefault();
    }

 
    const addToDO =()=> {
        setToDos([...todos,{list :todo ,id:Date.now(),status:false}])
        setToDo("   ")
    }

    const onDelete = (id) =>{
        setToDos(todos.filter((item) => item.id !== id));
    }

   
  
   
  return (
    <div className='container'>
        <h2>ToDo App</h2>

        <div>
            <form className='form' onSubmit={handlerSubmit}>
                <input type='text' value={todo} placeholder='Enter your todo...' onChange={(e)=>{setToDo(e.target.value)}} />
                <button onClick={addToDO}  className='btn-add'>Add</button>
            </form>

            <ul className='todo-ul'>
                {todos.map((item) =>( 
                    <li className='todo-list' id={item.status ? "list-id" : " "} >{item.list}
                    
                    
                    <AiFillDelete onClick={()=>onDelete(item.id)} className='delete-btn'/> 
                    </li> 

                ) )}
                
                
               
            </ul>
        </div>
    </div>
  )
}

export default Todo