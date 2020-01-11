import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Header from '../components/header'
import Styles from '../src/styles'
import BlogPost from '../components/blogPost'
import { MdChatBubbleOutline, MdKeyboardBackspace } from 'react-icons/md'
import CommentBox from '../components/commentBox'
import { FaAngleDown, FaAngleUp, } from 'react-icons/fa'
import { FiPlusCircle } from 'react-icons/fi'
import Fade from 'react-reveal/Fade';
import MakeCommentForm from '../components/makeCommentForm'
import Paginator from '../components/paginator'


class CurrentPost extends React.Component {
  constructor() {
    super();
    this.state = {
      postLikes: 0,
      showComments: false,
      showCommentForm: false,
      comments: [],
      activePage: 1
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
    this.handlePageChange = this.handlePageChange.bind(this);
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

    await fetch(`http://localhost:3000/api/post/` + this.props.post.id + '/makeComment', settings);
  }

  handleShowComments() {
    let showComments = this.state.showComments
    let showCommentForm
    if (this.state.showCommentForm && showComments)
      showCommentForm = !showCommentForm
    this.setState({
      showComments: !showComments,
      showCommentForm: showCommentForm
    })
    if (showComments)
      this.scrollToPost();
  }
  scrollToPost = () => {
    this.post.scrollIntoView({ behavior: "smooth" });
  }
  scrollToMakeComment = () => {
    this.makeComment.scrollIntoView({ behavior: "smooth" });
  }
  scrollToCommentSection = () => {
    this.commentSection.scrollIntoView({ behavior: "smooth" });
  }
  handleCommentFormShow() {
    let showCommentForm = this.state.showCommentForm
    this.setState({
      showCommentForm: !showCommentForm
    })
    if (!showCommentForm)
      this.scrollToMakeComment();
    else
      this.scrollToCommentSection();
  }
  componentDidMount() {
    this.setState({
      comments: this.props.comments

    })
  }
  handlePageChange(pageNumber) {
    this.setState({
      activePage: parseInt(pageNumber)
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
            
          `}</style>
          <div ref={(el) => { this.post = el; }} style={Styles.blogPostsContainer}>
            <BlogPost handleLike={this.handleLike} shortened={false} key={postInfo.id} likes={postInfo.likes}
              postImg={postInfo.img_url}
              slug={postInfo.slug} title={postInfo.title} details={postInfo.details} date={postInfo.date}>
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
                  <Paginator displayedPageRange={6} pageRange={Math.ceil(this.state.comments.length / 5)}
                    handlePageChange={this.handlePageChange} activePage={this.state.activePage}>

                  </Paginator>
                  {
                    this.state.comments.slice((this.state.activePage - 1) * 5, Math.min(this.state.comments.length, this.state.activePage * 5)).map((comment) => <CommentBox details={comment.details}
                      date={comment.date} owner={comment.owner}></CommentBox>)
                  }

                </div>
                <div onClick={this.handleCommentFormShow}
                  className='add-comment'
                  id='makeCommentSection' style={{ fontFamily: 'PT Sans, serif', width: '72%', margin: 'auto', marginTop: 20, textAlign: 'left' }}>
                  <a style={{ fontSize: 28, letterSpacing: 3, }}>
                    <FiPlusCircle style={{ marginRight: 8, verticalAlign: 'middle' }}></FiPlusCircle>
                  </a>
                  COMMENT
               </div>
                <div  >

                  <MakeCommentForm handleSubmit={this.postComment} visible={this.state.showCommentForm}></MakeCommentForm>
                </div>
              </Fade> :
              null
          }
          <div id='dummyDivForScroll' style={{ marginTop: 480, float: "left", clear: "both" }}
            ref={(el) => { this.makeComment = el; }}>
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
