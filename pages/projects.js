import React, { Component } from 'react'
import Content from '../components/content';
import Styles from '../src/styles'
import Sidebar from '../components/sidebar'
import LoadingSpinner from '../components/loadingAnimation';
import absoluteUrl from 'next-absolute-url'
import Notification from '../components/emailNotif'
import Head from "next/head";


class Projects extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        }
    }
    componentDidMount() {
        this.setState({
            loading: false
        })
    }
    render() {
        return (
            this.state.loading ?
                <LoadingSpinner></LoadingSpinner> :
                <div style={Styles.mama}>
                    <Head>
                        <script
                            dangerouslySetInnerHTML={{
                                            __html: `if (typeof window !== "undefined") {
                    // hacky force https
                    if (window.location.protocol != "https:") {
                    window.location.href =
                        "https:" +
                        window.location.href.substring(window.location.protocol.length);
                    }
                }`
                            }}
                        />
                    </Head>

                    <Sidebar lastComment={this.props.lastComment}
                        lastCommentTitle={this.props.lastCommentTitle}
                        lastCommentSlug={this.props.lastCommentSlug}
                        content={this.props.posts}>
                    </Sidebar>
                    <div style={{ flexGrow: 9 }}>
                        <Content origin={this.props.origin} activeTab={1} content={this.props.projects}></Content>
                    </div>
                    <Notification origin={this.props.origin}></Notification>
                </div>

        )
    }
}

Projects.getInitialProps = async ({ req, query }) => {
    const { origin } = absoluteUrl(req)

    // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
    const res_posts = await fetch(origin + "/api/posts");
    const json_posts = await res_posts.json();
    const res = await fetch(origin + "/api/projects");
    const json = await res.json();
    const lastComment = await fetch(origin + '/api/lastComment');
    const jsonLastComment = await lastComment.json();
    const lastCommentPostSlug = await fetch(origin + '/api/post/' + jsonLastComment.lastComment.post_id + '/postSlug');
    const jsonLastCommentPostSlug = await lastCommentPostSlug.json();
    return {
        origin: origin, posts: json_posts.posts, projects: json.projects, lastComment: jsonLastComment.lastComment,
        lastCommentTitle: jsonLastCommentPostSlug.postTitle, lastCommentSlug: jsonLastCommentPostSlug.postSlug
    };
};

export default Projects