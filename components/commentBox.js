import React, { Component } from 'react'
import Styles from '../src/styles'
import { TiCalendarOutline } from 'react-icons/ti'
import { FiUser } from 'react-icons/fi'
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';

class CommentBox extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        const comment = this.props.details
        return (
            <div style={Styles.commentBox}>
                <div style={{ display: 'flex', padding: 8, fontSize: 16, letterSpacing: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ flexGrow: 1 }}>
                        <a style={{ verticalAlign: 'middle', marginRight: 8, }}>
                            <FiUser></FiUser>
                        </a>
                        {this.props.owner}
                    </div>
                    <div style={{ flexGrow: 1, textAlign: 'right', textAlign: 'right', }}>
                        <a style={{ verticalAlign: 'middle', marginRight: 8, }}>
                            <TiCalendarOutline></TiCalendarOutline>
                        </a>
                        {this.props.date.substring(0, 10)}
                    </div>
                </div>
                <div style={{ padding: 22, fontWeight: 'bolder' }}>
                    <ReactMarkdown source={comment}>

                    </ReactMarkdown>
                </div>
            </div>
        )
    }
}

export default CommentBox