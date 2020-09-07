import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/actions/auth';

const LogIn = () => {
  const [loginDetails, setFormInfo] = useState({ password: '', email: '' })
  const dispatch = useDispatch()


  const submit = () => {
    dispatch(signup(loginDetails))
    console.log(loginDetails)
  }


  return (
    <div>
      <div>
        <span>LogIn</span>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => setFormInfo({ ...loginDetails, [e.target.name]: e.target.value })}
            value={loginDetails.email}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setFormInfo({ ...loginDetails, [e.target.name]: e.target.value })}
            value={loginDetails.password}
          />
        </div>
        <button className="btn" onClick={() => submit(loginDetails)}>submit</button>
      </div>
    </div>
  )

}

export default LogIn;