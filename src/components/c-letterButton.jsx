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
      return (
        <button className = "letterButton-button" 
                onClick = {this.onLetterClick} 
                disabled = {this.state.disabled}> 
        {this.props.letter} 
        </button>
      )
    }
  }

  export default Letterbutton; 