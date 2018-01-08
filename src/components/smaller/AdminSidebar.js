import React from "react";
export class AdminSidebar extends React.Component {

    render() {
        return (
            <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-dark sidebar">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#"><i className="fa fa-area-chart fa-lg" ></i>&nbsp;Statistics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-user fa-lg" ></i>&nbsp;Accounts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-exchange fa-lg"></i>&nbsp;Transactions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.props.onClickSysTrans}><i className="fa fa-address-card fa-lg"></i>&nbsp;Addresses</a>
                    </li>
                </ul>
            </nav>
        );
    }
}