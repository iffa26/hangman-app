import React from 'react'
import Collapsible from 'react-collapsible';

class HintCollapsible extends React.Component {

render() {
    return(
        <Collapsible trigger={<h5 className = "hintHeader">💡 Hint</h5>}>
        <p className = "hintText">{this.props.hint}</p>
      </Collapsible>
)}
}

export default HintCollapsible;