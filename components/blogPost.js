import React, { Component } from 'react'

import Styles from '../src/styles'

import { FaRegHeart, FaCommentAlt, FaHeart, FaFacebook, FaTwitter, } from 'react-icons/fa'
import { TiCalendarOutline } from 'react-icons/ti'

import Tag from '../components/tag'
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import { FacebookShareButton, TwitterShareButton } from 'react-share'

class BlogPost extends Component {
    constructor() {
        super();
        this.state = {
            isLiked: false,
            showComments: false
        }
        this.handleLike = this.handleLike.bind(this)
    }

    async handleLike() {
        let slug = this.props.slug
        await fetch('http://localhost:3000/api/util/' + slug);
        const retrievePost = await fetch('http://localhost:3000/api/post/' + slug);
        const json = await retrievePost.json();
        this.setState({
            likes: json.post[0].likes,
            isLiked: true
        })
    }
    componentDidMount() {
        this.setState({
            likes: this.props.likes
        })
    }
    render() {
        const ReactMarkdown = require('react-markdown/with-html')
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
                <FaFacebook className='icon' onClick={this.handleShareModal} style={{ ...iconStyle, ...iconStyleColorFacebook }}>

                </FaFacebook>

            </div>
        const twitterShareButton =
            <div style={{ fontSize: 12, marginLeft: 14, flexGrow: 3 }}>
                <FaTwitter onClick={this.handleShareModal} style={{ ...iconStyle, ...iconStyleColorTwitter }}>
                </FaTwitter>

            </div>
        const tags = ['engineering', 'science']
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

                        <div id='tagContainer' style={Styles.tagContainer}>
                            <Tag key='1' tagText='Computer Engineering'></Tag>
                            <Tag key='2' tagText='Working as a team'></Tag>

                            <Tag key='3' tagText='Popular'></Tag>
                            <Tag key='4' tagText='Trick'></Tag>
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

                        <div style={Styles.blogText}>
                            <ReactMarkdown escapeHtml={false}
                                source={(this.props.shortened) ? this.props.details.substring(0, 240) : this.props.details} />
                        </div>
                        <div style={Styles.blogFooter}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: 8 }}>
                                    {this.state.isLiked ?
                                        <FaHeart style={{ ...iconStyle, ...iconStyleColorHeart, }}></FaHeart> :
                                        <FaRegHeart onClick={this.handleLike} style={{ ...iconStyle, ...iconStyleColorHeart }}></FaRegHeart>

                                    }
                                    {this.state.likes}
                                </div>
                                <FacebookShareButton
                                    quote={'Read ' + this.props.title + ', an article by Furkan Aydar'}
                                    children={facebookShareButton} url='google.com'>
                                </FacebookShareButton>
                                <TwitterShareButton title={'Read the article: ' + this.props.title}
                                    via='furkanaydar.com'
                                    hashtags={tags}
                                    children={twitterShareButton} url='google.com'></TwitterShareButton>

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