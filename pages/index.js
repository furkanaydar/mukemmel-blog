import React from "react";
import fetch from "isomorphic-unfetch";
import Content from "../components/content";

import Styles from '../src/styles'

import { GiSmallFire } from 'react-icons/gi'
import { FaHashtag, FaRegComments} from 'react-icons/fa'

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
        <style jsx>{`     
            .trending {
                cursor: pointer;
                letter-spacing: 1.4px;
                margin-bottom: 16px;
            }
            .trending:hover {
                text-decoration: underline;
            }
          `}
        </style>
        <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Domine|EB+Garamond&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet" />

        <div style={{
          textAlign: 'center', fontFamily: 'Gelasio, serif', flexGrow: 1,
          paddingRight: 18, paddingLeft:18,  paddingTop: 18, borderRight: '1px solid rgba(0, 0, 0, 0.1)', marginTop: 84, fontSize: 14,
        }}>

          <h3 style={{ border: '1.6px solid lightblue', padding: 3, borderRadius: 12, paddingTop: 8, paddingBottom: 8, }}>
            <GiSmallFire style={{ marginRight: 6, }}></GiSmallFire>
            Popular Topics
          </h3>
          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>COMPUTER SCIENCE</div>
          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>SPORTS</div>

          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>MACHINE LEARNING</div>
          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>JAVASCRIPT</div>
          
          <h3 style={{marginTop:124, border: '1.6px solid lightgrey', padding: 3, borderRadius: 12, paddingTop: 8, paddingBottom: 8, }}>
            <FaRegComments style={{verticalAlign:'middle', marginRight: 6, }}></FaRegComments>
            Recent Comments
          </h3>
          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>COMPUTER SCIENCE</div>
          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>SPORTS</div>

          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>MACHINE LEARNING</div>
          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>JAVASCRIPT</div>

          <h3 style={{marginTop:124, border: '1.4px solid navy', padding: 3, borderRadius: 12, paddingTop: 8, paddingBottom: 8, }}>
            <GiSmallFire style={{ marginRight: 6, }}></GiSmallFire>
            Popular Posts
          </h3>
          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>COMPUTER SCIENCE</div>
          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>SPORTS</div>

          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>MACHINE LEARNING</div>
          <div className={'trending'}><FaHashtag style={{ marginRight: 3 }}></FaHashtag>JAVASCRIPT</div>

        </div>
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
