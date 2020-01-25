import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Header from '../components/header'
import Styles from '../src/styles'
import BlogPost from '../components/blogPost'
import { MdChatBubbleOutline, MdKeyboardBackspace, MdHome, } from 'react-icons/md'
import CommentBox from '../components/commentBox'
import { FaAngleDown, FaAngleUp, } from 'react-icons/fa'
import { FiPlusCircle, FiArrowLeftCircle } from 'react-icons/fi'
import Fade from 'react-reveal/Fade';
import MakeCommentForm from '../components/makeCommentForm'
import Router from 'next/router'


class CurrentPost extends React.Component {
  constructor() {
    super();
    this.state = {
      postLikes: 0,
      showComments: true,
      showCommentForm: false,
      comments: [],
      activeBorder: 5
    }
    this.makeComment = React.createRef()
    this.commentSection = React.createRef()
    this.post = React.createRef()

    this.handleShowComments = this.handleShowComments.bind(this)
    this.handleCommentFormShow = this.handleCommentFormShow.bind(this)
    this.scrollToMakeComment = this.scrollToMakeComment.bind(this)
    this.scrollToPost = this.scrollToPost.bind(this);
    this.postComment = this.postComment.bind(this)
    this.pageReload = this.pageReload.bind(this);
    this.handleExpand = this.handleExpand.bind(this)
  }

  pageReload() {
    window.location.reload();
  }

  async postComment(name, details) {
    const data = {
      name: name,
      details: details,
      post_id: this.props.post.id,
    }
    const settings = {
      method: 'POST',
      body: JSON.stringify(data)
    };
    window.location.reload()
    this.scrollToCommentSection();
    await fetch(`http://localhost:3000/api/post/` + this.props.post.id + '/makeComment', settings);

  }

  handleShowComments() {
    let showComments = this.state.showComments
    let showCommentForm
    if (this.state.showCommentForm && showComments)
      showCommentForm = !showCommentForm
    this.setState({
      showComments: !showComments,
    })
    if (showComments) {
      this.setState({
        activeBorder: 5,
        showCommentForm: false
      })
      this.scrollToPost();
    }

  }
  scrollToPost = () => {
    this.post.scrollIntoView({ behavior: "smooth" });
  }
  scrollToMakeComment = () => {
    this.makeComment.scrollIntoView({ behavior: "smooth", });
  }
  scrollToCommentSection = () => {
    this.commentSection.scrollIntoView({ behavior: "smooth" });
  }
  handleCommentFormShow() {
    let showCommentForm = this.state.showCommentForm

    this.setState({
      showCommentForm: !showCommentForm,
    })
    this.scrollToMakeComment();

  }
  componentDidMount() {
    this.setState({
      comments: this.props.comments.reverse()
    })
  }
  handleExpand() {
    let activeBorder = this.state.activeBorder
    let newBorder = activeBorder == this.state.comments.length ? 5 : Math.min(activeBorder + 5, this.state.comments.length)
    this.setState({
      activeBorder: newBorder
    })
  }

