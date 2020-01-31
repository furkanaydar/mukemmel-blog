import React, { Component } from 'react'


import Styles from '../src/styles'

import { GoSearch } from 'react-icons/go'

class MySearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchQuery: ''
        }
        this.handleForm = this.handleForm.bind(this)
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

    handleSubmit(origin) {

        this.props.handleSearchQuery(this.state.searchQuery, origin)
        this.setState({
            searchQuery: ''
        })
    }
    render() {
        let searchType = (this.props.activeTab == 0) ? 'search posts...' : 'search projects...'
        return (
            <div style={Styles.searchBarContainer}>
                <style jsx>{`
                    .search-bar {
                        cursor: pointer;
                        text-decoration: none;
                    }
                    .search-text {
                        font-family: PT Sans, serif;
                    }
                    .search-text:focus {
                        outline: none;
                        border: none;
                    }

                    
                `}</style>
                <div style={Styles.searchBar}>
                    <input placeholder={searchType} name='searchQuery' value={this.state.searchQuery}
                        onChange={this.handleForm}
                        className='search-text' style={{ marginLeft: 4, width: '84%', border: 'none' }} type='text'>
                    </input>
                    <span onClick={() => this.handleSubmit(this.props.origin)}
                        style={{ borderRadius:16, cursor: 'pointer', width: '10%', background: 'rgb(197, 31, 93)', padding:4, paddingRight: 8, paddingLeft: 8, }}>
                        <a
                            style={{ color:'white', right: 0, fontSize: '1.7vh', verticalAlign: 'middle', cursor: 'pointer', }}>
                            <GoSearch></GoSearch>
                        </a>
                    </span>
                </div>
            </div>
        )
    }
}
export default MySearchBar
