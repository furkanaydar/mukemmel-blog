import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

import Header from '../components/header'

import Styles from '../src/styles'
import Tab from '../components/tab'

import BlogPost from '../components/blogPost'
import AboutMe from "../components/aboutMe";


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    }
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange(tabId) {
    this.setState({
      activeTab: tabId
    })
  }

  render() {

    let posts = this.props.posts
    let blogPosts =

      <div style={Styles.blogPostsContainer}>
        {posts.map(post => (
          <BlogPost likes={post.likes} shortened={true} key={post.id} slug={post.slug} 
              postImg={post.img_url} title={post.title} details={post.details} date={post.date}>
          </BlogPost>
        ))}
      </div>
    let displayContent = (this.state.activeTab == 0) ? blogPosts : <AboutMe></AboutMe>
    return (
      <div style={Styles.container}>
        <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Domine|EB+Garamond&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet"/>

        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />

        </Head>
        <Header></Header>
        <section style={Styles.tabsSection}>
          <Tab handleTabChange={this.handleTabChange} tabId='0' tabText='POSTS' isActive={this.state.activeTab == 0}></Tab>
          <Tab handleTabChange={this.handleTabChange} tabId='1' tabText='MY PROJECTS' isActive={this.state.activeTab == 1}></Tab>
          <Tab handleTabChange={this.handleTabChange} tabId='2' tabText='ABOUT ME' isActive={this.state.activeTab == 2}></Tab>
        </section>
        <div id='main' style={{ width: '100%', }}>

          {displayContent}
        </div>
      </div>
    )
  }
}


Home.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");

  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
