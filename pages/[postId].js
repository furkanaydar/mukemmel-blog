import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Header from '../components/header'
import Styles from '../src/styles'
import BlogPost from '../components/blogPost'

class CurrentPost extends React.Component {
  constructor() {
    super();
    this.state = {
      postLikes: 0
    }

  }



  render() {
    const postInfo = this.props.post
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
          <div style={Styles.blogPostsContainer}>
            <BlogPost handleLike={this.handleLike} shortened={false} key={postInfo.id} likes={postInfo.likes}
              slug={postInfo.slug} title={postInfo.title} details={postInfo.details} date={postInfo.date}>
            </BlogPost>
          </div>
        </div>
      </div>
    )
  }
}

CurrentPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post[0] };
};

export default CurrentPost;
