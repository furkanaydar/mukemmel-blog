import React, { Component } from 'react'
import Content from '../components/content';
import Styles from '../src/styles'
import Sidebar from '../components/sidebar'
import LoadingSpinner from '../components/loadingAnimation';

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
                        <Content activeTab={1} content={this.props.projects}></Content>
                    </div>
                </div>

        )
    }
}

Projects.getInitialProps = async ({ req, query }) => {
    // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
    const res_posts = await fetch(process.env.protocol + "://" + process.env.host + "/api/posts");
    const json_posts = await res_posts.json();
    const res = await fetch(process.env.protocol + "://" + process.env.host + "/api/projects");
    const json = await res.json();
    const lastComment = await fetch(process.env.protocol + '://' + process.env.host + '/api/lastComment');
    const jsonLastComment = await lastComment.json();
    const lastCommentPostSlug = await fetch(process.env.protocol + '://' + process.env.host + '/api/post/' + jsonLastComment.lastComment.post_id + '/postSlug');
    const jsonLastCommentPostSlug = await lastCommentPostSlug.json();
    return { posts: json_posts.posts,  projects: json.projects, lastComment: jsonLastComment.lastComment, 
        lastCommentTitle: jsonLastCommentPostSlug.postTitle, lastCommentSlug: jsonLastCommentPostSlug.postSlug };
};

export default Projects