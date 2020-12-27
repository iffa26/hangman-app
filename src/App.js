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
      <Game path = '/eleanor' user = "eleanor"/>
      <Game path = '/rachel' user = "rachel"/>
      <Game path = '/aria' user = "aria"/>
    </Router>
  )}
}

export default App;