  render() {
    const postInfo = this.props.post
    const comments = this.state.comments
    const showComments = 'SHOW COMMENTS (' + comments.length + ')'
    const hideComments = 'HIDE COMMENTS (' + comments.length + ')'

    return (
      <div style={Styles.container}>
        <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Domine|EB+Garamond&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />

        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header></Header>
        <div id='main' style={{ width: '100%', }}>
          <style jsx>{`
            .view-comments {
               cursor: pointer;
               text-decoration: none;
            }
            .view-comments:hover {
              text-decoration:underline;

            }
            .add-comment:hover {
              text-decoration:underline;
              cursor: pointer;
            }
            .prev {
              color:red;
            }
            .submit-button {
              cursor: pointer;
              background:none;
              transition: 0.2s;
              color:#001f3f;
          }
          .submit-button:hover {
              background-color:#001f3f;
              color: white;
          }
          .submit-button {
              outline: none;
              border: none;
          }
          .back-icon {
            background-color: none;
            color: red;
          }
          .back-icon:hover {
            background-color: lightblue;
          }
            
          `}</style>

          <div ref={(el) => { this.post = el; }} style={Styles.blogPostsContainer}>
            <div style={{ width: '90%', margin: 'auto', textAlign: 'left', }}>
              <button
                onClick={() => Router.back()}
                className='submit-button'
                style={{
                  marginTop: 32,
                  width: '18%',
                  letterSpacing: 3,
                  fontWeight: 'bolder',
                  padding: 4,
                  borderRadius: 6,
                  fontSize: 12,
                  border: '1px solid #001f3f',
                  fontFamily: 'PT Sans, serif',
                }}>
                <MdKeyboardBackspace style={{ marginRight: 10, verticalAlign: 'middle' }}></MdKeyboardBackspace>
                {'Home'}
              </button>
            </div>
            <BlogPost
              tags={postInfo.tags.split(',')}
              handleLike={this.handleLike} shortened={false}
              key={postInfo.id} likes={postInfo.likes}
              postImg={postInfo.img_url}
              slug={postInfo.slug} title={postInfo.title}
              details={postInfo.details} date={postInfo.date}>
            </BlogPost>
          </div>

          <div ref={(el) => { this.commentSection = el; }} onClick={this.handleShowComments} className='view-comments' style={{
            padding: 6, borderRadius: 8,
            fontFamily: 'PT Sans, serif', letterSpacing: 3,
            width: '48%', margin: '0 auto', textAlign: 'center', marginTop: 20
          }}>

            <a style={{ verticalAlign: 'middle', marginRight: 12 }}>
              <MdChatBubbleOutline></MdChatBubbleOutline>
            </a>
            {this.state.showComments ? hideComments : showComments}
            <a style={{ verticalAlign: 'middle', marginLeft: 12 }}>
              {this.state.showComments ?
                <FaAngleUp></FaAngleUp> :
                <FaAngleDown></FaAngleDown>
              }
            </a>

          </div>
          {
            this.state.showComments ?
              <Fade big>
                <div id='commentSection'>
                  {
                    this.state.comments.slice(0, this.state.activeBorder).map((comment, i) =>
                      <CommentBox details={comment.details}
                        id={comment.id}
                        date={comment.date} owner={comment.owner}>
                        
                      </CommentBox>)
                  }
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    onClick={this.handleExpand}
                    className='submit-button'
                    style={{
                      marginTop: 32,
                      width: '16%',
                      letterSpacing: 3,
                      fontWeight: 'bolder',
                      padding: 4,
                      borderRadius: 6,
                      fontSize: 12,
                      border: '1px solid #001f3f',
                      fontFamily: 'PT Sans, serif',
                    }}>
                    {this.state.activeBorder == this.state.comments.length ? 'COLLAPSE' : 'SEE MORE'}
                  </button>
                </div>


              </Fade> :
              null
          }
          <div onClick={this.handleCommentFormShow}
            className='add-comment'
            id='makeCommentSection' style={{ fontFamily: 'PT Sans, serif', width: '72%', margin: 'auto', textAlign: 'center', marginTop: 20 }}>
            <a style={{ fontSize: 28, letterSpacing: 3, }}>
              <FiPlusCircle style={{ marginRight: 8, verticalAlign: 'middle' }}></FiPlusCircle>
            </a>
            COMMENT
          </div>
          <div  >

            <MakeCommentForm handleSubmit={this.postComment} visible={this.state.showCommentForm}></MakeCommentForm>
          </div>
          <div ref={(el) => { this.makeComment = el; }} id='dummyDivForScroll'
            style={{ marginTop: 720, float: "left", clear: "both" }}
          >
          </div>
        </div>
      </div>
    )
  }
}

CurrentPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const comments = await fetch('http://localhost:3000/api/post/' + query.postId + '/comments')
  const json = await res.json();
  const comments_json = await comments.json();

  return { post: json.post[0], comments: comments_json['comments'] };
};





export default CurrentPost;
