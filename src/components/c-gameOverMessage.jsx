import React from 'react'

class GameOverMessage extends React.Component {

    state = {showSolutionDisabled: false}

    hanldeClickShowSolution = () => {
        this.props.onClickShowSolution()
        this.setState({showSolutionDisabled: true})
    }

    hanldeClickTryAgain = () => {
        this.props.onClickTryAgain()
    }

    render() {
        return (
        <div>
            {this.props.gameOver && <span>
            <h2>
                Game over!
            </h2>
            <button onClick={this.hanldeClickShowSolution} disabled = {this.state.showSolutionDisabled}>View solution</button>
            <button onClick={this.hanldeClickTryAgain}>New word</button>
            </span> }
            {this.props.gameWon && <span>
            <h2>
                You win!
            </h2>
            <button>New word</button> </span> }
        </div>
    )}

}

export default GameOverMessage; 