import React from "react";
import { Redirect, Link } from "react-router-dom";

export class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary">
                <Link className="navbar-brand ml-5 h1" to="/dashboard">
                    {/* <img src={""} width={30} height={30} className="d-inline-block align-top" alt={""} /> */}
                    BLOCKCHAIN
                    </Link>
                <span className="navbar-text">
                    Welcome, {this.props.address}!
                    </span>
                <ul className="navbar-nav mr-auto"></ul>
                <ul className="navbar-nav mr-5">
                    <span className="navbar-text">
                        {this.props.email}
                    </span>
                    <li className="nav-item">
                        <button className="btn btn-outline-light btn-sm mx-4" onClick={this.props.onClickSignOut}>
                            <a className="nav-link" href="#">
                                <i className="fa fa-power-off fa-lg"></i>
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}
