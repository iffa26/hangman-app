import React from 'react'

class HintCard extends React.Component {
    
    state = {showHintButton: true}

    getHint = () => {
        this.setState({showHintButton: false})
    }
    
    render() {
        return (
            <div>
                {this.state.showHintButton && 
                <button onClick = {this.getHint} >💡 View hint </button>}
                
                {!this.state.showHintButton && 
                <p> 💡 its a word </p>}
            </div>
        )}
}
  
export default HintCard;