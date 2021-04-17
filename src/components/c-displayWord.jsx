import React from 'react'

class DisplayWord extends React.Component {

    formatSingleWord = (letters, numberOfWords, id) => {
        return(
        <div className = "container-item-word" key = {id+numberOfWords.toString()}>
            {letters.map((letter, index) => {
                return (<span className = "guess-letter" key = {index+letter} >{letter}{" "}</span>)
            })
            }
        </div>
        )
    }

    formatArray = (wordArray, id) => {
        let wordArrays = wordArray.join("").split(" ").map((Array)=>{return Array.split("")}) // [["_", "_", "_", "_"]]

        return(<div className = "container-words">{wordArrays.map((array, numberOfWords) => this.formatSingleWord(array, numberOfWords, id))}</div>)
    }

    render() {
        return (<div>
    <h2 className = "displayWord">
        {this.formatArray(this.props.displayedWordArray)}
    </h2>
    </div>
    )}
  }
  
export default DisplayWord;