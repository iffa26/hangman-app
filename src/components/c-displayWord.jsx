import React from 'react'

class DisplayWord extends React.Component {
    
    formatWord = (string) => {
        return(
            string.map((letter, index) => {
                if(letter === " ") { 
                    return (<span key = {index}>&nbsp;&nbsp;</span>)
                } else if (letter === "_") {
                    return (<span key = {index}>{letter}&nbsp;</span>)
                } else {
                    return (<span key = {index}>{letter}</span>)
                }
            })
            )
    }

    render() {
        return (
    <h2>
        {this.formatWord(this.props.displayedWordArray)}
    </h2>
    )}
  }
  
export default DisplayWord;