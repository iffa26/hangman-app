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
            <h2>
                Game over :(
            </h2>
            <button onClick={this.hanldeClickShowSolution} disabled = {this.state.showSolutionDisabled}>View solution</button>
            <button onClick={this.hanldeClickTryAgain}>Try again</button>
            <button>New word</button>
        </div>
    )}

}

export default GameOverMessage; 