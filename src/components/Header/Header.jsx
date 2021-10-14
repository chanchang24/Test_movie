import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actLogout } from "containers/share/Auth/module/action";
class Header extends Component {
    handleLogout =()=>{
        this.props.logout();
        this.props.history.push('/')
    }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Cinema Booking
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/theater">
                Theater
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/review">
                Review
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hoc">
                HOC
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/antd">
                AntDesign
              </Link>
            </li>
            {this.props.currentUser ? (
              <li className="nav-item" onClick={this.handleLogout}>
                <a className="nav-link">Logout</a>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
    logout: ()=> dispatch(actLogout())
});
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));
