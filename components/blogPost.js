import React, { Component } from 'react'

import Styles from '../src/styles'

import { FaRegHeart, FaShare } from 'react-icons/fa'
import { TiCalendarOutline } from 'react-icons/ti'

import Tag from '../components/tag'
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Fade from 'react-reveal/Fade';


class BlogPost extends Component {
    constructor() {
        super();
        this.state = {

        }
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
        return (
            <Fade big>
                <div style={{width:'100%'}}>
                    <div style={Styles.blog}>
                        <style jsx>{`
                    .blog-date {
                        text-align: right;
                        color: #cccccc;
                    }
                `}</style>
                        <div style={Styles.tagContainer}>
                            <Tag key='1' tagText='Computer Engineering'></Tag>
                            <Tag key='2' tagText='Working as a team'></Tag>

                            <Tag key='2' tagText='Popular'></Tag>
                            <Tag key='2' tagText='Trick'></Tag>



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
                            <ReactMarkdown source={this.props.details} />
                        </div>
                        <div style={Styles.blogFooter}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: 8 }}>
                                    <FaRegHeart style={{ ...iconStyle, ...iconStyleColor }}>
                                    </FaRegHeart>
                                    15
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