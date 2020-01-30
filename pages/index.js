import React from "react";
import fetch from "isomorphic-unfetch";
import Content from "../components/content";

import Styles from '../src/styles'

import { GiSmallFire } from 'react-icons/gi'
import { FaHashtag, FaRegComments } from 'react-icons/fa'
import { AiFillTag } from 'react-icons/ai'

import Sidebar from '../components/sidebar'
import LoadingSpinner from "../components/loadingAnimation";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }

  }

  componentDidMount() {
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      
        this.state.loading ? <LoadingSpinner></LoadingSpinner> :
          <div style={Styles.mama}>
            <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Domine|EB+Garamond&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet" />

            <Sidebar lastComment={this.props.lastComment} 
            lastCommentTitle={this.props.lastCommentTitle}
            lastCommentSlug={this.props.lastCommentSlug}></Sidebar>

            <div style={{ flexGrow: 10 }}>
              <Content isLoading={this.state.loading} activeTab={0} content={this.props.posts}></Content>
            </div>

          </div>
      
    )
  }

}

Home.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  const lastComment = await fetch('http://localhost:3000/api/lastComment');
  const jsonLastComment = await lastComment.json();
  const lastCommentPostSlug = await fetch('http://localhost:3000/api/post/' + jsonLastComment.lastComment.post_id + '/postSlug');
  const jsonLastCommentPostSlug = await lastCommentPostSlug.json();
  console.log(jsonLastCommentPostSlug)
  return { posts: json.posts, lastComment: jsonLastComment.lastComment, lastCommentTitle: jsonLastCommentPostSlug.postTitle, 
    lastCommentSlug: jsonLastCommentPostSlug.postSlug };
};

export default Home;
