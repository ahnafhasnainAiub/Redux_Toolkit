import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux';
import  store from './store/store.js';

import ValueCounter from './components/ValueCounter.jsx';
import TodoList from './components/TodoList.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
     <div>
        <ValueCounter/>
        <TodoList/>
     </div>
  </Provider>,
)
