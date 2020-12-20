import React from 'react'

class Letterbutton extends React.Component {

    state = {disabled: false}
    
    disableLetter = () => {
        this.setState(state => ({
            disabled: true
        }))
        console.log("disableLetter")
    }
    
    onLetterClick = () => {
        this.disableLetter()
        this.props.guessALetter(this.props.letter)
    }

    render() {
      return (
        <button onClick = {this.onLetterClick} disabled = {this.state.disabled}> 
        {this.props.letter} 
        </button>
      )
    }
  }

  export default Letterbutton; 