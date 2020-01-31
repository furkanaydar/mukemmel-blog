import React, { Component } from 'react'
import AboutMe from '../components/aboutMe'
import Header from '../components/header'
import Styles from '../src/styles'
import Tab from '../components/tab'
import LoadingSpinner from '../components/loadingAnimation';
import Sidebar from '../components/sidebar';
import absoluteUrl from 'next-absolute-url'
import Notification from '../components/emailNotif'


class AboutMePage extends Component {
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
          <Notification origin={this.props.origin}></Notification>

          <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Domine|EB+Garamond&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet" />
          <Sidebar lastComment={this.props.lastComment}
            lastCommentTitle={this.props.lastCommentTitle}
            lastCommentSlug={this.props.lastCommentSlug}
            content={this.props.posts}>
          </Sidebar>
          <div style={{ flexGrow: 9 }}>
            <div style={Styles.container}>
              <Header></Header>

              <section style={Styles.tabsSection}>
                <Tab targetPage={0} tabId='0' tabText='POSTS' isActive={false}></Tab>
                <Tab targetPage={1} tabId='1' tabText='PROJECTS' isActive={false}></Tab>
                <Tab targetPage={2} tabId='2' tabText='ABOUT ME' isActive={true}></Tab>
              </section>
              <div style={{ margin: 'auto', marginTop: 32, paddingTop: 20, marginBottom: 12, }}>

              </div>
              <div style={{ width: '92%', margin: 'auto' }}>
                <AboutMe></AboutMe>
              </div>
            </div>
          </div>
          <Notification origin={this.props.origin}></Notification>
        </div>
    )
  }

}

AboutMePage.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req)

  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res_posts = await fetch(origin + `/api/posts`);
  const json_posts = await res_posts.json();
  const lastComment = await fetch(origin + `/api/lastComment`);
  const jsonLastComment = await lastComment.json();
  const lastCommentPostSlug = await fetch(origin + `/api/post/` + jsonLastComment.lastComment.post_id + `/postSlug`);
  const jsonLastCommentPostSlug = await lastCommentPostSlug.json();
  return {
    origin: origin,
    posts: json_posts.posts, lastComment: jsonLastComment.lastComment,
    lastCommentTitle: jsonLastCommentPostSlug.postTitle, lastCommentSlug: jsonLastCommentPostSlug.postSlug
  };
};

export default AboutMePage

