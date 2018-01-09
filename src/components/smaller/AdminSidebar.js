import React from "react";
import { Link } from "react-router-dom";
export class AdminSidebar extends React.Component {

    render() {
        return (
            <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-dark sidebar">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/admin"><i className="fa fa-area-chart fa-lg" ></i>&nbsp;Statistics</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/allAccounts"><i className="fa fa-user fa-lg" ></i>&nbsp;Accounts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/allTransactions"><i className="fa fa-exchange fa-lg"></i>&nbsp;Transactions</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/allAddresses"><i className="fa fa-address-card fa-lg"></i>&nbsp;Addresses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard"><i className="fa fa-arrow-circle-left fa-lg"></i>&nbsp;Return to site</Link>
                    </li>
                </ul>
            </nav >
        );
    }
}