import axios from 'axios'
import history from '../../routes/history';
import { SAVE_STUDENT, HANDLE_AUTH, SHOW_STUDENTS } from './actionTypes';


export const reloadWindow = () => {
  window.location.reload()
}

export const getStudents = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("http://localhost:4000/students");
      dispatch({
        type: SHOW_STUDENTS,
        payload: data
      })
      // history.push('/students')
    } catch (e) {
      console.log(e)
    }
  }
}

export const signup = (formInfo) => {
  return async dispatch => {
    try {
      const { data } = await axios.post('http://localhost:4000/register', { ...formInfo })
      console.log("data", data)
      dispatch({ type: SAVE_STUDENT, payload: data })
      dispatch({ type: HANDLE_AUTH, payload: true })
      history.push('/profile')
      reloadWindow();
    } catch (e) {
      console.log(e)
    }
  }
}

export const signin = (loginDetails) => {
  return async dispatch => {
    try {
      const { data } = await axios.post('http://localhost:4000/signin', loginDetails)
      dispatch({ type: SAVE_STUDENT, payload: data })
      dispatch({ type: HANDLE_AUTH, payload: true })
      history.push('/shopping')
      reloadWindow()
    } catch (e) {
      console.log(e)
    }
  }
}