import React from 'react'
import Collapsible from 'react-collapsible';

class HintCollapsible extends React.Component {

render() {
    return(
        <Collapsible trigger={<div>💡 Hint</div>}>
        <p className = "hintText">{this.props.hint}</p>
      </Collapsible>
)}
}

export default HintCollapsible;