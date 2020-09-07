import React from 'react';
import history from '../routes/history'

const LandingPage = () => {
  function refreshPage () {
    window.location.reload();
  }
  const navigatePage = (routeName) => {
    history.push(routeName)
    refreshPage()
  }
  return <div>
    <h1>Landing Page</h1>

    <button onClick={() => navigatePage('register')}> Register</button>
    <button onClick={() => navigatePage('signin')}>LogIn</button>
  </div>;
}


export default LandingPage;