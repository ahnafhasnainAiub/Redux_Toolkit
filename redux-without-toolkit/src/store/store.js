import { createStore } from 'redux';
import rootReducer from './Reducers/rootReducer';


//import counterReducer from './Reducers/counterreducer';
//import todoReducer from './Reducers/todoReducer';



//const store = createStore(todoReducer);

const store = createStore(rootReducer);
//const store = createStore(counterReducer);
export default store;