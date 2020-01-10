import React, { Component } from 'react'
import Link from "next/link";
import Head from "next/head";
import { FaTwitter, FaGithubAlt, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import Styles from '../src/styles'



class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;