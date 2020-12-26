import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/c-header.jsx'
import Word from './components/c-word.jsx'
import React from 'react'
//import Router from "@reach/router"


class App extends React.Component {
  state = {user: null}
render() {
  return (
    <div className="App">
      <Header name="Humi"/>
      <Word/>
    </div>
  )}
}

export default App;
