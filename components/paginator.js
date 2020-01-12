import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

class Paginator extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.props.handlePageChange(e.target.id)
    }
    render() {
        const displayedRange = this.props.displayedPageRange
        const leftCount = Math.floor(displayedRange / 2)
        const rightCount = displayedRange - leftCount - 1
        const activePage = this.props.activePage

        const minPageNumber = Math.max(1, activePage - leftCount)
        const maxPageNumber = Math.min(activePage + rightCount, this.props.pageRange)
        const numArray = Array.from(Array(maxPageNumber - minPageNumber + 1).keys())

        const listItemStyle = {
            fontFamily: 'PT Sans, serif',
            userSelect: 'none',
            margin: 5,
            fontSize: 14,
            border: 'none',
            padding: 2,
            cursor: 'pointer',
            transition:'0.6s'
        }
        const activeItemStyle = {
            fontFamily: 'PT Sans, serif',

            userSelect: 'none',
            marginRight: 5,
            fontSize: 22,
            border: 'none',
            backgroundColor: 'lightblue',
            padding: 4,
            color: 'white',
            cursor: 'pointer',
            transition:'0.6s'


        }
        return (
            <div style={{
                display: 'inline-block', margin: 'auto', width: '90%',
                textAlign: 'center', padding: 32,
            }}>
                <a style={listItemStyle}
                    onClick={this.handleClick}
                    id={1}>
                    {'<<'}
                </a>
                <a style={listItemStyle}
                    onClick={this.handleClick}
                    id={Math.max(activePage - 1, minPageNumber)}>
                    {'<'}
                </a>
                {
                    numArray.map((num) =>
                        <Fade big>
                            <a style={(num + minPageNumber == activePage) ? activeItemStyle : listItemStyle}
                                onClick={this.handleClick}
                                id={num + minPageNumber}>
                                {num + minPageNumber}
                            </a>
                        </Fade>
                    )
                }
                <a style={listItemStyle}
                    onClick={this.handleClick}
                    id={Math.min(activePage + 1, maxPageNumber)}>
                    {'>'}
                </a>
                <a style={listItemStyle}
                    onClick={this.handleClick}
                    id={this.props.pageRange}>
                    {'>>'}
                </a>
            </div>

        )
    }
}

export default Paginator