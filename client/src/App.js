import React from 'react';
import './App.css';
import { loadRoutes } from './routes/index'
function App () {
  return (
    <div className="App">
      {loadRoutes()}
    </div>
  );
}

export default App;
