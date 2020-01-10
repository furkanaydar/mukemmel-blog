import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            focused: false
        }
        this.handleSearchFocus = this.handleSearchFocus.bind(this)
    }

    handleSearchFocus() {
        let focused = this.state.focused
        this.setState({
            focused: !focused
        })
    }
    render() {
        return (
            <div>
                <style jsx>{`


                `}</style>

            </div>
        )
    }
}

export default SearchBar