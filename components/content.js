import React, { Component } from 'react'


import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

import Styles from '../src/styles'

import { MdClear, MdArrowDropDown } from 'react-icons/md'
import { FaKey } from 'react-icons/fa'

import Fade from 'react-reveal/Fade';

import { sortByChoice } from '../lib/comparators'
import Header from '../components/header'
import Tab from '../components/tab'
import SearchBar from '../components/searchbar'
import NoPostFound from '../components/noPostFound'
import BlogPost from '../components/blogPost'
import Paginator from '../components/paginator'

class Content extends Component {
    constructor() {
        super();
        this.state = {
            activePage: 1,
            content: [],
            searchQuery: '',
            searching: false,
            dropdownActive: false,
            isAdmin: false,
            sortBy: 0, // 0 = newest, 1 = oldest, 2 = most liked
        }
        this.header = React.createRef()
        this.handlePageChange = this.handlePageChange.bind(this)
        this.scrollToHeader = this.scrollToHeader.bind(this)
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
    }
    scrollToHeader = () => {
        this.header.scrollIntoView({ behavior: "smooth" });
    }

    //TESTED
    handlePageChange(newPage) {
        this.setState({
            activePage: parseInt(newPage)
        })
        this.scrollToHeader();
    }

    async handleSearchQuery(searchQuery) {
        this.setState({
            searching: true
        })
        
        let endpoint = (searchQuery.length > 0) ? 
            "http://localhost:3000/api/post/search/" + searchQuery :
            "http://localhost:3000/api/" + ((this.props.activeTab == 0) ? 'posts' : 'projects')

        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ type: this.props.activeTab })
        });
        const json = await res.json();
        const newContent = (searchQuery.length > 0) ? json.post : ((this.props.activeTab == 0) ? json.posts : json.projects)
        this.setState({
            content: newContent,
            activePage: 1,
            searchQuery: searchQuery,
            searching: false,
        })


    }

    componentDidMount() {
        let content = this.props.content
        let isAdmin = true
        this.setState({
            content: content,
            isAdmin: isAdmin
        })
    }
    render() {
        let dropdownState = this.state.dropdownActive
        let dropdownStateClass = dropdownState ? 'dropdown-content-display' : 'dropdown-content'
        let sortState = this.state.sortBy == 0 ? 'Recent' : this.state.sortBy == 1 ? 'oldest' : 'Likes'
        let posts = this.state.content
        posts = sortByChoice(posts, this.state.sortBy)
        let blogPosts =

            <div style={Styles.blogPostsContainer}>
                {posts.slice((this.state.activePage - 1) * 3, this.state.activePage * 3).map(post => (
                    <BlogPost type={this.state.activeTab} tags={post.tags.split(',')} likes={post.likes} shortened={true} key={post.id} slug={post.slug}
                        postImg={post.img_url} title={post.title} details={post.details} date={post.date}>
                    </BlogPost>
                ))}
            </div>
        let displayContent = blogPosts
        return (
            <div ref={(el) => { this.header = el; }} style={Styles.container}>
                <style jsx>{`
    
              .dropdown-content {
                display: none;
              }
              .dropdown-content-display a {
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
              }
              .dropdown-content-display {
                display: block;
                position: absolute;
                margin-top: 8px;
                background-color: #f9f9f9;
                min-width: 150px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
              }
    
    
              .dropdown-content-display a:hover {
                background-color: whitesmoke;
    
    
              }
            `}</style>

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
                    <Tab targetPage={0} tabId='0' tabText='POSTS' isActive={this.props.activeTab == 0}></Tab>
                    <Tab targetPage={1} tabId='1' tabText='MY PROJECTS' isActive={this.props.activeTab == 1}></Tab>
                    <Tab targetPage={2} tabId='2' tabText='ABOUT ME' isActive={this.props.activeTab == 2}></Tab>
                </section>

                <section style={{
                    display: 'flex',
                    width: '90%', margin: 'auto', marginTop: 32, paddingTop: 20, marginBottom: 12, borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                }}>
                    <SearchBar activeTab={this.props.activeTab} handleSearchQuery={this.handleSearchQuery}></SearchBar>
                    <div style={{ width: '30%' }}></div>
                    <div onClick={() => this.setState({ dropdownActive: !dropdownState })}
                        style={Styles.dropdownContainer}>
                        <div id='asdasdasd' className='dropdown' style={Styles.dropdown}>
                            {'Sort by: ' + sortState}
                            <MdArrowDropDown
                                style={{
                                    marginLeft: 12, verticalAlign: 'middle',
                                    fontSize: 22,
                                }}>
                            </MdArrowDropDown>
                            <div style={{ cursor: 'pointer' }} className={dropdownStateClass}>
                                <a onClick={() => this.setState({ sortBy: 0, dropdownActive: false })}>Recent</a>
                                <a onClick={() => this.setState({ sortBy: 2, dropdownActive: false })}>Likes</a>
                            </div>
                        </div>

                    </div>
                </section>

                {
                    this.state.searchQuery.length > 0 ?
                        <Fade big>
                            <div style={{
                                width: '88%', margin: 'auto', textAlign: 'left',
                                marginTop: 12, fontFamily: 'PT Sans, serif', fontSize: 13,
                            }}>
                                {
                                    this.state.searching ?
                                        'Loading...' :
                                        <div>
                                            <a onClick={() => this.handleSearchQuery('')}
                                                style={{ cursor: 'pointer', verticalAlign: 'middle', marginRight: 3, }}>
                                                <MdClear></MdClear>
                                            </a>
                                            Showing results for:
                    <em>  {this.state.searchQuery}</em> </div>
                                }
                            </div>
                        </Fade>
                        :
                        null
                }

                <div
                    style={{ margin: 'auto', marginTop: 18, width: '90%', }}>
                </div>


                <div id='main' style={{ width: '100%', }}>
                    {
                        this.state.content.length > 0 ?
                            displayContent :
                            <NoPostFound goHome={this.handleSearchQuery} activeTab={this.props.activeTab}>
                            </NoPostFound>
                    }
                </div>



                {
                    this.state.content.length > 0 ?
                        <Paginator handlePageChange={this.handlePageChange} displayedPageRange={5}
                            activePage={this.state.activePage} pageRange={Math.ceil(posts.length / 3)}>
                        </Paginator> : null
                }
                <div style={{ margin: 'auto', textAlign: 'center' }}>
                </div>

            </div>
        )

    }
}




export default Content