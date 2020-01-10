import React, { Component } from 'react'
import Styles from '../src/styles'
import { FiList, FiUser, FiMap } from 'react-icons/fi'


class Tab extends Component {
    constructor() {
        super();
        this.state = {

        }
    }



    render() {

        let icon = (this.props.tabId == 0) ? <FiList></FiList> :
            (this.props.tabId == 1) ? <FiMap></FiMap> : <FiUser></FiUser>
        let tabStyle = (this.props.isActive) ? Styles.activeTab : Styles.tab
        return (
            <div style={{ padding: 6, width: '33.2%', textAlign: 'center', }}>
                                    <style jsx>{`
                    .tab {
                        border-radius:8px;

                        background-color: white;
                        transition: 0.14s;
                    }
                    .tab:hover{
                        background-color: whitesmoke;
                        cursor: pointer;
                    }
                `}</style>
                <button className='tab' onClick={() => this.props.handleTabChange(this.props.tabId)} style={tabStyle}>

                    <a style={{ padding: 0, verticalAlign: 'middle', marginRight: 8 }}>{icon}</a>
                    {this.props.tabText}
                </button>
            </div>
        )
    }
}

export default Tab