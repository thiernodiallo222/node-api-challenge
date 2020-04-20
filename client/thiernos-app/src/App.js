import React from 'react';
import   Lists  from './components/Lists';
import './App.css';


function App() {
  return (
    <div className="whole page">
      <div className="welcome-sentence">
        <h5>Projects</h5>
        <h3>Welcome to my App</h3>
        <h5>Actions</h5>
      </div>
      <Lists className ="app"/>
    </div>
  );
}

export default App;
