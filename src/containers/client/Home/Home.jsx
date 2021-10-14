import React, { Component } from 'react'
import Banner from './Banner/Banner'
import Filter from './Filter/Filter'
import MovieList from './MovieList/MovieList'

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <Banner /> */}
                {/* <Filter/> */}
                <MovieList/>
            </div>

        )
    }
}
