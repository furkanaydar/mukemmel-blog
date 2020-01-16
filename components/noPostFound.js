import React, { Component } from 'react'

import { MdSmsFailed, MdClear } from 'react-icons/md'


class NoPostFound extends Component {

    render() {
        return (
            <div style={{
                margin: 'auto', textAlign: 'center', marginTop: 48,
                fontFamily: 'PT Sans, serif', letterSpacing: 2, fontSize: 20, fontWeight: 'lighter'
            }}>
                <a style={{ fontSize: 32 }}>
                    <MdSmsFailed></MdSmsFailed>
                </a>
                <div>
                    No posts found.
                  </div>
                <div style={{ marginTop: 20, }}>
                    <a style={{ cursor: 'pointer', textDecoration: 'underline' }} 
                    onClick={() => this.props.handleTabChange(this.props.activeTab)}>
                        HOME
                    </a>
                </div>
            </div>
        )
    }
}
export default NoPostFound