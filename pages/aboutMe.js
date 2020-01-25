import React, { Component } from 'react'
import AboutMe from '../components/aboutMe'
import Header from '../components/header'
import Styles from '../src/styles'
import Head from "next/head";
import Tab from '../components/tab'

class AboutMePage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div style={Styles.container}>
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
                    <Tab targetPage={0}  tabId='0' tabText='POSTS' isActive={false}></Tab>
                    <Tab targetPage={1}  tabId='1' tabText='MY PROJECTS' isActive={false}></Tab>
                    <Tab targetPage={2}  tabId='2' tabText='ABOUT ME' isActive={true}></Tab>
                </section>
                <AboutMe></AboutMe>
            </div>
        )
    }
}

export default AboutMePage