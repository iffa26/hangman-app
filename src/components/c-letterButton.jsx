import React from 'react'

class Letterbutton extends React.Component {

    state = {disabled: false}
    
    disableLetter = () => {
        this.setState(state => ({
            disabled: true
        }))
    }
    
    onLetterClick = () => {
        this.disableLetter()
        this.props.guessALetter(this.props.letter)
    }

    render() {
      console.log("button: ", this.props.gameOver)
      return (
      <span>
        {this.props.gameOver ? 
        <button className = "letterButton-button" 
                disabled = {true}> 
        {this.props.letter} 
        </button>  :
        <button className = "letterButton-button" 
                onClick = {this.onLetterClick} 
                disabled = {this.state.disabled}> 
        {this.props.letter} 
        </button> } 
      </span>
      )
    }
  }

  export default Letterbutton; 