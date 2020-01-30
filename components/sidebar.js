import React, { Component } from 'react'

import Styles from '../src/styles'
import { sortByChoice } from '../lib/comparators'

import { GiSmallFire } from 'react-icons/gi'
import { FaHashtag, FaRegComments, FaLinkedinIn, FaGithubAlt, FaInstagram, FaTwitter } from 'react-icons/fa'
import { AiFillTag } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'

import Link from "next/link";
import  Router  from 'next/router'


class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {

    }
    render() {
        const ReactMarkdown = require('react-markdown')
        let posts = sortByChoice(this.props.content.slice(0, 5), 2)

        return (


            <div className={'sidebar'} style={{
                height: '80%',
                minWidth: '20%',
                maxWidth: '20%',
                textAlign: 'center', fontFamily: 'Gelasio, serif', flexGrow: 1,
                paddingRight: 36, paddingLeft: 18, paddingTop: 18, borderRight: '1px solid rgba(0, 0, 0, 0.1)', marginTop: 64, fontSize: 14,
                fontWeight: 'lighter',
            }}>
                <style jsx>{`     
                    .trending {
                        cursor: pointer;
                        margin-bottom: 16px;
                        border-radius:10px;
                        padding: 1vh;
                        text-align: center;
                        text-transform: lowercase;
                        overflow: hidden;
                        font-size:14px;
                    }
                    .trending:hover {
                        text-decoration: underline;
                    }
                    .sidebar {
                    position: -webkit-sticky;
                    position: sticky;
                    top: 0;
                    }
                `}
                </style>
                <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />


                <div style={{ width: '80%', color: '#00264d', margin: 'auto', marginTop: 84, }}>

                    <h3 style={{ borderBottom: '1px solid #000d1a', padding: 3, fontSize: 20, borderRadius: 2, paddingTop: 8, paddingBottom: 8, }}>
                        <GiSmallFire style={{ marginRight: 6, }}></GiSmallFire>
                        Popular Topics
                </h3>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}>
                        <FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>COMPUTER SCIENCE</div>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}>
                        <FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>Java</div>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}>
                        <FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>Javascript</div>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}>
                        <FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>Skateboaasdasdrding</div>


                </div>
                <div style={{ width: '94%', color: '#00264d', margin: 'auto' }}>
                    <h3 style={{ borderBottom: '1px solid #00264d', marginTop: 124, fontSize: 20, padding: 3, borderRadius: 2, paddingTop: 8, paddingBottom: 8, }}>
                        <FaRegComments style={{ verticalAlign: 'middle', marginRight: 6, }}></FaRegComments>
                        Last Comment
                    </h3>
                    <div style={{ width: '88%', margin: 'auto' }}>

                        <div style={{
                            margin: '1.5em 10px', borderRadius: 8, borderBottom: '2px solid #b0bdd1',
                            padding: '0.1vw', borderTop: '2px solid #b0bdd1', paddingRight: 6, paddingLeft: 6,
                        }}>
                            <p style={{
                                borderRadius: 10, fontWeight: 'lighter', fontFamily: 'PT Sans, serif', fontSize: '13px',
                                lineHeight: 1.8,
                            }}>
                                "{this.props.lastComment.details.substring(0, 210)}
                                {this.props.lastComment.details.length > 210 ? '...' : null}
                                "
                                <p style={{ padding: 2, textAlign: 'center', fontSize: '11.5px' }}>
                                    <FiUser style={{ marginRight: 4, verticalAlign: 'middle' }}></FiUser>
                                    {this.props.lastComment.owner}
                                </p>
                            </p>

                        </div>
                        <p>
                            {'From '}
                            <Link href={this.props.lastCommentSlug}>
                                <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                    {this.props.lastCommentTitle}
                                </span>
                            </Link>
                        </p>
                    </div>

                </div>
                <div style={{ width: '80%', color: '#00264d', margin: 'auto' }} >
                    <h3 style={{ marginTop: 124, borderBottom: '1px solid #00264d', fontSize: 20, padding: 3, borderRadius: 2, paddingTop: 8, paddingBottom: 8, }}>
                        <GiSmallFire style={{ marginRight: 6, }}></GiSmallFire>
                        Popular Posts
                    </h3>
                    {
                        posts.map((post) =>
                            <div onClick={() => Router.push('/'+post.slug)} style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}>
                                {post.title}
                            </div>
                        )
                    }
                </div>
            </div>

        )
    }
}



export default Sidebar