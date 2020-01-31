import React, { Component } from 'react'

import Styles from '../src/styles'

import { FaRegHeart, FaCommentAlt, FaHeart, FaFacebook, FaTwitter, FaTrash } from 'react-icons/fa'
import { TiCalendarOutline } from 'react-icons/ti'

import Tag from '../components/tag'
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import Router from 'next/router'
import absoluteUrl from 'next-absolute-url'


class BlogPost extends Component {
    constructor() {
        super();
        this.state = {
            isLiked: false,
            showComments: false,
        }
        this.handleLike = this.handleLike.bind(this)
        this.handleDeletePost = this.handleDeletePost.bind(this)

    }


    async handleLike(origin) {
        let slug = this.props.slug
        await fetch(origin + '/api/util/' + slug);
        const retrievePost = await fetch(origin + '/api/post/' + slug);
        const json = await retrievePost.json();
        this.setState({
            likes: json.post[0].likes,
            isLiked: true
        })
    }

    async handleDeletePost(origin) {
        let slug = this.props.slug
        const res = await fetch(origin + '/api/admin/deletePost/' + slug);
        const json = await res.json();
        window.location.reload();
        Router.push('/')
    }

    componentDidMount() {
        this.setState({
            likes: this.props.likes,
            isAdmin: localStorage.getItem('isAdmin')
        })
    }
    render() {
        const ReactMarkdown = require('react-markdown/with-html')
        const origin = this.props.origin

        const iconStyle = {
            fontSize: 20,
            verticalAlign: 'middle',
            marginRight: 6,
            cursor: 'pointer',
        }
        const iconStyleColorHeart = {
            color: 'darkred'
        }
        const iconStyleColorFacebook = {
            color: '#3b5998',
        }
        const iconStyleColorTwitter = {
            color: '#1dcaff'
        }

        const facebookShareButton =
            <div style={{ fontSize: 12, marginLeft: 8, flexGrow: 3 }}>
                <FaFacebook className='icon' style={{ ...iconStyle, ...iconStyleColorFacebook }}>

                </FaFacebook>

            </div>
        const twitterShareButton =
            <div style={{ fontSize: 12, marginLeft: 14, flexGrow: 3 }}>
                <FaTwitter style={{ ...iconStyle, ...iconStyleColorTwitter }}>
                </FaTwitter>

            </div>
        const cursorStyle = {
            cursor: 'pointer'
        }
        const tags = this.props.tags
        const blogContent = <ReactMarkdown escapeHtml={false}
            source={(this.props.shortened) ? this.props.details.substring(0, 240) + '...' : this.props.details} />

        const linkedBlogContent = (this.props.shortened) ?
            <div onClick={() => Router.push('/' + this.props.slug)} style={{ ...Styles.blogText, ...cursorStyle }}>
                {blogContent}
            </div> :
            <div ref={this.blogText} style={Styles.blogText}>
                {blogContent}
            </div>

        return (
            <Fade big>
                <div id='mainContainer' style={{ width: '100%' }}>
                    <style jsx>{`
                        .blog-date {
                            text-align: right;
                            color: #cccccc;
                        }
                    }
                `}</style>

                    <div id='container' style={Styles.blog}>
                        {
                            this.state.isAdmin ?
                                <div style={{ textAlign: 'right' }}>
                                    <a onClick={() => this.handleDeletePost(origin)}
                                        style={{ cursor: 'pointer', fontSize: 22, }}>
                                        <FaTrash style={{ color: 'silver' }}>
                                        </FaTrash>
                                    </a>
                                </div> : null
                        }
                        <div id='tagContainer' style={Styles.tagContainer}>
                            {this.props.tags.map((tag) => <Tag key={tag} tagText={tag}></Tag>)}

                        </div>
                        {
                            this.props.postImg ?
                                <div style={{ margin: 'auto' }}>
                                    <img src={this.props.postImg}
                                        style={Styles.blogImage} alt="Girl in a jacket" />
                                </div> : null
                        }
                        <h1 style={{ marginTop: 24, marginBottom: 36, }}>
                            <Link href={this.props.slug}>
                                <a style={Styles.blogTitle}>{this.props.title}</a>
                            </Link>
                        </h1>

                        {linkedBlogContent}
                        <div style={Styles.blogFooter}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: 8 }}>
                                    {this.state.isLiked ?
                                        <FaHeart style={{ ...iconStyle, ...iconStyleColorHeart, }}></FaHeart> :
                                        <FaRegHeart onClick={() => this.handleLike(origin)} style={{ ...iconStyle, ...iconStyleColorHeart }}></FaRegHeart>

                                    }
                                    {this.state.likes}
                                </div>
                                <FacebookShareButton
                                    url={'furkanaydar-blog.herokuapp.com/' + this.props.slug}
                                    quote={'Read ' + this.props.title + ', an article by Furkan Aydar'}
                                    children={facebookShareButton} >
                                </FacebookShareButton>
                                <TwitterShareButton title={'Read the article: ' + this.props.title
                                    + ' at furkanaydar-blog.herokuapp.com/' + this.props.slug}
                                    hashtags={tags}
                                    children={twitterShareButton} url={'furkanaydar-blog.herokuapp.com/' + this.props.slug}
                                ></TwitterShareButton>

                            </div>
                            <div style={{ flexGrow: 1 }} className='blog-date'>
                                <TiCalendarOutline style={iconStyle}>
                                </TiCalendarOutline>
                                {this.props.date.substring(0, 10)}
                            </div>
                        </div>
                    </div>

                </div>
            </Fade>

        )
    }
}

export default BlogPost