import React from 'react'
import Letters from './c-letters'

class Word extends React.Component {
    state = {
        word: "",
        wordArray: [], 
        displayedWordArray: [],
        guessedLetters : []
    }

    componentDidMount() {
        this.getNewWord()
    }

    getNewWord = () => {
        let newWord = "WORD"
        let wordArray = newWord.split("")
        let displayedWordArray = wordArray.map(letter => " _ ")

        this.setState(state => ({
            word: "",
            wordArray: wordArray,
            displayedWordArray: displayedWordArray
        }))
    }

    guessALetter = (guess) => {

        this.setState((prevState) => {
            const newState = Object.assign({}, prevState);

            newState.guessedLetters = [...prevState.guessedLetters, guess]

            console.log("guess a letter, word array: ", prevState.wordArray)

            let updatedDisplay = prevState.wordArray.map((letter, index) => {
                console.log(letter)
                console.log(guess)
                if(letter === guess) {
                    return guess
            } else {return prevState.displayedWordArray[index]}
            })

            console.log("guess a letter updated display: ", updatedDisplay)

            newState.displayedWordArray = updatedDisplay

            return newState
            
        })

    }
    
    render() {
                  console.log("in guessALetter0: ", this.state.guessedLetters)
        return (
        <div>
            <h2> {this.state.displayedWordArray} </h2>
            <Letters guessALetter={this.guessALetter}/>
        </div>)
      }
    }

export default Word;