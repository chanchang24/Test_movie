import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MovieItem extends Component {
    render() {
        const {tenPhim, hinhAnh, maPhim}= this.props.movie;
        return (
            <div className="col-3" style={{marginBottom:'30px'}}>
                <div className="card">
                    <img className="card-img-top" src={hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{tenPhim}</h4>
                        <Link className="btn btn-success" to={`/movie-detail/${maPhim}`}>View detail</Link>
                    </div>
                </div>
            </div>

        )
    }
}
