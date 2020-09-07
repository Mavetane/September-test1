import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/actions/auth';

const Register = () => {
  const [formInfo, setFormInfo] = useState({ name: '', surname: '', password: '', email: '', idNumber: '', homeAddress: '' })
  const dispatch = useDispatch()


  const submit = () => {
    // console.log("Form info", formInfo)
    dispatch(signup(formInfo))
  }


  return (
    <div>
      <div>
        <span>Register</span>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
            value={formInfo.name}
          />
        </div>
        <input
          type="text"
          name="surname"
          placeholder="surname"
          onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
          value={formInfo.surname}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
          value={formInfo.email}
        />
      </div>
      <div>
        <input
          type="text"
          name="homeAddress"
          placeholder="Physical Adress"
          onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
          value={formInfo.homeAddress}
        />
      </div>
      <div>
        <input
          type="number"
          name="idNumber"
          placeholder="Id No"
          onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
          value={formInfo.idNumber} />
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
          value={formInfo.password}
        />
      </div>
      <button className="btn" onClick={() => submit(formInfo)}>submit</button>
    </div>
  )

}

export default Register;