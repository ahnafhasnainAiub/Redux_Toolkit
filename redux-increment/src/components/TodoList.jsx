import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './../store/Actions/Todos'


function TodoList() {

   const todos = useSelector(state => state?.todo?.todos);

   const dispatch = useDispatch();
   const [input, setInput] = useState('');

   const handleAddTodo = () => {
     if(input){
       dispatch(addTodo(input));
       setInput('');
     }
   }

   return (
     <div className='mt-10'>
       <div className='text-3xl font-bold mb-3'>TodoList</div>

       <input
         type="text"
         value={input}
         onChange={(e) => setInput(e.target.value)}
         className='bg-slate-200 p-2 rounded-lg'
       />

       <button  onClick={handleAddTodo} className='bg-green-600 text-white px-3 py-2 rounded-lg'>Add Todo</button>

       <ul>
         {todos.map((todo, index) => (
           <li key={index} className='border-red-100'>
    
             {todo}
             <button className='bg-red-500 text-white px-3 py-2 rounded-lg mt-4 ml-3' onClick={() => dispatch(removeTodo(index))}>
               Remove
             </button>
           </li>
         ))}
       </ul>
     </div>
   );
};

export default TodoList;
