import { combineReducers } from 'redux';
import counterReducer from './counterreducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
   
    counter : counterReducer,
    todo: todoReducer
});

export default rootReducer;