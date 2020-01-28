import React from "react";
import fetch from "isomorphic-unfetch";
import Content from "../components/content";

import Styles from '../src/styles'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    }

  }

  componentDidMount() {

  }

  render() {
    return(<div style={Styles.mama}>
      <Content activeTab={0} content={this.props.posts}></Content>
      </div>
    )
  }

}

Home.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts,  };
};

export default Home;
