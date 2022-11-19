import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {Router} from "@reach/router"
import Game from './pages/Game';


class App extends React.Component {
render() {
  return (
    <Router >
      <Game path = '/' user = "guest"/>
      <Game path = '/imti' user = "imti"/>
      <Game path = '/humi' user = "humi"/>
      <Game path = '/peart' user = "eleanor"/>
      <Game path = '/hsuan' user = "rachel"/>
      <Game path = '/mcqueen' user = "amy"/>

    </Router>
  )}
}

export default App;

//    <Game path = '/ariasj' user = "aria"/>
