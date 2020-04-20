import React from 'react';
import   Lists  from './components/Lists';
import './App.css';


function App() {
  return (
    <div className="whole page">
      <div className="welcome-sentence">
        <h4>Projects</h4>
        <h3>Welcome to my App</h3>
        <h4>Actions</h4>
      </div>
      <Lists className ="app"/>
    </div>
  );
}

export default App;
