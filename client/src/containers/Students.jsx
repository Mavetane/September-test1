import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudents } from '../redux/actions/auth'


const Students = () => {
  const students = useSelector(state => state.student.registeredStudents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents())
  }, [])


  console.log("students", students)
  return (<div>
    <h1>Registered Students</h1>
    {students.map(student =>
      <div key={student._id}>
        <h3>Name : {student.name}  Surname : {student.surname}</h3>
      </div>
    )}
  </div>)
}

export default Students;