import React from 'react'
import Letterbutton from './c-letterButton'

class Letters extends React.Component {
    
    render() {

        return (
            <div>
                <div>
                <Letterbutton letter = "A" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "B" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "C" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "D" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "E" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "F" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "G" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "H" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                </div>
                <Letterbutton letter = "I" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "J" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "K" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "L" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "M" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "N" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "O" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "P" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "Q" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "R" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <div>
                <Letterbutton letter = "S" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "T" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "U" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "V" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "W" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "X" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "Y" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                <Letterbutton letter = "Z" guessALetter={this.props.guessALetter} gameFinished={this.props.gameFinished}/>
                </div>
        </div>
        )
      }
    }

export default Letters;