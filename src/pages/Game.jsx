import Header from '../components/c-header'
import Word from '../components/c-word.jsx'
import React from 'react'


class Game extends React.Component {

    getName = (user) => {
        if (user === "guest") return ""
        else return user.charAt(0).toUpperCase() + user.slice(1)
    }
    
    render() {
        
        return (
        <div className="App">
            <Header user={this.getName(this.props.user)}/>
            <Word user = {this.props.user}/>
        </div>
  )}
}

export default Game;
