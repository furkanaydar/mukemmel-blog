import React, { Component } from 'react'

import Styles from '../src/styles'

import { GiSmallFire } from 'react-icons/gi'
import { FaHashtag, FaRegComments } from 'react-icons/fa'
import { AiFillTag } from 'react-icons/ai'

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (


            <div className={'sidebar'} style={{
                height: '100%',
                minWidth: '16%',
                textAlign: 'center', fontFamily: 'Gelasio, serif', flexGrow: 1,
                paddingRight: 36, paddingLeft: 18, paddingTop: 18, borderRight: '1px solid rgba(0, 0, 0, 0.1)', marginTop: 64, fontSize: 14,
                fontWeight: 'lighter',
            }}>
                <style jsx>{`     
                    .trending {
                        cursor: pointer;
                        margin-bottom: 16px;
                        border-radius:10px;
                        padding: 1vh;
                        text-align: center;
                        text-transform: lowercase;
                        overflow: hidden;
                        font-size:14px;
                    }
                    .trending:hover {
                        text-decoration: underline;
                    }
                    .sidebar {
                    position: -webkit-sticky;
                    position: sticky;
                    top: 0;
                    }
                `}
                </style>


                <div style={{ width: '80%', color: '#00264d', margin: 'auto', marginTop: 84, }}>
                    <h3 style={{ borderBottom: '1px solid #000d1a', padding: 3, fontSize: 20, borderRadius: 2, paddingTop: 8, paddingBottom: 8, }}>
                        <GiSmallFire style={{ marginRight: 6, }}></GiSmallFire>
                        Popular Topics
                </h3>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}>
                        <FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>COMPUTER SCIENCE</div>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}>
                        <FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>Java</div>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}>
                        <FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>Javascript</div>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}>
                        <FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>Skateboaasdasdrding</div>


                </div>
                <div style={{ width: '80%', color: '#00264d', margin: 'auto' }}>
                    <h3 style={{ borderBottom: '1px solid #00264d', marginTop: 124, fontSize: 20, padding: 3, borderRadius: 2, paddingTop: 8, paddingBottom: 8, }}>
                        <FaRegComments style={{ verticalAlign: 'middle', marginRight: 6, }}></FaRegComments>
                        Last Comment
                </h3>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}><FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>COMPUTER SCIENCE</div>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}><FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>SPORTS</div>


                </div>
                <div style={{ width: '80%', color: '#00264d', margin: 'auto' }} >
                    <h3 style={{ marginTop: 124, borderBottom: '1px solid #00264d', fontSize: 20, padding: 3, borderRadius: 2, paddingTop: 8, paddingBottom: 8, }}>
                        <GiSmallFire style={{ marginRight: 6, }}></GiSmallFire>
                        Popular Posts
                </h3>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}><FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>COMPUTER SCIENCE</div>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}><FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>SPORTS</div>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}><FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>JAVASCRIPT</div>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}><FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>JAVASCRIPT</div>

                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}><FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>MACHINE LEARNING</div>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: 16, }} className={'trending'}><FaHashtag style={{ verticalAlign: 'middle', marginRight: 3 }}></FaHashtag>JAVASCRIPT</div>
                </div>
            </div>

        )
    }
}

export default Sidebar