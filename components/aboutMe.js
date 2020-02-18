import React, { Component } from 'react'

import Styles from '../src/styles'

import ReactMarkdown from "react-markdown";

import Fade from 'react-reveal/Fade';

import { MdMailOutline } from 'react-icons/md'
import {  FaGithubAlt, FaLinkedinIn,  } from 'react-icons/fa'


class AboutMe extends Component {
    constructor() {
        super();
        this.state = {
            modal: false
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    render() {
        const iconStyle = {
            fontSize: 20,
            verticalAlign: 'middle',
            marginRight: 6
        }
        const iconStyleColor = {
            color: 'darkred',
        }

        // main style can be changed from aboutMeContainer to blogContainer 
        return (
            <Fade big>
                <div style={{ margin: 'auto' }}>

                    <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet"></link>

                    <style jsx>{`
                        .icon {
                            color: black;
                        }
                        .icon:hover {
                            color: darkblue;
                            cursor: pointer
                        }
                        .imgClass {
                            border-right: 1px solid rgba(0, 0, 0, 0.1);
                        }
                        @media screen and (max-width: 1000px) {
                            .container{
                                flex-direction: column;
                            }
                            .p1 {
                                margin:auto;
                            }
                            .imgClass {
                                border: none;
                            }
                            .iconbox {
                                width:100%;
                            }
                        }
                        .container {
                            transition: 0.1s;
                            font-family: Gelasio, serif;
                            border: 1px solid rgba(0, 0, 0, 0.1);
                        }
                        .container:hover {
                            box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
                        }

                    `}</style>

                    <div className='container' style={{ backgroundColor: 'whitesmoke', display: 'flex', marginBottom: 24 }}>
                        <div className='imgClass' style={{ width: '36%', padding: 20, margin: 'auto' }}>
                            <div style={Styles.aboutMeImageContainer}>
                                <img src="https://pbs.twimg.com/profile_images/1229824905413365760/bC33VAbA_400x400.jpg"
                                    style={Styles.aboutMeImage} />
                            </div>
                            <section
                                className={'iconbox'}
                                style={{ border: '1px solid rgba(0, 0, 0, 0.1)', fontSize: 18, textAlign: 'center', padding: 8, marginTop: 10 }}>
                                <a title='mailing will be added.' className='icon' style={{ marginRight: 24 }}><MdMailOutline ></MdMailOutline></a>
                                <a href={'https://www.linkedin.com/in/furkan-aydar-916949173'} className='icon' style={{ marginRight: 24 }}><FaLinkedinIn  ></FaLinkedinIn></a>
                                <a href={'https://github.com/furkanaydar'} className='icon' ><FaGithubAlt ></FaGithubAlt> </a>
                            </section>
                        </div>
                        <p className={'p1'} style={{ width: '64%', padding: 20, }}>
                            <h1 style={{ letterSpacing: 2, fontWeight: 'lighter', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', }}>Who am I?</h1>
                            <p style={{ paddingLeft: 8, fontSize: 18 }}>
                                <ReactMarkdown source={require("../src/posts/about.md").default}
                                >
                                    {

                                    }
                                </ReactMarkdown>
                            </p>
                        </p>

                    </div>
                    <p className='container' style={{

                        backgroundColor: '#E1EAEF',
                        color: 'black', padding: 20
                    }}>
                        <h1 style={{ letterSpacing: 2, fontWeight: 'lighter', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', }}>Why I started this blog?</h1>
                        <p style={{ fontSize: 18, paddingLeft: 8 }}>
                            I created this blog for the contest organized by @SelmanKahya. He is a youtuber/inspiring software
                            engineer working at Uber. Creating a blog while learning NextJS was an appealing idea
                            to me. After the competition, I will keep sharing my experiences through this blog and keep
                            improving the site.
                            <br></br><br></br>
                            Please feel free to mail me, or to share your thoughts under post comments!
                        </p>
                    </p>
                </div>
            </Fade>

        )
    }
}

export default AboutMe
