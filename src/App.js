import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/c-header.jsx'
import Word from './components/c-word.jsx'
import React from 'react'


function App() {
  return (
    <div className="App">
      <Header name="Humi"/>
      <Word/>
    </div>
  );
}

export default App;
