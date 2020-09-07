import React from 'react';
import Students from './Students';
import history from '../routes/history'
import { useState } from 'react';
import { reloadWindow } from '../redux/actions/auth'

const Profile = () => {
  const [state, setState] = useState(false);

  const displayStudents = () => {
    history.push('/students')
    reloadWindow()
  }

  return <div>
    <div>
      <h1>Profile</h1>
      <button>Edit Profile</button>
      <br />
      <button onClick={displayStudents}>Registered Students</button>
    </div>

  </div>;
}


export default Profile;