import React from 'react'
import Letterbutton from './c-letterButton'

class Letters extends React.Component {
    
    render() {

        return (
            <div>
                <div>
                <Letterbutton letter = "A" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "B" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "C" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "D" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "E" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "F" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "G" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "H" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                </div>
                <Letterbutton letter = "I" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "J" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "K" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "L" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "M" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "N" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "O" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "P" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "Q" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "R" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <div>
                <Letterbutton letter = "S" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "T" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "U" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "V" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "W" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "X" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "Y" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                <Letterbutton letter = "Z" guessALetter={this.props.guessALetter} gameOver={this.props.gameOver}/>
                </div>
        </div>
        )
      }
    }

export default Letters;