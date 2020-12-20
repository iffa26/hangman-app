import React from 'react'
import Letterbutton from './c-letterButton'

class Letters extends React.Component {
    
    render() {

        return (
            <div>
                <Letterbutton letter = "A" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "B" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "C" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "D" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "E" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "F" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "G" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "H" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "I" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "J" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "K" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "L" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "M" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "N" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "O" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "P" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "Q" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "R" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "S" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "T" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "U" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "V" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "W" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "X" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "Y" guessALetter={this.props.guessALetter}/>
                <Letterbutton letter = "Z" guessALetter={this.props.guessALetter}/>
        </div>
        )
      }
    }

export default Letters;