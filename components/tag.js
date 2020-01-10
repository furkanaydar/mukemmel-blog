import React, { Component } from 'react'

class Tag extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const tagStyle = {
            fontFamily: 'PT Sans, serif',
            textTransform: 'uppercase',
            letterSpacing: 4,
            fontSize: '12px',
            background: '#eee',
            borderRadius: '3px 0 0 3px',
            color: '#999',
            paddingLeft:12,
            paddingRight:12,
            display: 'inline-block',
            height: '26px',
            lineHeight: '26px',
            position: 'relative',
            margin: '0 10px 10px 0',
            textDecoration: 'none',
            boxShadow: '0px 0px 2px rgba(0,0,0,0.14)',
            cursor: 'default'
        }
        return (
            <a style={tagStyle}>
                <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet"/>
                 {this.props.tagText}</a>
        )
    }
}

export default Tag