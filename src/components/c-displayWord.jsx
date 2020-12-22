import React from 'react'

class DisplayWord extends React.Component {
    
    formatWord = (string) => {
        return(
            string.map((letter, index) => {
                if(letter === " ") { 
                    return (<span key = {index}>&nbsp;</span>)
                } else if (letter === "_") {
                    return (<span key = {index}>{letter}{" "}</span>)
                } else {
                    return (<span key = {index}>{letter}{" "}</span>)
                }
            })
            )
    }

    render() {
        return (
    <h2 className = "displayWord">
        {this.formatWord(this.props.displayedWordArray)}
    </h2>
    )}
  }
  
export default DisplayWord;