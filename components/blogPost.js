import React, { Component } from 'react'

import Styles from '../src/styles'

import { FaRegHeart, FaShare, FaHeart } from 'react-icons/fa'
import { TiCalendarOutline } from 'react-icons/ti'

import Tag from '../components/tag'
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Fade from 'react-reveal/Fade';

class BlogPost extends Component {
    constructor() {
        super();
        this.state = {
            isLiked: false
        }
        this.handleLike = this.handleLike.bind(this)

    }
    async handleLike() {
        let slug = this.props.slug
        const updatePostLike = await fetch('http://localhost:3000/api/util/' + slug);
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

        const iconStyle = {
            fontSize: 20,
            verticalAlign: 'middle',
            marginRight: 6
        }
        const iconStyleColor = {
            color: 'darkred',
            cursor: 'pointer'
        }
        const likedIconStyle = {
            backgroundColor: 'red'
        }
        return (
            <Fade big>
                <div id='mainContainer' style={{ width: '100%' }}>
                    <div id='container' style={Styles.blog}>
                        <style jsx>{`
                        .blog-date {
                            text-align: right;
                            color: #cccccc;
                        }
                        .morebutton {
                            color: #58949C;
                            transition: 0.2s;
                            letter-spacing:1.4px;
                        }
                        .morebutton:hover {

                        }
                    }
                `}</style>
                        <div id='tagContainer' style={Styles.tagContainer}>
                            <Tag key='1' tagText='Computer Engineering'></Tag>
                            <Tag key='2' tagText='Working as a team'></Tag>

                            <Tag key='3' tagText='Popular'></Tag>
                            <Tag key='4' tagText='Trick'></Tag>



                        </div>
                        <div style={{ margin: 'auto' }}>
                            <img src="https://image.freepik.com/free-psd/set-digital-devices-screen-mockup_53876-76505.jpg"
                                style={Styles.blogImage} alt="Girl in a jacket" />
                        </div>
                        <h2 style={{ marginBottom: 36, padding: 8 }}>
                            <Link href={this.props.slug}>
                                <a style={Styles.blogTitle}>{this.props.title}</a>
                            </Link>
                        </h2>

                        <div style={Styles.blogText}>
                            <ReactMarkdown source={(this.props.shortened) ? this.props.details.substring(0, 240) : this.props.details} />
                        </div>
                        <div style={Styles.blogFooter}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: 8 }}>
                                    {this.state.isLiked ?
                                        <FaHeart style={{ ...iconStyle, ...iconStyleColor }}></FaHeart>:
                                        <FaRegHeart onClick={this.handleLike} style={{ ...iconStyle, ...iconStyleColor }}></FaRegHeart>

                                    }
                                    {this.state.likes}
                                </div>
                                <div style={{ marginLeft: 8, flexGrow: 1, width: '25%', }}>
                                    <FaShare style={{ ...iconStyle, ...iconStyleColor }}>
                                    </FaShare>
                                    15
                                </div>
                            </div>
                            <div style={{ width: '50%', flexGrow: 1 }} className='blog-date'>
                                <TiCalendarOutline style={iconStyle}>
                                </TiCalendarOutline>
                                {this.props.date}
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

        )
    }
}

export default BlogPost