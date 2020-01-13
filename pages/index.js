import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

import Header from '../components/header'

import Styles from '../src/styles'
import Tab from '../components/tab'

import BlogPost from '../components/blogPost'
import AboutMe from "../components/aboutMe";
import Paginator from '../components/paginator'
import SearchBar from '../components/searchbar'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
      activePage: 1,
      posts: []
    }
    this.header = React.createRef()
    this.handleTabChange = this.handleTabChange.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.scrollToHeader = this.scrollToHeader.bind(this)
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
  }
  scrollToHeader = () => {
    this.header.scrollIntoView({ behavior: "smooth" });
  }
  handleTabChange(tabId) {
    this.setState({
      activeTab: tabId
    })
  }
  handlePageChange(newPage) {
    this.setState({
      activePage: parseInt(newPage)
    })
    this.scrollToHeader();
  }
  async handleSearchQuery(searchQuery) {
    const res = await fetch("http://localhost:3000/api/post/search/" + searchQuery);
    const json = await res.json();
    console.log(json)
    this.setState({
      posts: json.post
    })
  }

  componentDidMount() {
    this.setState({
      posts : this.props.posts
    })
  }
  render() {

    let posts = this.state.posts
    let blogPosts =

      <div style={Styles.blogPostsContainer}>
        {posts.slice((this.state.activePage - 1) * 3, this.state.activePage * 3).map(post => (
          <BlogPost likes={post.likes} shortened={true} key={post.id} slug={post.slug}
            postImg={post.img_url} title={post.title} details={post.details} date={post.date}>
          </BlogPost>
        ))}
      </div>
    let displayContent = (this.state.activeTab == 0) ? blogPosts : <AboutMe></AboutMe>
    return (
      <div ref={(el) => { this.header = el; }} style={Styles.container}>
        <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Domine|EB+Garamond&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet" />

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
        {
          this.state.activeTab != 2 ?

            <section className='dropdown' style={{ display: 'flex', width: '90%', margin: 'auto', marginTop: 32, }}>
              <SearchBar handleSearchQuery = {this.handleSearchQuery}></SearchBar>
              <selection style={{ width: '50%', textAlign: 'right', padding: 8 }}>
              </selection>
            </section>
            :
            null
        }
        <div id='main' style={{ width: '100%', }}>

          {displayContent}
        </div>

        {
          this.state.activeTab == 0 ?
            <Paginator handlePageChange={this.handlePageChange} displayedPageRange={5}
              activePage={this.state.activePage} pageRange={Math.ceil(posts.length / 3)}>
            </Paginator> : null
        }

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
