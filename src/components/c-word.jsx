import React from 'react'
import Letters from './c-letters'
import Man from './c-man'
import HintCard from './c-hintCard'
import HANGMANPICS from '../hangman-pics'

class Word extends React.Component {
    state = {
        word: "",
        wordArray: [], 
        displayedWordArray: [],
        wrongLetters : [],
        man : "",
        gameOver: false
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
            displayedWordArray: displayedWordArray,
            man: HANGMANPICS[0]
        }))
    }

    isGuessCorrect = (guess) => {
        return this.state.wordArray.includes(guess)
    }

    guessALetter = (guess) => {
        if(this.isGuessCorrect(guess)) {
            this.updateDisplayedWord(guess)
        } else {
            this.updatewrongLetters(guess)
            this.isGameOver()
            this.updateMan()
        }


    }

    updatewrongLetters = (guess) => {
        this.setState((prevState) => {
             return {wrongLetters : [...prevState.wrongLetters, guess]}
        })
    }

    updateDisplayedWord = (guess) => {
        this.setState((prevState) => {
            let updatedDisplay = prevState.wordArray.map((letter, index) => {
                if(letter === guess) {return guess
                    } else {return prevState.displayedWordArray[index]}
            })
            return {displayedWordArray: updatedDisplay }
        })
    }

    updateMan = () => {
        this.setState((prevState) => {
            return {man: HANGMANPICS[prevState.wrongLetters.length ]}
        })

    }

    isGameOver = () => {
        this.setState((prevState) => {
            if (prevState.wrongLetters.length === 6) {
                return {gameOver: true}
            }
        })
    }

    render() {
        console.log("isGameOver: ", this.state.gameOver, this.state.wrongLetters)

        return (
        <div>
            <h2> {this.state.displayedWordArray} </h2>
            <Letters guessALetter={this.guessALetter}/>
            <Man man={this.state.man} />
            {this.state.gameOver && 
                <h2>
                Game over :(
                </h2>
            }
            <HintCard/>
        </div>)
      }
    }

export default Word;