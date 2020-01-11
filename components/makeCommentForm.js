import React, { Component } from 'react'
import Styles from '../src/styles'
import Flash from 'react-reveal/Fade';

class MakeCommentForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            details: '',
        }
        this.handleForm = this.handleForm.bind(this)
    }

    handleForm(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        const extraStyles = {
            width: '54%'
        }
        return (

            this.props.visible ?
                <Flash>
                    <div style={{ ...Styles.blog, ...extraStyles }}>
                        <style jsx>{`
                            .comment-text {

                            }
                            .comment-text:focus {
                                outline: none;
                            }
                            .comment-text:active {
                                outline: none;
                            }
                            .submit-button {
                                cursor: pointer;
                                background:none;
                                transition: 0.2s;
                                color:#001f3f;
                            }
                            .submit-button:hover {
                                background-color:#001f3f;
                                color: white;
                            }
                        `}</style>
                        <div style={{ marginBottom: 12, padding: 4 }}>
                            <input
                                type='text'
                                name='name'
                                onChange={this.handleForm}
                                value={this.state.name}
                                placeholder='Your name...'
                                style={{
                                    width: '80%',
                                    backgroundColor: 'whitesmoke', borderRadius: 8,
                                    border: 'none', boxShadow: 'none', outline: 'none',
                                    padding: 12,
                                    marginBottom: 20,
                                }}>

                            </input>
                            <textarea
                                name='details'
                                onChange={this.handleForm}
                                value={this.state.details}
                                placeholder='Your thoughts...'
                                className='comment-text'
                                rows='6'
                                style={{
                                    width: '80%',
                                    resize: 'none',
                                    letterSpacing: 1.4,
                                    backgroundColor: 'whitesmoke', borderRadius: 8,
                                    boxShadow: 'none',
                                    padding: 12
                                }}

                            >
                            </textarea>
                            <button
                                onClick={() => this.props.handleSubmit(this.state.name, this.state.details)}
                                className='submit-button'
                                style={{
                                    marginTop: 32,
                                    width: '20%',
                                    letterSpacing: 3,
                                    fontWeight: 'bolder',
                                    padding: 4,
                                    borderRadius: 6,
                                    fontSize: 14,
                                    border: '1px solid #001f3f',
                                    fontFamily: 'PT Sans, serif',
                                }}>
                                SUBMIT
                                </button>
                        </div>
                    </div>
                </Flash>
                : null


        )
    }
}


export default MakeCommentForm