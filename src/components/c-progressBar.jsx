import React from 'react'
import {ProgressBar} from 'react-bootstrap'


class DisplayProgressBar extends React.Component {

    progress = (x) => {
        let percent = (x.length/7)*100
        return percent
    }

    render() {

    return(
        <div>
            <ProgressBar animated now={this.progress(this.props.wrongLetters)} />
        </div>
    )}
}

export default DisplayProgressBar;