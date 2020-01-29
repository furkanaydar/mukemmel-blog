import React, { Component } from 'react'
import Content from '../components/content';
import Styles from '../src/styles'
import Sidebar from '../components/sidebar'

class Projects extends Component {
    constructor() {
        super();
        this.state = {

        }
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
                    <Content activeTab={1} content={this.props.projects}></Content>
                </div>
            </div>

        )
    }
}

Projects.getInitialProps = async ({ req, query }) => {
    // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
    const res = await fetch("http://localhost:3000/api/projects");
    const json = await res.json();
    return { projects: json.projects };
};

export default Projects