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

    handleSubmit() {

        this.props.handleSearchQuery(this.state.searchQuery)
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
                    <input placeholder={searchType}  name='searchQuery' value={this.state.searchQuery}
                        onChange={this.handleForm}
                        className='search-text' style={{ marginLeft: 4, width: '80%', border: 'none' }} type='text'>
                    </input>
                    <a onClick={() => this.handleSubmit()}
                        style={{ width: '10%', verticalAlign: 'middle', cursor: 'pointer', float: 'right', paddingRight: 2, paddingTop: 4 }}>
                        <GoSearch></GoSearch>
                    </a>
                </div>
            </div>
        )
    }
}
export default MySearchBar
