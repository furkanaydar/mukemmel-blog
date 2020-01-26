import React, {Component} from 'react'
import Content from '../components/content';

class Projects extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <Content activeTab={1} content={this.props.projects} >

            </Content>
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