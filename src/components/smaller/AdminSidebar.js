import React from "react";
import { NavLink } from "react-router-dom";
export class AdminSidebar extends React.Component {

    render() {
        return (
            <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-dark sidebar">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/admin/dashboard"><i className="fa fa-area-chart fa-lg" ></i>&nbsp;Statistics</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/admin/allAccounts"><i className="fa fa-user fa-lg" ></i>&nbsp;Accounts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/admin/allTransactions"><i className="fa fa-exchange fa-lg"></i>&nbsp;Transactions</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/admin/allAddresses"><i className="fa fa-address-card fa-lg"></i>&nbsp;Addresses</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/dashboard"><i className="fa fa-arrow-circle-left fa-lg"></i>&nbsp;Return to site</NavLink>
                    </li>
                </ul>
            </nav >
        );
    }
}