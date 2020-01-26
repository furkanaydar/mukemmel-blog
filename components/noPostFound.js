import React, { Component } from 'react'

import { MdSmsFailed, MdClear } from 'react-icons/md'

import Link from "next/link";

class NoPostFound extends Component {
    constructor() {
        super();
    }

    render() {
        let goTo = this.props.activeTab == 0 ? '' : 'projects'
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

                    <a onClick={() => this.props.goHome('')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                        HOME
                    </a>

                </div>
            </div>
        )
    }
}
export default NoPostFound