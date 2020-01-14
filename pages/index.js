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

import { MdSmsFailed, MdClear } from 'react-icons/md'
import Fade from 'react-reveal/Fade';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
      activePage: 1,
      posts: [],
      projects: [], 
      searchQuery: '',
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
    this.handleSearchQuery('')
    this.setState({
      activeTab: parseInt(tabId),
      activePage: 1,
    })
  }
  handlePageChange(newPage) {
    this.setState({
      activePage: parseInt(newPage)
    })
    this.scrollToHeader();
  }
  async handleSearchQuery(searchQuery) {
    let endpoint = "http://localhost:3000/api/posts"
    if (searchQuery.length > 0)
      endpoint = "http://localhost:3000/api/post/search/" + searchQuery
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({type: this.state.activeTab})
    });
    const json = await res.json();
    this.setState({
      posts: (searchQuery.length > 0) ? json.post : json.posts,
      searchQuery: searchQuery
    })
  }

  componentDidMount() {
    this.setState({
      posts: this.props.posts,
      projects : this.props.projects,
    })
  }
  render() {
    let posts = this.state.activeTab == 0 ? this.state.posts : this.state.projects
    let blogPosts =

      <div style={Styles.blogPostsContainer}>
        {posts.slice((this.state.activePage - 1) * 3, this.state.activePage * 3).map(post => (
          <BlogPost likes={post.likes} shortened={true} key={post.id} slug={post.slug}
            postImg={post.img_url} title={post.title} details={post.details} date={post.date}>
          </BlogPost>
        ))}
      </div>
    let displayContent = (this.state.activeTab != 2) ? blogPosts : <AboutMe></AboutMe>
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
              <SearchBar activeTab={this.state.activeTab} handleSearchQuery={this.handleSearchQuery}></SearchBar>

              <selection style={{ width: '50%', textAlign: 'right', padding: 8 }}>
              </selection>
            </section>
            :
            null
        }
        {
          this.state.searchQuery.length > 0 ?
            <Fade big>
              <div style={{
                width: '88%', margin: 'auto', textAlign: 'left',
                marginTop: 12, fontFamily: 'PT Sans, serif', fontSize: 13,
              }}>
                <a onClick={() => this.handleSearchQuery('')}
                  style={{ cursor: 'pointer', verticalAlign: 'middle', marginRight: 3, }}>
                  <MdClear></MdClear>
                </a>
                Showing results for:
                <em>  {this.state.searchQuery}</em>

              </div>
            </Fade>
            :
            null
        }
        {this.state.activeTab != 2 ?
          <div
            style={{ margin: 'auto', marginTop: 18,  width: '90%', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
          </div> : null
        }
        <div id='main' style={{ width: '100%', }}>
          {this.state.posts.length > 0 ?
            displayContent :
            <div style={{
              margin: 'auto', textAlign: 'center', marginTop: 48,
              fontFamily: 'PT Sans, serif', letterSpacing: 2, fontSize: 20, fontWeight: 'lighter'
            }}>
              <a style={{ fontSize: 32 }}>
                <MdSmsFailed></MdSmsFailed>
              </a>
              <div>
                No posts found.
              </div>
              <div style={{ marginTop: 20, }}>
                <a style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => this.handleSearchQuery('')}>
                  HOME
                </a>
              </div>
            </div>
          }
        </div>

        {
          this.state.activeTab != 2 && this.state.posts.length > 0 ?
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
  return { posts: json.posts, projects: json.projects};
};

export default Home;
