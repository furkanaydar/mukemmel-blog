import React, { Component } from 'react'
import Styles from '../src/styles'
import { TiCalendarOutline } from 'react-icons/ti'
import { FiUser } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';

class CommentBox extends Component {
    constructor() {
        super();
        this.state = {
            isAdmin: false
        }
        this.handleDeleteComment = this.handleDeleteComment.bind(this)
    }

    componentDidMount() {
        this.setState({
            isAdmin: localStorage.getItem('isAdmin')
        })
    }

    async handleDeleteComment() {
        if(!this.state.isAdmin) {
            alert('You are not authorized.')
            return;
        }
        const res = await fetch(`http://localhost:3000/api/admin/deleteComment/` + this.props.id);
        const json = await res.json();
        window.location.reload();
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
                {
                    
                }
                {
                    this.state.isAdmin ?
                        <div style={{ textAlign: 'right' }}>
                            <a onClick={this.handleDeleteComment}
                                style={{ verticalAlign: 'middle', marginRight: 20, cursor: 'pointer', fontSize: 22, }}>
                                <FaTrash style={{ color: 'silver' }}>
                                </FaTrash>
                            </a>
                        </div> : null
                }
                
            </div>
        )
    }
}

export default CommentBox