import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <div className="spinner-border text-success" style={{ width: '4rem', height: '4rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>

            </div>
        )
    }
}
