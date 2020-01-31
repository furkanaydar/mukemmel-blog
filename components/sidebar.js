import React, { Component } from 'react'

import Styles from '../src/styles'
import { sortByChoice } from '../lib/comparators'

import { GiSmallFire } from 'react-icons/gi'
import { FaFacebookF, FaHashtag, FaRegComments, FaLinkedinIn, FaGithubAlt, FaInstagram, FaTwitter, FaHome } from 'react-icons/fa'
import { AiFillTag, AiOutlineHome } from 'react-icons/ai'
import { FiUser, FiHome } from 'react-icons/fi'

import Link from "next/link";
import Router from 'next/router'
import { FacebookShareButton, TwitterShareButton } from 'react-share'


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
                height: '90%',
                minWidth: '22%',
                maxWidth: '22%',
                textAlign: 'center', fontFamily: 'Gelasio, serif', flexGrow: 1,
                paddingRight: 36, paddingLeft: 18, paddingTop: 18, borderRight: '1px solid rgba(0, 0, 0, 0.1)', marginTop: 64, fontSize: 14,
                fontWeight: 'lighter',
            }}>
                <style jsx>{`   
                    .buttonsSection {
                        display: flex;
                        margin-bottom: 6vw;
                    }
                    .home, .face, .twitter {
                        cursor: pointer;
                        font-size: 24px;
                        border-radius: 28px;
                        padding: 10px;
                        color: white;
                        padding-right: 12px;
                        padding-left: 12px;
                    }  
                    .home {
                        background:#ebb8a7;
                    }
                    .face {
                        background: #3b5998;
                    }
                    .twitter {
                        background: rgb(29, 202, 255);
                    }
                    .home, .face, .twitter:hover {

                    }
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

                    @media screen and (max-width: 1000px) {
                        .buttonsSection {
                            flex-direction: column;
                            padding: 12px;
                        }
                        .sidebar {
                            display: none;
                        }
                    }
                `}
                </style>
                <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <div style={{ width: '80%', color: '#00264d', margin: 'auto', marginTop: 84, }}>
                    <section className={'buttonsSection'}>

                        <a onClick={() => Router.push('/')}
                            title={'Go Home.'} className={'home'} style={{ margin: 'auto', marginBottom: 5 }}>
                            <AiOutlineHome style={{ verticalAlign: 'middle' }}></AiOutlineHome>
                        </a>

                        <a title={'Share the blog.'} className={'face'} style={{ margin: 'auto', marginBottom: 5 }}>
                            <FacebookShareButton
                                quote={'Visit the blog of @furkanaydar'}
                                children={
                                    <FaFacebookF style={{ verticalAlign: 'middle' }}></FaFacebookF>
                                }
                                url='furkanaydar-blog.herokuapp.com'>
                            </FacebookShareButton>
                        </a>

                        <a title={'Share the blog.'} className={'twitter'} style={{ margin: 'auto', marginBottom: 5 }}>
                            <TwitterShareButton title={'Visit the blog of @furkanaydar, furkanaydar-blog.herokuapp.com'}
                                children={
                                    <FaTwitter style={{ verticalAlign: 'middle' }}>

                                    </FaTwitter>}
                                url='google.com'>

                            </TwitterShareButton>

                        </a>
                    </section>
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
                            <div onClick={() => Router.push('/' + post.slug)} style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}>
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