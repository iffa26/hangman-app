import './App.css';
import Header from './components/c-header.jsx'
import Letterbutton from './components/c-letterButton.jsx'
import Word from './components/c-word.jsx'
import React from 'react'



function App() {
  return (
    <div className="App">
      <Header name="Humi"></Header>
      <Word> </Word>
      <Letterbutton letter = "A" ></Letterbutton>
      <Letterbutton letter = "B" ></Letterbutton>
      <Letterbutton letter = "C" ></Letterbutton>
      <Letterbutton letter = "D" ></Letterbutton>
      <Letterbutton letter = "E" ></Letterbutton>
      <Letterbutton letter = "F" ></Letterbutton>
      <Letterbutton letter = "G" ></Letterbutton>
    </div>
  );
}

export default App;
