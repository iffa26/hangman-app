import React from 'react'

class DisplayWord extends React.Component {

    formatSingleWord = (letters) => {
        return(
        <div className = "container-item-word" key = {letters}>
            {letters.map((letter, index) => {
                return (<span key = {index+letter} >{letter}{" "}</span>)
            })
            }
        </div>
        )
    }

    formatArray = (wordArray) => {
        console.log("1",wordArray) // ["_", "_", "_", "_"]
        if(wordArray.length > 1) {
        let wordArrays = wordArray.join("").split(" ").map((Array)=>{return Array.split("")}) // [["_", "_", "_", "_"]]
        console.log("2",wordArrays)

        return(<div className = "container-words">{wordArrays.map(array => this.formatSingleWord(array))}</div>)
        
        }
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