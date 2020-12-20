import React from 'react'

class Word extends React.Component {
    constructor(props) {
      super(props)
      this.state = {completeWord: "", 
                    formatedWord: []}

      this.getNewWord = this.getNewWord.bind(this)
    }
    
    componentDidMount() {
        this.getNewWord()
    }

    getNewWord() {
        let newWord = "word"

        let formatedWord = newWord.split("")
                                  .map(letter => " _ ")

        this.setState(state => ({
            completeWord: newWord,
            formatedWord: formatedWord
        }))
    }
    
    updateWordArray(formattedWord, letter) {
        
    }

      render() {
        return (<h2> {this.state.formatedWord} </h2>)
      }
    }

export default Word;