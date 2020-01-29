import React, { Component } from 'react'
import Styles from '../src/styles'

class Tag extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const tagStyle = Styles.tagStyle
        return (
            <a style={tagStyle}>
                <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet"/>
                 {this.props.tagText}</a>
        )
    }
}

export default Tag