
import React, { Component } from 'react'
import { FaArrowCircleRight, FaWindowClose, FaRegCheckCircle } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import Fade from 'react-reveal/Fade';

class Notification extends Component {
    constructor() {
        super();
        this.state = {
            text: 0,
            closed: false,
            mail: '',
            result: '',
            loading: false,
        }
        super();
        this.close = this.close.bind(this);
        this.changeText = this.changeText.bind(this);
        this.post = this.post.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    changeText() {
        let text = this.state.text
        this.setState({
            text: text + 1
        })
    }

    handleForm(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    close() {
        this.setState({
            closed: true
        })
    }
    async post() {
        const data = {
            mail: this.state.mail
        }
        const settings = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        const res = await fetch(this.props.origin + '/api/emailList', settings);
        const json = await res.json();
        let q_result = ''
        if (json.status) {
            q_result = 'You have joined the mail list.Thank You!'
        }
        else {
            q_result = 'You are already in the mail list.'
        }
        let text = this.state.text

        this.setState({
            result: q_result,
            text: text + 1

        })
    }

    render() {
        const mailIcon =
            <div>
                <FiMail onClick={this.changeText} style={{
                    position: 'fixed', right: 20, top: 20, color: 'white',
                    borderRadius: 32, padding: 8,
                    backgroundColor: '#c51f5d', boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
                    cursor: 'pointer', verticalAlign: 'middle', fontSize: 32,
                }}>

                </FiMail>
            </div>
        const firstText =
            <Fade>
                <div>
                    Would you want to be notified about the news from the blog?
                <br></br>
                    Join the mail list!
                <FaArrowCircleRight onClick={this.changeText} style={{ verticalAlign: 'middle', marginLeft: 8, cursor: 'pointer', }}></FaArrowCircleRight>
                </div>
            </Fade>
        const secondText =
            <Fade>
                <div>
                    <span>
                        <input value={this.state.mail} onChange={this.handleForm} name='mail' placeholder={'your email'} type='text' style={{
                            outline: 'none', width: '60%', marginLeft: 14, fontFamily: 'PT Sans, serif', padding: 4, borderRadius: 6,
                            border: '2 px solid white'
                        }}></input>
                    </span>
                    <FaRegCheckCircle onClick={this.post}
                        style={{ cursor: 'pointer', fontSize: 21, marginLeft: 12, verticalAlign: 'middle' }}></FaRegCheckCircle>
                </div>
            </Fade>
        const thirdText =
            <Fade>
                <div style={{ fontFamily: 'Gelasio, serif', margin: 'auto', textAlign: 'center', fontSize: 18, }}>
                    <span>
                        {this.state.result}
                    </span>
                </div>
            </Fade>
        return (
            this.state.text == 0 ?

                mailIcon :
                <Fade>
                    <div style={{
                        display: this.state.closed ? 'none' : 'block',
                        boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
                        fontFamily: 'Gelasio, serif', backgroundColor: '#c51f5d', color: 'white', position: 'fixed', padding: 10,
                        paddingBottom: 20, paddingLeft: 14, borderRadius: 12, right: 20, top: 20, width: 420, fontSize: 14,
                    }}>
                        <div style={{ textAlign: 'right', marginBottom: 9, }}>
                            <FaWindowClose onClick={this.close} style={{ cursor: 'pointer', verticalAlign: 'middle' }}></FaWindowClose>
                        </div>
                        <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet"></link>
                        <link href="https://fonts.googleapis.com/css?family=Domine|EB+Garamond&display=swap" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet" />
                        {this.state.text == 1 ? firstText : (this.state.text == 2) ? secondText : thirdText}

                    </div>
                </Fade>
        )
    }
}

export default Notification