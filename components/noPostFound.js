import React, { Component } from 'react'

import { MdSmsFailed, MdClear } from 'react-icons/md'

import  Router  from 'next/router';

class NoPostFound extends Component {
    constructor() {
        super();
    }

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

            </div>
        )
    }
}
export default NoPostFound