import { SAVE_STUDENT, HANDLE_AUTH, SHOW_STUDENTS } from '../actions/actionTypes'

const initialState = {
  students: null,
  authorizedStudent: false,
  registeredStudents: []
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_STUDENT:
      return { ...state, users: action.payload };
    case SHOW_STUDENTS:
      return { ...state, registeredStudents: action.payload };
    case HANDLE_AUTH:
      return { ...state, authorizedStudent: action.payload }
    default:
      return state;
  }
};

export default studentsReducer;