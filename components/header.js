import React, { Component } from 'react'
import Link from "next/link";
import Head from "next/head";
import { FaTwitter, FaGithubAlt, FaLinkedinIn, FaInstagram, FaKey, FaPen } from 'react-icons/fa'
import { GoSignOut } from 'react-icons/go'
import Styles from '../src/styles'
import Router from 'next/router';



class Header extends Component {
    constructor() {
        super();
        this.state = {
            isAdmin: false
        }
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    componentDidMount() {
        this.setState({
            isAdmin: localStorage.getItem('isAdmin') ? true : false
        })
    }
    handleLogOut() {
        localStorage.clear();
        Router.push('/')
        window.location.reload();
    }

    render() {

        return (
            <div style={Styles.hero}>
                <style jsx>{`
                    .icon {
                    }
                    .icon:hover {
                        color: lightgrey;
                    }
                `}</style>

                <div >
                    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100&display=swap" rel="stylesheet" />

                    <h2 style={Styles.title}>Furkan Aydar</h2>
                    <div style={Styles.linkContainer}>
                        <Link href="https://github.com/furkanaydar">
                            <a className='icon' style={{ ...Styles.socialLink, ...Styles.a }}>
                                <i className='icon'><FaGithubAlt ></FaGithubAlt></i>
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/furkan-aydar-916949173">
                            <a className='icon' style={{ ...Styles.socialLink, ...Styles.a }}>
                                <i className='icon'><FaLinkedinIn></FaLinkedinIn></i>
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/furkanaydar1">
                            <a className='icon' style={{ ...Styles.socialLink, ...Styles.a }}>
                                <i className='icon'><FaInstagram></FaInstagram></i>
                            </a>
                        </Link>
                        <Link href="https://twitter.com/furkanaydar_?lang=tr">
                            <a className='icon' style={{ ...Styles.socialLink, ...Styles.a }}>
                                <i className='icon'><FaTwitter></FaTwitter></i>
                            </a>
                        </Link>
                        {
                            this.state.isAdmin ?

                                <a onClick={this.handleLogOut} className='icon' style={{ ...Styles.socialLink, ...Styles.a }}>
                                    <i className='icon'><GoSignOut></GoSignOut></i>
                                </a>
                                :
                                <Link href="admin/admin">
                                    <a className='icon' style={{ ...Styles.socialLink, ...Styles.a }}>
                                        <i className='icon'><FaKey></FaKey></i>
                                    </a>
                                </Link>
                        }
                        {
                            this.state.isAdmin ?
                                <Link href="/admin/createPost">
                                    <a className='icon' style={{ ...Styles.socialLink, ...Styles.a }}>
                                        <i className='icon'><FaPen></FaPen></i>
                                    </a>
                                </Link> :
                                null
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default Header;