import React from 'react'
import Letters from './c-letters'
import {emojiFaces, emojiWin} from '../hangman-pics'
import GameOverMessage from './c-gameOverMessage'
import DisplayWord from './c-displayWord'
import DisplayProgressBar from './c-progressBar.jsx'
import HintCollapsible from './c-HintCollapsible'
import apiGetNewWord from '../api'

//import Emoji from './c-emoji'

class Word extends React.Component {
    state = {
        word: "",
        hint : "",
        wordArray: [], 
        displayedWordArray: [],
        emoji: "",
        wrongLetters : [],
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

        apiGetNewWord().then((data) => {
            console.log("new word: ", data.word)
            let newWord = data.word.toUpperCase()
            let newHint = data.hint
            let wordArray = newWord.split("")
            let displayedWordArray = wordArray.map(letter => {
                if (letter === " ") {
                    return(" ") 
                } else {
                    return("_")
                }
            })

            this.setState({
                word: newWord,
                hint: newHint,
                wordArray: wordArray,
                displayedWordArray: displayedWordArray,
                emoji: emojiFaces[0]
            })

        })




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
            if (prevState.wrongLetters.length === emojiFaces.length -2) {
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
                        emoji: this.getWinningEmoji()}
            }
        })
    }

    onClickShowSolution = () => {
        this.setState((prevState) => {
            return {displayedWordArray: prevState.wordArray}
        })
    }

    getWinningEmoji = () => {
        return emojiWin[Math.floor(Math.random()*emojiWin.length)]
    }

    
    render() {
        return (
        <div>

            <DisplayWord displayedWordArray = {this.state.displayedWordArray} />
            {!this.state.gameFinished && <HintCollapsible hint = {this.state.hint} />}
            <div className = "emoji">{this.state.emoji}</div>
            <DisplayProgressBar wrongLetters={this.state.wrongLetters}/>
            <Letters guessALetter={this.guessALetter}
                     gameFinished={this.state.gameFinished} />
            <GameOverMessage gameOver = {this.state.gameOver}
                             gameWon = {this.state.gameWon}
                             onClickShowSolution={this.onClickShowSolution}
                             onClickTryAgain = {this.onClickTryAgain}/>

        </div>)
      }
    }

export default Word;