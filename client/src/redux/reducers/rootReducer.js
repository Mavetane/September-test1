import { combineReducers } from 'redux';
import studentsReducer from './studentsReducer';

export const rootReducer = combineReducers({
  student: studentsReducer,
})

export default { rootReducer }