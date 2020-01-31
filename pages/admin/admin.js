import React, { Component } from 'react'
import Styles from '../../src/styles'
import { MdHome } from 'react-icons/md'
import Router from 'next/router'
import absoluteUrl from 'next-absolute-url'


class Admin extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pass: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleForm = this.handleForm.bind(this)
    }

    async handleLogin() {
        const { origin } = this.props.origin

        const data = {
            username: this.state.username,
            pass: this.state.pass
        }
        const settings = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        const res = await fetch(origin + '/api/admin/login', settings);
        const admin = await res.json();
        if(admin.isAdmin) {
            localStorage.setItem('isAdmin', true)
            Router.push('/')
        }
    }

    handleForm(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div style={Styles.adminLoginContainer}>
                <MdHome style={{ fontSize: 32, cursor: 'pointer' }}></MdHome>
                <h1 style={{
                    marginBottom: 48, padding: 12, fontWeight: 'lighter', letterSpacing: 2,
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                }}>
                    ADMIN PANEL
                </h1>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    onChange={this.handleForm}
                    value={this.state.username}
                    style={Styles.inputField}>
                </input>
                <input
                    type='text'
                    name='pass'
                    onChange={this.handleForm}
                    value={this.state.pass}
                    placeholder='Password'
                    style={Styles.inputField}>
                </input>
                <button
                    onClick={this.handleLogin}
                    style={Styles.adminButtonStyle}>
                    LOGIN
                </button>
            </div>

        )
    }
}

Admin.getInitialProps = async ({ req, query }) => {
    const { origin } = absoluteUrl(req)
  
    // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin

  
    return {
      origin: origin,

    };
  };

export default Admin