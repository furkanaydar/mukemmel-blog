import React, { Component } from 'react'
import CircleLoader from 'react-spinners/CircleLoader'


const override = {
	position: 'absolute',
	top:0,
	bottom: 0,
	left: 0,
	right: 0,
  	
	margin: 'auto',
}

const LoadingSpinner = () => (
    <div>
        <CircleLoader size={120} color={'navy'} css={override}></CircleLoader>
    </div>
);

export default LoadingSpinner