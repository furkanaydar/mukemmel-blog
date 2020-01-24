import React, { Component } from 'react'
import Styles from '../../src/styles'
import BlogPost from '../../components/blogPost'

class CreatePost extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            tab: 1,
            imgurl: '',
            tagField: '',
            title: '',
            slug: '',
            tags: '',
            type: 'POST',
            isAdmin: false,
        }
        this.handleForm = this.handleForm.bind(this);
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleForm(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSelect(event) {
        this.setState({ type: event.target.value });
    }

    async handleSubmit() {
        const data = {
            details: this.state.value,
            title: this.state.title,
            slug: this.state.slug,
            img_url: this.state.imgurl,
            type: this.state.type,
            tags: this.state.tags
        }
        const settings = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        const res = await fetch(`http://localhost:3000/api/admin/createPost`, settings);
     /*   if (admin.isAdmin) {
            localStorage.setItem('isAdmin', true)
            Router.push('/')
        } */
    }

    componentDidMount() {
        this.setState({
            isAdmin: localStorage.getItem('isAdmin') ? true : false
        })
    }
    render() {
        const ReactMarkdown = require('react-markdown/with-html')

        const delimiters = [188, 13];
        const createForm =
            <div>

                <textarea name='value' onChange={this.handleForm}
                    value={this.state.value} style={Styles.createArticleTextArea} type='textarea'>
                </textarea>

                <select value={this.state.type}
                    onChange={this.handleSelect}
                    style={{ width: '60%', marginTop: 32, padding: 8, fontFamily: 'Tahoma, serif' }}>
                    <option value="POST">POST</option>
                    <option value="PROJECT">PROJECT</option>
                </select>

                <input
                    type='text'
                    name='imgurl'
                    onChange={this.handleForm}
                    value={this.state.imgurl}
                    placeholder='Image URL'
                    style={{ width: '58%', marginTop: 32, padding: 8, fontFamily: 'Tahoma, serif' }}>
                </input>

                <input
                    type='text'
                    name='title'
                    onChange={this.handleForm}
                    value={this.state.title}
                    placeholder='Title...'
                    style={{ width: '58%', marginTop: 32, padding: 8, fontFamily: 'Tahoma, serif' }}>
                </input>


                <input
                    type='text'
                    name='slug'
                    onChange={this.handleForm}
                    value={this.state.slug}
                    placeholder='Slug...'
                    style={{ width: '58%', marginTop: 32, padding: 8, fontFamily: 'Tahoma, serif' }}>
                </input>

                <input
                    type='text'
                    name='tags'
                    onChange={this.handleForm}
                    value={this.state.tags}
                    placeholder='Add tags, seperated with comma, like this...'
                    style={{ width: '58%', marginTop: 32, padding: 8, fontFamily: 'Tahoma, serif' }}>
                </input>




            </div >
        const content = this.state.tab == 1 ?
            createForm
            :
            <BlogPost type={0} likes={0} shortened={false} key={1} slug={this.state.slug}
                postImg={this.state.imgurl} title={this.state.title} details={this.state.value} date={'DATE'}>
            </BlogPost>

        const display =
            <div style={Styles.createArticleContainer}>
                <section style={{ padding: 12, marginBottom: 12, }}>
                    <button onClick={() => this.setState({ tab: 1 })} style={Styles.adminButtonStyle}> EDIT</button>
                    <button onClick={() => this.setState({ tab: 2 })} style={Styles.adminButtonStyle}> PREVIEW</button>
                </section>
                {content}
                <button onClick={this.handleSubmit} style={Styles.adminButtonStyle}> CREATE </button>
            </div>

        return (

            this.state.isAdmin ? display : 'You are not authorized.'
        )
    }
}

export default CreatePost