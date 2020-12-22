import React from 'react'
import Letters from './c-letters'
import HintCard from './c-hintCard'
import {emojiFaces} from '../hangman-pics'
import GameOverMessage from './c-gameOverMessage'
import DisplayWord from './c-displayWord'
import DisplayProgressBar from './c-progressBar.jsx'

//import Emoji from './c-emoji'

class Word extends React.Component {
    state = {
        word: "",
        wordArray: [], 
        displayedWordArray: [],
        wrongLetters : [],
        //man : "",
        gameOver: false,
        gameWon: false,
        gameFinished: false 
    }
    
    onClickTryAgain = ()=>{
        window.location.reload();

    }

    componentDidMount() {
        this.getNewWord()
    }

    getNewWord = () => {
        let newWord = "YA BIG DUMMY"
        let wordArray = newWord.split("")
        let displayedWordArray = wordArray.map(letter => {
            if (letter === " ") {
                return(" ") 
            } else {
                return("_")
            }
        })


        this.setState(state => ({
            word: "",
            wordArray: wordArray,
            displayedWordArray: displayedWordArray,
            //man: HANGMANPICS[0],
            emoji: emojiFaces[0]
        }))
    }

    isGuessCorrect = (guess) => {
        return this.state.wordArray.includes(guess)
    }

    guessALetter = (guess) => {
        if (this.isGuessCorrect(guess)) {
            this.updateDisplayedWord(guess)
            this.isGameWon()
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
            return {
                //man: HANGMANPICS[prevState.wrongLetters.length ], 
                    emoji: emojiFaces[prevState.wrongLetters.length ]}
        })

    }

    isGameOver = () => {
        this.setState((prevState) => {
            if (prevState.wrongLetters.length === 6) {
                return {gameOver: true, gameFinished: true}
            }
        })
    }

    isGameWon = () => {
        this.setState((prevState) => {

            let noCorrectLetters = prevState.displayedWordArray.join("").replace(/[^a-zA-Z]/g, '').length
            let noLetters = prevState.wordArray.join("").replace(/[^a-zA-Z]/g, '').length

            if(noCorrectLetters === noLetters) {
                return {gameWon: true, 
                        gameFinished:true,
                        emoji: emojiFaces[emojiFaces.length-1]}
            }
        })
    }

    onClickShowSolution = () => {
        this.setState((prevState) => {
            return {displayedWordArray: prevState.wordArray}
        })
    }

    
    render() {
        return (
        <div>

            <DisplayWord displayedWordArray = {this.state.displayedWordArray} />

            <Letters guessALetter={this.guessALetter}
                     gameFinished={this.state.gameFinished} />
            <div className = "emoji">{this.state.emoji}</div>
            <DisplayProgressBar wrongLetters={this.state.wrongLetters}/>
            <GameOverMessage gameOver = {this.state.gameOver}
                             gameWon = {this.state.gameWon}
                             onClickShowSolution={this.onClickShowSolution}
                             onClickTryAgain = {this.onClickTryAgain}/>
            {!this.state.gameFinished && <HintCard />}

        </div>)
      }
    }

export default Word;