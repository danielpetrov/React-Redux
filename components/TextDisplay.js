import React, { Component } from 'react';

class TextDisplay extends Component {

    render() {
        return(
            <div>Text from parent: {this.props.text}</div>
        )
    }
}

export default TextDisplay;

