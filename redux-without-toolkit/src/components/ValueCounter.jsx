import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { increment, decrement } from '../store/Actions/Counter';


function ValueCounter() {

    const count =  useSelector(state => state?.counter?.count);
    const dispatch = useDispatch();

  return (
    <div>
         <h1 className="text-3xl font-bold ">Counter : {count}</h1>
      <div className="mt-8">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-600 mr-5 px-3 py-2 rounded-lg text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-blue-500 px-3 py-2 rounded-lg text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default ValueCounter