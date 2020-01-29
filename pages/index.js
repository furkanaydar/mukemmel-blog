import React from "react";
import fetch from "isomorphic-unfetch";
import Content from "../components/content";

import Styles from '../src/styles'

import { GiSmallFire } from 'react-icons/gi'
import { FaHashtag, FaRegComments } from 'react-icons/fa'
import {AiFillTag} from 'react-icons/ai'

import Sidebar from '../components/sidebar'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    }

  }

  componentDidMount() {

  }

  render() {
    return (
      <div style={Styles.mama}>

        <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Domine|EB+Garamond&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet" />
        <Sidebar></Sidebar>
        <div style={{ flexGrow: 9 }}>
          <Content activeTab={0} content={this.props.posts}></Content>
        </div>
      </div>
    )
  }

}

Home.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts, };
};

export default Home;
