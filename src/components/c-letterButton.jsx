import React from 'react'

class Letterbutton extends React.Component {
    constructor(props) {
      super(props)
      this.state = {disabled: false}

      this.onLetterClick= this.onLetterClick.bind(this)
      this.disableLetter = this.disableLetter.bind(this)

    }

    onLetterClick() {
        this.disableLetter()
    }

    disableLetter() {
        this.setState(state => ({
            disabled: true
        }))
        console.log("state updated")
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