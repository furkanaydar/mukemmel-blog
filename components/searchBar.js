import React, { Component } from 'react'

import Fade from 'react-reveal/Fade';

import Styles from '../src/styles'

import { GoSearch } from 'react-icons/go'

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchQuery: ''
        }
        this.handleForm = this.handleForm.bind(this)
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
                    <input name='searchQuery' value={this.state.searchQuery}
                        onChange={this.handleForm}
                        className='search-text' style={{ marginLeft: 4, width: '80%', border: 'none' }} type='text'>
                    </input>
                    <a onClick={() => this.props.handleSearchQuery(this.state.searchQuery)}
                        style={{ width: '10%', verticalAlign: 'middle', cursor: 'pointer', float: 'right', paddingRight: 2, paddingTop: 4 }}>
                        <GoSearch></GoSearch>
                    </a>
                </div>
            </div>
        )
    }
}
export default SearchBar